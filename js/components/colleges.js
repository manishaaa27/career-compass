function renderColleges(f={}){
  f = {course:f.course||"", location:f.location||"", state:f.state||""};
  let list = COLLEGES.filter(g=>
    (!f.course || g.course===f.course) && (!f.state || g.state===f.state) &&
    (!f.location || g.location.toLowerCase().includes(f.location.toLowerCase())));
  document.getElementById('sec-colleges').innerHTML = `
   <div class="pagehead"><h2>🏫 College Finder</h2><p>${COLLEGES.length} colleges across India — filter by course, state or city. Fees/cutoffs are approximate; verify officially.</p></div>
   <div class="toolbar">
     <div class="field"><label>Course</label><select id="cf-course" onchange="applyCollegeFilter()"><option value="">All</option>
       ${COURSES.map(c=>`<option value="${c.id}" ${f.course===c.id?'selected':''}>${c.name}</option>`).join('')}</select></div>
     <div class="field"><label>State / UT</label><select id="cf-state" onchange="applyCollegeFilter()"><option value="">All India</option>
       ${STATES.map(s=>`<option ${f.state===s.name?'selected':''}>${s.name}</option>`).join('')}</select></div>
     <div class="field"><label>City</label><input id="cf-location" placeholder="City" value="${f.location}" oninput="applyCollegeFilter()"></div>
   </div>
   <div class="grid cols-3">${list.map(g=>`
    <div class="card rel"><label style="position:absolute;top:12px;right:12px;font-size:11px"><input type="checkbox" onchange="toggleCompare('${g.id}')" ${state.compareList.includes(g.id)?'checked':''}> compare</label>
     <h3 style="font-size:15px;padding-right:70px">${g.name}</h3><div class="meta">📍 ${g.location}, ${g.state} · ${COURSES.find(c=>c.id===g.course).name}</div>
     <p style="font-size:13px;margin-top:6px"><b>Fees:</b> ${g.fees} &nbsp; <b>Cutoff:</b> ${g.cutoff}</p>
     <p style="font-size:13px"><b>Placement:</b> ${g.placement}</p>
    </div>`).join('') || '<div class="empty">No colleges match your filters</div>'}</div>`;
}
function applyCollegeFilter(){ renderColleges({course:val('cf-course'), state:val('cf-state'), location:val('cf-location')}); }
function toggleCompare(id){
  if(state.compareList.includes(id)) state.compareList=state.compareList.filter(x=>x!==id);
  else if(state.compareList.length<3) state.compareList.push(id);
  applyCollegeFilter();
}
