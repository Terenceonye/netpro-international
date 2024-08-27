

    document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("menu-heading-1");
    const submenu = document.getElementById("menu-content-1");

    toggleButton.addEventListener("click", function() {
        const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
        
        // Toggle the aria-expanded attribute
        toggleButton.setAttribute("aria-expanded", !isExpanded);
        
        // Toggle the aria-hidden attribute and visibility
        submenu.setAttribute("aria-hidden", isExpanded);
        submenu.classList.toggle("visible");
    });
});



//toggling the expertise on large screen

document.addEventListener('DOMContentLoaded', function () {
    // Select the Expertise+ button and the dropdown menu
    const expertiseButton = document.querySelector('.header__menu-btn');
    const dropdownMenu = document.querySelector('#dropdown-menu');

    let hideTimeout;

    // Function to show the dropdown menu
    const showDropdown = () => {
        clearTimeout(hideTimeout); // Clear any existing hide timeout
        dropdownMenu.classList.remove('is-hidden'); // Remove the is-hidden class
    };

    // Function to hide the dropdown menu
    const hideDropdown = () => {
        hideTimeout = setTimeout(() => {
            dropdownMenu.classList.add('is-hidden'); // Add the is-hidden class
        }, 200); // Delay before hiding
    };

    // Show the dropdown menu when hovering over the Expertise+ button
    expertiseButton.addEventListener('mouseenter', showDropdown);

    // Hide the dropdown menu with a delay when leaving the Expertise+ button
    expertiseButton.addEventListener('mouseleave', hideDropdown);

    // Keep the dropdown menu visible when hovering over it
    dropdownMenu.addEventListener('mouseenter', showDropdown);

    // Hide the dropdown menu with a delay when leaving the dropdown menu
    dropdownMenu.addEventListener('mouseleave', hideDropdown);
});


// Accordations, click to view content

document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll('[data-plugin="accordion"]');

  accordions.forEach(accordion => {
    const headers = accordion.querySelectorAll('.accordion__heading');

    headers.forEach(header => {
      header.addEventListener('click', function() {
        // Get the current content section to be toggled
        const content = this.nextElementSibling;
        const isExpanded = this.querySelector('a').getAttribute('aria-expanded') === 'true';

        // Close all accordion sections
        const allContents = accordion.querySelectorAll('.accordion__content');
        const allHeaders = accordion.querySelectorAll('.accordion__heading a');

        allContents.forEach((content) => {
          content.setAttribute('aria-hidden', 'true');
          content.style.display = 'none';
        });

        allHeaders.forEach((header) => {
          header.setAttribute('aria-expanded', 'false');
        });

        // Toggle the clicked header's section
        if (!isExpanded) {
          this.querySelector('a').setAttribute('aria-expanded', 'true');
          content.setAttribute('aria-hidden', 'false');
          content.style.display = 'block';
        }
      });
    });
  });
});


//drag to scroll

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".js-carousel-list");
    const prevButton = document.querySelector(".js-carousel-prev");
    const nextButton = document.querySelector(".js-carousel-next");
  
    if (!carousel || !prevButton || !nextButton) return; // Exit if any element is not found
  
    let isDragging = false;
    let startPos = 0;
    let scrollLeft = 0;
    const scrollAmount = 300; // Adjust this value for how much the carousel should scroll on button click
  
    // Mouse events for drag-to-scroll
    carousel.addEventListener("mousedown", (e) => {
      isDragging = true;
      startPos = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.style.cursor = "grabbing";
      e.preventDefault();
    });
  
    carousel.addEventListener("mouseleave", () => {
      isDragging = false;
      carousel.style.cursor = "grab";
    });
  
    carousel.addEventListener("mouseup", () => {
      isDragging = false;
      carousel.style.cursor = "grab";
    });
  
    carousel.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startPos) * 1.5; // Adjust scroll speed
      carousel.scrollLeft = scrollLeft - walk;
    });
  
    // Touch events for drag-to-scroll
    carousel.addEventListener("touchstart", (e) => {
      isDragging = true;
      startPos = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener("touchend", () => {
      isDragging = false;
    });
  
    carousel.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startPos) * 1.5; // Adjust scroll speed for touch
      carousel.scrollLeft = scrollLeft - walk;
    });
  
    // Click events for navigation buttons
    prevButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  
    nextButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  });
  