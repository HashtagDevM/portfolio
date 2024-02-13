const toggleNav = () => {
    document.body.classList.toggle("nav-open");
}

const closeNav = () => {
    document.body.classList.remove("nav-open");
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", toggleNav);

navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});
