
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0;i<200;i++){
  stars.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*1.5,
    d:Math.random()*0.5
  });
}
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";
  for(let s of stars){
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
  }
  update();
}
function update(){
  for(let s of stars){
    s.y += s.d;
    if(s.y>canvas.height) s.y=0;
  }
}
setInterval(draw,50);

document.getElementById("menuToggle").onclick = ()=>{
  document.getElementById("drawer").classList.toggle("open");
};
