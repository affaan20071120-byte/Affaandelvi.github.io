// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', ()=> navLinks.classList.toggle('open'));

// Reveal on scroll with delay & custom anims
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const delay = Number(el.getAttribute('data-delay') || 0);
      setTimeout(()=> el.classList.add('visible'), delay);
      observer.unobserve(el);
    }
  });
}, {threshold: .15});

document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
