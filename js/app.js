/* ============================================================
   app.js — the single entry point for the whole application.

   What this file does:
   1. Imports every "component" (one file per feature/page).
   2. Defines renderSection(), which decides which component
      to draw based on which nav item was clicked.
   3. Builds the sidebar navigation.
   4. Exposes the functions that are called from inline
      onclick="..." attributes in the generated HTML (this is
      required because ES modules are NOT global by default —
      attaching them to `window` keeps the original behaviour
      of the project exactly the same).
   5. Renders the Home page on first load.
   ============================================================ */

/* Decides which section to draw — same behaviour as the original single-file version */
function renderSection(r){
  if(r==="home") renderHome();
  if(r==="profile") renderProfile();
  if(r==="recommend") renderRecommend();
  if(r==="explorer") renderExplorer();
  if(r==="courses") renderCourses();
  if(r==="exams") renderExams();
  if(r==="colleges") renderColleges();
  if(r==="compare") renderCompare();
  if(r==="path") renderPath();
  if(r==="nearby") renderNearby();
  if(r==="deadlines") renderDeadlines();
  if(r==="assistant") renderAssistant();
  if(r==="skillgap") renderSkillGap();
  if(r==="scholarships") renderScholarships();
  if(r==="internships") renderInternships();
  if(r==="states") renderStates();
}

/* Expose everything the inline HTML (onclick="", onchange="", oninput="")
   needs to call, since those attributes can only see window-level globals. */
window.go = go;
window.renderSection = renderSection;
window.saveProfileForm = saveProfileForm;
window.viewCareer = viewCareer;
window.renderExplorer = renderExplorer;
window.renderCourses = renderCourses;
window.renderExams = renderExams;
window.applyCollegeFilter = applyCollegeFilter;
window.toggleCompare = toggleCompare;
window.renderCompare = renderCompare;
window.clearCompare = clearCompare;
window.renderPath = renderPath;
window.sendChat = sendChat;
window.renderSkillGap = renderSkillGap;
window.renderScholarships = renderScholarships;
window.applyInternFilter = applyInternFilter;
window.useMyProfileForInternships = useMyProfileForInternships;
window.state = state;
window.renderStates = renderStates;

/* ---------------- INIT (login gate) ---------------- */
function startApp(){
  const u=Auth.current();
  const foot=document.querySelector('.sidebar-foot');
  foot.innerHTML='<div id="who" style="margin-bottom:8px;word-break:break-all"></div><button class="btn ghost small" style="color:#EFEAE0;border-color:rgba(255,255,255,.3)" onclick="logout()">Log out</button>';
  document.getElementById('who').textContent='Signed in: '+u.email;
  if(!state.profile.name){ state.profile.name=u.name; }
  if(!document.getElementById('navlist').children.length) buildNav(renderSection);
  go('home'); renderSection('home');
}
if(Auth.current()) startApp(); else showLogin();
