(function(){
const canvas = document.getElementById('snakeCanvas');
if(!canvas) return;
const ctx = canvas.getContext('2d');
const size = 20;
let dir='RIGHT', score=0;
let snake=[{x:5,y:5},{x:4,y:5},{x:3,y:5}];
let food = {x:10,y:10};
let loopId=null;

function rand(max){ return Math.floor(Math.random()*max); }
function placeFood(){ food={x:rand(canvas.width/size), y:rand(canvas.height/size)} }
function drawCell(x,y,color){ ctx.fillStyle=color; ctx.fillRect(x*size,y*size,size-2,size-2); }
function draw(){
  ctx.fillStyle='#050607'; ctx.fillRect(0,0,canvas.width,canvas.height);
  // move
  const head = {...snake[0]};
  if(dir==='LEFT') head.x--; if(dir==='RIGHT') head.x++; if(dir==='UP') head.y--; if(dir==='DOWN') head.y++;
  const maxX=(canvas.width/size)|0, maxY=(canvas.height/size)|0;
  head.x=(head.x+maxX)%maxX; head.y=(head.y+maxY)%maxY;
  // collision with self
  if(snake.some((s,i)=>i&&s.x===head.x&&s.y===head.y)){ gameOver(); return; }
  snake.unshift(head);
  if(head.x===food.x && head.y===food.y){ score++; document.getElementById('score').textContent=score; placeFood(); }
  else { snake.pop(); }
  // render food
  drawCell(food.x, food.y, '#00e6e6');
  // render snake
  snake.forEach((s,i)=> drawCell(s.x, s.y, i? '#7c4dff' : '#e6f3ff'));
}
function gameOver(){
  clearInterval(loopId); loopId=null;
  alert('Game Over! Score: '+score);
}
function start(){
  clearInterval(loopId); score=0; snake=[{x:5,y:5},{x:4,y:5},{x:3,y:5}]; dir='RIGHT'; placeFood(); document.getElementById('score').textContent=score;
  loopId=setInterval(draw, 90);
}
document.getElementById('restartSnake').addEventListener('click', start);
window.addEventListener('keydown', e=>{
  const k = e.key.toLowerCase();
  if((k==='arrowleft'||k==='a') && dir!=='RIGHT') dir='LEFT';
  if((k==='arrowright'||k==='d') && dir!=='LEFT') dir='RIGHT';
  if((k==='arrowup'||k==='w') && dir!=='DOWN') dir='UP';
  if((k==='arrowdown'||k==='s') && dir!=='UP') dir='DOWN';
});
start();
})();