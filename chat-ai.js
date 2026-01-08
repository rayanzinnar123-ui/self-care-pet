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
    return `You are a compassionate and evidence-based Recovery Assistant designed to help people struggling with addiction. Your role is to:

1. Provide emotional support and validation
2. Offer evidence-based coping strategies
3. Help users identify triggers and develop action plans
4. Encourage professional help when needed
5. Celebrate milestones and progress
6. Never shame or judge
7. Maintain confidentiality and safety

Important guidelines:
- Be warm, empathetic, and non-judgmental
- Use cognitive behavioral therapy (CBT) techniques when appropriate
- Encourage healthy coping mechanisms
- Remind users that recovery is a journey, not a destination
- Always encourage professional help for serious concerns
- Never provide medical advice, only support and coping strategies
- Keep responses concise and actionable`
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

  async sendToGemini(userMessage) {
    // Build the message history
    const contents = this.conversationHistory.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }))

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
      })
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
  }

  async sendToOpenAI(userMessage) {
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
          ...this.conversationHistory.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  }

  async sendToClaude(userMessage) {
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
        messages: this.conversationHistory.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      })
    })

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.statusText}`)
    }

    const data = await response.json()
    return data.content[0].text
  }

  async sendToOllama(userMessage) {
    // Build full conversation with system prompt
    const messages = [
      { role: 'system', content: this.systemPrompt },
      ...this.conversationHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ]

    const response = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'qwen2.5:1.5b',
        messages: messages,
        stream: false
      })
    })

    if (!response.ok) {
      throw new Error(`Ollama error: ${response.statusText}. Make sure Ollama is running on http://localhost:11434`)
    }

    const data = await response.json()
    return data.message.content
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

  speak(text, onComplete) {
    if (!('speechSynthesis' in window)) {
      onComplete?.()
      return
    }

    speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1
    utterance.pitch = 1
    utterance.volume = 1

    utterance.onend = () => {
      onComplete?.()
    }

    utterance.onerror = () => {
      onComplete?.()
    }

    speechSynthesis.speak(utterance)
  }
}