// const { event } = require("grunt");
const bodyElement = document.querySelector('body');

// Click to open sign-up (Done)

function toggleSignup() {
    const signupElement = document.querySelector('.signup');
    const closeBtn = document.querySelector('.signup__form--closebtn');
    signupElement.classList.toggle('--show');
    closeBtn.addEventListener('click', function () {
        signupElement.classList.remove('--show');
    })
}

function stopPropagation(event) {
    event.stopPropagation();
}
function selectOutside() {
    document.querySelector('.signup').classList.remove('--show');
}

// Click to open video popup (Done)

function openVideo() {
    let keyArray = [
        "d2X7VnUNJXk",
        "iy53wPnNCYU",
        "XWhdbZ9-uGA"
    ]
    let videoKey = document.querySelectorAll('.detail__img');
    let pathElement = document.querySelector('.video__frame iframe');
    const popupVideoElement = document.querySelector('.popupvideo');
    const closeBtnElement = document.querySelector('.video__closebtn');

    for (let i = 0; i < videoKey.length; i++) {
        videoKey[i].setAttribute('data-key', keyArray[i]);
    }

    for (let i = 0; i < videoKey.length; i++) {
        videoKey[i].addEventListener('click', function () {
            pathElement.setAttribute('src', `https://www.youtube.com/embed/${videoKey[i].getAttribute('data-key')}?autoplay=1`);
        })
    }

    videoKey.forEach(param => {
        param.addEventListener('click', e => {
            e.stopPropagation();
            popupVideoElement.classList.toggle('--show');
        })
    })

    closeBtnElement.addEventListener('click', function () {
        popupVideoElement.classList.remove('--show');
        pathElement.setAttribute('src', '');

    })

    document.addEventListener('click', function () {
        popupVideoElement.classList.remove('--show');
        pathElement.setAttribute('src', '');
    })

}
openVideo();
// Toggle Password (Done)

function togglePassword() {
    let eyeElement = document.querySelectorAll('.eye');
    let eyeSlashElement = document.querySelectorAll('.eyeslash');
    let password = document.querySelector('[name=pw]');
    if (password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text');
        eyeElement[0].classList.toggle('--hide');
        eyeSlashElement[0].classList.toggle('--unhide');
    }
    else {
        password.setAttribute('type', 'password');
        eyeElement[0].classList.toggle('--hide');
        eyeSlashElement[0].classList.toggle('--unhide');
    }
}
function toggleCPassword() {
    let eyeElement = document.querySelectorAll('.eye');
    let eyeSlashElement = document.querySelectorAll('.eyeslash');
    let password = document.querySelector('[name=cpw]');
    if (password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text');
        eyeElement[1].classList.toggle('--hide');
        eyeSlashElement[1].classList.toggle('--unhide');
    }
    else {
        password.setAttribute('type', 'password');
        eyeElement[1].classList.toggle('--hide');
        eyeSlashElement[1].classList.toggle('--unhide');
    }
}

// Show menu mobile (Done)
function menuMobile() {
    const hamburgerElement = document.querySelector('.header__cta--hamburger');
    const langElement = document.querySelector('.header__cta--lang');
    const logoElement = document.querySelector('.header__logo');
    const headerElement = document.querySelector('.header');
    const navMobileElement = document.querySelector('.nav-mobile');
    hamburgerElement.addEventListener('click', function () {
        hamburgerElement.classList.toggle('--active');
        langElement.classList.toggle('hide');
        logoElement.classList.toggle('hide');
        headerElement.classList.toggle('--black');
        navMobileElement.classList.toggle('--active');
        bodyElement.classList.toggle('--disable-scroll');
    })
}
menuMobile();

// Click dropdown (Done)
function dropdownShow() {
    const langElement = document.querySelector('.header__cta--lang');
    let otherLangElement = document.querySelectorAll('.dropdown li');
    let currText = document.querySelector('.curr__text');
    langElement.addEventListener('click', (e) => {
        e.stopPropagation();
        langElement.classList.toggle('--active');
    })

    otherLangElement.forEach((el) => {
        el.addEventListener('click', function () {
            let curr = currText.textContent;
            currText.innerHTML = el.textContent;
            el.innerHTML = curr;
        })
    })

    document.addEventListener('click', function () {
        langElement.classList.remove('--active');
    })
}
dropdownShow();

// Scroll Tracker timeline (Done)

function scrollTracker() {
    const scrollTracker = document.querySelector('.scrolltracker__bar--progress');
    const windowHeight = document.querySelector('.homepage').scrollHeight;
    const heroElement = document.querySelector('.hero');
    window.onscroll = function () {
        let coordY = window.scrollY;
        let percent = 100 * coordY / (windowHeight - window.innerHeight);
        scrollTracker.style.width = `${percent}%`;
        if (coordY > heroElement.clientHeight) {
            document.querySelector('.footer__backtotopbtn').classList.add('show');
            document.querySelector('.header').classList.add('--black');
        } else {
            document.querySelector('.footer__backtotopbtn').classList.remove('show');
            document.querySelector('.header').classList.remove('--black');
        }
    }
}
scrollTracker();

// Scroll to Top Button

function scrollToTop() {
    document.querySelector('.footer__backtotopbtn').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
scrollToTop();

// Scroll to section (Not yet)

function scrollToSection() {
    const navElement = document.querySelectorAll('.header__nav li a');
}
scrollToSection();