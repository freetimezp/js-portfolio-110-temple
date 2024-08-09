//show menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}


//remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));


//blur header
const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);


//gsap animation
gsap.from(".home__image-1", 5, { opacity: 0, x: 400 });
gsap.from(".home__image-6", 1.5, { opacity: 0, y: 200, delay: .2, ease: 'back.out(1.5)' });
gsap.from(".home__image-3", 1.5, { opacity: 0, y: 400, delay: .4, ease: 'back.out(1.5)' });
gsap.from(".home__image-5", 1.5, { opacity: 0, y: 400, delay: .5, ease: 'back.out(1.5)' });
gsap.from(".home__image-2", 1.5, { opacity: 0, y: 400, delay: .8, ease: 'back.out(1.5)' });
gsap.from(".home__image-4", 1.5, { opacity: 0, y: 200, delay: 1.8, ease: 'back.out(1.5)' });
gsap.from(".home__data", 1.5, { opacity: 0, y: -100, delay: 2.5, ease: 'back.out(1.5)' });
gsap.from(".home__lantern-1", 1.5, { opacity: 0, x: 70, delay: 3, ease: 'back.out(1.5)' });
gsap.from(".home__lantern-2", 1.5, { opacity: 0, x: -70, delay: 3.5, ease: 'back.out(1.5)' });




