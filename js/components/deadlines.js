function renderDeadlines(){
  const items=[...EXAMS.map(e=>({name:e.name,type:'Entrance Exam',deadline:e.deadline})),
    ...SCHOLARSHIPS.map(s=>({name:s.name,type:'Scholarship Application',deadline:s.deadline})),
    ...INTERNSHIPS.map(i=>({name:i.title,type:'Internship Application',deadline:i.deadline}))]
    .sort((a,b)=>new Date(a.deadline)-new Date(b.deadline));
  document.getElementById('sec-deadlines').innerHTML = `
   <div class="pagehead"><h2>⏰ Upcoming Deadlines</h2><p>All entrance-exam and application deadlines, most urgent first.</p></div>
   <table><thead><tr><th>Name</th><th>Type</th><th>Date</th><th>Status</th></tr></thead><tbody>
   ${items.map(d=>`<tr><td><b>${d.name}</b></td><td>${d.type}</td><td>${d.deadline}</td><td>${urgencyBadge(d.deadline)}</td></tr>`).join('')}
   </tbody></table>`;
}
