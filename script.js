const zoomButtons = document.querySelectorAll('.zoom-effect');

zoomButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.classList.add('active');
  });

  button.addEventListener('mouseleave', () => {
    button.classList.remove('active');
  });
});
.zoom-effect {
  transition: transform 0.3s ease-out;
}

.zoom-effect:hover {
  transform: scale(1.1);
}
// получаем ссылку на кнопку "Купить"
const buyButton = document.querySelector('.buy-button');

// получаем ссылку на элемент каталога
const catalogSection = document.querySelector('#catalog');

// добавляем обработчик события "click" на кнопку "Купить"
buyButton.addEventListener('click', (event) => {
  // отменяем стандартное поведение ссылки
  event.preventDefault();

  // вычисляем положение элемента каталога на странице
  const catalogSectionTop = catalogSection.getBoundingClientRect().top;

  // осуществляем плавный скролл к элементу каталога
  window.scrollTo({
    top: catalogSectionTop,
    behavior: 'smooth'
  });
});
