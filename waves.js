const canvas = document.getElementById("bg-waves");
const ctx = canvas.getContext("2d");
let w, h, t=0;
function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
resize(); window.addEventListener("resize", resize);
function draw(){
  ctx.clearRect(0,0,w,h);
  const waves=3;
  for(let i=0;i<waves;i++){
    ctx.beginPath();
    for(let x=0;x<=w;x+=18){
      const y = h/2 + Math.sin((x*0.012)+(t/28)+(i*2))*(40+(i*30));
      ctx.lineTo(x, y + i*50 - 60);
    }
    ctx.lineTo(w,h); ctx.lineTo(0,h); ctx.closePath();
    ctx.fillStyle = `hsla(${180+i*60}, 80%, 50%, 0.08)`;
    ctx.fill();
  }
  t++; requestAnimationFrame(draw);
}
draw();
// mouse glow for neon cards
document.addEventListener('mousemove', e=>{
  document.querySelectorAll('.neon').forEach(card=>{
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left)+'px');
    card.style.setProperty('--my', (e.clientY - r.top)+'px');
  });
});
