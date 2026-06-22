document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav-bar");
    const links = nav.querySelectorAll("a");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            nav.classList.remove("active");
        });
    });


    const elements = document.querySelectorAll(`section, .about-box, .project-card, .cert-card, .profile-card, .timeline-item, .contact-card, footer`);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
});

const cards = document.querySelectorAll(
    ".project-card, .about-box, .cert-card"
);

cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-bar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});