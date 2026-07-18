// ==========================================================================
// 1. DATABASE INITIALIZATION (Local Storage Sync)
// ==========================================================================

// Initialize database in localStorage if it doesn't exist yet
async function initDatabase() {
  if (!localStorage.getItem("hl_database")) {
    try {
      // Fetch the mock data from our local JSON file
      const response = await fetch("data/database.json");
      if (!response.ok) throw new Error("Could not fetch database.json");
      
      const data = await response.json();
      localStorage.setItem("hl_database", JSON.stringify(data));
      console.log("Database initialized successfully in LocalStorage.");
    } catch (error) {
      console.error("Failed to initialize database:", error);
    }
  }
}

// ==========================================================================
// 2. HELPER FUNCTIONS TO GET & SAVE DATA
// ==========================================================================

// Retrieve a specific collection (e.g., 'users', 'blogs', 'events')
function getCollection(collectionName) {
  const db = JSON.parse(localStorage.getItem("hl_database"));
  return db ? db[collectionName] : [];
}

// Save an entire collection back to localStorage
function saveCollection(collectionName, dataArray) {
  const db = JSON.parse(localStorage.getItem("hl_database")) || {};
  db[collectionName] = dataArray;
  localStorage.setItem("hl_database", JSON.stringify(db));
}

// ==========================================================================
// 3. GLOBAL UI ACTIONS (Themes & Initializations)
// ==========================================================================
document.addEventListener("DOMContentLoaded", async () => {
  // Initialize our database
  await initDatabase();

  // Dark Mode Toggle Support
  const body = document.body;
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";
  
  if (isDarkMode) {
    body.classList.add("dark-theme");
  }

  // Look for any toggle elements (we can place this in settings/profile later)
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }
});
