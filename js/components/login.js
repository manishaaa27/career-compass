let authMode='login';
function showLogin(){ document.getElementById('login-screen').style.display='flex'; renderLogin(); }
function setAuthMode(m){ authMode=m; renderLogin(); }
function setAuthMsg(t,ok){ const e=document.getElementById('a-msg'); e.textContent=t; e.className='auth-msg '+(ok?'ok':'err'); }
function renderLogin(){
  const su=authMode==='signup';
  document.getElementById('login-screen').innerHTML=`
   <div class="login-card">
    <div class="brand" style="border:none;padding:0 0 12px"><div class="mark">🧭</div><h1 style="color:var(--ink)">${APP_NAME}</h1></div>
    <h2 style="font-size:22px">${su?'Create your account':'Welcome back'}</h2>
    <p class="meta" style="margin:4px 0 16px">${su?'Sign up to get personalised career guidance across India.':'Log in to continue.'}</p>
    ${su?'<div class="field"><label>Full name</label><input id="a-name" autocomplete="name"></div>':''}
    <div class="field"><label>Email</label><input id="a-email" type="email" autocomplete="email"></div>
    <div class="field"><label>Password</label><input id="a-pass" type="password" onkeydown="if(event.key==='Enter')submitAuth()"></div>
    <div id="a-msg" class="auth-msg"></div>
    <button id="a-btn" class="btn gold" style="width:100%" onclick="submitAuth()">${su?'Sign up':'Log in'}</button>
    <p class="meta" style="text-align:center;margin-top:14px">${su?'Already registered?':'New here?'}
      <a href="#" onclick="setAuthMode('${su?'login':'signup'}');return false" style="color:var(--teal);font-weight:600">${su?'Log in':'Create an account'}</a></p>
   </div>`;
}
async function submitAuth(){
  const email=val('a-email').toLowerCase(), pass=document.getElementById('a-pass').value, btn=document.getElementById('a-btn');
  btn.disabled=true; btn.textContent='Please wait…';
  const r = authMode==='signup' ? await Auth.signup(val('a-name'),email,pass) : await Auth.login(email,pass);
  if(!r.ok){ setAuthMsg(r.error,false); btn.disabled=false; btn.textContent=authMode==='signup'?'Sign up':'Log in'; return; }
  setAuthMsg('✅ Logged in successfully!',true);
  setTimeout(()=>{ document.getElementById('login-screen').style.display='none'; startApp(); }, 700);
}
function logout(){ Auth.logout(); location.reload(); }
