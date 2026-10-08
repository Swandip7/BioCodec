:root{
  --mist:#eef8fb;--ink:#0f2f4f;--ink2:#46627c;--blue:#2a6fb0;--teal:#17b8a2;--cyan:#5ad1ee;--warn:#f08a5d;
  --glass:rgba(255,255,255,.55);--edge:rgba(255,255,255,.85);--shadow:0 10px 40px rgba(31,90,140,.14);
  --r:22px;--head:"Bricolage Grotesque",system-ui,sans-serif;--body:"Instrument Sans",system-ui,sans-serif;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:90px}
body{margin:0;font:400 17px/1.65 var(--body);color:var(--ink);background:var(--mist);overflow-x:hidden}
a{color:var(--blue)}
:focus-visible{outline:3px solid var(--teal);outline-offset:3px;border-radius:6px}
.wrap{max-width:1120px;margin:0 auto;padding:0 24px}
section{padding:88px 0}

/* ambient background */
.bg{position:fixed;inset:0;z-index:-1;overflow:hidden;background:linear-gradient(180deg,#f4fbfd,#e8f3f8)}
.bg i{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55;animation:drift 22s ease-in-out infinite alternate}
.bg i:nth-child(1){width:520px;height:520px;background:#7fe3d0;top:-120px;left:-100px}
.bg i:nth-child(2){width:460px;height:460px;background:#8fc2f5;top:35%;right:-120px;animation-delay:-8s}
.bg i:nth-child(3){width:420px;height:420px;background:#a5ecf7;bottom:-140px;left:25%;animation-delay:-14s}
@keyframes drift{to{transform:translate(70px,50px) scale(1.15)}}

/* glass */
.glass{background:var(--glass);border:1px solid var(--edge);box-shadow:var(--shadow),inset 0 1px 0 rgba(255,255,255,.9);backdrop-filter:blur(18px) saturate(1.5);-webkit-backdrop-filter:blur(18px) saturate(1.5);border-radius:var(--r)}

/* nav */
.nav{position:fixed;top:14px;left:50%;transform:translateX(-50%);width:min(1120px,calc(100% - 28px));z-index:50;display:flex;align-items:center;justify-content:space-between;padding:8px 14px 8px 18px;border-radius:999px}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font:700 19px var(--head)}
.brand b{color:var(--teal);font-weight:700;margin-left:4px}
#links{display:flex;gap:2px;align-items:center}
#links a{padding:8px 13px;border-radius:999px;text-decoration:none;color:var(--ink2);font-weight:500;font-size:15px;transition:background .25s,color .25s}
#links a:hover,#links a.active{background:rgba(23,184,162,.14);color:var(--ink)}
#links a.cta{background:linear-gradient(120deg,var(--teal),var(--blue));color:#fff;margin-left:6px}
.burger{display:none;background:none;border:0;width:40px;height:40px;cursor:pointer;position:relative}
.burger span{position:absolute;left:10px;right:10px;height:2px;background:var(--ink);transition:.3s}
.burger span:first-child{top:16px}.burger span:last-child{top:23px}
.burger[aria-expanded=true] span:first-child{top:20px;transform:rotate(45deg)}
.burger[aria-expanded=true] span:last-child{top:20px;transform:rotate(-45deg)}

/* type */
h1,h2,h3{font-family:var(--head);line-height:1.08;margin:0;letter-spacing:-.02em}
h2{font-size:clamp(34px,5vw,54px);font-weight:800}
h3{font-size:21px;font-weight:700;letter-spacing:-.01em}
.sub{color:var(--ink2);font-size:19px;max-width:60ch;margin:14px 0 40px}
.kicker{display:inline-block;margin:0 0 18px;padding:6px 14px;border-radius:999px;background:var(--glass);border:1px solid var(--edge);color:var(--blue);font-weight:600;font-size:15px}

/* hero */
.hero{padding:150px 0 70px}
h1{font-size:clamp(42px,7.4vw,92px);font-weight:800;max-width:15ch}
h1 span{display:inline-block;animation:rise .9s cubic-bezier(.2,.8,.2,1) both}
h1 span:nth-child(2){animation-delay:.12s}h1 span:nth-child(3){animation-delay:.24s}
.grad{background:linear-gradient(100deg,var(--teal),var(--blue) 70%);-webkit-background-clip:text;background-clip:text;color:transparent}
@keyframes rise{from{opacity:0;transform:translateY(30px)}}
.lead{font-size:20px;color:var(--ink2);max-width:58ch;margin:24px 0 32px}
.actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:56px}
.btn{display:inline-block;padding:13px 26px;border-radius:999px;font:600 16px var(--body);text-decoration:none;border:1px solid transparent;cursor:pointer;transition:transform .25s,box-shadow .25s}
.btn:hover{transform:translateY(-2px)}
.btn.primary{background:linear-gradient(120deg,var(--teal),var(--blue));color:#fff;box-shadow:0 8px 24px rgba(42,111,176,.3)}
.btn.ghost{background:var(--glass);border-color:var(--edge);color:var(--ink)}

/* scope */
.scope{padding:18px 20px 14px;animation:rise 1s .4s both}
.scope-top{display:flex;gap:18px 28px;flex-wrap:wrap;align-items:center;font-size:15px;color:var(--ink2)}
.legend{display:flex;gap:18px;margin-right:auto}
.l::before{content:"";display:inline-block;width:22px;height:4px;border-radius:2px;margin-right:8px;vertical-align:middle}
.l.noisy::before{background:var(--warn)}.l.clean::before{background:var(--teal)}
.ctl{display:flex;align-items:center;gap:10px;font-weight:500}
input[type=range]{accent-color:var(--teal);width:150px}
.sw input{accent-color:var(--teal);width:18px;height:18px}
#wave{width:100%;height:240px;display:block;margin:10px 0 4px}
.scope-foot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:15px;color:var(--ink2)}
.scope-foot b{color:var(--ink);font-family:var(--head);font-size:18px}

.stats{list-style:none;padding:0;margin:22px 0 0;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.stats li{padding:20px 22px}
.stats b{display:block;font:800 36px var(--head);color:var(--blue);letter-spacing:-.02em}
.stats span{font-size:14.5px;color:var(--ink2);line-height:1.4;display:block}

/* grids and cards */
.grid{display:grid;gap:20px}
.grid.four{grid-template-columns:repeat(4,1fr)}.grid.three{grid-template-columns:repeat(3,1fr)}
.card{padding:28px;transition:transform .35s,box-shadow .35s}
.card:hover{transform:translateY(-6px);box-shadow:0 18px 50px rgba(31,90,140,.22)}
.card svg{width:46px;height:46px;color:var(--teal);margin-bottom:18px}
.card p{color:var(--ink2);margin:10px 0 0;font-size:16px}

/* people */
.people{display:grid;gap:20px}
.lead-card{display:flex;gap:28px;align-items:flex-start;padding:34px}
.avatar{flex:none;width:110px;height:110px;border-radius:50%;display:grid;place-items:center;font:800 36px var(--head);color:#fff;background:conic-gradient(from 200deg,var(--teal),var(--blue),var(--cyan),var(--teal));box-shadow:0 0 0 6px rgba(255,255,255,.7)}
.avatar.sm{width:56px;height:56px;font-size:19px;margin-bottom:16px;box-shadow:0 0 0 4px rgba(255,255,255,.7)}
.role{color:var(--blue)!important;font-weight:600;margin:4px 0 12px!important}
.links{display:flex;gap:16px;flex-wrap:wrap}
.collab{grid-template-columns:repeat(4,1fr)}
.card.open{border-style:dashed;background:rgba(255,255,255,.3)}

/* publications */
.chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px}
.chip{padding:8px 18px;border-radius:999px;border:1px solid var(--edge);background:var(--glass);font:500 15px var(--body);color:var(--ink2);cursor:pointer;transition:.25s}
.chip.on{background:var(--ink);color:#fff}
.pubs{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.pubs li{padding:20px 24px;display:grid;grid-template-columns:auto 1fr;gap:6px 18px;animation:rise .5s both}
.tag{grid-row:span 3;align-self:start;min-width:56px;text-align:center;padding:4px 10px;border-radius:10px;font:700 14px var(--head);color:#fff;background:var(--blue)}
.tag.J{background:var(--teal)}.tag.C{background:var(--blue)}.tag.P{background:#7a62d6}.tag.U{background:var(--warn)}
.pubs h3{font-size:18px;line-height:1.3}
.pubs .m{color:var(--ink2);font-size:15px}
.pubs a{font-size:15px;font-weight:600}

/* projects */
.proj{padding:0;overflow:hidden;cursor:pointer;text-align:left;border:1px solid var(--edge);font:inherit;color:inherit}
.proj .top{padding:26px 26px 0}
.proj .stat{font:800 40px var(--head);color:var(--teal);letter-spacing:-.02em}
.proj .stat small{font:500 14px var(--body);color:var(--ink2);margin-left:6px}
.proj h3{margin:8px 0 0}
.proj .more{max-height:0;opacity:0;overflow:hidden;padding:0 26px;color:var(--ink2);font-size:15.5px;transition:max-height .45s,opacity .45s,padding .45s}
.proj[aria-expanded=true] .more{max-height:280px;opacity:1;padding:12px 26px 0}
.proj .tags{display:flex;gap:6px;flex-wrap:wrap;padding:16px 26px 24px}
.proj .tags span{font-size:13px;padding:3px 10px;border-radius:999px;background:rgba(42,111,176,.1);color:var(--blue);font-weight:600}
.proj .toggle{display:block;padding:0 26px;color:var(--blue);font-weight:600;font-size:14.5px;margin-top:10px}

/* join/contact/about */
.split{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.roles{list-style:none;margin:0;padding:0;display:grid;gap:14px}
.roles li{padding:20px 24px}.roles p{margin:6px 0 0;color:var(--ink2);font-size:16px}
.form{padding:30px;display:grid;gap:16px}
.form label{display:grid;gap:6px;font-weight:600;font-size:15px}
.form input,.form textarea,.form select{font:400 16px var(--body);padding:12px 14px;border-radius:14px;border:1px solid rgba(15,47,79,.15);background:rgba(255,255,255,.75);color:var(--ink);transition:border-color .2s,box-shadow .2s}
.form input:focus,.form textarea:focus,.form select:focus{outline:0;border-color:var(--teal);box-shadow:0 0 0 4px rgba(23,184,162,.18)}
.form .invalid{border-color:var(--warn)}
.status{margin:0;min-height:1.4em;font-weight:600;font-size:15px}.status.ok{color:#0d8a76}.status.err{color:#c4501f}
.about{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center}
.about p{margin:0 0 16px;color:var(--ink2);max-width:62ch}
.about img{width:100%;height:auto;padding:10px;display:block}
.mail{font:700 clamp(20px,3vw,28px) var(--head);margin:0 0 20px}
footer{padding:36px 0 48px;color:var(--ink2);font-size:15px}
footer .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;border-top:1px solid rgba(15,47,79,.12);padding-top:24px}

/* scroll reveal (one gentle effect, section headings and grids) */
.rv{opacity:0;transform:translateY(24px);transition:opacity .8s,transform .8s cubic-bezier(.2,.8,.2,1)}
.rv.in{opacity:1;transform:none}

@media(max-width:960px){
  .grid.four,.collab,.stats{grid-template-columns:repeat(2,1fr)}.grid.three{grid-template-columns:1fr 1fr}
  .split,.about{grid-template-columns:1fr}
}
@media(max-width:820px){
  .burger{display:block}
  #links{position:absolute;top:calc(100% + 10px);left:0;right:0;flex-direction:column;align-items:stretch;padding:12px;background:var(--glass);border:1px solid var(--edge);border-radius:24px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:var(--shadow);display:none}
  #links.open{display:flex}
  #links a.cta{margin:4px 0 0;text-align:center}
}
@media(max-width:600px){
  section{padding:64px 0}.hero{padding-top:120px}
  .grid.four,.grid.three,.collab{grid-template-columns:1fr}.stats{grid-template-columns:1fr 1fr}
  .lead-card{flex-direction:column}.legend{flex-direction:column;gap:4px}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}
  .rv{opacity:1;transform:none}
}
