const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const size = 20;
let dir = 'RIGHT';
let snake = [{x: 5, y: 5}];
let food = {x: 10, y: 10};
let score = 0;
let loop;

function rand(max){ return Math.floor(Math.random()*max); }

function placeFood(){
  food = { x: rand(canvas.width/size)|0, y: rand(canvas.height/size)|0 };
}

function drawCell(x,y,color){
  ctx.fillStyle = color;
  ctx.fillRect(x*size, y*size, size-2, size-2);
}

function step(){
  // background grid
  ctx.fillStyle = '#050607';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // move snake
  const head = { ...snake[0] };
  if(dir === 'LEFT') head.x--;
  if(dir === 'RIGHT') head.x++;
  if(dir === 'UP') head.y--;
  if(dir === 'DOWN') head.y++;

  // wall wrap for smoother gameplay
  const maxX = (canvas.width/size)|0;
  const maxY = (canvas.height/size)|0;
  head.x = (head.x + maxX) % maxX;
  head.y = (head.y + maxY) % maxY;

  // collision with self
  if(snake.some((s,i)=> i && s.x===head.x && s.y===head.y)){
    end();
    return;
  }

  // eat
  if(head.x===food.x && head.y===food.y){
    score++;
    document.getElementById('score').textContent = score;
    snake.unshift(head);
    placeFood();
  }else{
    snake.pop();
    snake.unshift(head);
  }

  // draw food
  drawCell(food.x, food.y, '#ff3b3b');

  // draw snake
  snake.forEach((s,i)=> drawCell(s.x, s.y, i? '#00cccc':'#00e6e6'));
}

function end(){
  clearInterval(loop);
  alert('Game over! Score: ' + score);
}

function start(){
  clearInterval(loop);
  score = 0;
  snake = [{x:5,y:5}];
  dir = 'RIGHT';
  placeFood();
  document.getElementById('score').textContent = score;
  loop = setInterval(step, 110);
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
