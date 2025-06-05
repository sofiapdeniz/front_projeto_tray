function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 300;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}