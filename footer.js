document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer-placeholder");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="main-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>HopeLink Foundation</h3>
          <p>Empowering communities in Ghana through sustainable education, healthcare, and community development projects.</p>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Our Programs</a></li>
            <li><a href="events.html">Upcoming Events</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p><i class="fas fa-map-marker-alt"></i> Tamale, Northern Region, Ghana</p>
          <p><i class="fas fa-phone"></i> +233 50 316 3427</p>
          <p><i class="fas fa-envelope"></i> dennis0503163427@gmail.com</p>
        </div>

        <div class="footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Subscribe to get updates on our latest projects and events.</p>
          <form id="newsletter-form" class="newsletter-form">
            <input type="email" placeholder="Your Email Address" required id="newsletter-email">
            <button type="submit" class="btn-subscribe">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 HopeLink Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  `;

  // Simple validation & notification for newsletter subscription
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletter-email").value;
      alert(`Thank you for subscribing with: ${email}!`);
      newsletterForm.reset();
    });
  }
});
