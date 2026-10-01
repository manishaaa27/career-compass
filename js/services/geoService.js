function haversine(lat1,lng1,lat2,lng2){
  const R=6371, dLat=(lat2-lat1)*Math.PI/180, dLng=(lng2-lng1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return Math.round(R*2*Math.asin(Math.sqrt(a)));
}
/* Works for ANY city or state present in the college data (plus common aliases). */
function studentCoords(profile){
  const key=(profile.location||'').toLowerCase().trim().replace('bangalore','bengaluru');
  if(key){
    const byCity=COLLEGES.find(g=>g.location.toLowerCase().includes(key)||key.includes(g.location.toLowerCase()));
    if(byCity) return [byCity.lat,byCity.lng];
    const byState=COLLEGES.find(g=>g.state.toLowerCase()===key||key.includes(g.state.toLowerCase()));
    if(byState) return [byState.lat,byState.lng];
  }
  return [17.38,78.48];
}
