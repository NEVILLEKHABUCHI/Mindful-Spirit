document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;
    const navBar = document.querySelector(".navBar");

    window.addEventListener("scroll", function () {
        let currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
            // At the very top - revert navbar to normal position
            navBar.style.position = "relative";
            navBar.style.top = "auto";
            navBar.style.width = "auto";
            navBar.style.zIndex = "auto";
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up - fix the navbar
            navBar.style.position = "fixed";
            navBar.style.top = "0";
            navBar.style.width = "100%";
            navBar.style.zIndex = "1000";
        } else {
            // Scrolling down - hide the navbar
            navBar.style.position = "relative";
            navBar.style.top = "auto";
            navBar.style.width = "auto";
            navBar.style.zIndex = "auto";
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

  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

function displayCaptcha() {
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = generateCaptcha();
}

document.getElementById('refreshCaptcha').addEventListener('click', function(event) {
    event.preventDefault(); //Prevent the default action
    displayCaptcha();
}) 

window.onload = displayCaptcha;

// For the tesimonials scrolling


document.addEventListener('DOMContentLoaded', function () {
    const innerContainer = document.querySelector('.inner-container');
    const items = document.querySelectorAll('.item');
    const indicators = document.querySelectorAll('.indicator');
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    const totalItems = items.length;
    let currentIndex = 0;

    // Function to update the active indicator
    function updateIndicators(index) {
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Function to scroll to a specific index
    function scrollToIndex(index) {
        if (index < 0 || index >= totalItems) return; // Prevent out-of-bounds scrolling
        const itemWidth = items[index].offsetWidth;
        innerContainer.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateIndicators(index);
    }

    // Event listener for scrolling
    innerContainer.addEventListener('scroll', function () {
        const scrollPosition = innerContainer.scrollLeft;
        const itemWidth = items[0].offsetWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateIndicators(newIndex);
        }
    });

    // Event listeners for bar indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            scrollToIndex(index);
        });
    });

    // Event listeners for buttons
    leftButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    });

    rightButton.addEventListener('click', function () {
        if (currentIndex < totalItems - 1) {
            scrollToIndex(currentIndex + 1);
        }
    });

    // Initial indicator state
    updateIndicators(0);
});

// script.js
// script.js
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Function to check scroll position and show/hide the button
    function toggleScrollToTopButton() {
        if (window.scrollY > 0.1 * window.innerHeight) { // 90vh threshold
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // Function to scroll to the top of the document
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll
        });
    }

    // Event listener for scroll events
    window.addEventListener("scroll", toggleScrollToTopButton);

    // Event listener for button click
    scrollToTopBtn.addEventListener("click", scrollToTop);
});