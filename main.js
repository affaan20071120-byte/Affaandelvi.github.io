// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target; const delay = Number(el.dataset.delay||0);
      setTimeout(()=> el.classList.add('active'), delay);
      observer.unobserve(el);
    }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Progress bar
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{
  const sc = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (sc/h*100)+'%';
});

// Active link
const sections=[...document.querySelectorAll('section[id]')];
const links=[...document.querySelectorAll('.links a')];
window.addEventListener('scroll', ()=>{
  let cur='';
  for(const s of sections){
    const top = s.offsetTop-120;
    if(window.scrollY>=top) cur = s.id;
  }
  links.forEach(a=> a.classList.toggle('active', a.getAttribute('href')==='#'+cur));
});

// Mobile menu
const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
menuBtn?.addEventListener('click',()=>{
  if(getComputedStyle(navLinks).display==='none'){ navLinks.style.display='block'; }
  else { navLinks.style.display='none'; }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
