document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;
    const navBar = document.querySelector(".navBar");

    window.addEventListener("scroll", function () {
        let currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            // Scrolling up and not at the top of the page - fix the navbar
            navBar.style.position = "fixed";
            navBar.style.top = "0";
            navBar.style.width = "100%";
            navBar.style.zIndex = "1000";
        } else {
            // At the very top - revert navbar to normal position
            navBar.style.position = "relative";
            navBar.style.width = "auto"; // Reset width
            navBar.style.zIndex = "auto"; // Reset stacking order
        }

        lastScrollY = currentScrollY;
    });
});

// For the icon
document.getElementById('icon').addEventListener('click', function() {
    this.classList.toggle('active');
    let content = document.getElementById('content');
    content.classList.toggle('visible');
    let logo = document.getElementById('logo');
    logo.classList.toggle('hidden');
  });