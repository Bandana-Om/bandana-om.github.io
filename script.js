// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// ===============================
// CLOSE MENU AFTER CLICKING LINK
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const sections = document.querySelectorAll(
    ".section, .contact-section"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});


// ===============================
// NAVBAR BACKGROUND ON SCROLL
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5, 5, 5, 0.97)";

    } else {

        navbar.style.background = "rgba(5, 5, 5, 0.88)";

    }

});


// ===============================
// TYPING EFFECT
// ===============================

const heroTitle = document.querySelector(".hero h2");

const text = "IoT • Cybersecurity • Full Stack Developer";

let index = 0;

function typeText() {

    if (index < text.length) {

        heroTitle.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 50);
    }
}

if (heroTitle) {

    heroTitle.textContent = "";

    setTimeout(typeText, 700);
}


// ===============================
// PROJECT CARD EFFECT
// ===============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0)";

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const footerText = document.querySelector("footer p");

if (footerText) {

    const year = new Date().getFullYear();

    footerText.textContent =
        "© " + year +
        " Bandana Koiri. Built with curiosity & code.";

}


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("Welcome to Bandana Koiri's Portfolio 🚀");
console.log("IoT • Cybersecurity • Full Stack Developer");