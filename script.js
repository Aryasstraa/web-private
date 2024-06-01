const slides = document.querySelectorAll('.slide');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const nameInputForm = document.querySelector('.name-form');
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn');
const nameSpans = document.querySelectorAll('.name');
const replayBtn = document.querySelector('.replay-btn');
const envelopeContainer = document.querySelector('.envelope-container');
let currentSlide = 0;
let userName = '';

function showSlide(n) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

nextBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    showSlide(index + 1);
  });
});

prevBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    showSlide(index - 1);
  });
});

function startSlider() {
  userName = nameInput.value.trim();
  if (userName) {
    nameSpans.forEach(span => {
      span.textContent = userName;
    });
    nameInputForm.style.display = 'none';
    document.querySelector('.slider').style.display = 'block';
    showSlide(0);
  } else {
    alert('Mohon masukkan nama Anda.');
  }
}

submitBtn.addEventListener('click', startSlider);

// Efek love rain
function createLoveRain() {
  const loveRain = document.querySelector('.love-rain');
  const heart = '&#10084;'; // Kode karakter hati

  for (let i = 0; i < 50; i++) {
    const span = document.createElement('span');
    span.innerHTML = heart;
    span.style.left = `${Math.random() * 100}vw`;
    span.style.animationDelay = `${Math.random() * 5}s`;
    loveRain.appendChild(span);
  }
}

createLoveRain();

