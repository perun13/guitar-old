new Swiper('.swiper-2', {



    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,


    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        425: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        414: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        375: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }

});




let btnServices = document.querySelector('.btn_services');
let serviceForm = document.querySelector('.services');
let closeServices = document.querySelector('#close_services');
let openForm = document.querySelector(".open_form");
let servicesRight = document.querySelector('#services_right');

btnServices.onclick = () => {
    serviceForm.classList.toggle('__active');
};

closeServices.onclick = () => {
    serviceForm.classList.remove('__active');
    servicesRight.classList.remove('__active');
};

openForm.onclick = () => {
    servicesRight.classList.toggle('__active');
};

/////////////////////////////////////////////////////////////////


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

const headerBurger = document.querySelector('.header_burger');
const navBurger = document.querySelector('.nav_burger');
if (headerBurger) {

    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        navBurger.classList.toggle('_active');
        headerBurger.style.display = "fixed";
    });
};










let card = document.querySelector('#btn_card');
let follow = document.querySelector('#btn_follow');

card.onclick = () => {
    window.location.href = 'https://perun13.github.io/guitar/card';
};

follow.onclick = () => {
    window.location.href = 'https://perun13.github.io/guitar/favorite';
}







let searchText = document.querySelector('#search_input');
let searchForm = document.querySelector('.search_form');
let closeSearchForm = document.querySelector('.close_form_search');
let searchBtn = document.querySelector('#search');



searchBtn.onclick = () => {
    searchForm.classList.toggle('__active');
}

closeSearchForm.onclick = () => {
    searchForm.classList.remove('__active');
}