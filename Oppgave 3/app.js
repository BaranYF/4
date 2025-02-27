let slideIndex = 1;

// Show slides when page loads
document.addEventListener('DOMContentLoaded', () => {
    showSlide();
    
    // keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') nextSlide(-1);
        if (e.key === 'ArrowRight') nextSlide(1);
    });

    // Make images clickable to go to next slide
    let images = document.querySelectorAll('.fbimg');
    images.forEach(img => {
        img.onclick = () => nextSlide(1);
    });
});

function nextSlide(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    if (slideIndex + n > slides.length) {
        slideIndex = 1;
    } else if (slideIndex + n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex += n;
    }
    
    showSlide();
}

function jumpToSlide(n) {
    slideIndex = n;
    showSlide();
}

// Update the display
function showSlide() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}