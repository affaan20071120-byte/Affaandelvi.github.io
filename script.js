function toggleMenu() {
  var menu = document.getElementById("menu");
  if(menu.style.width === "250px") {
    menu.style.width = "0";
  } else {
    menu.style.width = "250px";
  }
}
function scrollToTop(){
  window.scrollTo({top:0, behavior:'smooth'});
}
// Galaxy stars animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let stars = [];
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({length:200}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    radius: Math.random()*1.5,
    speed: Math.random()*0.5+0.2
  }));
}
function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2*Math.PI);
    ctx.fill();
    s.y += s.speed;
    if(s.y > canvas.height) s.y = 0;
  });
  requestAnimationFrame(animate);
}
window.onresize = resize;
resize();
animate();
