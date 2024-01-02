// const { event } = require("grunt");

// Scroll to top button
window.onscroll = function () {
    scrollToTop();
}
function scrollToTop() {
    const btnElement = document.querySelector('.footer__backtotopbtn');
    const headerElement = document.querySelector('.header');
    const heroElement = document.querySelector('.hero');
    const heroHeight = heroElement.clientHeight;
    if (window.scrollY > heroHeight) {
        btnElement.classList.add('show');
        btnElement.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
        headerElement.classList.add("--black");
    }
    else {
        btnElement.classList.remove('show');
        headerElement.classList.remove("--black");
    }
}
// -----------------------

function scrollToProducts() {
    const productsElement = document.querySelector('#products');
    productsElement.scrollIntoView();
}
function scrollToAbout() {
    const aboutElement = document.querySelector('#about');
    aboutElement.scrollIntoView();
}
function scrollToGallery() {
    const galleryElement = document.querySelector('#gallery');
    galleryElement.scrollIntoView();
}
function scrollToNews() {
    const newsElement = document.querySelector('#news');
    newsElement.scrollIntoView();
}
function scrollToVideos() {
    const videosElement = document.querySelector('#videos');
    videosElement.scrollIntoView();
}
// Click to open sign-up

function toggleSignup() {
    const signupElement = document.querySelector('.signup');
    const closeBtn = document.querySelector('.signup__form--closebtn');
    signupElement.classList.toggle('--show');
    closeBtn.addEventListener('click', function () {
        signupElement.classList.remove('--show');
    })
}

// Close Sign-up Form

function stopPropagation(event) {
    event.stopPropagation();
}
function selectOutside() {
    document.querySelector('.signup').classList.remove('--show');
}

// Click to open video popup

function openVideo() {
    const popupVideo = document.querySelector('.popup-video');
    const closeElemtn = document.querySelector('.video__frame--closebtn');
    popupVideo.classList.toggle('--show');
    closeElemtn.addEventListener('click', function () {
        popupVideo.classList.remove('--show');
    })
}

function selectOutsideVid() {
    document.querySelector('.popup-video').classList.remove('--show');
}

// Toggle password 

function togglePassword() {
    const eyeElement = document.querySelector('.toggle-password');
    const unhideElement = document.querySelector('.visible');
    const hideElement = document.querySelector('.hidden');

    // eyeElement.forEach(param => {
    //     param.addEventListener('click', function () {
    //         unhideElement.classList.toggle('--hide');
    //         hideElement.classList.toggle('--hide');
    //     })
    // });
    eyeElement.addEventListener('click', function () {
        unhideElement.classList.toggle('--hide');
        hideElement.classList.toggle('--hide');
    })
}
togglePassword();

// Show menu mobile
function menuMobile() {
    const hamburgerElement = document.querySelector('.header__cta--hamburger');
    const navMobileElement = document.querySelector('.nav-mobile');
    const logoElement = document.querySelector('.header__logo');
    const langElement = document.querySelector('.header__cta--lang');
    hamburgerElement.addEventListener('click', function () {
        navMobileElement.classList.toggle('--active');
        logoElement.classList.toggle('hide');
        langElement.classList.toggle('hide');
        hamburgerElement.classList.toggle('--close');
    })

}
menuMobile();

