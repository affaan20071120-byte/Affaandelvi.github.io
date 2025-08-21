// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', ()=> navLinks.classList.toggle('open'));

// Reveal on scroll
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
