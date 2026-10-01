function renderInternships(f={}){
  f={skill:f.skill||"", location:f.location||""};
  const list = INTERNSHIPS.filter(i=>
    (!f.skill || i.skills.some(s=>s.toLowerCase().includes(f.skill.toLowerCase()))) &&
    (!f.location || i.location.toLowerCase().includes(f.location.toLowerCase())));
  document.getElementById('sec-internships').innerHTML = `
   <div class="pagehead"><h2>💼 Internship Finder</h2><p>Discover internships matching your skills, interests and location.</p></div>
   <div class="toolbar">
    <div class="field"><label>Skill</label><input id="if-skill" value="${f.skill}" oninput="applyInternFilter()" placeholder="e.g. Programming"></div>
    <div class="field"><label>Location</label><input id="if-location" value="${f.location}" oninput="applyInternFilter()" placeholder="City or Remote"></div>
    <button class="btn ghost small" onclick="useMyProfileForInternships()">Use my profile</button>
   </div>
   <div class="grid cols-3">${list.map(i=>`
    <div class="card"><h3 style="font-size:15px">${i.title}</h3><div class="meta">📍 ${i.location} · ${i.duration}</div>
     <div style="margin:8px 0">${i.skills.map(s=>`<span class="tag">${s}</span>`).join('')}</div>
     <p style="font-size:13px"><b>Eligibility:</b> ${i.eligibility}</p>
     <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">${urgencyBadge(i.deadline)}<span class="meta">${i.link}</span></div>
    </div>`).join('') || '<div class="empty">No internships match your filters</div>'}</div>`;
}
function applyInternFilter(){ renderInternships({skill:val('if-skill'), location:val('if-location')}); }



function useMyProfileForInternships(){
  document.getElementById('if-skill').value = state.profile.skills.split(',')[0].trim();
  document.getElementById('if-location').value = state.profile.location;
  applyInternFilter();
}
