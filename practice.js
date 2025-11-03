

const skillCards = document.querySelectorAll('.skill-card');

function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85; 

  skillCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show'); 
    }
  });
}


























