// reveal on scroll
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
},{ threshold: 0.12 });
document.querySelectorAll('.card').forEach(el=>observer.observe(el));
