var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Slideshow when <= 723px
function showSlides(n) {
    if (window.matchMedia("(max-width: 723px)").matches) {
        var slides = document.getElementsByClassName("setList");

        if (n > slides.length) {slideIndex = 1};

        if (n < 1) {slideIndex = slides.length};

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex-1].style.display = "block";
    }
} 

// Inline set photos when >=724px
function showSets(n) {
    if (window.matchMedia("(min-width: 724px)").matches) {
        var setPhotos = document.getElementsByClassName("setList");

        if (n > setPhotos.length) {slideIndex = 1};

        if (n < 1) {slideIndex = setPhotos.length};

        for (i = 0; i < setPhotos.length; i++) {
            setPhotos[i].style.display = "inline-block";
        }
    }
} 

window.addEventListener('resize', () => {
    showSlides();
    showSets();
});