// Neon Dragon v10 Script
// Typing effect + small niceties

const yearEl = document.getElementById('year');
if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

const typingEl = document.getElementById('typing');
const cursorEl = document.querySelector('.cursor');
const lines = [
  "Building smooth, animated UIs",
  "Python • MySQL • Blender • CSS",
  "Crafting neon experiences"
];

let line = 0, char = 0, erasing = false;

function typeLoop(){
  if(!typingEl) return;
  const current = lines[line];
  if(!erasing){
    typingEl.textContent = current.slice(0, char++);
    if(char > current.length + 8){ erasing = true; }
  }else{
    typingEl.textContent = current.slice(0, char--);
    if(char <= 0){ erasing = false; line = (line + 1) % lines.length; }
  }
  setTimeout(typeLoop, erasing ? 40 : 70);
}
typeLoop();

// Improve reduced motion
const media = window.matchMedia('(prefers-reduced-motion: reduce)');
if(media.matches){
  document.documentElement.style.setProperty('--shadow', 'none');
  const dragon = document.querySelector('.dragon');
  if(dragon){ dragon.style.animation = 'none'; }
  const waves = document.querySelectorAll('.wave');
  waves.forEach(w => w.style.animation = 'none');
  const cursor = document.querySelector('.cursor');
  if(cursor) cursor.style.animation = 'none';
}
