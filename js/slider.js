
let sliderImg = document.querySelector('.slider__content_img');
let sliderImgText = document.querySelector('.slider__content_text');
let sliderCheck = document.querySelectorAll('.slider__content_check');



for(let i = 0; i < sliderCheck.length; i++) {
    sliderCheck[i].addEventListener('click', () => {
        for(let i of sliderCheck) {
            i.classList.remove('active');
        }

        sliderCheck[i].classList.add('active');

        if(sliderCheck[i] === sliderCheck[0]) {
            sliderImg.src = `./images/spain.jpg`;
            sliderImgText.innerHTML = `Spain`;
        }
        else if(sliderCheck[i] === sliderCheck[1]) {
            sliderImg.src = `./images/japan.jpg`;
            sliderImgText.innerHTML = `Japan`;
        }
        else if(sliderCheck[i] === sliderCheck[2]) {
            sliderImg.src = `./images/san-francisco.jpg`;
            sliderImgText.innerHTML = `san-francisco`;
        }
    })
}


