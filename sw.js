// Service Worker for background notifications
const CACHE_NAME = 'sproutly-v1'
const TASK_NOTIFICATION_CHECK_INTERVAL = 60000 // Check every minute

self.addEventListener('install', (event) => {
  console.log('[SW] Service Worker installing...')
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  console.log('[SW] Service Worker activating...')
  self.clients.claim()
})

// Listen for messages from the main app
self.addEventListener('message', (event) => {
  if (event.data.type === 'CHECK_TASKS') {
    checkTaskDeadlines(event.data.tasks)
  } else if (event.data.type === 'START_MONITORING') {
    startTaskMonitoring(event.data.tasks)
  }
})

function checkTaskDeadlines(tasks) {
  if (!tasks || !Array.isArray(tasks)) return

  const now = new Date().getTime()

  tasks.forEach((task) => {
    if (!task.deadline || task.completed) return

    const deadline = new Date(task.deadline).getTime()
    const timeUntil = deadline - now

    // Notify 1 hour before deadline
    if (timeUntil > 0 && timeUntil <= 3660000 && timeUntil > 3600000) {
      sendNotification('Task Reminder', {
        body: `"${task.text}" is due in 1 hour!`,
        icon: '🔔',
        badge: '🐱',
        tag: `task-${task.id}-1h`,
      })
    }
    // Notify when overdue
    else if (timeUntil < 0 && timeUntil > -60000) {
      sendNotification('Task Overdue', {
        body: `"${task.text}" is overdue! Complete it soon.`,
        icon: '⚠️',
        badge: '🐱',
        tag: `task-${task.id}-overdue`,
      })
    }
  })
}

function startTaskMonitoring(tasks) {
  // Set up periodic background sync for task checking
  setInterval(() => {
    checkTaskDeadlines(tasks)
  }, TASK_NOTIFICATION_CHECK_INTERVAL)
}

function sendNotification(title, options) {
  self.registration.showNotification(title, {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50" y="50" font-size="80" text-anchor="middle" dy=".3em">🐱</text></svg>',
    ...options,
  })
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      // Focus existing window if available
      for (let client of clientList) {
        if (client.url === '/' && 'focus' in client) return client.focus()
      }
      // Otherwise open new window
      if (clients.openWindow) {
        return clients.openWindow('/')
      }
    })
  )
})