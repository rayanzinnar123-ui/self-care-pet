// AI Chat Module - Handles API calls to different AI providers

class RecoveryAI {
  constructor(apiKey, provider = 'gemini') {
    this.apiKey = apiKey
    this.provider = provider // 'gemini', 'openai', or 'claude'
    this.conversationHistory = []
    this.systemPrompt = this.getSystemPrompt()
    this.loadChatHistory()
  }

  getSystemPrompt() {
    const addiction = addictionsApp?.selectedAddiction || 'addiction'
    const daysSober = addictionsApp?.daysSober || 0
    
    return `Help someone fighting ${addiction} (${daysSober} days sober). Give direct, practical advice. Be supportive, never judgmental. Keep it short.`
  }

  saveChatHistory() {
    localStorage.setItem('recoveryAI_chatHistory', JSON.stringify(this.conversationHistory))
  }

  loadChatHistory() {
    const saved = localStorage.getItem('recoveryAI_chatHistory')
    if (saved) {
      try {
        this.conversationHistory = JSON.parse(saved)
      } catch (e) {
        this.conversationHistory = []
      }
    }
  }

  clearChatHistory() {
    this.conversationHistory = []
    localStorage.removeItem('recoveryAI_chatHistory')
  }

  async sendMessage(userMessage) {
    // Add user message to history
    this.conversationHistory.push({
      role: 'user',
      content: userMessage,
      timestamp: new Date().toISOString()
    })

    try {
      let aiResponse

      if (this.provider === 'gemini') {
        aiResponse = await this.sendToGemini(userMessage)
      } else if (this.provider === 'openai') {
        aiResponse = await this.sendToOpenAI(userMessage)
      } else if (this.provider === 'claude') {
        aiResponse = await this.sendToClaude(userMessage)
      } else if (this.provider === 'ollama') {
        aiResponse = await this.sendToOllama(userMessage)
      }

      // Add AI response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date().toISOString()
      })

      this.saveChatHistory()
      return aiResponse
    } catch (error) {
      console.error('AI Error:', error)
      throw error
    }
  }

  // Get only recent messages to keep API calls fast (last 4 messages = 2 exchanges for Ollama speed)
  getRecentHistory() {
    return this.conversationHistory.slice(-4)
  }

  async sendToGemini(userMessage) {
    // Build the message history - use only recent messages for speed
    const contents = this.getRecentHistory().map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }))

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000) // 15 second timeout

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + this.apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: this.systemPrompt }]
          },
          contents: contents
        }),
        signal: controller.signal
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error('Gemini response:', errorData)
        throw new Error(`Gemini API error: ${errorData}`)
      }

      const data = await response.json()
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Invalid Gemini response format')
      }
      return data.candidates[0].content.parts[0].text
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Gemini request timed out (15s). Try a different provider.')
      }
      throw error
    } finally {
      clearTimeout(timeout)
    }
  }

  async sendToOpenAI(userMessage) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20000) // 20 second timeout

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + this.apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: this.systemPrompt
            },
            ...this.getRecentHistory().map(msg => ({
              role: msg.role,
              content: msg.content
            }))
          ],
          temperature: 0.7,
          max_tokens: 500
        }),
        signal: controller.signal
      })

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.choices[0].message.content
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('OpenAI request timed out (20s). Try a different provider.')
      }
      throw error
    } finally {
      clearTimeout(timeout)
    }
  }

  async sendToClaude(userMessage) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20000) // 20 second timeout

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 500,
          system: this.systemPrompt,
          messages: this.getRecentHistory().map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
        signal: controller.signal
      })

      if (!response.ok) {
        throw new Error(`Claude API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.content[0].text
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Claude request timed out (20s). Try a different provider.')
      }
      throw error
    } finally {
      clearTimeout(timeout)
    }
  }

  async sendToOllama(userMessage) {
    // Build full conversation with system prompt - use only recent messages for speed
    const messages = [
      { role: 'system', content: this.systemPrompt },
      ...this.getRecentHistory().map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ]

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 120000) // 120 second timeout for slow local models

    try {
      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'qwen2.5:1.5b',
          messages: messages,
          stream: false
        }),
        signal: controller.signal
      })

      if (!response.ok) {
        throw new Error(`Ollama error: ${response.statusText}. Make sure Ollama is running on http://localhost:11434`)
      }

      const data = await response.json()
      return data.message.content
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Ollama took too long (120s+). qwen2.5 is slow on limited hardware. Try: 1) Close other apps to free RAM, 2) Use GPU acceleration, or 3) Switch to Gemini/OpenAI/Claude in settings.')
      }
      throw error
    } finally {
      clearTimeout(timeout)
    }
  }
}

// Speech Recognition and Text-to-Speech
class SpeechHandler {
  constructor() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition()
      this.isListening = false
      this.setupRecognition()
    } else {
      this.recognition = null
    }
  }

  setupRecognition() {
    if (!this.recognition) return
    
    this.recognition.continuous = false
    this.recognition.interimResults = true
    this.recognition.lang = 'en-US'

    this.recognition.onstart = () => {
      this.isListening = true
      this.onListeningStart?.()
    }

    this.recognition.onend = () => {
      this.isListening = false
      this.onListeningEnd?.()
    }

    this.recognition.onerror = (event) => {
      console.error('Speech error:', event.error)
      this.onError?.(event.error)
    }
  }

  startListening(onResult) {
    if (!this.recognition) {
      alert('Speech recognition not supported in your browser')
      return
    }
    
    this.recognition.onresult = (event) => {
      let transcript = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript
      }
      if (event.isFinal) {
        onResult?.(transcript)
      }
    }

    this.recognition.start()
  }

  stopListening() {
    if (this.recognition) {
      this.recognition.stop()
    }
  }

  getFollowUpSuggestions(aiResponse) {
    const addiction = addictionsApp?.selectedAddiction || 'addiction'
    
    const suggestions = {
      'Alcohol': [
        'How can I handle social situations?',
        'What are my triggers?',
        'Help me with cravings',
        'Tell me about support groups'
      ],
      'Social Media': [
        'How to reduce screen time?',
        'What to do instead?',
        'Breaking the habit',
        'Managing FOMO'
      ],
      'Gaming': [
        'Alternative activities',
        'Time management tips',
        'Dealing with withdrawal',
        'Healthy hobbies'
      ],
      'default': [
        'What should I do today?',
        'I\'m struggling right now',
        'Tell me a success story',
        'Give me a coping strategy'
      ]
    }
    
    return suggestions[addiction] || suggestions['default']
  }
}