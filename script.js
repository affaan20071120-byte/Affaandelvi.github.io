// Smooth menu toggle and scroll
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  if (nav) {
    if (nav.hasAttribute('hidden')) nav.removeAttribute('hidden');
    else nav.setAttribute('hidden', '');
  }
});

// Intersection Observer for reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Starfield (reddish-blue universal)
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d', { alpha: true });
let stars = [];
const STAR_COUNT = 180;
function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // regenerate
  stars = Array.from({length: STAR_COUNT}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    z: Math.random()*0.7 + 0.3,
    vx: (Math.random()-0.5)*0.15,
    vy: (Math.random()-0.5)*0.15,
    tw: Math.random()*Math.PI*2
  }));
}
window.addEventListener('resize', resize);
resize();

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for (const s of stars){
    s.x += s.vx * s.z;
    s.y += s.vy * s.z;
    s.tw += 0.02;
    // wrap
    if (s.x < -10) s.x = canvas.width+10;
    if (s.x > canvas.width+10) s.x = -10;
    if (s.y < -10) s.y = canvas.height+10;
    if (s.y > canvas.height+10) s.y = -10;
    const r = 0.5 + 1.8*s.z + Math.sin(s.tw)*0.3;
    const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r*6);
    grd.addColorStop(0, 'rgba(255,255,255,0.9)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(s.x, s.y, r, 0, Math.PI*2);
    ctx.fill();

    // subtle red/blue glow
    ctx.shadowBlur = 12 * s.z;
    ctx.shadowColor = Math.random() < 0.5 ? 'rgba(255,43,69,0.25)' : 'rgba(58,160,255,0.22)';
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fillRect(s.x, s.y, 0.8, 0.8);
    ctx.shadowBlur = 0;
  }
  requestAnimationFrame(draw);
}
draw();
