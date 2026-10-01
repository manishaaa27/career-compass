function renderNearby(){
  const [la,ln]=studentCoords(state.profile);
  const list = COLLEGES.map(g=>({...g, dist:haversine(la,ln,g.lat,g.lng)})).sort((a,b)=>a.dist-b.dist).slice(0,6);
  document.getElementById('sec-nearby').innerHTML = `
   <div class="pagehead"><h2>📍 Suitable / Nearby Colleges</h2><p>Based on your preferred location: <b>${state.profile.location}</b></p></div>
   <div class="grid cols-3">${list.map(g=>`
    <div class="card"><h3 style="font-size:15px">${g.name}</h3><div class="meta">📍 ${g.location} · ${g.dist} km away</div>
     <p style="font-size:13px;margin-top:6px"><b>Course:</b> ${COURSES.find(c=>c.id===g.course).name}</p>
     <p style="font-size:13px"><b>Fees:</b> ${g.fees} &nbsp; <b>Placement:</b> ${g.placement}</p>
    </div>`).join('')}</div>`;
}
