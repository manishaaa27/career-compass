function renderExams(filterCourse=""){
  const list = EXAMS.filter(e=>!filterCourse || e.courses.includes(filterCourse));
  document.getElementById('sec-exams').innerHTML = `
   <div class="pagehead"><h2>📝 Entrance Exam Finder</h2><p>Exams relevant to your selected courses & careers.</p></div>
   <div class="toolbar"><div class="field"><label>Filter by course</label>
     <select onchange="renderExams(this.value)"><option value="">All courses</option>
     ${COURSES.map(c=>`<option value="${c.id}" ${filterCourse===c.id?'selected':''}>${c.name}</option>`).join('')}</select></div></div>
   <table><thead><tr><th>Exam</th><th>Eligibility</th><th>Info</th><th>Deadline</th></tr></thead><tbody>
   ${list.map(e=>`<tr><td><b>${e.name}</b></td><td style="font-size:12.5px">${e.eligibility}</td><td style="font-size:12.5px">${e.info}</td><td>${urgencyBadge(e.deadline)}</td></tr>`).join('')}
   </tbody></table>`;
}
