document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-placeholder");
  if (!navbarContainer) return;

  // Check if a user is currently logged in
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Generate dynamic navigation links based on auth state
  let authLinks = `
    <li><a href="login.html" class="nav-btn login-btn">Login</a></li>
    <li><a href="signup.html" class="nav-btn signup-btn">Sign Up</a></li>
  `;

  if (currentUser) {
    // Aligned to the flattened root structure
    const dashboardPath = "dashboard.html"; 

    authLinks = `
      <li><a href="${dashboardPath}" class="nav-link">Dashboard</a></li>
      <li><a href="#" id="logout-btn" class="nav-btn logout-btn">Logout</a></li>
    `;
  }

  // Navbar HTML structure
  navbarContainer.innerHTML = `
    <nav class="navbar">
      <div class="nav-logo">
        <a href="index.html">
          <span class="logo-text">HopeLink</span><span class="logo-sub">Foundation</span>
        </a>
      </div>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="about.html" class="nav-link">About Us</a></li>
        <li><a href="services.html" class="nav-link">Programs</a></li>
        <li><a href="events.html" class="nav-link">Events</a></li>
        <li><a href="blog.html" class="nav-link">Blog</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
        ${authLinks}
      </ul>
      <div class="hamburger" id="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  `;

  // Hamburger menu toggle for mobile responsiveness
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  // Handle Logout action
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("currentUser");
      alert("You have logged out successfully!");
      window.location.href = "index.html";
    });
  }
});
