const display = document.getElementById('calcDisplay');
const keys = document.getElementById('calcKeys');
if (display && keys) {
  const layout = ['7','8','9','/','4','5','6','*','1','2','3','-','C','0','.','+','←','='];
  layout.forEach(ch=>{
    const b = document.createElement('button'); b.textContent = ch;
    b.addEventListener('click', ()=> press(ch));
    keys.appendChild(b);
  });
  function press(ch){
    if(ch==='C'){ display.value=''; return; }
    if(ch==='←'){ display.value = display.value.slice(0,-1); return; }
    if(ch==='='){ try{ display.value = String(Function('return '+(display.value||'0'))()); } catch(e){ display.value='Error'; } return; }
    display.value += ch;
  }
}