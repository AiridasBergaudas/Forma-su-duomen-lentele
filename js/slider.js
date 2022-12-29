const slider = document.querySelector('.slider');
const sliderImg = document.querySelector('.slider.img');

const prewBtn = document.querySelector('.prew');
const nextBtn = document.querySelector('.next');

nextBtn.addEventListener('click', nextImg);
prewBtn.addEventListener('click', prewImg);
let i = 0
setInterval(nextImg, 5000) //automatinis tarpas tarp nuotrauku 

function nextImg(){
    sliderImg[i].classList.remove('show');
    i++;
    if(i >= sliderImg.length){
        i = 0;
    }
    sliderImg[i].classList.add('show');
}

function prewBtn(){
    sliderImg[i].classList.remove('show');
    i--;
    if(i < 0){
        i = sliderImg.length-1;
    }
    sliderImg[i].classList.add('show'); 
}