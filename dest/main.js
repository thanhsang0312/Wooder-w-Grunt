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
        "w4zMxwRmtjA",
        "VJ5WoHkrXdI",
        "dBBhWK4CVro"
    ]
    let videoKey = document.querySelectorAll('.detail__img');
    let btnVideo = document.querySelector('.btnvideo');
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

    btnVideo.setAttribute('data-key', 'JiOoPg_u6TU');
    btnVideo.addEventListener('click', e => {
        pathElement.setAttribute('src', `https://www.youtube.com/embed/${btnVideo.getAttribute('data-key')}?autoplay=1&mute=1`);
        e.stopPropagation();
        popupVideoElement.classList.toggle('--show');
    })

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

        headerElement.classList.add('--black');
        navMobileElement.classList.toggle('--active');
        bodyElement.classList.toggle('--disable-scroll');
    })

    window.onresize = function () {
        if (document.body.clientWidth > 1000) {
            hamburgerElement.classList.remove('--active');
            langElement.classList.remove('hide');
            logoElement.classList.remove('hide');
            headerElement.classList.remove('--black');
            navMobileElement.classList.remove('--active');
            bodyElement.classList.remove('--disable-scroll');
        }
    }
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
    window.addEventListener('scroll', function () {
        let coordY = window.scrollY;
        let percent = 100 * coordY / (windowHeight - window.innerHeight);
        scrollTracker.style.width = `${percent}%`;
    })
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

// Scroll to section

function scrollToSection() {
    const navElement = document.querySelectorAll('.header__nav li a');
    const sectionElement = document.querySelectorAll('section');
    const heightHeader = document.querySelector('.header').clientHeight;
    const scrollTracker = document.querySelector('.scrolltracker__bar--progress');
    const windowHeight = document.querySelector('.homepage').scrollHeight;

    navElement.forEach((param) => {
        param.addEventListener('click', function (e) {
            e.preventDefault();
            const hrefElement = param.getAttribute('href');
            window.scrollTo({
                top: document.querySelector(hrefElement).offsetTop - heightHeader + 10,
                behavior: "smooth"
            })

            navElement.forEach((param) => {
                param.classList.remove('active');
            })
            this.classList.add('active');
        })
    })

    window.addEventListener('scroll', function () {
        let coordY = window.scrollY;
        for (let i = 0; i < (sectionElement.length - 2); i++) {
            if (coordY > sectionElement[i].offsetTop - heightHeader && coordY < sectionElement[i + 1].offsetTop) {
                navElement.forEach((el) => {
                    el.classList.remove('active');
                })
                navElement[i].classList.add('active');
            }
        }

        if (coordY > document.querySelector('.hero__bottom').offsetTop) {
            document.querySelector('.footer__backtotopbtn').classList.add('show');
            document.querySelector('.header').classList.add('--black');
        } else {
            document.querySelector('.footer__backtotopbtn').classList.remove('show');
            document.querySelector('.header').classList.remove('--black');
        }
    })
}
scrollToSection();

function scrollToSectionMobile() {
    const navMobile = document.querySelectorAll('.nav-mobile-menu li a');
    const hamburgerElement = document.querySelector('.header__cta--hamburger');
    const langElement = document.querySelector('.header__cta--lang');
    const logoElement = document.querySelector('.header__logo');
    const headerElement = document.querySelector('.header');
    const navMobileElement = document.querySelector('.nav-mobile');
    navMobile.forEach((param) => {
        param.addEventListener('click', function () {
            hamburgerElement.classList.remove('--active');
            langElement.classList.remove('hide');
            logoElement.classList.remove('hide');

            headerElement.classList.add('--black');
            navMobileElement.classList.remove('--active');
            bodyElement.classList.remove('--disable-scroll');
        })
    })
}
scrollToSectionMobile();
// News Tab
function newsTab() {
    const tabElement = document.querySelectorAll('.news__tabs--item');
    const newsListElement = document.querySelectorAll('.news__list--wrap');
    tabElement.forEach((param) => {
        param.addEventListener('click', function () {
            tabElement.forEach((el) => {
                el.classList.remove('active');
            })
            this.classList.add('active');

            newsListElement.forEach(param => {
                param.classList.remove('active');
            })

            let key = param.getAttribute("data-tab");

            document.querySelector(`.news_tab-${key}`).classList.add('active');
        })
    })
}
newsTab();

// Accordion 

function accordion() {
    let accElement = document.querySelectorAll('.accordion__content--title')
    const panelElement = document.querySelectorAll('.accordion__content--panel');

    accElement.forEach((param, index) => {
        param.addEventListener('click', function () {
            accElement.forEach((param, _index) => {
                if (index === _index) return
                param.classList.remove('active');
                param.nextElementSibling.style.maxHeight = null
            })
            this.classList.toggle('active');
            if (panelElement[index].style.maxHeight)
                panelElement[index].style.maxHeight = null
            else
                panelElement[index].style.maxHeight = `${panelElement[index].scrollHeight}px`;
        })
    })
}
accordion();

// Hero Slider
function heroSlider() {
    let itemELement = document.querySelector('.hero__slider');
    let flickityElement = new Flickity(itemELement, {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        wrapAround: true,
        // fade: true,
        on: {
            ready: function () {
                console.log('Flickity is ready');
                dotsSlider();
            },
            change: function (index) {
                console.log('Slide changed to' + index);
                pagingSlider(index);
            }
        }
    });


    // control button
    let prevBtn = document.querySelector('.--btn-prev');
    let nextBtn = document.querySelector('.--btn-next');
    prevBtn.addEventListener('click', function () {
        flickityElement.previous(true);
    })
    nextBtn.addEventListener('click', function () {
        flickityElement.next(true);
    })

    function dotsSlider() {
        const dotsElement = document.querySelector('.flickity-page-dots');
        const dotsSliderBottom = document.querySelector('.hero__bottom--paging');
        dotsSliderBottom.appendChild(dotsElement);
    }

    function pagingSlider(index) {
        let numberElement = document.querySelector('.number__curr');
        numberElement.innerHTML = (index + 1).toString().padStart(2, '0');
    }

}
heroSlider();

// Loading Page

function loadingPage() {
    let loadedCount = 0;
    let imagesCount = document.querySelectorAll('img').length;

    let imgLoaded = imagesLoaded(bodyElement);

    imgLoaded.on('progress', (instance) => {
        loadedCount++;
        percent = Math.floor((loadedCount / imagesCount) * 100);
        progressBar(percent);
    }).on('always', (instance) => {
        console.log('always');
    }).on('fail', (instance) => {
        console.log('fail');
    }).on('done', (instance) => {
        console.log('done');
        hideLoading();
    })
}

function progressBar(percent) {
    const progressElement = document.querySelector('.loading__inner--progress');
    const percentLoading = document.querySelector('.loading__percent');
    progressElement.style.width = `${percent}%`;
    percentLoading.innerHTML = `${percent}%`;
}

function hideLoading() {
    const loadingElement = document.querySelector('.loading');
    loadingElement.classList.add('--is-loaded');
    bodyElement.classList.remove('--disable-scroll');
}


// Carousel

function handleCarousel() {
    let imgWrap = document.querySelector('.carousel__img');
    let flkty = new Flickity(imgWrap, {
        // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        freeScroll: true,
        lazyLoad: 3
    });

    flkty.on('scroll', function (progress) {
        let percent = Math.floor(progress * 100);
        document.querySelector('.carousel__progress span').style.width = `${percent}%`;
    })
}
// Gallery

function handleGallery() {
    Fancybox.bind("[data-fancybox]", {
        infinite: false,
        keyboard: {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            PageUp: "next",
            PageDown: "prev",
            ArrowUp: "prev",
            ArrowDown: "next",
            ArrowRight: "next",
            ArrowLeft: "prev",
        },
    })

    Fancybox.bind("[data-fancybox=gallery]", {
        showClass: "f-fadeIn",
        Carousel: {
            transition: "slide",
        },
        // Images: {
        //     zoom: false,
        // },
    })
}


window.addEventListener('load', function () {
    handleCarousel();
    handleGallery();
    loadingPage();
})

// Validation Form

function formValidation() {
    const inputElement = document.querySelectorAll('.form__group input');
    const formElement = document.querySelector('.signup__form--bottom');
    const errorMessage = document.querySelectorAll('.error-message');
    const emailElement = document.querySelector('#mail');
    const pwElement = document.querySelector('#pw');
    const cpwElement = document.querySelector('#cpw');
    const checkBox = document.querySelector('#noti');

    // Check empty or not
    function isRequired(element, index) {
        if (element.value === '') {
            errorMessage[index].classList.add('--is-empty');
            errorMessage[index].innerHTML = 'This field cannot be empty!';
        } else {
            errorMessage[index].classList.remove('--is-empty');
            errorMessage[index].innerHTML = '';
        }
    }

    // Check is email or not

    function isEmail(element = '') {
        if (element.includes('@') === false) {
            errorMessage[1].classList.add('--is-empty');
            errorMessage[1].innerHTML = 'Please enter a correct email address!';
        }
    }

    // Check password 
    function isPassword(element = '') {
        // errorMessage[3].classList.add('--is-empty');
        // errorMessage[3].innerHTML = 'Password contains at least 1 uppercase letter, 1 lowercase letter, a number and a special character (! @ # /)';
        let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (element.match(regularExpression)) {
            console.log('pw is good');
            errorMessage[3].classList.remove('--is-empty');
            errorMessage[3].innerHTML = '';
        } else {
            console.log('pw is wrong')
            errorMessage[3].classList.add('--is-empty');
            errorMessage[3].innerHTML = 'Password contains at least 1 uppercase letter, 1 lowercase letter, a number and a special character (! @ # /)';
        }
    }

    function isMatch() {
        errorMessage[4].classList.add('--is-empty');
        errorMessage[4].innerHTML = 'Password does not match!';
    }

    formElement.addEventListener('submit', function (e) {
        e.preventDefault();
        inputElement.forEach((param, index) => {
            isRequired(param, index);
        })
        if (checkBox.checked) {
            console.log('checked');
            errorMessage[5].classList.remove('--is-empty');
            errorMessage[5].innerHTML = '';
        } else {
            console.log('not checked');
            errorMessage[5].classList.add('--is-empty');
            errorMessage[5].innerHTML = 'Please check!';
        }
    })

    inputElement.forEach((param, index) => {
        param.addEventListener('keydown', function () {
            errorMessage[index].classList.remove('--is-empty');
            errorMessage[index].innerHTML = '';
        })

        param.addEventListener('blur', function () {
            isRequired(param, index);
        })
    })

    emailElement.addEventListener('blur', function () {
        if (emailElement.value !== '') {
            isEmail(emailElement.value);
        }
    })

    pwElement.addEventListener('blur', function () {
        if (pwElement.value !== '') {
            isPassword(pwElement.value);
        }
    })

    cpwElement.addEventListener('blur', function () {
        if (cpwElement.value === pwElement.value) {
            console.log("password matched");
        }
        else {
            isMatch();
        }
    })

    checkBox.addEventListener('click', function () {
        if (checkBox.checked) {
            errorMessage[5].classList.remove('--is-empty');
            errorMessage[5].innerHTML = '';
        } else {
            errorMessage[5].classList.add('--is-empty');
            errorMessage[5].innerHTML = 'Please check!';
        }
    })
}
formValidation();