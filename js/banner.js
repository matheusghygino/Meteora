const slider = document.querySelectorAll('.slider');

let currentSlide = 0;

export function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

export function showSlider() {
    slider[currentSlide].classList.add('on');
}

export function nextSlider() {
    hideSlider()
    if (currentSlide == slider.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++
    }
    showSlider()
}

export function prevSlider() {
    hideSlider()
    if (currentSlide == 0) {
        currentSlide = slider.length - 1;
    } else {
        currentSlide--
    }
    showSlider()
}
