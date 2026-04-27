let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

const sections = document.querySelectorAll("#hero, #menu, #lokasi, #sosial");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// DARK MODE
function toggleDark() {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('darkBtn');
  
  if (document.body.classList.contains('dark')) {
    btn.textContent = '☀️';
    localStorage.setItem('darkMode', 'on');
  } else {
    btn.textContent = '🌙';
    localStorage.setItem('darkMode', 'off');
  }
}

// Cek dark mode tersimpan
if (localStorage.getItem('darkMode') === 'on') {
  document.body.classList.add('dark');
  document.getElementById('darkBtn').textContent = '☀️';
}