const canvas=document.getElementById('stars');const ctx=canvas.getContext('2d');canvas.width=window.innerWidth;canvas.height=window.innerHeight;
let stars=[];for(let i=0;i<200;i++){stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2});}
function drawStars(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle="white";for(let s of stars){ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();s.y+=0.2;if(s.y>canvas.height){s.y=0;s.x=Math.random()*canvas.width;}}requestAnimationFrame(drawStars);}drawStars();
function copyDiscord(){navigator.clipboard.writeText("DragonGaming11");alert("Discord ID copied: DragonGaming11");}
