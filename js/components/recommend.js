function renderRecommend(){
  const ranked = recommendCareers(state.profile);
  const top = ranked.slice(0,3), alt = ranked.slice(3,7);
  document.getElementById('sec-recommend').innerHTML = `
   <div class="pagehead"><h2>🎯 Career Recommendation</h2><p>Based on your profile: interests in <b>${state.profile.interests}</b>, skills in <b>${state.profile.skills}</b>, stream <b>${state.profile.stream}</b>.</p></div>
   <h3 style="margin-bottom:10px">Top Matches</h3>
   <div class="grid cols-3">${top.map(c=>`
    <div class="card">
      <h3>${c.name}</h3><div class="meta">${c.field}</div>
      <p style="font-size:13.5px;margin:8px 0">${c.desc}</p>
      <p style="font-size:12.5px;color:var(--teal);font-weight:600">Why it fits: matches ${c.score} points of your interests, skills & stream.</p>
      <button class="btn small ghost" style="margin-top:10px" onclick="viewCareer('${c.id}')">View details</button>
    </div>`).join('')}</div>
   <h3 style="margin:22px 0 10px">Alternative Options</h3>
   <div class="grid cols-4">${alt.map(c=>`
    <div class="card"><h3 style="font-size:14.5px">${c.name}</h3><div class="meta">${c.field}</div>
    <button class="btn small ghost" style="margin-top:8px" onclick="viewCareer('${c.id}')">Explore</button></div>`).join('')}</div>`;
}
function viewCareer(id){ state.currentCareerId=id; go('explorer'); renderExplorer(id); }
