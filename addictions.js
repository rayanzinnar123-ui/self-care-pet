// addiction types
const addictions = [
  "Alcohol","Vaping/Nicotine","Marijuana","Social Media","Gaming","Gambling",
  "Caffeine","Shopping","Eating Disorders","Pornography","Prescription Drugs","Self-Harm"
];


// quotes categorized by mood
const quotesByMood = {
  struggling: [
    { text: "The sun will rise and we will try again.", author: "Twenty One Pilots" },
    { text: "You don't have to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
    { text: "It's okay to not be okay. Just don't give up.", author: "Anonymous" },
    { text: "This too shall pass. Even the darkest night will end.", author: "Anonymous" }
  ],
  tempted: [
    { text: "Between stimulus and response there is a space. In that space is our power to choose.", author: "Viktor Frankl" },
    { text: "You are stronger than your cravings. They will pass.", author: "Anonymous" },
    { text: "Play the tape forward. Remember why you started.", author: "Recovery Wisdom" },
    { text: "The urge will fade. Your strength will remain.", author: "Anonymous" }
  ],
  proud: [
    { text: "Look how far you've come. You should be proud of yourself.", author: "Anonymous" },
    { text: "Every day you choose yourself is a victory worth celebrating.", author: "Anonymous" },
    { text: "Your progress is proof of your strength.", author: "Anonymous" },
    { text: "You're not just surviving, you're thriving.", author: "Anonymous" }
  ],
  anxious: [
    { text: "Take a deep breath. You've got this moment, and that's all you need.", author: "Anonymous" },
    { text: "Worrying does not empty tomorrow of its troubles, it empties today of its strength.", author: "Corrie Ten Boom" },
    { text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.", author: "Wayne Dyer" },
    { text: "You have survived 100% of your worst days. You're doing great.", author: "Anonymous" }
  ],
  motivated: [
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Small progress is still progress. Keep going.", author: "Anonymous" },
    { text: "You are writing your own story. Make it a good one.", author: "Anonymous" },
    { text: "The only way out is through. And you're doing it.", author: "Robert Frost" }
  ]
};

// app logic
class AddictionsApp {
  constructor() {
    this.selectedAddiction = null;
    this.soberDate = null;
    this.daysSober = 0;
    this.hasStarted = false;
    this.selectedMood = null;
    this.chatbotResponse = null;
    this._dayInterval = null;

    this.loadData();
    this.render();

    if (this.soberDate) this.startDayCounter();
  }

  loadData() {
    const stored = localStorage.getItem('sobrietyData');
    if (stored) {
      const data = JSON.parse(stored);
      this.selectedAddiction = data.addiction;
      this.soberDate = new Date(data.date);
      this.hasStarted = true;
      this.calculateDays();
    }
  }

  calculateDays() {
    if (this.soberDate) {
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - this.soberDate.getTime());
      this.daysSober = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }
  }
// time calculation
  calculateTime() {
    if (this.soberDate) {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - this.soberDate.getTime());
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  startDayCounter() {
    this.calculateDays();
    if (this._dayInterval) clearInterval(this._dayInterval);
    this._dayInterval = setInterval(() => {
      this.calculateDays();
      this.render();
    }, 1000);
  }
// start journey
  startJourney(addiction) {
    const today = new Date();
    this.selectedAddiction = addiction;
    this.soberDate = today;
    this.hasStarted = true;
    this.daysSober = 0;
    localStorage.setItem('sobrietyData', JSON.stringify({ addiction, date: today.toISOString() }));
    this.startDayCounter();
    this.render();
  }

// change addiction
  changeAddiction() {
    if (confirm('Are you sure? This will reset your counter.')) {
      this.selectedAddiction = null;
      this.soberDate = null;
      this.hasStarted = false;
      this.daysSober = 0;
      this.selectedMood = null;
      this.chatbotResponse = null;
      if (this._dayInterval) clearInterval(this._dayInterval);
      localStorage.removeItem('sobrietyData');
      this.render();
    }
  }

// reset counter
  resetCounter() {
    const today = new Date();
    this.soberDate = today;
    this.daysSober = 0;
    if (this.selectedAddiction) localStorage.setItem('sobrietyData', JSON.stringify({ addiction: this.selectedAddiction, date: today.toISOString() }));
    this.render();
  }
// mood chosing
  selectMood(mood) {
    this.selectedMood = mood;
    const moodQuotes = quotesByMood[mood];
    this.chatbotResponse = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
    this.render();
  }

  resetChatbot() {
    this.selectedMood = null;
    this.chatbotResponse = null;
    this.render();
  }

  getHeroMessage() {
    if (this.daysSober === 0) return "Today is day one. You've got this!";
    if (this.daysSober < 7) return "Amazing start! Keep going!";
    if (this.daysSober < 30) return "You're building momentum!";
    if (this.daysSober < 90) return "One month strong! Incredible!";
    return "You're an inspiration! Keep shining!";
  }

  render() {
    const root = document.getElementById('addictions-app');
    if (!root) return;

    if (!this.hasStarted) {
      root.innerHTML = `
        <div class="container" style="display:flex;align-items:center;justify-content:center;min-height:60vh;">
          <div style="width:100%; max-width:42rem;">
            <div class="text-center space-y">
              <svg class="icon-heart" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              <h1>Your Recovery Journey</h1>
              <p class="subtitle">Every day is a new beginning. Let's take this one step at a time.</p>
            </div>

            <div class="card">
              <div class="card-header">
                <h2 class="card-title">Choose What You're Overcoming</h2>
                <p class="card-description">Select the challenge you're working through</p>
              </div>
              <div class="card-content">
                <div class="addiction-grid">
                  ${addictions.map(a => `<button class="btn" onclick="addictionsApp.startJourney('${a.replace(/'/g,"\\'")}')">${a}</button>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      const time = this.calculateTime();
      root.innerHTML = `
        <div class="container">
          <div class="text-center space-y">
            <svg class="icon-heart" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:2.5rem;height:2.5rem;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <h1 style="font-size:1.875rem;">Your Recovery Journey</h1>
          </div>

          <div class="card hero-card">
            <div style="display:flex;align-items:center;justify-content:center;margin-bottom:0.75rem;">
              <svg style="width:2rem;height:2rem;margin-right:0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="badge">${this.selectedAddiction}</span>
            </div>

            <div style="display:flex;justify-content:center;gap:2rem;margin:1.5rem 0;">
              <div><div style="font-size:3rem;font-weight:bold;">${time.days}</div><div style="font-size:1rem;opacity:0.9;">Days</div></div>
              <div><div style="font-size:3rem;font-weight:bold;">${String(time.hours).padStart(2,'0')}</div><div style="font-size:1rem;opacity:0.9;">Hours</div></div>
              <div><div style="font-size:3rem;font-weight:bold;">${String(time.minutes).padStart(2,'0')}</div><div style="font-size:1rem;opacity:0.9;">Minutes</div></div>
              <div><div style="font-size:3rem;font-weight:bold;">${String(time.seconds).padStart(2,'0')}</div><div style="font-size:1rem;opacity:0.9;">Seconds</div></div>
            </div>

            <p class="hero-message">${this.getHeroMessage()}</p>
            <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-top:1rem;">
              <button class="btn-reset" onclick="addictionsApp.resetCounter()">Reset Counter</button>
              <button class="btn-reset" style="background:#8b5cf6;" onclick="addictionsApp.changeAddiction()">Change Addiction</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h2 class="card-title">Milestones</h2>
              <p class="card-description">Celebrate your progress</p>
            </div>
            <div class="card-content">
              <div class="milestone ${this.daysSober >= 1 ? 'achieved' : ''}">
                <div class="milestone-days">1</div>
                <div>
                  <div class="milestone-label">First Day</div>
                  <div class="milestone-sublabel">You took the first step!</div>
                </div>
                ${this.daysSober >= 1 ? '<span class="badge badge-success">✓</span>' : ''}
              </div>
              <div class="milestone ${this.daysSober >= 7 ? 'achieved' : ''}">
                <div class="milestone-days">7</div>
                <div>
                  <div class="milestone-label">One Week</div>
                  <div class="milestone-sublabel">A full week strong!</div>
                </div>
                ${this.daysSober >= 7 ? '<span class="badge badge-success">✓</span>' : ''}
              </div>
              <div class="milestone ${this.daysSober >= 30 ? 'achieved' : ''}">
                <div class="milestone-days">30</div>
                <div>
                  <div class="milestone-label">One Month</div>
                  <div class="milestone-sublabel">Incredible progress!</div>
                </div>
                ${this.daysSober >= 30 ? '<span class="badge badge-success">✓</span>' : ''}
              </div>
              <div class="milestone ${this.daysSober >= 90 ? 'achieved' : ''}">
                <div class="milestone-days">90</div>
                <div>
                  <div class="milestone-label">Three Months</div>
                  <div class="milestone-sublabel">You're unstoppable!</div>
                </div>
                ${this.daysSober >= 90 ? '<span class="badge badge-success">✓</span>' : ''}
              </div>
              <div class="milestone ${this.daysSober >= 365 ? 'achieved' : ''}">
                <div class="milestone-days">365</div>
                <div>
                  <div class="milestone-label">One Year</div>
                  <div class="milestone-sublabel">A true champion!</div>
                </div>
                ${this.daysSober >= 365 ? '<span class="badge badge-success">✓</span>' : ''}
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h2 class="card-title" style="display:flex;align-items:center;gap:0.5rem;font-size:1.25rem;">
                <svg style="width:1.25rem;height:1.25rem;color:#059669;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                How Are You Feeling?
              </h2>
              <p class="card-description">Let me share something that might help</p>
            </div>
            <div class="card-content">
              ${!this.selectedMood ? `
                <p style="color:#4b5563;margin-bottom:1rem;line-height:1.7;">Select how you're feeling right now:</p>
                <div class="mood-grid">
                  <button class="mood-btn struggling" onclick="addictionsApp.selectMood('struggling')">Struggling</button>
                  <button class="mood-btn tempted" onclick="addictionsApp.selectMood('tempted')">Tempted</button>
                  <button class="mood-btn anxious" onclick="addictionsApp.selectMood('anxious')">Anxious</button>
                  <button class="mood-btn proud" onclick="addictionsApp.selectMood('proud')">Proud</button>
                  <button class="mood-btn motivated full-width" onclick="addictionsApp.selectMood('motivated')">Motivated</button>
                </div>
              ` : `
                <div class="quote-box">
                  <blockquote class="quote-text">"${this.chatbotResponse.text}"</blockquote>
                  <p class="quote-author">— ${this.chatbotResponse.author}</p>
                </div>
                <div class="btn-group">
                  <button class="btn-small" onclick="addictionsApp.selectMood('${this.selectedMood}')">Different Quote</button>
                  <button class="btn-small" onclick="addictionsApp.resetChatbot()">Change Mood</button>
                </div>
              `}
            </div>
          </div>

          <div class="card support-card">
            <div class="card-header">
              <h2 class="card-title" style="font-size:1.25rem;">Need Support?</h2>
            </div>
            <div class="card-content">
              <p><strong>Crisis Text Line:</strong> Text HOME to +961 71 28 38 20</p>
              <p><strong>SAMHSA National Helpline:</strong> 1564 (24/7)</p>
              <p style="text-wrap:balance;">Remember: Asking for help is a sign of strength, not weakness. You're not alone in this journey.</p>
            </div>
          </div>
        </div>
      `;
    }
  }
}

const addictionsApp = new AddictionsApp();