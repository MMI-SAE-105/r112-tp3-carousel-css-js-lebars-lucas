// *** CAROUSEL ***
// TODO
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
    const carouselContainer = document.querySelector('.carousel__container');
    const premierItem = document.querySelector(".carousel__item");
    

    prevButton.addEventListener('click', function() { 
      const scrollAmount = premierItem.clientWidth;
      carouselContainer.scrollBy({
        left: -200, // Ajustez cette valeur en fonction de la largeur de vos éléments
        behavior: 'smooth'
      });
    });
  
   


    nextButton.addEventListener('click', function() {
      const scrollAmount = premierItem.clientWidth;
      carouselContainer.scrollBy({
        left: 200, // Ajustez cette valeur en fonction de la largeur de vos éléments
        behavior: 'smooth'
      });
    });
  });