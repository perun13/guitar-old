document.querySelector('#second_arrow').onclick = () => {
    document.querySelector('#second_more').classList.toggle('__active');
    document.querySelector('#second_arrow').classList.toggle('__active');


    if (document.querySelector('#second_arrow').classList.contains('__active')) {
        document.querySelector('#active').style.color = 'orange';
    }

    else {
        document.querySelector('#active').style.color = 'white';
    }
};

document.querySelector('#first_arrow').onclick = () => {
    document.querySelector('#first_more').classList.toggle('__active');
    document.querySelector('#first_arrow').classList.toggle('__active');


    if (document.querySelector('#first_arrow').classList.contains('__active')) {
        document.querySelector('#active').style.color = 'orange';
    }

    else {
        document.querySelector('#active').style.color = 'white';
    }
};

let btn_more = document.querySelector('#btn_more');
let more = document.querySelector('#more');

btn_more.onclick = () => {
    more.classList.toggle('__active');
    if (more.classList.contains('__active')) {
        btn_more.innerHTML = 'свернуть'
    }
    else {
        btn_more.innerHTML = 'подробнее...'
    }
}


let secondBtn = document.querySelector('#second_page')
let second_list = document.querySelector('.item_list_second')
let firt_list = document.querySelector('#first_list')
let first_page = document.querySelector('#first_page')

secondBtn.onclick = () => {
    second_list.classList.toggle('__active');
    firt_list.classList.toggle('__active');
    first_page.classList.toggle('__active');
    secondBtn.classList.toggle('__active');
};

first_page.onclick = () => {
    second_list.classList.remove('__active');
    firt_list.classList.remove('__active');
    first_page.classList.remove('__active');
    secondBtn.classList.remove('__active');
}




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