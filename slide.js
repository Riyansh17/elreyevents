let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.querySelectorAll(".slide");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    // Change slide every 2 seconds (2000 milliseconds)
    setTimeout(showSlides, 3000);
}

showSlides();