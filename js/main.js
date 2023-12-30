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

function openSignUp() {
    const signupElement = document.querySelector('.header__cta--signup');
    const popupForm = document.querySelector('.signup');
    const closeElemtn = document.querySelector('.signup__form--closebtn');
    popupForm.classList.add('--show');
    closeElemtn.addEventListener('click', function () {
        popupForm.classList.remove('--show');
    })
}
// Click to open video popup

function openVideo() {
    const videoElement = document.querySelector('.btnvideo');
    const popupVideo = document.querySelector('.popup-video');
    const closeElemtn = document.querySelector('.video__frame--closebtn');
    popupVideo.classList.add('--show');
    closeElemtn.addEventListener('click', function () {
        popupVideo.classList.remove('--show');
    })
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