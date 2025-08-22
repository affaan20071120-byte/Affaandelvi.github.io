// Smooth scroll behavior is via CSS; add reveal + particles + mini apps

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); }
  });
},{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Particles
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, particles;
function resize(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  // create particles
  const count = Math.floor((W*H)/22000); // density
  particles = [...Array(count)].map(()=> ({
    x: Math.random()*W,
    y: Math.random()*H,
    vx: (Math.random()-.5)*0.6,
    vy: (Math.random()-.5)*0.6,
    r: Math.random()*2 + 0.6,
    a: Math.random()*0.6 + 0.2
  }));
}
window.addEventListener('resize', resize);
resize();
function tick(){
  ctx.clearRect(0,0,W,H);
  // subtle star glow
  particles.forEach(p=>{
    p.x += p.vx; p.y += p.vy;
    if(p.x<0||p.x>W) p.vx*=-1;
    if(p.y<0||p.y>H) p.vy*=-1;
    ctx.beginPath();
    ctx.globalAlpha = p.a;
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(tick);
}
tick();

// Mini Calculator
(function(){
  const display = document.getElementById('display');
  function append(val){ display.value = (display.value==='0'? '' : display.value) + val; }
  function clearDisp(){ display.value = '0'; }
  function del(){ display.value = display.value.length ? display.value.slice(0,-1) : '0'; }
  function calc(){
    try { display.value = String(eval(display.value || '0')); }
    catch(e){ display.value = 'Error'; }
  }
  display.value = '0';
  document.querySelectorAll('.grid button').forEach(btn=>{
    const k = btn.dataset.k;
    btn.addEventListener('click', ()=>{
      if(k==='C') return clearDisp();
      if(k==='DEL') return del();
      if(k==='=') return calc();
      append(k);
    });
  });
})();

// Snake Game (canvas) + restart
(function(){
  const canvas = document.getElementById('snakeCanvas');
  const ctx = canvas.getContext('2d');
  const box = 20, size = 420;
  let snake, dir, food, alive, loop;
  function init(){
    snake = [{x:10*box,y:10*box}];
    dir = 'RIGHT';
    food = {
      x: Math.floor(Math.random()*((size/box)-1))*box,
      y: Math.floor(Math.random()*((size/box)-1))*box
    };
    alive = true;
    if(loop) clearInterval(loop);
    loop = setInterval(update, 120);
  }
  function drawCell(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,box-2,box-2);
  }
  function update(){
    ctx.fillStyle = '#0b0b18'; ctx.fillRect(0,0,size,size);
    // draw food
    drawCell(food.x, food.y, '#e74c3c');
    // move
    const head = {...snake[0]};
    if(dir==='LEFT') head.x-=box;
    if(dir==='RIGHT') head.x+=box;
    if(dir==='UP') head.y-=box;
    if(dir==='DOWN') head.y+=box;
    // collision with walls
    if(head.x<0||head.x>=size||head.y<0||head.y>=size) { alive=false; gameOver(); return; }
    // collision with self
    for(let i=0;i<snake.length;i++){ if(snake[i].x===head.x && snake[i].y===head.y){ alive=false; gameOver(); return; } }
    snake.unshift(head);
    // eat
    if(head.x===food.x && head.y===food.y){
      food = {
        x: Math.floor(Math.random()*((size/box)-1))*box,
        y: Math.floor(Math.random()*((size/box)-1))*box
      };
    } else {
      snake.pop();
    }
    // draw snake
    snake.forEach((s,i)=> drawCell(s.x,s.y, i? '#9be7ff' : '#00d9ff'));
  }
  function gameOver(){
    clearInterval(loop);
    ctx.fillStyle = 'rgba(0,0,0,.6)';
    ctx.fillRect(0, size/2-30, size, 60);
    ctx.fillStyle = '#fff';
    ctx.font = '20px Poppins, Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over — Press Restart', size/2, size/2+6);
  }
  window.addEventListener('keydown', e=>{
    const k = e.key;
    if(k==='ArrowLeft' && dir!=='RIGHT') dir='LEFT';
    else if(k==='ArrowRight' && dir!=='LEFT') dir='RIGHT';
    else if(k==='ArrowUp' && dir!=='DOWN') dir='UP';
    else if(k==='ArrowDown' && dir!=='UP') dir='DOWN';
  });
  document.getElementById('snake-restart').addEventListener('click', init);
  init();
})();
