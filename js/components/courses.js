function renderCourses(filterCareer=""){
  const list = COURSES.filter(c=>!filterCareer || c.career.includes(filterCareer));
  document.getElementById('sec-courses').innerHTML = `
   <div class="pagehead"><h2>🎓 Course / Pathway Finder</h2><p>Find courses linked to a career.</p></div>
   <div class="toolbar"><div class="field"><label>Filter by career</label>
     <select onchange="renderCourses(this.value)"><option value="">All careers</option>
     ${CAREERS.map(c=>`<option value="${c.id}" ${filterCareer===c.id?'selected':''}>${c.name}</option>`).join('')}</select></div></div>
   <div class="grid cols-3">${list.map(c=>`
    <div class="card"><h3 style="font-size:15px">${c.name}</h3>
     <p class="meta">Duration: ${c.duration}</p>
     <p style="font-size:13px;margin:6px 0"><b>Eligibility:</b> ${c.eligibility}</p>
     <p style="font-size:13px"><b>Admission:</b> ${c.admission}</p>
     <div style="margin-top:8px">${c.career.map(id=>`<span class="tag">${CAREERS.find(x=>x.id===id).name}</span>`).join('')}</div>
    </div>`).join('') || '<div class="empty">No courses found</div>'}</div>`;
}
