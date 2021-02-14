const ERROR_IMAGES = [
    "/images/404-images/404-0.png",
    "/images/404-images/404-1.png",
    "/images/404-images/404-2.png",
    "/images/404-images/404-3.png",
    "/images/404-images/404-4.png"
];

const err_img = document.getElementById('error-img');

const random404 = Math.floor(Math.random() * ERROR_IMAGES.length);

err_img.src = ERROR_IMAGES[random404];