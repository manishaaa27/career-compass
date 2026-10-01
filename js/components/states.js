function renderStates(q=""){
  const list=STATES.filter(s=>(s.name+s.capital+s.institutes).toLowerCase().includes(q.toLowerCase()));
  document.getElementById('sec-states').innerHTML = `
   <div class="pagehead"><h2>🗺️ States & Union Territories</h2><p>Education snapshot for all 28 states and 8 UTs of India — entrance exams, top institutes and career strengths.</p></div>
   <div class="toolbar"><div class="field" style="flex:1"><label>Search state, city or institute</label><input value="${q}" oninput="renderStates(this.value)" placeholder="e.g. Kerala, IIT, Kolkata"></div></div>
   <div class="grid cols-3">${list.map(s=>`
    <div class="card"><h3 style="font-size:15px">${s.name}</h3><div class="meta">Capital: ${s.capital}</div>
     <p style="font-size:13px"><b>Main entrance:</b> ${s.exam}</p>
     <p style="font-size:13px;margin-top:4px"><b>Top institutes:</b> ${s.institutes}</p>
     <p style="font-size:13px;margin-top:4px"><b>Career strengths:</b> ${s.strengths}</p>
     <button class="btn small ghost" style="margin-top:10px" onclick="viewStateColleges('${s.name.replace(/'/g,"\\'")}')">Colleges (${COLLEGES.filter(g=>g.state===s.name).length})</button></div>`).join('') || '<div class="empty">No match</div>'}</div>`;
}
function viewStateColleges(n){ go('colleges'); renderColleges({state:n}); }
