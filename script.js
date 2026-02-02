 const column = document.getElementById('heartColumn');
    for(let i=0;i<45;i++){
      const h=document.createElement('div');
      h.className='bg-heart';
      h.textContent='❤';
      h.style.left=Math.random()*100+'%';
      h.style.animationDuration=8+Math.random()*10+'s';
      h.style.fontSize=12+Math.random()*22+'px';
      column.appendChild(h);
    }

    // main logic (DOM is ready because script is at the end)
    let taps=0;
    let holdTimer=null;
    const heart=document.getElementById('heart');
    const secret=document.getElementById('secret');
    const task=document.getElementById('task');

    heart.addEventListener('touchstart',()=>{
      holdTimer=setTimeout(()=>{
        document.getElementById('mood').textContent='Stay like this…';
      },600);
    });
    heart.addEventListener('touchend',()=>clearTimeout(holdTimer));

    heart.onclick=(e)=>{
      if(Math.random()<0.25 && taps<6){
        heart.style.transform=`translate(${(Math.random()*60-30)}px, ${(Math.random()*40-20)}px)`;
        document.getElementById('tease').textContent='ekadam soft madhe hm hm 😌😉😉';
        setTimeout(()=>heart.style.transform='',300);
        return;
      }
      clearTimeout(holdTimer);
      clearTimeout(holdTimer);
      const x=e.touches?e.touches[0].clientX:e.clientX;
      const y=e.touches?e.touches[0].clientY:e.clientY;
      taps++;
     
      burst(x,y);
      if(taps>=7){
        document.getElementById('tease').textContent='Hmm… zal zal😌😌 halu kryc asty g jorat kele ki tras hoto🤭 feel ghet ghet 😁😁';
        secret.classList.remove('locked');
        task.textContent='Ata laju nko hete yee pore ani mala kiss deee 💗';
      }else{
        task.textContent=`ty maza pure heart vr ${7-taps} vela click kr.`;
        document.getElementById('mood').textContent='Mala feel hoty kasa tr 🤭🤭.';
      }
    }

    function burst(x,y){
      for(let i=0;i<14;i++){
        const s=document.createElement('div');
        s.className='spark';
        s.textContent=Math.random()>.5?'❤':'✨';
        const a=Math.random()*2*Math.PI;
        const d=60+Math.random()*80;
        s.style.left=x+'px';
        s.style.top=y+'px';
        s.style.setProperty('--x',Math.cos(a)*d+'px');
        s.style.setProperty('--y',Math.sin(a)*d+'px');
        document.body.appendChild(s);
        setTimeout(()=>s.remove(),1100);
      }
    }

    function promise(ok){
      const block=document.getElementById('promiseBlock');
      if(ok){
        block.classList.remove('locked');
      }else{
        alert('Guuu khaaaa lavdeee mgg  😁😁');
      }
    }

    function resetAll(){
      taps=0;
      secret.classList.add('locked');
      task.textContent='Tee maza rudhy desty n pure wala tyc vr dab ugc chavt pana nko kruu kute pn nko dabu 🤭🤭';
      document.getElementById('mood').textContent='halu haluu…';
    }