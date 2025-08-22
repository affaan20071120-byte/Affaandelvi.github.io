const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0; i<150; i++){
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2
  });
}

function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'white';
  for(let s of stars){
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.radius,0,Math.PI*2);
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;
    if(s.x<0 || s.x>canvas.width) s.dx *= -1;
    if(s.y<0 || s.y>canvas.height) s.dy *= -1;
  }
  requestAnimationFrame(animateStars);
}
animateStars();

function toggleMenu(){
  let nav = document.getElementById('nav');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}
