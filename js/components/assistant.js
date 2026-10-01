function renderAssistant(){
  document.getElementById('sec-assistant').innerHTML = `
   <div class="pagehead"><h2>🤖 AI Career Assistant</h2><p>Ask about careers, courses, exams, colleges, skills or pathways — personalized to your profile.</p></div>
   <div class="chat-box">
    <div class="chat-msgs" id="chat-msgs">
      <div class="msg bot">Hi${state.profile.name?' '+state.profile.name:''}! I'm your Career Assistant. I know you're into <b>${state.profile.interests}</b> with skills in <b>${state.profile.skills}</b>. Ask me things like "what career suits me?" or "exams for MBBS".</div>
    </div>
    <div class="chat-input"><input id="chat-in" placeholder="Type your question..." onkeydown="if(event.key==='Enter')sendChat()"><button class="btn gold" onclick="sendChat()">Send</button></div>
   </div>`;
}
function sendChat(){
  const inp=document.getElementById('chat-in'); const q=inp.value.trim(); if(!q) return;
  const msgs=document.getElementById('chat-msgs');
  msgs.innerHTML += `<div class="msg user">${q}</div>`;
  msgs.innerHTML += `<div class="msg bot">${answerChat(q)}</div>`;
  inp.value=''; msgs.scrollTop=msgs.scrollHeight;
}
function answerChat(q){
  const ql=q.toLowerCase();
  if(ql.includes('suit')||ql.includes('recommend')||ql.includes('best career')){
    const top=recommendCareers(state.profile)[0];
    return `Based on your profile, <b>${top.name}</b> looks like a strong fit — it matches your interests in ${state.profile.interests} and your ${state.profile.stream} stream. Check the Career Recommendation tab for more options.`;
  }
  for(const c of CAREERS){ if(ql.includes(c.name.toLowerCase().split(' ')[0].toLowerCase())){
    return `${c.name}: ${c.desc} Typical outcomes: ${c.outcomes}. Key skills needed: ${c.skills.join(', ')}.`;
  }}
  for(const e of EXAMS){ if(ql.includes(e.name.toLowerCase())){
    return `${e.name} — Eligibility: ${e.eligibility}. ${e.info} Deadline: ${e.deadline}.`;
  }}
  if(ql.includes('college')) return `I can help you find colleges — try the College Finder tab and filter by course, location or fees. Based on your location (${state.profile.location}), check Nearby Colleges too.`;
  if(ql.includes('skill')) return `Head to the Skill Gap Analyzer — pick a target career and I'll show exactly which of your current skills (${state.profile.skills}) match, and what's missing.`;
  if(ql.includes('scholarship')) return `There are ${SCHOLARSHIPS.length} scholarships listed in the Scholarships tab, including merit and need-based options — most need income and marksheet documents.`;
  if(ql.includes('internship')) return `Check the Internships tab — you can filter by your skills (${state.profile.skills}) and preferred location (${state.profile.location}).`;
  return `Good question! I'd suggest exploring the Career Explorer or Career Path tabs for details on that. You can also update your profile to get more personalized answers.`;
}
