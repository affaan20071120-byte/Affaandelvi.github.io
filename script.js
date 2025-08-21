// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const links = document.querySelector('.links');
menuBtn?.addEventListener('click', () => links.classList.toggle('open'));

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
