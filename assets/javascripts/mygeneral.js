//  toggling the mobile menu 

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



