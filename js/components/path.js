function renderPath(focusId){
  const focus = CAREERS.find(c=>c.id===(focusId||state.currentCareerId)) || CAREERS[0];
  const course = COURSES.find(c=>c.career.includes(focus.id));
  document.getElementById('sec-path').innerHTML = `
   <div class="pagehead"><h2>🛣️ Career Path Explorer</h2><p>See the complete route from stream to career, and alternative paths.</p></div>
   <div class="toolbar"><div class="field"><label>Choose a career</label>
    <select onchange="renderPath(this.value)">${CAREERS.map(c=>`<option value="${c.id}" ${c.id===focus.id?'selected':''}>${c.name}</option>`).join('')}</select></div></div>
   <div class="card">
    <div class="pathway">
      <span class="node">${focus.stream}</span><span class="arrow">→</span>
      <span class="node">${focus.field}</span><span class="arrow">→</span>
      <span class="node">${course?course.name:'Related Course'}</span><span class="arrow">→</span>
      <span class="node">Specialization in ${focus.field}</span><span class="arrow">→</span>
      <span class="node" style="background:var(--gold);color:var(--ink)">${focus.name}</span>
    </div>
   </div>
   <h3 style="margin:20px 0 10px">Alternative Pathways</h3>
   <div class="grid cols-2">
    ${CAREERS.filter(c=>c.field===focus.field && c.id!==focus.id).map(c=>`
     <div class="card"><div class="pathway" style="margin:0">
       <span class="node" style="background:var(--teal)">${c.stream}</span><span class="arrow">→</span>
       <span class="node" style="background:var(--teal)">${c.field}</span><span class="arrow">→</span>
       <span class="node" style="background:var(--teal)">${c.name}</span>
     </div></div>`).join('') || '<div class="empty">No close alternative paths in this field — try another career above.</div>'}
   </div>`;
}
