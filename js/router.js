function go(route){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById('sec-'+route).classList.add('active');
  document.querySelectorAll('#navlist button').forEach(b=>b.classList.toggle('active', b.dataset.r===route));
  window.scrollTo(0,0);
}


function buildNav(renderSection){
  const navlist=document.getElementById('navlist');
NAV.forEach(([r,label])=>{
  const b=document.createElement('button'); b.textContent=label; b.dataset.r=r;
  b.onclick=()=>{go(r); renderSection(r);};
  navlist.appendChild(b);
});
  const main=document.getElementById('main');
  NAV.forEach(([r])=>{ const d=document.createElement('div'); d.className='section'; d.id='sec-'+r; main.appendChild(d); });
}
