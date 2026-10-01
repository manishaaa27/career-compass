function overlapScore(a,b){
  const A=a.toLowerCase().split(/[,\s]+/).filter(Boolean);
  const B=b.toLowerCase();
  let sc=0; A.forEach(w=>{ if(w.length>2 && B.includes(w)) sc++; });
  return sc;
}
function recommendCareers(profile){
  return CAREERS.map(c=>{
    let score = overlapScore(profile.interests, c.interests.join(' ')) * 2
              + overlapScore(profile.skills, c.skills.join(' '))
              + (c.stream==="Any Stream"||c.stream===profile.stream ? 2:0);
    return {...c, score};
  }).sort((a,b)=>b.score-a.score);
}
