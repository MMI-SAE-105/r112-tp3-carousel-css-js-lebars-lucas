// *** CAROUSEL ***
// TODO
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
    const carouselContainer = document.querySelector('.carousel__container');
  
    prevButton.addEventListener('click', function() {
      carouselContainer.scrollBy({
        left: -200, // Ajustez cette valeur en fonction de la largeur de vos éléments
        behavior: 'smooth'
      });
    });
  
    nextButton.addEventListener('click', function() {
      carouselContainer.scrollBy({
        left: 200, // Ajustez cette valeur en fonction de la largeur de vos éléments
        behavior: 'smooth'
      });
    });
  });