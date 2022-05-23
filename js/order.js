let ver1Btn = document.querySelector('#first');
let ver2Btn = document.querySelector('#second');
let ver1 = document.querySelector('#info_ver1');
let ver2 = document.querySelector('.version_2');



ver2Btn.onclick = () => {
    ver2.classList.toggle('__active');
    ver2Btn.classList.toggle('__active');

    ver1Btn.classList.toggle('__active');
    ver1.classList.toggle('__active');
}


ver1Btn.onclick = () => {
    ver2.classList.remove('__active');
    ver2Btn.classList.remove('__active');

    ver1Btn.classList.remove('__active');
    ver1.classList.remove('__active');
}

/////////////////////////////////////////////////////////


let btn = document.querySelector('#btn_buy');
let thankForm = document.querySelector('.thank');
let page = document.querySelector('.order');

btn.onclick = () => {
    thankForm.classList.toggle('__active');
    page.classList.toggle('__active');
}












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







let logoMain = document.querySelector('#logo_main');

logoMain.onclick = () => {
    window.location.href = 'https://perun13.github.io/guitar/card';
};



let firstItem = document.querySelector('#firstItem');
let secondItem = document.querySelector('#secondItem');
let thirdItem = document.querySelector('#thirdItem');
let fourItem = document.querySelector('#fourItem');

firstItem.onclick = () => {
    firstItem.classList.toggle('__active');
    secondItem.classList.remove('__active');
    thirdItem.classList.remove('__active');
    fourItem.classList.remove('__active');
}

secondItem.onclick = () => {
    firstItem.classList.remove('__active');
    secondItem.classList.toggle('__active');
    thirdItem.classList.remove('__active');
    fourItem.classList.remove('__active');
}

thirdItem.onclick = () => {
    firstItem.classList.remove('__active');
    secondItem.classList.remove('__active');
    thirdItem.classList.toggle('__active');
    fourItem.classList.remove('__active');
}

fourItem.onclick = () => {
    firstItem.classList.remove('__active');
    secondItem.classList.remove('__active');
    thirdItem.classList.remove('__active');
    fourItem.classList.toggle('__active');
}