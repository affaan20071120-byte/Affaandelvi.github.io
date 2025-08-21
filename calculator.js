(function(){
const keys=['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'];
const wrap=document.getElementById('calcKeys'); const screen=document.getElementById('calcDisplay');
if(!wrap) return;
keys.forEach(k=>{
  const b=document.createElement('button'); b.textContent=k; wrap.appendChild(b);
  b.addEventListener('click',()=> press(k));
});
function press(k){
  if(k==='C'){ screen.value=''; return; }
  if(k==='='){
    try{
      const safe = screen.value.replace(/[^0-9+\-*/%.()]/g,'');
      screen.value = String(Function('return ('+safe+')')());
    }catch{ screen.value='Err'; }
    return;
  }
  screen.value += k;
}
})();