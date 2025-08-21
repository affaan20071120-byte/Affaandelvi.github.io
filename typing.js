const el = document.getElementById('typing');
if(el){
  const texts = JSON.parse(el.getAttribute('data-text')||'[]');
  let i=0, j=0, forward=true;
  function tick(){
    if(!texts.length) return;
    const full = texts[i];
    el.textContent = forward ? full.slice(0, j++) : full.slice(0, j--);
    if(forward && j>full.length+10){ forward=false; }
    else if(!forward && j<0){ forward=true; i=(i+1)%texts.length; }
    setTimeout(tick, 70);
  }
  tick();
}
