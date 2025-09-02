document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.carousel img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;

  function showSlide(i) {
    index = (i + images.length) % images.length;
    const slideWidth = document.querySelector('.carousel').clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => showSlide(index + 1));
  prevBtn.addEventListener('click', () => showSlide(index - 1));

  setInterval(() => {
    showSlide(index + 1);
  }, 4000);

  window.addEventListener('resize', () => showSlide(index));
});
