function renderSkillGap(focusId){
  const focus = CAREERS.find(c=>c.id===(focusId||state.currentCareerId)) || CAREERS[0];
  const mySkills = state.profile.skills.toLowerCase().split(',').map(s=>s.trim());
  const rows = focus.skills.map(s=>{
    const have = mySkills.some(m=>s.toLowerCase().includes(m)||m.includes(s.toLowerCase()));
    const level = have? 75+Math.floor(Math.random()*20) : 15+Math.floor(Math.random()*25);
    return {s,have,level};
  });
  document.getElementById('sec-skillgap').innerHTML = `
   <div class="pagehead"><h2>📊 Skill Gap Analyzer</h2><p>Comparing your current skills against requirements for a target career.</p></div>
   <div class="toolbar"><div class="field"><label>Target career</label>
    <select onchange="renderSkillGap(this.value)">${CAREERS.map(c=>`<option value="${c.id}" ${c.id===focus.id?'selected':''}>${c.name}</option>`).join('')}</select></div></div>
   <div class="card">
    ${rows.map(r=>`<div style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;font-size:13.5px"><b>${r.s}</b><span>${r.have?'✅ Strong':'⚠️ Needs improvement'} · ${r.level}%</span></div>
     <div class="bar-track"><div class="bar-fill ${r.have?'':'gap'}" style="width:${r.level}%"></div></div></div>`).join('')}
   </div>
   <div class="card" style="margin-top:14px"><b>Focus areas:</b> ${rows.filter(r=>!r.have).map(r=>r.s).join(', ') || 'Great! No major gaps found.'}</div>`;
}
