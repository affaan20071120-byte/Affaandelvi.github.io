
// Reveal-on-scroll
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
},{ threshold: 0.12 });
document.querySelectorAll('.card').forEach(el=>io.observe(el));
