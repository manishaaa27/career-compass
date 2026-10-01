/* Central, shared application state.
   Every component reads/writes through this single `state` object,
   so a change made in one file (e.g. Profile) is instantly visible
   to every other file (e.g. Recommendations, Skill Gap, Nearby). */

let profile = JSON.parse(localStorage.getItem('cc_profile')||'null') || {
 name:"", marks:"", stream:"Science (PCM)", subjects:"Physics, Chemistry, Math",
 interests:"Technology, Problem Solving", skills:"Programming, Math",
 budget:"₹2,00,000/yr", location:"Hyderabad"
};

const state = {
  profile,
  compareList: [],
  currentCareerId: "swe"
};

function saveProfile(){
  localStorage.setItem('cc_profile', JSON.stringify(state.profile));
}
