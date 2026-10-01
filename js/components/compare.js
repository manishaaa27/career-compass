function renderCompare(){
  const list = COLLEGES.filter(g=>state.compareList.includes(g.id));
  document.getElementById('sec-compare').innerHTML = `
   <div class="pagehead"><h2>⚖️ College Comparison</h2><p>Select colleges from College Finder (checkbox) to compare them here. Up to 3 at a time.</p></div>
   ${list.length===0?'<div class="empty">No colleges selected yet. Go to College Finder and tick "compare" on up to 3 colleges.</div>':`
   <table><thead><tr><th></th>${list.map(g=>`<th>${g.name}</th>`).join('')}</tr></thead><tbody>
    <tr><td><b>Location</b></td>${list.map(g=>`<td>${g.location}</td>`).join('')}</tr>
    <tr><td><b>Fees</b></td>${list.map(g=>`<td>${g.fees}</td>`).join('')}</tr>
    <tr><td><b>Cutoff</b></td>${list.map(g=>`<td>${g.cutoff}</td>`).join('')}</tr>
    <tr><td><b>Placement</b></td>${list.map(g=>`<td>${g.placement}</td>`).join('')}</tr>
    <tr><td><b>Distance from you</b></td>${list.map(g=>{const[la,ln]=studentCoords(state.profile);return `<td>${haversine(la,ln,g.lat,g.lng)} km</td>`;}).join('')}</tr>
    <tr><td><b>Course</b></td>${list.map(g=>`<td>${COURSES.find(c=>c.id===g.course).name}</td>`).join('')}</tr>
   </tbody></table>
   <button class="btn ghost" style="margin-top:14px" onclick="clearCompare()">Clear comparison</button>`}`;
}

function clearCompare(){
  state.compareList = [];
  renderCompare();
}
