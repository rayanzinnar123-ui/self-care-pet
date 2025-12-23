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

var REWARDS = [
  { id: 1, name: "First Steps", icon: "🌟", requirement: 10 },
  { id: 2, name: "Dedicated", icon: "🏅", requirement: 20 },
  { id: 3, name: "Achiever", icon: "🏆", requirement: 30 },
  { id: 4, name: "Champion", icon: "👑", requirement: 40 },
  { id: 5, name: "Legend", icon: "💎", requirement: 50 },
]

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
    time: 18,
    maze: [
      [0, 0, 1, 0,],
      [0, 1, 1, 0,],
      [0, 0, 0, 1,],
      [1, 0, 1, 1,],
      [0, 0, 0, 0,],
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
// Track which rewards we've already notified about (persisted)
var rewardNotified = {}

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
  }
  // Save reward notification state
  for (var ri = 0; ri < REWARDS.length; ri++) {
    var rid = REWARDS[ri].id
    localStorage.setItem("taskpet_reward_notified_" + rid, rewardNotified[rid] ? "1" : "0")
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
      if (text) {
        taskList.push({ id: id, text: text, completed: completed })
        if (id >= taskIdCounter) {
          taskIdCounter = id + 1
        }
      }
    }
    // Load reward notification state
    for (var rj = 0; rj < REWARDS.length; rj++) {
      var rid = REWARDS[rj].id
      rewardNotified[rid] = localStorage.getItem("taskpet_reward_notified_" + rid) === "1"
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
    html += '<li class="task-item ' + (task.completed ? "completed" : "") + '" data-id="' + task.id + '">'
    html +=
      '<div class="task-checkbox ' + (task.completed ? "checked" : "") + '" onclick="toggleTask(' + task.id + ')">'
    html += task.completed ? "✓" : ""
    html += "</div>"
    html += '<span class="task-text">' + escapeHtml(task.text) + "</span>"
    html += '<button class="delete-btn" onclick="deleteTask(' + task.id + ')">'
    html +=
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>'
    html += "</button>"
    html += "</li>"
  }

  taskListEl.innerHTML = html
}

// Add task
function addTask(text) {
  var task = {
    id: taskIdCounter,
    text: text,
    completed: false,
  }
  taskIdCounter++
  taskList.unshift(task)
  renderTasks()
  saveProgress()
}

// Toggle task completion
function toggleTask(id) {
  for (var m = 0; m < taskList.length; m++) {
    if (taskList[m].id === id && !taskList[m].completed) {
      taskList[m].completed = true
      totalCompleted++
      addXP(25)
      break
    }
  }
  renderTasks()
  updateRewards()
  saveProgress()
}

// Delete task
function deleteTask(id) {
  var newList = []
  for (var n = 0; n < taskList.length; n++) {
    if (taskList[n].id !== id) {
      newList.push(taskList[n])
    }
  }
  taskList = newList
  renderTasks()
  saveProgress()
}

// Update rewards display
function updateRewards() {
  var grid = document.getElementById("rewards-grid")
  var nextMilestone = Math.ceil((totalCompleted + 1) / 10) * 10
  var progress = totalCompleted % 100

  document.getElementById("milestone-count").textContent = totalCompleted + " / " + nextMilestone + " tasks"
  document.getElementById("milestone-bar").style.width = progress + "%"

  var html = ""
  for (var o = 0; o < REWARDS.length; o++) {
    var reward = REWARDS[o]
    var unlocked = totalCompleted >= reward.requirement
    // If newly unlocked and not yet notified, send an email (placeholder via EmailJS)
    if (unlocked && !rewardNotified[reward.id]) {
      rewardNotified[reward.id] = true
      try {
        sendRewardEmail(reward)
      } catch (e) {
        console.warn('sendRewardEmail failed:', e)
      }
      // persist notification state
      saveProgress()
    }
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

// Send reward notification email via EmailJS (placeholders used)
function sendRewardEmail(reward) {
  var templateParams = {
    message: ".",
    reward_name: reward.name,
    reward_id: reward.id,
    pet_name: petName,
    total_completed: totalCompleted,
  }

  if (window.emailjs && typeof emailjs.send === "function") {
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS service/template IDs
    emailjs
      .send("service_twjqn2g", "template_n7a7wfm", templateParams)
      .then(function (response) {
        console.log("Email sent successfully:", response.status, response.text)
      })
      .catch(function (err) {
        console.error("Email send error:", err)
      })
  } else {
    console.log("EmailJS not available - would send:", templateParams)
  }
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

// Add game score and transfer 25% of earned points to pet XP
function addGameScore(points) {
  if (!points || points === 0) return
  gameScore = gameScore + points
  // Transfer 25% of earned game points to pet XP
  var xpToPet = Math.round(points * 0.25)
  if (xpToPet > 0) {
    addXP(xpToPet)
  }
  updateGameStats()
  saveProgress()
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
        var pointsEarned = 50
        addGameScore(pointsEarned)

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
    addGameScore(10)

    var goalX = size - 1
    var goalY = size - 1

    // Check win
    if (playerX === goalX && playerY === goalY) {
      addGameScore(200)

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

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  // Load saved progress
  loadProgress()

  updatePetDisplay()
  renderTasks()
  updateRewards()
  initMemoryGame()

  // Navigation
  var navBtns = document.querySelectorAll(".nav-btn")
  for (var b = 0; b < navBtns.length; b++) {
    navBtns[b].addEventListener("click", function () {
      switchTab(this.getAttribute("data-tab"))
    })
  }

  // Task form
  document.getElementById("task-form").addEventListener("submit", (e) => {
    e.preventDefault()
    var input = document.getElementById("task-input")
    if (input.value.trim()) {
      addTask(input.value.trim())
      input.value = ""
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
})
