function renderExplorer(focusId, query=""){
  const list = CAREERS.filter(c=>c.name.toLowerCase().includes(query.toLowerCase()));
  const focus = CAREERS.find(c=>c.id===(focusId||state.currentCareerId)) || CAREERS[0];
  document.getElementById('sec-explorer').innerHTML = `
   <div class="pagehead"><h2>🔍 Career Explorer</h2><p>Search and explore detailed career information.</p></div>
   <div class="toolbar"><div class="field" style="flex:1"><label>Search careers</label>
     <input id="explorer-search" placeholder="e.g. Designer, Engineer..." value="${query}" oninput="renderExplorer(null,this.value)"></div></div>
   <div class="grid cols-2">
     <div>
      ${list.map(c=>`<div class="card" style="margin-bottom:10px;cursor:pointer;${c.id===focus.id?'border-color:var(--gold)':''}" onclick="renderExplorer('${c.id}')">
        <h3 style="font-size:15px">${c.name}</h3><div class="meta">${c.field}</div></div>`).join('') || '<div class="empty">No careers found</div>'}
     </div>
     <div class="card">
      <h3>${focus.name}</h3><div class="meta">${focus.field} · Stream: ${focus.stream}</div>
      <p style="margin:10px 0;font-size:13.5px">${focus.desc}</p>
      <b style="font-size:13px">Required Skills</b><div style="margin:6px 0 10px">${focus.skills.map(s=>`<span class="tag">${s}</span>`).join('')}</div>
      <b style="font-size:13px">Related Courses</b><div style="margin:6px 0 10px">${focus.courses.map(s=>`<span class="tag teal">${s}</span>`).join('')}</div>
      <b style="font-size:13px">Career Outcomes</b><p style="font-size:13.5px;margin-top:4px">${focus.outcomes}</p>
     </div>
   </div>`;
}
