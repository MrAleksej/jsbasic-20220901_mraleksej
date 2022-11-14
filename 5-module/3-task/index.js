function initCarousel() {
  // ваш код...
  const carousel = document.querySelector('.carousel__inner');
  const carouselWidth = carousel.offsetWidth;
  const nextButton = document.querySelector('.carousel__arrow_right');
  const prevButton = document.querySelector('.carousel__arrow_left');
  let countClick = 0;

  prevButton.style.display = 'none'
  nextButton.addEventListener('click', () => {
    countClick = ++countClick
    carousel.style.transform = `translateX(-${carouselWidth*countClick}px)`
    if(countClick === 3) {
      nextButton.style.display = 'none'
    } else {
      nextButton.style.display = ''
      prevButton.style.display = ''
    }
  })

  prevButton.addEventListener('click', () => {
    countClick = --countClick
    carousel.style.transform = `translateX(-${carouselWidth*(countClick)}px)`
    if(countClick === 0) {
      prevButton.style.display = 'none'
    } else {
      prevButton.style.display = ''
      nextButton.style.display = ''
    }
  })
}
