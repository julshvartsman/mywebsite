document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  const overlay = document.querySelector(".overlay");
  const closeBtns = document.querySelectorAll(".close-btn");
  const fullDetails = document.querySelectorAll(".full-details");

  // Function to close all detail views
  function closeAllDetails() {
    fullDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    overlay.classList.remove("active");
  }

  // Add click event to each circle for opening the full details
  circles.forEach((circle) => {
    // For the flip animation, we'll let CSS handle the hover effect

    // For the click to open full details
    circle.addEventListener("click", function () {
      const section = this.getAttribute("data-section");
      const detailsSection = document.getElementById(`${section}-details`);

      // If details already open, return (let close button handle it)
      if (detailsSection.classList.contains("active")) {
        return;
      }

      // Close any open details first
      closeAllDetails();

      // Activate this detail section and overlay
      detailsSection.classList.add("active");
      overlay.classList.add("active");
    });
  });

  // Add click event to close buttons
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent triggering circle click
      closeAllDetails();
    });
  });

  // Close active details when clicking overlay
  overlay.addEventListener("click", closeAllDetails);
});
document.addEventListener('DOMContentLoaded', function() {
  const circles = document.querySelectorAll('.circle');
  
  circles.forEach(circle => {
      circle.addEventListener('click', function() {
          const section = this.getAttribute('data-section');
          
          // Navigate to different pages based on which circle was clicked
          switch(section) {
              case 'about':
                  window.location.href = 'about.html';
                  break;
              case 'projects':
                  window.location.href = 'projects.html';
                  break;
              case 'contact':
                  window.location.href = 'contact.html';
                  break;
              default:
                  // Stay on home page or handle differently
                  break;
          }
      });
  });
});