/* Client-side demo auth (accounts live in this browser's localStorage). */
const Auth = {
  users(){ try{return JSON.parse(localStorage.getItem('cc_users')||'{}');}catch(e){return {};} },
  current(){ try{return JSON.parse(localStorage.getItem('cc_session')||'null');}catch(e){return null;} },
  async hash(p){
    try{ const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(p)); return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join(''); }
    catch(e){ return btoa(unescape(encodeURIComponent(p))); }
  },
  async signup(name,email,pass){
    if(!name) return {ok:false,error:'Please enter your name.'};
    if(!/^\S+@\S+\.\S+$/.test(email)) return {ok:false,error:'Enter a valid email address.'};
    if(pass.length<6) return {ok:false,error:'Password must be at least 6 characters.'};
    const users=this.users(); if(users[email]) return {ok:false,error:'Account already exists — please log in.'};
    users[email]={name,email,pw:await this.hash(pass)}; localStorage.setItem('cc_users',JSON.stringify(users));
    return this.start(users[email]);
  },
  async login(email,pass){
    const u=this.users()[email];
    if(!u) return {ok:false,error:'No account found for this email — sign up first.'};
    if(u.pw!==await this.hash(pass)) return {ok:false,error:'Incorrect password.'};
    return this.start(u);
  },
  start(u){ const user={name:u.name,email:u.email}; localStorage.setItem('cc_session',JSON.stringify(user)); return {ok:true,user}; },
  logout(){ localStorage.removeItem('cc_session'); },
  async sendMail(user){
    const c=EMAILJS;
    if(!c.serviceId||!c.templateId||!c.publicKey) return {ok:false,reason:'Email service not configured — add your EmailJS keys in js/data/config.js. No email was sent.'};
    const message=`Hi ${user.name}, you have successfully logged in to ${APP_NAME} on ${new Date().toLocaleString()}. If this wasn't you, please change your password.`;
    try{
      const r=await fetch('https://api.emailjs.com/api/v1.0/email/send',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({service_id:c.serviceId,template_id:c.templateId,user_id:c.publicKey,
          template_params:{to_email:user.email,to_name:user.name,app_name:APP_NAME,subject:`Login successful — ${APP_NAME}`,message}})});
      return r.ok?{ok:true}:{ok:false,reason:'Email service error: '+(await r.text())};
    }catch(e){ return {ok:false,reason:'Could not reach the email service (check internet connection).'}; }
  }
};
