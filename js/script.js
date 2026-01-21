const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

setInterval(() => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}, 4000); // 4秒ごとに切り替え


document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('closeIntro');
  const introOverlay = document.getElementById('introOverlay');

  closeBtn.addEventListener('click', () => {
    introOverlay.classList.add('hide');
  });
});


const target = document.querySelector(".mv-message");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
    }
  });
});

observer.observe(target);





window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("introOverlay");
  const closeBtn = document.getElementById("closeIntro");

  // すでに見たか？
  if (localStorage.getItem("introSeen")) {
    overlay.classList.add("is-hidden");
  }

  // ×ボタン
  closeBtn.addEventListener("click", () => {
    overlay.classList.add("is-hidden");
    localStorage.setItem("introSeen", "true");
  });
});