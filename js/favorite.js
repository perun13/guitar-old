let more = document.querySelector('.limited');
let more_btn = document.querySelector('.btn_more');

more_btn.onclick = () => {
    more.classList.toggle('__active');
    document.querySelector('.second').classList.toggle('__active');
    document.querySelector('#item').classList.toggle('__active');

}










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
    window.location.href = 'https://perun13.github.io/guitar/';
};

