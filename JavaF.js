document.addEventListener("DOMContentLoaded", () => {
  // 1. Interactive Navigation Bar
  const navItems = document.querySelectorAll(".nav-item");
  const contentSections = document.querySelectorAll(".content-section");

  navItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior (page reload)

      // Remove 'active' class from all nav items
      navItems.forEach((nav) => nav.classList.remove("active"));
      // Add 'active' class to the clicked nav item
      event.target.classList.add("active");

      // Hide all content sections
      contentSections.forEach((section) => section.classList.remove("active"));

      // Show the corresponding content section
      const targetPage = event.target.dataset.page;
      const targetSection = document.getElementById(`${targetPage}-section`);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });

  // Initialize: Show the home section by default
  document.getElementById("home-section").classList.add("active");
  document.querySelector('.nav-item[data-page="home"]').classList.add("active");

  // 2. "Add to Cart" Button Functionality
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.dataset.product || "an item";
      alert(
        `"${productName
          .replace(/-/g, " ")
          .toUpperCase()}" has been added to your cart!`
      );
    });
  });

  // 3. Contact Form Submission (Placeholder)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission (page reload)
      alert(
        "Thank you for your message! We will get back to you shortly."
      );
      contactForm.reset(); // Clear the form fields
    });
  }
});
