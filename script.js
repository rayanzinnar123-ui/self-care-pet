// Pet configurations
var PET_TYPES = {
  cat: { name: "Cat", stages: ["🥚", "🐱", "😺", "😸", "🦁"] },
  dog: { name: "Dog", stages: ["🥚", "🐶", "🐕", "🦮", "🐺"] },
  bird: { name: "Bird", stages: ["🥚", "🐤", "🐥", "🐦", "🦅"] },
  bunny: { name: "Bunny", stages: ["🥚", "🐰", "🐇", "🐇", "🦊"] },
  hamster: { name: "Hamster", stages: ["🥚", "🐹", "🐹", "🐿️", "🦔"] },
}

var STAGE_NAMES = ["Egg", "Baby", "Teen", "Adult", "Legendary"]
var LEVEL_THRESHOLDS = [0, 2, 4, 6, 8]

// Rewards configuration
var REWARDS = [
  { id: 1, name: "First Steps", icon: "🌟", requirement: 10 },
  { id: 2, name: "Dedicated", icon: "🏅", requirement: 20 },
  { id: 3, name: "Achiever", icon: "🏆", requirement: 30 },
  { id: 4, name: "Champion", icon: "👑", requirement: 40 },
  { id: 5, name: "Legend", icon: "💎", requirement: 50 },
]

// Memory game symbols (Game configuration)
var MEMORY_SYMBOLS = ["🍎", "🍊", "🍋", "🍇", "🍓", "🍒", "🥝", "🍑", "🍌", "🫐", "🥭", "🍍"]

var MAZE_LEVELS = [
  // Level 1 - 5x5 simple
  {
    size: 3,
    time: 15,
    maze: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
  },
  // Level 2 - 5x5
  {
    size: 5,
    time: 15,
    maze: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  // Level 3 - 6x6
  {
    size: 6,
    time: 25,
    maze: [
      [0, 0, 0, 1, 0, 0],
      [1, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 0, 1, 0, 0],
    ],
  },
  // Level 4 - 6x6
  {
    size: 6,
    time: 25,
    maze: [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0],
    ],
  },
  // Level 5 - 7x7
  {
    size: 7,
    time: 40,
    maze: [
      [0, 0, 0, 0, 1, 0, 0],
      [1, 1, 0, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0],
    ],
  },
  // Level 6 - 7x7
  {
    size: 7,
    time: 40,
    maze: [
      [0, 0, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 1, 0, 1, 1],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
  },
  // Level 7 - 8x8
  {
    size: 8,
    time: 50,
    maze: [
      [0, 0, 0, 0, 0, 1, 0, 0],
      [1, 1, 1, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1, 0, 0, 0],
    ],
  },
  // Level 8 - 8x8
  {
    size: 8,
    time: 50,
    maze: [
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 0],
    ],
  },
  // Level 9 - 9x9
  {
    size: 9,
    time: 75,
    maze: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0],
      [1, 1, 1, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  // Level 10 - 9x9 hardest
  {
    size: 9,
    time: 75,
    maze: [
      [0, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
]

// Game State
var petName = "Whiskers"
var petType = "cat"
var petLevel = 1
var petXp = 0
var petHappiness = 50
var totalCompleted = 0
var taskList = []
var taskIdCounter = 1
var notificationIntervals = {}

// Game state
var gameLevel = 1
var gameScore = 0
var gameMoves = 0
var gamePhase = "memory"
var gameCards = []
var flippedCards = []
var matchedPairs = 0
var playerX = 0
var playerY = 0
var currentMaze = []
var timerInterval = null
var timeRemaining = 0
var earnedMoves = 0

var notificationPermission = "default"

// Request notification permission
function requestNotificationPermission() {
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      notificationPermission = "granted"
      setupBackgroundMonitoring()
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        notificationPermission = permission
        if (permission === "granted") {
          setupBackgroundMonitoring()
        }
      })
    }
  }
}

// Setup background monitoring with Service Worker
function setupBackgroundMonitoring() {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'START_MONITORING',
      tasks: taskList,
    })
  }
}

// Send task updates to Service Worker
function notifyServiceWorkerOfTaskChange() {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'CHECK_TASKS',
      tasks: taskList,
    })
  }
}

function saveProgress() {
  localStorage.setItem("taskpet_petName", petName)
  localStorage.setItem("taskpet_petType", petType)
  localStorage.setItem("taskpet_petLevel", String(petLevel))
  localStorage.setItem("taskpet_petXp", String(petXp))
  localStorage.setItem("taskpet_petHappiness", String(petHappiness))
  localStorage.setItem("taskpet_totalCompleted", String(totalCompleted))
  localStorage.setItem("taskpet_gameLevel", String(gameLevel))
  localStorage.setItem("taskpet_gameScore", String(gameScore))

  // Save tasks count and each task individually
  localStorage.setItem("taskpet_taskCount", String(taskList.length))
  for (var i = 0; i < taskList.length; i++) {
    localStorage.setItem("taskpet_task_" + i + "_id", String(taskList[i].id))
    localStorage.setItem("taskpet_task_" + i + "_text", taskList[i].text)
    localStorage.setItem("taskpet_task_" + i + "_completed", taskList[i].completed ? "1" : "0")
    localStorage.setItem("taskpet_task_" + i + "_deadline", taskList[i].deadline || "")
    localStorage.setItem("taskpet_task_" + i + "_repeatFreq", taskList[i].repeatFreq || "none")
  }
}

function loadProgress() {
  var savedName = localStorage.getItem("taskpet_petName")
  if (savedName !== null) {
    petName = savedName
    petType = localStorage.getItem("taskpet_petType") || "cat"
    petLevel = Number.parseInt(localStorage.getItem("taskpet_petLevel")) || 1
    petXp = Number.parseInt(localStorage.getItem("taskpet_petXp")) || 0
    petHappiness = Number.parseInt(localStorage.getItem("taskpet_petHappiness")) || 50
    totalCompleted = Number.parseInt(localStorage.getItem("taskpet_totalCompleted")) || 0
    gameLevel = Number.parseInt(localStorage.getItem("taskpet_gameLevel")) || 1
    gameScore = Number.parseInt(localStorage.getItem("taskpet_gameScore")) || 0

    // Load tasks
    var taskCount = Number.parseInt(localStorage.getItem("taskpet_taskCount")) || 0
    taskList = []
    for (var j = 0; j < taskCount; j++) {
      var id = Number.parseInt(localStorage.getItem("taskpet_task_" + j + "_id")) || 0
      var text = localStorage.getItem("taskpet_task_" + j + "_text") || ""
      var completed = localStorage.getItem("taskpet_task_" + j + "_completed") === "1"
      var deadline = localStorage.getItem("taskpet_task_" + j + "_deadline") || null
      var repeatFreq = localStorage.getItem("taskpet_task_" + j + "_repeatFreq") || "none"
      if (text) {
        taskList.push({ id: id, text: text, completed: completed, deadline: deadline, repeatFreq: repeatFreq })
        if (id >= taskIdCounter) {
          taskIdCounter = id + 1
        }
        if (deadline && !completed) {
          setupTaskNotification(id, deadline)
        }
      }
    }
  }
}

// Get pet stage based on level
function getPetStage() {
  var stageIndex = 0
  for (var i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (petLevel >= LEVEL_THRESHOLDS[i]) {
      stageIndex = i
      break
    }
  }
  return stageIndex
}

// Update pet display
function updatePetDisplay() {
  var stageIndex = getPetStage()
  var petConfig = PET_TYPES[petType]

  document.getElementById("pet-emoji").textContent = petConfig.stages[stageIndex]
  document.getElementById("pet-stage").textContent = STAGE_NAMES[stageIndex]
  document.getElementById("pet-name").textContent = petName
  document.getElementById("pet-level").textContent = "Level " + petLevel

  var xpForNext = petLevel * 100
  var xpPercent = (petXp / xpForNext) * 100
  document.getElementById("xp-bar").style.width = xpPercent + "%"
  document.getElementById("xp-text").textContent = petXp + " / " + xpForNext

  document.getElementById("happiness-bar").style.width = petHappiness + "%"
  document.getElementById("happiness-text").textContent = petHappiness + "%"
}

// Add XP to pet
function addXP(amount) {
  petXp = petXp + amount
  var xpForNext = petLevel * 100

  while (petXp >= xpForNext) {
    petXp = petXp - xpForNext
    petLevel = petLevel + 1
    petHappiness = Math.min(100, petHappiness + 10)
    xpForNext = petLevel * 100
  }

  updatePetDisplay()
  saveProgress()
}

// Escape HTML
function escapeHtml(text) {
  var div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}

// Render tasks
function renderTasks() {
  var taskListEl = document.getElementById("task-list")
  var completedCount = 0

  for (var k = 0; k < taskList.length; k++) {
    if (taskList[k].completed) completedCount++
  }

  document.getElementById("task-count").textContent = completedCount + " completed"

  var html = ""
  for (var l = 0; l < taskList.length; l++) {
    var task = taskList[l]
    var deadlineHtml = ""
    if (task.deadline) {
      var now = new Date()
      var deadline = new Date(task.deadline)
      var timeUntil = deadline - now
      var deadlineClass = ""
      var deadlineText = ""

      if (timeUntil < 0) {
        deadlineClass = "overdue"
        deadlineText = "Overdue"
      } else if (timeUntil < 3600000) {
        // Less than 1 hour
        var minutes = Math.floor(timeUntil / 60000)
        deadlineClass = "warning"
        deadlineText = minutes + "m left"
      } else if (timeUntil < 86400000) {
        // Less than 24 hours
        var hours = Math.floor(timeUntil / 3600000)
        deadlineText = hours + "h left"
      } else {
        var days = Math.floor(timeUntil / 86400000)
        deadlineText = days + "d left"
      }

      deadlineHtml = '<div class="task-deadline ' + deadlineClass + '">' + deadlineText + "</div>"
    }

    html += '<li class="task-item ' + (task.completed ? "completed" : "") + '" data-id="' + task.id + '">'
    html +=
      '<div class="task-checkbox ' + (task.completed ? "checked" : "") + '" onclick="toggleTask(' + task.id + ')">'
    html += task.completed ? "✓" : ""
    html += "</div>"
    html += '<div class="task-content">'
    html += '<span class="task-text">' + escapeHtml(task.text) + "</span>"
    html += deadlineHtml
    html += "</div>"
    html += '<button class="delete-btn" onclick="deleteTask(' + task.id + ')">'
    html +=
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>'
    html += "</button>"
    html += "</li>"
  }

  taskListEl.innerHTML = html
}

// Add task
// Add task
function addTask(text, deadline, repeatFreq) {
  var task = {
    id: taskIdCounter,
    text: text,
    completed: false,
    deadline: deadline || null,
    repeatFreq: repeatFreq || 'none', // 'none', 'daily', 'weekly', 'monthly'
    createdAt: new Date().toISOString(),
  }
  taskIdCounter++
  taskList.unshift(task)

  if (deadline) {
    setupTaskNotification(task.id, deadline)
  }

  renderTasks()
  saveProgress()
  notifyServiceWorkerOfTaskChange()
}

function setupTaskNotification(taskId, deadline) {
  // Clear any existing notification interval for this task
  if (notificationIntervals[taskId]) {
    clearInterval(notificationIntervals[taskId])
  }

  notificationIntervals[taskId] = setInterval(() => {
    var now = new Date()
    var deadlineDate = new Date(deadline)
    var timeUntil = deadlineDate - now

    // Send notification 1 hour before deadline
    if (timeUntil > 0 && timeUntil <= 3600000 && timeUntil > 3540000) {
      sendNotification("Task Reminder", "You have 1 hour to complete your task!")
    }
    // Send notification if overdue
    else if (timeUntil < 0 && timeUntil > -60000) {
      sendNotification("Task Overdue", "Your task is now overdue! Try to complete it soon.")
    }
    // Clear notification when task is far away
    else if (timeUntil < -60000) {
      clearInterval(notificationIntervals[taskId])
      delete notificationIntervals[taskId]
    }
  }, 60000) // Check every minute
}

function sendNotification(title, message) {
  if (notificationPermission === "granted") {
    if ("Notification" in window) {
      try {
        new Notification(title, {
          body: message,
          icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='50' font-size='80' text-anchor='middle' dy='.3em'>🐱</text></svg>",
          badge: "🐱",
        })
      } catch (e) {
        console.log("[v0] Notification failed:", e)
      }
    }
  }
}

// Toggle task completion
function toggleTask(id) {
  for (var m = 0; m < taskList.length; m++) {
    if (taskList[m].id === id && !taskList[m].completed) {
      taskList[m].completed = true
      totalCompleted++
      addXP(25)

      if (notificationIntervals[id]) {
        clearInterval(notificationIntervals[id])
        delete notificationIntervals[id]
      }

      break
    }
  }
  renderTasks()
  updateRewards()
  saveProgress()
  notifyServiceWorkerOfTaskChange()
}


// Schedule next repeat
function scheduleNextRepeat(task) {
  var nextDeadline = null
  var now = new Date()

  if (task.repeatFreq === 'daily') {
    nextDeadline = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  } else if (task.repeatFreq === 'weekly') {
    nextDeadline = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
  } else if (task.repeatFreq === 'monthly') {
    nextDeadline = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
  }

  if (nextDeadline) {
    addTask(task.text, nextDeadline.toISOString().slice(0, 16), task.repeatFreq)
  }
}

// Delete task
function deleteTask(id) {
  var newList = []
  for (var n = 0; n < taskList.length; n++) {
    if (taskList[n].id !== id) {
      newList.push(taskList[n])
    }
  }

  if (notificationIntervals[id]) {
    clearInterval(notificationIntervals[id])
    delete notificationIntervals[id]
  }

  taskList = newList
  renderTasks()
  saveProgress()
  notifyServiceWorkerOfTaskChange()
}

// Update rewards display
function updateRewards() {
  var grid = document.getElementById("rewards-grid")
  var nextMilestone = Math.ceil((totalCompleted + 1) / 100) * 100
  var progress = totalCompleted % 100

  document.getElementById("milestone-count").textContent = totalCompleted + " / " + nextMilestone + " tasks"
  document.getElementById("milestone-bar").style.width = progress + "%"

  var html = ""
  for (var o = 0; o < REWARDS.length; o++) {
    var reward = REWARDS[o]
    var unlocked = totalCompleted >= reward.requirement
    html += '<div class="reward-card ' + (unlocked ? "unlocked" : "locked") + '">'
    html += '<div class="reward-icon">' + reward.icon + "</div>"
    html += '<div class="reward-name">' + reward.name + "</div>"
    html += '<div class="reward-requirement">' + reward.requirement + " tasks</div>"
    html +=
      '<div class="reward-status ' +
      (unlocked ? "unlocked" : "") +
      '">' +
      (unlocked ? "Unlocked!" : "Locked") +
      "</div>"
    html += "</div>"
  }

  grid.innerHTML = html
}

// Shuffle array
function shuffle(array) {
  var arr = array.slice()
  for (var p = arr.length - 1; p > 0; p--) {
    var q = Math.floor(Math.random() * (p + 1))
    var temp = arr[p]
    arr[p] = arr[q]
    arr[q] = temp
  }
  return arr
}

function initMemoryGame() {
  // Clear any existing timer
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }

  // Get pairs based on level (more pairs for higher levels)
  var pairCount = 4 + Math.floor((gameLevel - 1) / 2)
  if (pairCount > 8) pairCount = 8

  var symbols = MEMORY_SYMBOLS.slice(0, pairCount)
  var cardSymbols = shuffle(symbols.concat(symbols))

  gameCards = []
  for (var r = 0; r < cardSymbols.length; r++) {
    gameCards.push({
      id: r,
      symbol: cardSymbols[r],
      flipped: false,
      matched: false,
    })
  }

  flippedCards = []
  matchedPairs = 0
  earnedMoves = 0
  gamePhase = "memory"

  // Set time based on level
  var levelData = MAZE_LEVELS[gameLevel - 1]
  timeRemaining = levelData ? levelData.time : 15

  renderMemoryGame()
  updateGameStats()

  document.getElementById("memory-section").classList.remove("hidden")
  document.getElementById("maze-section").classList.add("hidden")
  document.getElementById("timer-container").classList.remove("hidden")
  document.getElementById("game-instructions").textContent = "Match cards within " + timeRemaining + "s to earn moves!"

  // Start timer
  startTimer()
}

function startTimer() {
  updateTimerDisplay()

  timerInterval = setInterval(() => {
    timeRemaining--
    updateTimerDisplay()

    if (timeRemaining <= 0) {
      clearInterval(timerInterval)
      timerInterval = null
      endMemoryPhase()
    }
  }, 1000)
}

function updateTimerDisplay() {
  var timerFill = document.getElementById("timer-fill")
  var timerText = document.getElementById("timer-text")
  var levelData = MAZE_LEVELS[gameLevel - 1]
  var maxTime = levelData ? levelData.time : 15

  var percent = (timeRemaining / maxTime) * 100
  timerFill.style.width = percent + "%"
  timerText.textContent = timeRemaining + "s"

  // Change color based on time
  timerFill.classList.remove("safe", "warning")
  if (percent > 50) {
    timerFill.classList.add("safe")
  } else if (percent > 25) {
    timerFill.classList.add("warning")
  }
}

function endMemoryPhase() {
  // Each matched pair = 2 moves for the maze
  earnedMoves = matchedPairs * 2

  if (earnedMoves === 0) {
    // No matches = game over for this level
    showGameMessage("lose", "Time's Up!", "You didn't earn any moves. Try again!")
  } else {
    // Start maze with earned moves
    gameMoves = earnedMoves
    startMazeGame()
  }
}

// Update game stats display
function updateGameStats() {
  document.getElementById("game-level").textContent = gameLevel
  document.getElementById("game-score").textContent = gameScore
  document.getElementById("game-moves").textContent = gameMoves
}

// Render memory game
function renderMemoryGame() {
  var grid = document.getElementById("card-grid")

  // Adjust grid columns based on card count
  var cardCount = gameCards.length
  var cols = 4
  if (cardCount > 12) cols = 4
  grid.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)"

  var html = ""
  for (var s = 0; s < gameCards.length; s++) {
    var card = gameCards[s]
    var isFlipped = card.flipped || card.matched
    html += '<button class="memory-card ' + (isFlipped ? "flipped" : "") + " " + (card.matched ? "matched" : "") + '" '
    html += 'onclick="flipCard(' + card.id + ')" '
    if (card.matched) html += "disabled"
    html += ">"
    html += isFlipped ? card.symbol : "?"
    html += "</button>"
  }

  grid.innerHTML = html
}

// Flip card
function flipCard(id) {
  if (gamePhase !== "memory") return

  var card = null
  for (var t = 0; t < gameCards.length; t++) {
    if (gameCards[t].id === id) {
      card = gameCards[t]
      break
    }
  }

  if (!card || card.flipped || card.matched || flippedCards.length >= 2) return

  card.flipped = true
  flippedCards.push(card)
  renderMemoryGame()

  if (flippedCards.length === 2) {
    var first = flippedCards[0]
    var second = flippedCards[1]

    setTimeout(() => {
      if (first.symbol === second.symbol) {
        first.matched = true
        second.matched = true
        matchedPairs++
        gameScore = gameScore + 50

        // Check if all pairs matched
        var totalPairs = gameCards.length / 2
        if (matchedPairs === totalPairs) {
          clearInterval(timerInterval)
          timerInterval = null

          // Bonus for completing all matches
          earnedMoves = matchedPairs * 2 + 2
          gameMoves = earnedMoves

          setTimeout(() => {
            startMazeGame()
          }, 500)
        }
      } else {
        first.flipped = false
        second.flipped = false
      }
      flippedCards = []
      renderMemoryGame()
      updateGameStats()
    }, 600)
  }
}

function startMazeGame() {
  gamePhase = "maze"
  playerX = 0
  playerY = 0

  var levelIndex = gameLevel - 1
  if (levelIndex >= MAZE_LEVELS.length) {
    levelIndex = MAZE_LEVELS.length - 1
  }

  currentMaze = []
  var mazeData = MAZE_LEVELS[levelIndex].maze
  for (var u = 0; u < mazeData.length; u++) {
    currentMaze.push(mazeData[u].slice())
  }

  document.getElementById("memory-section").classList.add("hidden")
  document.getElementById("maze-section").classList.remove("hidden")
  document.getElementById("timer-container").classList.add("hidden")
  document.getElementById("game-instructions").textContent = "You have " + gameMoves + " moves to reach the goal!"

  renderMaze()
  updateGameStats()
}

// Render maze
function renderMaze() {
  var grid = document.getElementById("maze-grid")
  var size = currentMaze.length

  grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)"

  var goalX = size - 1
  var goalY = size - 1

  var html = ""
  for (var v = 0; v < size; v++) {
    for (var w = 0; w < size; w++) {
      var cell = currentMaze[v][w]
      var content = ""
      var className = "maze-cell"

      if (playerX === w && playerY === v) {
        content = PET_TYPES[petType].stages[getPetStage()]
        className += " player"
      } else if (w === goalX && v === goalY) {
        content = "⭐"
        className += " goal"
      } else if (cell === 1) {
        className += " wall"
      }

      html += '<div class="' + className + '">' + content + "</div>"
    }
  }

  grid.innerHTML = html

  // Update control buttons
  var controls = document.querySelectorAll(".control-btn")
  for (var x = 0; x < controls.length; x++) {
    controls[x].disabled = gameMoves <= 0
  }
}

// Move player in maze
function movePlayer(dir) {
  if (gamePhase !== "maze" || gameMoves <= 0) return

  var newX = playerX
  var newY = playerY
  var size = currentMaze.length

  if (dir === "up") newY--
  else if (dir === "down") newY++
  else if (dir === "left") newX--
  else if (dir === "right") newX++

  // Check bounds and walls
  if (newX >= 0 && newX < size && newY >= 0 && newY < size && currentMaze[newY][newX] === 0) {
    playerX = newX
    playerY = newY
    gameMoves--
    gameScore = gameScore + 10

    updateGameStats()

    var goalX = size - 1
    var goalY = size - 1

    // Check win
    if (playerX === goalX && playerY === goalY) {
      gameScore = gameScore + 200
      updateGameStats()

      if (gameLevel < 10) {
        showGameMessage("win", "Level Complete!", "Score: " + gameScore, true)
      } else {
        showGameMessage("win", "You Beat All 10 Levels!", "Final Score: " + gameScore, false)
      }
      saveProgress()
    } else if (gameMoves <= 0) {
      // Out of moves
      showGameMessage("lose", "Out of Moves!", "You ran out of moves. Try again!")
    } else {
      renderMaze()
    }
  }
}

function showGameMessage(type, title, message, hasNextLevel) {
  var gamePhaseEl = document.getElementById("game-phase")

  var html = '<div class="game-message ' + type + '">'
  html += "<h3>" + title + "</h3>"
  html += "<p>" + message + "</p>"

  if (type === "win" && hasNextLevel) {
    html += '<button class="next-level-btn" onclick="nextLevel()">Next Level</button>'
  }

  html += "</div>"

  gamePhaseEl.innerHTML = html
}

function nextLevel() {
  if (gameLevel < 10) {
    gameLevel++
    saveProgress()
  }
  resetGamePhase()
}

// Reset game phase (restart current level)
function resetGamePhase() {
  var gamePhaseEl = document.getElementById("game-phase")

  gamePhaseEl.innerHTML =
    '<div class="memory-section" id="memory-section"><h3>Match pairs to earn moves!</h3><div class="card-grid" id="card-grid"></div></div><div class="maze-section hidden" id="maze-section"><h3>Navigate to the goal!</h3><div class="maze-grid" id="maze-grid"></div><div class="maze-controls"><button class="control-btn" data-dir="up">↑</button><div class="control-row"><button class="control-btn" data-dir="left">←</button><button class="control-btn" data-dir="down">↓</button><button class="control-btn" data-dir="right">→</button></div></div></div>'

  // Re-attach maze control listeners
  var controls = document.querySelectorAll(".control-btn")
  for (var y = 0; y < controls.length; y++) {
    controls[y].addEventListener("click", function () {
      movePlayer(this.getAttribute("data-dir"))
    })
  }

  initMemoryGame()
}

// Tab navigation
function switchTab(tabName) {
  var tabs = document.querySelectorAll(".tab-content")
  var btns = document.querySelectorAll(".nav-btn")

  for (var z = 0; z < tabs.length; z++) {
    tabs[z].classList.remove("active")
  }
  for (var a = 0; a < btns.length; a++) {
    btns[a].classList.remove("active")
  }

  document.getElementById(tabName + "-tab").classList.add("active")
  document.querySelector('[data-tab="' + tabName + '"]').classList.add("active")
}

// ==========================================
// AI CHAT FUNCTIONALITY
// ==========================================

let recoveryAI = null
let speechHandler = null
let isWaitingForResponse = false

function initializeChat() {
  console.log('Chat initialization started')
  
  // Only initialize when chat tab is active
  const chatTab = document.getElementById('chat-tab')
  if (!chatTab) {
    console.error('Chat tab not found')
    return
  }

  const API_KEY = localStorage.getItem('recoveryAI_apiKey')
  const PROVIDER = localStorage.getItem('recoveryAI_provider') || 'gemini'

  console.log('API Key exists:', !!API_KEY)
  
  if (!API_KEY) {
    console.log('No API key, showing setup')
    showAPIKeySetup()
    setupSettingsModalListeners()
    return
  }

  console.log('Creating RecoveryAI instance with provider:', PROVIDER)
  recoveryAI = new RecoveryAI(API_KEY, PROVIDER)
  speechHandler = new SpeechHandler()

  setupChatEventListeners()
  loadChatMessages()
}

function setupSettingsModalListeners() {
  const settingsBtn = document.getElementById('chat-settings-btn')
  const saveChatBtn = document.getElementById('save-chat-settings')
  const closeChatBtn = document.getElementById('close-chat-settings')
  
  if (settingsBtn) {
    settingsBtn.addEventListener('click', openAPIKeyModal)
  }
  
  if (saveChatBtn) {
    saveChatBtn.addEventListener('click', saveAPIKey)
  }
  
  if (closeChatBtn) {
    closeChatBtn.addEventListener('click', () => {
      document.getElementById('chat-settings-modal').classList.add('hidden')
    })
  }
}

function showAPIKeySetup() {
  const chatMessages = document.getElementById('chat-messages')
  if (!chatMessages) {
    console.error('Chat messages element not found')
    return
  }
  
  chatMessages.innerHTML = `
    <div style="padding: 2rem; text-align: center;">
      <p style="margin-bottom: 1rem;"><strong>⚙️ Setup Required</strong></p>
      <p style="margin-bottom: 1rem; font-size: 0.9rem; color: #78716c;">
        To use the AI chat feature, you need to set up an API key.
      </p>
      <p style="margin-bottom: 1rem; font-size: 0.85rem;">
        <strong>Click the ⚙️ Settings button above</strong>
      </p>
      <div style="background: #fffbeb; padding: 1rem; border-radius: 0.5rem; font-size: 0.85rem;">
        <p><strong>Free Options:</strong></p>
        <p>• Google Gemini</p>
        <p>• Claude API</p>
        <p style="margin-top: 0.5rem;"><strong>Paid:</strong></p>
        <p>• OpenAI GPT</p>
      </div>
    </div>
  `
}

function setupChatEventListeners() {
  const sendBtn = document.getElementById('send-btn')
  const micBtn = document.getElementById('mic-btn')
  const chatInput = document.getElementById('chat-input')
  const settingsBtn = document.getElementById('chat-settings-btn')
  const newConvoBtn = document.getElementById('new-convo-btn')

  if (!sendBtn || !micBtn || !chatInput || !settingsBtn) {
    console.error('Chat elements not found', {
      sendBtn: !!sendBtn,
      micBtn: !!micBtn,
      chatInput: !!chatInput,
      settingsBtn: !!settingsBtn
    })
    return
  }

  sendBtn.addEventListener('click', handleSendMessage)
  micBtn.addEventListener('click', handleVoiceInput)
  settingsBtn.addEventListener('click', openAPIKeyModal)
  if (newConvoBtn) newConvoBtn.addEventListener('click', startNewConversation)

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  })

  // Settings modal handlers
  const saveChatBtn = document.getElementById('save-chat-settings')
  const closeChatBtn = document.getElementById('close-chat-settings')
  
  if (saveChatBtn) saveChatBtn.addEventListener('click', saveAPIKey)
  if (closeChatBtn) closeChatBtn.addEventListener('click', () => {
    document.getElementById('chat-settings-modal').classList.add('hidden')
  })
  
  console.log('Chat event listeners setup complete')
}

function openAPIKeyModal() {
  const modal = document.getElementById('chat-settings-modal')
  modal.classList.remove('hidden')
  document.getElementById('api-provider').value = localStorage.getItem('recoveryAI_provider') || 'gemini'
  document.getElementById('api-key-input').value = localStorage.getItem('recoveryAI_apiKey') || ''
}

function saveAPIKey() {
  const apiKey = document.getElementById('api-key-input').value.trim()
  const provider = document.getElementById('api-provider').value

  if (!apiKey) {
    alert('Please enter an API key')
    return
  }

  localStorage.setItem('recoveryAI_apiKey', apiKey)
  localStorage.setItem('recoveryAI_provider', provider)

  document.getElementById('chat-settings-modal').classList.add('hidden')
  location.reload()
}

async function handleSendMessage() {
  if (!recoveryAI) {
    alert('Chat not initialized. Please setup your API key.')
    return
  }

  const chatInput = document.getElementById('chat-input')
  const message = chatInput.value.trim()

  if (!message || isWaitingForResponse) {
    return
  }

  displayMessage(message, 'user')
  chatInput.value = ''

  showLoadingIndicator()
  isWaitingForResponse = true

  try {
    const response = await recoveryAI.sendMessage(message)
    removeLoadingIndicator()
    displayMessage(response, 'assistant')
    
    try {
      // Show follow-up suggestions (wrapped in try-catch so errors don't break chat)
      showFollowUpSuggestions(response)
    } catch (suggestionError) {
      console.error('Error showing follow-up suggestions:', suggestionError)
      // Continue anyway - chat still works without suggestions
    }

    const shouldSpeak = document.getElementById('auto-speak')?.checked
    if (shouldSpeak && speechHandler) {
      speechHandler.speak(response)
    }
  } catch (error) {
    removeLoadingIndicator()
    console.error('Full error object:', error)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    displayMessage('Sorry, I encountered an error. Please check your API key and try again.', 'assistant')
  }

  isWaitingForResponse = false
}

function handleVoiceInput() {
  if (!speechHandler || !speechHandler.recognition) {
    alert('Speech recognition not supported in your browser')
    return
  }

  const micBtn = document.getElementById('mic-btn')

  if (speechHandler.isListening) {
    speechHandler.stopListening()
    return
  }

  speechHandler.onListeningStart = () => {
    micBtn.classList.add('listening')
  }

  speechHandler.onListeningEnd = () => {
    micBtn.classList.remove('listening')
  }

  speechHandler.startListening((transcript) => {
    document.getElementById('chat-input').value = transcript
    if (transcript.trim()) {
      handleSendMessage()
    }
  })
}

function displayStarterPrompts() {
  const addiction = addictionsApp?.selectedAddiction || 'addiction'
  const daysSober = addictionsApp?.daysSober || 0
  
  const chatMessages = document.getElementById('chat-messages')
  chatMessages.innerHTML = ''
  
  // Welcome message
  const welcomeDiv = document.createElement('div')
  welcomeDiv.className = 'message ai-message'
  welcomeDiv.innerHTML = `<p><strong>Welcome to your Recovery Journey! 💪</strong><br><br>
    You're fighting ${addiction} and you're <strong>${daysSober} days strong!</strong><br><br>
    I'm here to support you with advice, coping strategies, and encouragement. What would you like to talk about?</p>`
  chatMessages.appendChild(welcomeDiv)
  
  // Starter prompts
  const promptsDiv = document.createElement('div')
  promptsDiv.style.padding = '1rem'
  promptsDiv.style.display = 'flex'
  promptsDiv.style.flexDirection = 'column'
  promptsDiv.style.gap = '0.5rem'
  
  const starterPrompts = getStarterPrompts(addiction)
  
  starterPrompts.forEach(prompt => {
    const btn = document.createElement('button')
    btn.className = 'starter-prompt-btn'
    btn.textContent = prompt
    btn.onclick = () => {
      document.getElementById('chat-input').value = prompt
      handleSendMessage()
    }
    promptsDiv.appendChild(btn)
  })
  
  chatMessages.appendChild(promptsDiv)
}

function startNewConversation() {
  if (!recoveryAI) {
    alert('Chat not initialized')
    return
  }
  
  // Clear conversation history
  recoveryAI.clearChatHistory()
  
  // Clear input
  document.getElementById('chat-input').value = ''
  
  // Show starter prompts again
  displayStarterPrompts()
  
  console.log('Started new conversation')
}

function getStarterPrompts(addiction) {
  const prompts = {
    'Alcohol': [
      'How do I handle the urge to drink?',
      'What are common triggers I should know about?',
      'Can you suggest healthy alternatives?',
      'Tell me about support groups for alcohol recovery'
    ],
    'Vaping/Nicotine': [
      'How to manage nicotine cravings?',
      'What are withdrawal symptoms I might face?',
      'Best techniques to quit vaping?',
      'How long until cravings get easier?'
    ],
    'Marijuana': [
      'How to quit smoking marijuana?',
      'What are the withdrawal effects?',
      'Help me understand my triggers',
      'Tips for staying motivated'
    ],
    'Social Media': [
      'How do I break my social media addiction?',
      'What should I do instead of scrolling?',
      'Managing FOMO and anxiety',
      'Tips for digital detox'
    ],
    'Gaming': [
      'How to quit gaming addiction?',
      'What are healthy alternatives?',
      'Managing gaming urges',
      'Getting my life back on track'
    ],
    'Gambling': [
      'How do I stop gambling?',
      'What triggers my gambling urges?',
      'Financial recovery tips',
      'Finding support for gambling addiction'
    ],
    'Caffeine': [
      'How to reduce caffeine intake?',
      'Managing caffeine withdrawal',
      'Better sleep without caffeine',
      'Healthy energy alternatives'
    ],
    'Shopping': [
      'How to stop shopping compulsively?',
      'Managing spending urges',
      'Financial recovery strategies',
      'Finding fulfillment without shopping'
    ],
    'Eating Disorders': [
      'Help with my eating disorder',
      'How to develop a healthy relationship with food?',
      'Managing triggers and emotions',
      'Finding professional support'
    ],
    'Pornography': [
      'How do I quit pornography?',
      'Managing urges and triggers',
      'Healthy relationships and sexuality',
      'Recovery strategies that work'
    ],
    'Prescription Drugs': [
      'How to manage prescription drug dependence?',
      'Safe withdrawal strategies',
      'Talking to my doctor about this',
      'Pain management without dependency'
    ],
    'Self-Harm': [
      'I need help with self-harm urges',
      'Alternative coping mechanisms',
      'How to process difficult emotions',
      'Building a support system'
    ]
  }
  
  return prompts[addiction] || [
    'How can I start my recovery today?',
    'What are my biggest challenges?',
    'Give me some practical coping strategies',
    'I need motivation and support'
  ]
}

function showFollowUpSuggestions(aiResponse) {
  const chatMessages = document.getElementById('chat-messages')
  if (!chatMessages) return
  
  try {
    const suggestionsDiv = document.createElement('div')
    suggestionsDiv.className = 'follow-up-suggestions'
    suggestionsDiv.style.padding = '1rem'
    suggestionsDiv.style.display = 'flex'
    suggestionsDiv.style.flexDirection = 'column'
    suggestionsDiv.style.gap = '0.5rem'
    suggestionsDiv.style.borderTop = '1px solid var(--border)'
    suggestionsDiv.style.marginTop = '0.5rem'
    suggestionsDiv.style.paddingTop = '1rem'
    
    const label = document.createElement('p')
    label.style.fontSize = '0.75rem'
    label.style.color = 'var(--text-muted)'
    label.style.marginBottom = '0.5rem'
    label.style.fontWeight = '600'
    label.textContent = '💡 Follow-up ideas:'
    suggestionsDiv.appendChild(label)
    
    if (!recoveryAI) return
    
    const suggestions = recoveryAI.getFollowUpSuggestions(aiResponse)
    if (!suggestions || suggestions.length === 0) return
    
    suggestions.forEach(suggestion => {
      const btn = document.createElement('button')
      btn.className = 'follow-up-btn'
      btn.textContent = suggestion
      btn.style.padding = '0.5rem 1rem'
      btn.style.border = '1px solid var(--secondary)'
      btn.style.background = 'transparent'
      btn.style.color = 'var(--secondary)'
      btn.style.borderRadius = '0.5rem'
      btn.style.cursor = 'pointer'
      btn.style.fontSize = '0.85rem'
      btn.style.transition = 'all 0.2s'
      btn.style.textAlign = 'left'
      
      btn.onmouseover = () => {
        btn.style.background = 'var(--secondary)'
        btn.style.color = 'white'
      }
      btn.onmouseout = () => {
        btn.style.background = 'transparent'
        btn.style.color = 'var(--secondary)'
      }
      btn.onclick = () => {
        document.getElementById('chat-input').value = suggestion
        handleSendMessage()
      }
      suggestionsDiv.appendChild(btn)
    })
    
    chatMessages.appendChild(suggestionsDiv)
    chatMessages.scrollTop = chatMessages.scrollHeight
  } catch (e) {
    console.error('Error creating follow-up suggestions:', e)
  }
}

function handleVoiceInput() {
  if (!speechHandler || !speechHandler.recognition) {
    alert('Speech recognition not supported in your browser')
    return
  }

  const micBtn = document.getElementById('mic-btn')

  if (speechHandler.isListening) {
    speechHandler.stopListening()
    return
  }

  speechHandler.onListeningStart = () => {
    micBtn.classList.add('listening')
  }

  speechHandler.onListeningEnd = () => {
    micBtn.classList.remove('listening')
  }

  speechHandler.startListening((transcript) => {
    document.getElementById('chat-input').value = transcript
    if (transcript.trim()) {
      handleSendMessage()
    }
  })
}

function displayMessage(text, role) {
  const chatMessages = document.getElementById('chat-messages')
  if (!chatMessages) return
  
  const messageDiv = document.createElement('div')
  messageDiv.className = `message ${role}-message`
  
  const content = document.createElement('div')
  content.className = 'message-content'
  
  // Simple formatting: replace bullet points and preserve line breaks
  const lines = text.split('\n').map(l => l.trim()).filter(l => l)
  let htmlParts = []
  let listItems = []
  
  for (let line of lines) {
    // Check if bullet point or numbered
    const isBullet = line.match(/^[-•*]\s+/)
    const isNumbered = line.match(/^\d+\.\s+/)
    
    if (isBullet || isNumbered) {
      const cleanLine = line.replace(/^[-•*]\s+|^\d+\.\s+/, '')
      listItems.push(cleanLine)
    } else {
      // Flush any pending list
      if (listItems.length > 0) {
        htmlParts.push('<ul>' + listItems.map(item => `<li>${item}</li>`).join('') + '</ul>')
        listItems = []
      }
      // Add paragraph
      htmlParts.push(`<p>${line}</p>`)
    }
  }
  
  // Flush any remaining list
  if (listItems.length > 0) {
    htmlParts.push('<ul>' + listItems.map(item => `<li>${item}</li>`).join('') + '</ul>')
  }
  
  content.innerHTML = htmlParts.join('')

  messageDiv.appendChild(content)
  chatMessages.appendChild(messageDiv)

  chatMessages.scrollTop = chatMessages.scrollHeight
}

function showLoadingIndicator() {
  const chatMessages = document.getElementById('chat-messages')
  const loadingDiv = document.createElement('div')
  loadingDiv.className = 'message ai-message typing-indicator'
  loadingDiv.id = 'loading-indicator'
  loadingDiv.innerHTML = `<span></span><span></span><span></span>`
  chatMessages.appendChild(loadingDiv)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

function removeLoadingIndicator() {
  const indicator = document.getElementById('loading-indicator')
  if (indicator) {
    indicator.remove()
  }
}

function loadChatMessages() {
  if (!recoveryAI || recoveryAI.conversationHistory.length === 0) {
    // Show starter prompts
    displayStarterPrompts()
    return
  }

  recoveryAI.conversationHistory.forEach(msg => {
    displayMessage(msg.content, msg.role)
  })
}

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  requestNotificationPermission()

  loadProgress()
  updatePetDisplay()
  renderTasks()
  updateRewards()

  // Tab navigation
  var navButtons = document.querySelectorAll(".nav-btn")
  var tabContents = document.querySelectorAll(".tab-content")

  navButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      var tabName = this.getAttribute("data-tab")

      navButtons.forEach((b) => {
        b.classList.remove("active")
      })
      tabContents.forEach((tc) => {
        tc.classList.remove("active")
      })

      this.classList.add("active")
      document.getElementById(tabName + "-tab").classList.add("active")
    })
  })

  // Task form
  document.getElementById("task-form").addEventListener("submit", (e) => {
    e.preventDefault()
    var input = document.getElementById("task-input")
    var deadlineInput = document.getElementById("task-deadline")
    var repeatInput = document.getElementById("task-repeat")
    var text = input.value.trim()
    var deadline = deadlineInput.value || null
    var repeatFreq = repeatInput.value || "none"

    if (text) {
      addTask(text, deadline, repeatFreq)
      input.value = ""
      deadlineInput.value = ""
      repeatInput.value = "none"
    }
  })

  // Customize modal
  document.getElementById("customize-btn").addEventListener("click", () => {
    document.getElementById("customize-modal").classList.remove("hidden")
    document.getElementById("pet-name-input").value = petName

    var typeBtns = document.querySelectorAll(".pet-type-btn")
    for (var c = 0; c < typeBtns.length; c++) {
      if (typeBtns[c].getAttribute("data-type") === petType) {
        typeBtns[c].classList.add("active")
      } else {
        typeBtns[c].classList.remove("active")
      }
    }
  })

  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("customize-modal").classList.add("hidden")
  })

  var petTypeBtns = document.querySelectorAll(".pet-type-btn")
  for (var d = 0; d < petTypeBtns.length; d++) {
    petTypeBtns[d].addEventListener("click", function () {
      var allBtns = document.querySelectorAll(".pet-type-btn")
      for (var e = 0; e < allBtns.length; e++) {
        allBtns[e].classList.remove("active")
      }
      this.classList.add("active")
    })
  }

  document.getElementById("save-pet").addEventListener("click", () => {
    var nameInput = document.getElementById("pet-name-input").value.trim()
    var activeTypeBtn = document.querySelector(".pet-type-btn.active")

    if (nameInput) petName = nameInput
    if (activeTypeBtn) petType = activeTypeBtn.getAttribute("data-type")

    updatePetDisplay()
    saveProgress()
    document.getElementById("customize-modal").classList.add("hidden")
  })

  // Reset game
  document.getElementById("reset-game").addEventListener("click", () => {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
    resetGamePhase()
  })

  // Maze controls
  var controls = document.querySelectorAll(".control-btn")
  for (var f = 0; f < controls.length; f++) {
    controls[f].addEventListener("click", function () {
      movePlayer(this.getAttribute("data-dir"))
    })
  }

  // Keyboard controls
  document.addEventListener("keydown", (e) => {
    if (gamePhase !== "maze") return

    var keyMap = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
    }

    if (keyMap[e.key]) {
      e.preventDefault()
      movePlayer(keyMap[e.key])
    }
  })

  // Initialize chat after DOM is loaded
  setTimeout(() => {
    initializeChat()
  }, 100)
})
