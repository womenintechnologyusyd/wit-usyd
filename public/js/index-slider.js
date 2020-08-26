var slider = document.getElementsByClassName('slider')[0];
var slides = document.getElementsByClassName('slide');
var slide = slides[0];

function autoSlidefunction(){
    if (slider.scrollLeft > slide.clientWidth*(slides.length-2)) {
        setTimeout(autoSlidefunction, 3000);
        slider.scrollTo(0 , 0);
    } else {
        setTimeout(autoSlidefunction, 3000);
        slider.scrollBy((slide.clientWidth), 0);
    }
}

autoSlidefunction();