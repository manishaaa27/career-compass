function renderProfile(){
  document.getElementById('sec-profile').innerHTML = `
   <div class="pagehead"><h2>👤 Student Profile</h2><p>This information powers recommendations across the whole platform.</p></div>
   <div class="card" style="max-width:640px">
    <div class="grid cols-2">
      <div class="field"><label>Full Name</label><input id="p-name" value="${state.profile.name}"></div>
      <div class="field"><label>Marks (Class 12 %)</label><input id="p-marks" value="${state.profile.marks}"></div>
      <div class="field"><label>Stream</label><select id="p-stream">
        ${["Science (PCM)","Science (PCB)","Commerce","Arts/Humanities","Any Stream"].map(s=>`<option ${state.profile.stream===s?'selected':''}>${s}</option>`).join('')}
      </select></div>
      <div class="field"><label>Preferred Location</label><input id="p-location" value="${state.profile.location}"></div>
      <div class="field" style="grid-column:1/-1"><label>Subjects</label><input id="p-subjects" value="${state.profile.subjects}"></div>
      <div class="field" style="grid-column:1/-1"><label>Interests (comma separated)</label><input id="p-interests" value="${state.profile.interests}"></div>
      <div class="field" style="grid-column:1/-1"><label>Skills (comma separated)</label><input id="p-skills" value="${state.profile.skills}"></div>
      <div class="field" style="grid-column:1/-1"><label>Budget (annual)</label><input id="p-budget" value="${state.profile.budget}"></div>
    </div>
    <button class="btn gold" onclick="saveProfileForm()">Save Profile</button>
    <span id="p-saved" style="margin-left:10px;color:var(--teal);font-size:13px;display:none">✓ Saved</span>
   </div>`;
}

function saveProfileForm(){
  state.profile = {
    name:val('p-name'), marks:val('p-marks'), stream:val('p-stream'), location:val('p-location'),
    subjects:val('p-subjects'), interests:val('p-interests'), skills:val('p-skills'), budget:val('p-budget')
  };
  saveProfile();
  document.getElementById('p-saved').style.display='inline';
}
