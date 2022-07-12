let headerLogin = document.querySelector('.header__top_login');
let popup = document.querySelector('.popup');


headerLogin.addEventListener('click', ()=> {
    popup.classList.remove('popup__none');
    popup.classList.add('popup__active')

});

document.addEventListener('click', (e)=> {
    if(e.target == popup) {
        popup.classList.remove('popup__active');
        popup.classList.add('popup__none');
    }
        
});