function renderHome(){
  const top3=recommendCareers(state.profile).slice(0,3);
  const upDeadlines=[...EXAMS.map(e=>({...e,type:'Exam'})), ...SCHOLARSHIPS.map(s=>({...s,type:'Scholarship'})), ...INTERNSHIPS.map(i=>({...i,type:'Internship'}))]
    .sort((a,b)=>new Date(a.deadline)-new Date(b.deadline)).slice(0,4);
  document.getElementById('sec-home').innerHTML = `
   <div class="hero"><h2>Welcome back${state.profile.name? ', '+state.profile.name:''} 👋</h2>
   <p>Your personalized dashboard — from stream selection to your first internship, everything is connected to your profile.</p>
   <button class="btn gold" onclick="go('profile');renderSection('profile')" style="margin-top:14px">Update your profile</button></div>
   <div class="stat-row">
     <div class="stat"><b>${top3.length}</b><span>Top career matches</span></div>
     <div class="stat"><b>${COLLEGES.length}</b><span>Colleges indexed</span></div>
     <div class="stat"><b>${SCHOLARSHIPS.length}</b><span>Scholarships available</span></div>
     <div class="stat"><b>${INTERNSHIPS.length}</b><span>Internships open</span></div>
     <div class="stat"><b>${STATES.length}</b><span>States & UTs covered</span></div>
   </div>
   <div class="grid cols-2">
     <div class="card dash-widget"><h3>🎯 Recommended Careers <a onclick="go('recommend');renderSection('recommend')">View all</a></h3>
       ${top3.map(c=>`<div style="margin:10px 0"><b>${c.name}</b><div class="meta">${c.field}</div></div>`).join('')}</div>
     <div class="card dash-widget"><h3>🎓 Recommended Courses <a onclick="go('courses');renderSection('courses')">View all</a></h3>
       ${COURSES.filter(c=>c.career.includes(top3[0].id)).map(c=>`<div style="margin:10px 0"><b>${c.name}</b><div class="meta">${c.duration}</div></div>`).join('')}</div>
     <div class="card dash-widget"><h3>🏫 Suitable Colleges <a onclick="go('nearby');renderSection('nearby')">View all</a></h3>
       ${COLLEGES.filter(g=>top3.some(c=>COURSES.find(cc=>cc.id===g.course)?.career.includes(c.id))).slice(0,3).map(g=>`<div style="margin:10px 0"><b>${g.name}</b><div class="meta">${g.location} · ${g.fees}</div></div>`).join('')}</div>
     <div class="card dash-widget"><h3>⏰ Upcoming Deadlines <a onclick="go('deadlines');renderSection('deadlines')">View all</a></h3>
       ${upDeadlines.map(d=>`<div style="display:flex;justify-content:space-between;margin:8px 0"><span><b>${d.name||d.title}</b> <span class="meta">(${d.type})</span></span>${urgencyBadge(d.deadline)}</div>`).join('')}</div>
     <div class="card dash-widget"><h3>📊 Skill Gaps <a onclick="go('skillgap');renderSection('skillgap')">Analyze</a></h3>
       <p class="meta">See how your current skills compare to ${top3[0].name}'s requirements.</p></div>
     <div class="card dash-widget"><h3>🤖 AI Career Assistant <a onclick="go('assistant');renderSection('assistant')">Chat now</a></h3>
       <p class="meta">Ask anything about careers, courses, exams or colleges — personalized to your profile.</p></div>
   </div>`;
}
