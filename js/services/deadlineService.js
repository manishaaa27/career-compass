function daysUntil(d){ return Math.ceil((new Date(d)-new Date())/86400000); }
function urgencyBadge(d){
  const days=daysUntil(d);
  if(days<15) return `<span class="badge urgent">${days}d left</span>`;
  if(days<40) return `<span class="badge soon">${days}d left</span>`;
  return `<span class="badge ok">${days}d left</span>`;
}
