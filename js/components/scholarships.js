function renderScholarships(q=""){
  const list = SCHOLARSHIPS.filter(s=>s.name.toLowerCase().includes(q.toLowerCase()));
  document.getElementById('sec-scholarships').innerHTML = `
   <div class="pagehead"><h2>🎓 Scholarship Finder</h2><p>Search and explore scholarships you may be eligible for.</p></div>
   <div class="toolbar"><div class="field" style="flex:1"><label>Search</label><input value="${q}" oninput="renderScholarships(this.value)" placeholder="Search scholarships..."></div></div>
   <div class="grid cols-2">${list.map(s=>`
    <div class="card"><h3 style="font-size:15px">${s.name}</h3>
     <p style="font-size:13px;margin:6px 0"><b>Eligibility:</b> ${s.eligibility}</p>
     <p style="font-size:13px"><b>Documents:</b> ${s.documents}</p>
     <p style="font-size:13px"><b>Benefit:</b> ${s.benefit}</p>
     <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
       ${urgencyBadge(s.deadline)}<span class="meta">${s.link}</span></div>
    </div>`).join('') || '<div class="empty">No scholarships found</div>'}</div>`;
}
