/* Forever Party Draft: the Classic 2005 skin, sounds and Wick's tour.
   Everything here is original: the art is drawn in SVG and every sound is synthesized with Web Audio. */
(function(){
"use strict";
const root = document.documentElement;
const ls = {
  get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
  set(k, v){ try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch(e){} }
};
const K = { skin:"fpd-skin", snd:"fpd-sound", tour:"fpd-tour-seen" };
if (ls.get(K.skin) === "classic") root.dataset.skin = "classic";
const reduce = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
const wait = ms => new Promise(r => setTimeout(r, ms));
const svgUrl = s => `url("data:image/svg+xml,${encodeURIComponent(s)}")`;
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ---------- Original artwork ---------- */
const CUR_ARROW = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff6cf"/><stop offset=".45" stop-color="#e8b53a"/><stop offset="1" stop-color="#7a4a0e"/></linearGradient></defs><path d="M3 2.5L3 25l6.2-5.6 4.4 9.2 4.4-2-4.3-9 8.3-.2z" fill="url(#g)" stroke="#1d1104" stroke-width="1.6" stroke-linejoin="round"/><path d="M5 6.5v13l3.6-3.1" fill="none" stroke="#fffbe6" stroke-width="1.1" stroke-linecap="round" opacity=".85"/></svg>`;
const CUR_SWORD = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#c3cad8"/><stop offset="1" stop-color="#5b6478"/></linearGradient><linearGradient id="h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff1b0"/><stop offset="1" stop-color="#9a6514"/></linearGradient></defs><path d="M2.5 2.5L8.6 4 21 16.4 16.4 21 4 8.6z" fill="url(#b)" stroke="#141820" stroke-width="1.4" stroke-linejoin="round"/><path d="M4.4 4.4l14 14" stroke="#fff" stroke-width=".9" opacity=".75"/><path d="M14 23.6L23.6 14l2 2-9.6 9.6z" fill="url(#h)" stroke="#2a1606" stroke-width="1.3" stroke-linejoin="round"/><path d="M20.6 20.6l4.6 4.6" stroke="#1d0f05" stroke-width="4.4" stroke-linecap="round"/><path d="M20.6 20.6l4.6 4.6" stroke="#8a4b22" stroke-width="2.4" stroke-linecap="round"/><circle cx="27" cy="27" r="2.7" fill="#c0301f" stroke="#2a1606" stroke-width="1.3"/><circle cx="26.2" cy="26.2" r=".8" fill="#ffb3a0"/></svg>`;
const NOISE = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><filter id="a"><feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="4" seed="7" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .78 0 0 0 0 .62 0 0 0 0 .38 1.3 0 0 0 -.5"/></filter><filter id="b"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .85 0 0 0 0 .75 0 0 0 0 .55 0 0 0 .9 -.3"/></filter><rect width="100%" height="100%" filter="url(#a)" opacity=".11"/><rect width="100%" height="100%" filter="url(#b)" opacity=".09"/></svg>`;

/* Wick: a little lantern sprite. Original character. */
const WICK = `<svg viewBox="0 0 120 140" width="100%" height="100%" aria-hidden="true" overflow="visible">
<defs>
  <radialGradient id="wkGlass" cx=".5" cy=".42" r=".62"><stop offset="0" stop-color="#fffbe2"/><stop offset=".45" stop-color="#ffd970"/><stop offset="1" stop-color="#ef8f22"/></radialGradient>
  <linearGradient id="wkGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe7a1"/><stop offset=".5" stop-color="#d9a33c"/><stop offset="1" stop-color="#8f5c14"/></linearGradient>
  <radialGradient id="wkAura" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffcf6a" stop-opacity=".55"/><stop offset="1" stop-color="#ffcf6a" stop-opacity="0"/></radialGradient>
</defs>
<g class="wk-bob"><g class="wk-squash">
  <circle cx="60" cy="66" r="58" fill="url(#wkAura)" class="wk-aura"/>
  <g class="wk-wl"><path d="M33 54C16 38 4 48 9 60c-6 5-1 16 12 13 3 0 8-4 12-9z" fill="#fff8e6" stroke="#3b2208" stroke-width="2.4" stroke-linejoin="round"/><path d="M28 56c-6-4-11-6-15-4M27 62c-5-1-9 0-12 2" stroke="#e7c98c" stroke-width="1.6" fill="none" stroke-linecap="round"/></g>
  <g transform="translate(120 0) scale(-1 1)"><g class="wk-wl"><path d="M33 54C16 38 4 48 9 60c-6 5-1 16 12 13 3 0 8-4 12-9z" fill="#fff8e6" stroke="#3b2208" stroke-width="2.4" stroke-linejoin="round"/><path d="M28 56c-6-4-11-6-15-4M27 62c-5-1-9 0-12 2" stroke="#e7c98c" stroke-width="1.6" fill="none" stroke-linecap="round"/></g></g>
  <path d="M45 23Q60 3 75 23" stroke="#3b2208" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M45 23Q60 3 75 23" stroke="url(#wkGold)" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <path d="M35 32h50l-7-11H42z" fill="url(#wkGold)" stroke="#3b2208" stroke-width="2.6" stroke-linejoin="round"/>
  <rect x="34" y="31" width="52" height="66" rx="19" fill="url(#wkGlass)" stroke="#3b2208" stroke-width="3"/>
  <path class="wk-flame" d="M60 37c6 7 7 13 0 17-7-4-6-10 0-17z" fill="#fff" opacity=".9"/>
  <path d="M41 42c-2 8-2 22 1 34" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".55"/>
  <g class="wk-eyes"><ellipse cx="50" cy="66" rx="5.6" ry="7.2" fill="#2a1606"/><ellipse cx="70" cy="66" rx="5.6" ry="7.2" fill="#2a1606"/><circle cx="52.2" cy="62.8" r="2.1" fill="#fff"/><circle cx="72.2" cy="62.8" r="2.1" fill="#fff"/><circle cx="48.6" cy="69.4" r=".9" fill="#fff" opacity=".8"/><circle cx="68.6" cy="69.4" r=".9" fill="#fff" opacity=".8"/></g>
  <g class="wk-happy"><path d="M44 67q6-8 12 0M64 67q6-8 12 0" stroke="#2a1606" stroke-width="3.2" fill="none" stroke-linecap="round"/></g>
  <ellipse cx="43" cy="77" rx="5" ry="3" fill="#ff6f4f" opacity=".5"/><ellipse cx="77" cy="77" rx="5" ry="3" fill="#ff6f4f" opacity=".5"/>
  <path class="wk-mouth" d="M53.5 77q6.5 8 13 0q-6.5 3-13 0z" fill="#7a1f0a" stroke="#7a1f0a" stroke-width="1.2" stroke-linejoin="round"/>
  <ellipse class="wk-o" cx="60" cy="79" rx="3.6" ry="4.4" fill="#7a1f0a"/>
  <path d="M38 96h44l-6 12H44z" fill="url(#wkGold)" stroke="#3b2208" stroke-width="2.6" stroke-linejoin="round"/>
  <path class="wk-wisp" d="M60 109q-7 10 0 20q7-9 0-20z" fill="#ffd56a" opacity=".7"/>
  <path d="M90 26l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff4c2" class="wk-glint"/>
</g></g>
</svg>`;

const ICON = {
  page:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M13 7l-1.7 4.3L7 13l1.7-4.3z" fill="currentColor"/></svg>',
  lantern:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4.5q3-3 6 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="5.5" y="5" width="9" height="10.5" rx="3.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 7.5c1.3 1.5 1.4 2.8 0 3.7-1.4-.9-1.3-2.2 0-3.7z" fill="currentColor"/><path d="M7 15.5h6l-1 2H8z" fill="currentColor"/></svg>',
  shield:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5l6 2.2v4.6c0 4-2.6 6.6-6 8.2-3.4-1.6-6-4.2-6-8.2V4.7z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 5.5v9M6.8 9h6.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  sound:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 8h3l4-3.5v11l-4-3.5h-3z" fill="currentColor"/><path d="M13.5 7.2a4 4 0 0 1 0 5.6M15.6 5a7 7 0 0 1 0 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  mute:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 8h3l4-3.5v11l-4-3.5h-3z" fill="currentColor"/><path d="M13.5 7.5l4 5M17.5 7.5l-4 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
};

/* ---------- Styles ---------- */
const S = 'html[data-skin="classic"]';
const PRIMARY = `:is(.btn.primary,#view-plan .btn:not(.ghost),#view-launch .btn:not(.ghost),#view-plan #btn-confirm:not(.ghost),#view-plan .rc-acts .roll-btn,.nextup,#wk-bub .wk-go)`;
const STONE = `:is(.btn:not(.primary),.btn.ghost,.invite,#view-plan .sbtn,#view-plan #btn-confirm.ghost,#view-launch .btn.ghost,#view-plan .rc-acts .ghost,.fx-b,#fd-fab,#wk-bub .wk-alt)`;
const CSS = `
.fx-ctl{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.fx-b{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);background:var(--surface);color:var(--fg);border-radius:999px;padding:7px 13px;font:inherit;font-size:.88rem;cursor:pointer;line-height:1.1;transition:border-color .15s,background .15s}
.fx-b svg{width:16px;height:16px;flex:none;color:var(--gold)}
.fx-b span{white-space:nowrap}
.fx-b:hover{border-color:var(--gold)}
.fx-b .sw{width:26px;height:15px;border-radius:99px;background:var(--line);position:relative;transition:background .2s;flex:none}
.fx-b .sw::after{content:"";position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background:var(--fg);transition:transform .2s}
.fx-b[aria-pressed="true"] .sw{background:var(--gold)}
.fx-b[aria-pressed="true"] .sw::after{transform:translateX(11px);background:var(--gold-ink)}
#fd-nav .fd-fx{margin:18px 6px 0;padding-top:14px;border-top:1px solid var(--line);display:grid;gap:6px}
#fd-nav .fd-fx .fx-b{border-radius:8px;width:100%;justify-content:flex-start}
#fd-nav .fd-fx .fx-b .sw{margin-left:auto}
.wk-ask{display:inline-grid;place-items:center;width:24px;height:24px;margin:0 0 0 8px;padding:0;border:1px solid transparent;border-radius:50%;background:none;color:var(--muted);cursor:pointer;vertical-align:middle;opacity:.7;font:inherit;line-height:0;transition:opacity .15s,color .15s,background .15s,border-color .15s,transform .2s cubic-bezier(.16,1,.3,1)}
.wk-ask svg{width:15px;height:15px}
h2 .wk-ask{width:28px;height:28px}
h2 .wk-ask svg{width:17px;height:17px}
.wk-ask:hover,.wk-ask:focus-visible{opacity:1;color:var(--gold);background:var(--gold-soft);border-color:color-mix(in srgb,var(--gold) 35%,transparent);transform:translateY(-1px)}
.wk-ask:active{transform:translateY(0) scale(.94)}
@media (hover:none){ .wk-ask{opacity:.85} }
#wk-bub .wk-hd small{max-width:62%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

/* Wick and the tour */
#wk-dim{position:fixed;inset:0;z-index:1000;background:transparent}
#wk-spot{position:fixed;z-index:1000;left:50%;top:50%;width:0;height:0;border-radius:14px;box-shadow:0 0 0 200vmax rgba(5,6,16,.68);pointer-events:none;transition:left .5s cubic-bezier(.4,0,.2,1),top .5s cubic-bezier(.4,0,.2,1),width .5s cubic-bezier(.4,0,.2,1),height .5s cubic-bezier(.4,0,.2,1),opacity .3s}
#wk-spot::after{content:"";position:absolute;inset:-3px;border-radius:inherit;border:2px solid var(--gold);box-shadow:0 0 24px color-mix(in srgb,var(--gold) 70%,transparent),inset 0 0 18px color-mix(in srgb,var(--gold) 30%,transparent);animation:wkpulse 1.7s ease-in-out infinite}
#wk-spot.empty::after{display:none}
@keyframes wkpulse{0%,100%{opacity:.55}50%{opacity:1}}
#wk{position:fixed;left:0;top:0;width:88px;height:103px;z-index:1004;pointer-events:none;transform:translate(-200px,60vh);transition:transform .75s cubic-bezier(.16,1,.3,1);filter:drop-shadow(0 6px 10px rgba(0,0,0,.35)) drop-shadow(0 0 14px rgba(255,190,70,.45))}
#wk.peek{pointer-events:auto;cursor:pointer}
#wk .wk-bob{animation:wkbob 2.6s ease-in-out infinite}
@keyframes wkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
#wk .wk-wl{transform-origin:33px 58px;animation:wkflap .3s ease-in-out infinite alternate}
@keyframes wkflap{from{transform:rotate(12deg)}to{transform:rotate(-18deg)}}
#wk .wk-eyes{transform-origin:60px 66px;animation:wkblink 4.4s infinite}
@keyframes wkblink{0%,91%,97%,100%{transform:scaleY(1)}94%{transform:scaleY(.08)}}
#wk .wk-happy,#wk .wk-o{display:none}
#wk.happy .wk-happy{display:inline}#wk.happy .wk-eyes{display:none}
#wk.wow .wk-o{display:inline}#wk.wow .wk-mouth{display:none}#wk.wow .wk-eyes{transform:scale(1.12)}
#wk.talk .wk-mouth{transform-origin:60px 78px;animation:wktalk .14s ease-in-out infinite alternate}
@keyframes wktalk{from{transform:scaleY(.35)}to{transform:scaleY(1.15)}}
#wk .wk-flame{transform-origin:60px 54px;animation:wkfl .17s ease-in-out infinite alternate}
@keyframes wkfl{from{transform:scale(1,1) skewX(-4deg)}to{transform:scale(.9,1.1) skewX(4deg)}}
#wk .wk-wisp{transform-origin:60px 109px;animation:wkfl .3s ease-in-out infinite alternate}
#wk .wk-aura{transform-origin:60px 66px;animation:wkaura 2.2s ease-in-out infinite}
@keyframes wkaura{0%,100%{transform:scale(.9);opacity:.75}50%{transform:scale(1.08);opacity:1}}
#wk .wk-glint{transform-origin:90px 33px;animation:wkglint 2.8s ease-in-out infinite}
@keyframes wkglint{0%,70%,100%{transform:scale(0) rotate(0)}80%{transform:scale(1.2) rotate(45deg)}90%{transform:scale(0) rotate(90deg)}}
#wk .wk-squash{transform-origin:60px 108px}
#wk.land .wk-squash{animation:wksquash .55s ease}
@keyframes wksquash{0%{transform:scale(1)}30%{transform:scale(1.16,.84)}60%{transform:scale(.93,1.08)}100%{transform:scale(1)}}
#wk.spin .wk-squash{transform-origin:60px 66px;animation:wkspin 1s cubic-bezier(.5,0,.3,1.3)}
@keyframes wkspin{0%{transform:rotate(0) scale(1)}50%{transform:rotate(200deg) scale(1.25)}100%{transform:rotate(360deg) scale(1)}}
#wk.hop .wk-squash{animation:wkhop .6s cubic-bezier(.3,0,.3,1)}
@keyframes wkhop{0%,100%{transform:translateY(0)}40%{transform:translateY(-22px) scale(.95,1.06)}70%{transform:translateY(0) scale(1.1,.9)}}
.wk-spark{position:fixed;z-index:1003;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,#fff 0 25%,#ffd56a 45%,transparent 70%);animation:wkspark .9s ease-out forwards}
@keyframes wkspark{from{opacity:1;transform:translate(0,0) scale(1)}to{opacity:0;transform:translate(var(--dx,0),var(--dy,14px)) scale(.2)}}
#wk-bub{position:fixed;z-index:1005;left:0;top:0;translate:-9999px 0;width:min(370px,calc(100vw - 24px));background:var(--surface);color:var(--fg);border:1px solid color-mix(in srgb,var(--gold) 65%,var(--line));border-radius:16px;padding:14px 16px 12px;box-shadow:0 22px 50px -12px rgba(0,0,0,.6),0 0 0 4px var(--gold-soft);font-family:var(--f-body);opacity:0;scale:.96;transform-origin:12% 0;transition:opacity .18s ease-out,scale .35s cubic-bezier(.16,1,.3,1),translate .5s cubic-bezier(.16,1,.3,1)}
#wk-bub.show{opacity:1;scale:1}
#wk-bub:not(.show){pointer-events:none}
#wk-bub.mini{padding:8px 8px 8px 14px;border-radius:999px}
#wk-bub.mini .wk-row{gap:8px}
#wk-bub.mini .wk-q{flex:1;font-size:.92rem;line-height:1.25;min-width:0}
#wk-bub.mini .wk-go{padding:7px 12px}
#wk-bub .wk-hd{display:flex;align-items:center;gap:8px;font-family:var(--f-display);color:var(--gold);font-size:1rem}
#wk-bub .wk-hd small{font-family:var(--f-body);font-size:.8rem;font-weight:600;color:var(--muted);margin-left:auto;font-variant-numeric:tabular-nums}
#wk-bub .wk-ic{border:0;background:none;color:var(--muted);cursor:pointer;padding:4px;border-radius:6px;display:inline-flex}
#wk-bub .wk-ic:hover{color:var(--fg);background:var(--surface-2)}
#wk-bub .wk-ic svg{width:18px;height:18px}
#wk-bub .wk-txt{position:relative;font-size:1.02rem;line-height:1.48;margin:6px 0 12px;cursor:pointer}
#wk-bub .wk-txt .full{visibility:hidden}
#wk-bub .wk-txt .typed{position:absolute;inset:0}
#wk-bub .wk-txt .typed::after{content:"";display:inline-block;width:.45em;height:1em;margin-left:2px;vertical-align:-.12em;background:var(--gold);opacity:0}
#wk-bub.typing .wk-txt .typed::after{opacity:.8;animation:wkcaret .5s steps(2) infinite}
@keyframes wkcaret{50%{opacity:0}}
#wk-bub .wk-row{display:flex;align-items:center;gap:8px}
#wk-bub .wk-xp{flex:1;min-width:60px;height:9px;border-radius:99px;background:var(--line-soft);overflow:hidden;position:relative;box-shadow:inset 0 1px 2px rgba(0,0,0,.4)}
#wk-bub .wk-xp i{position:absolute;inset:0 auto 0 0;width:0;background:linear-gradient(90deg,#6a3fe0,#b07cff);box-shadow:0 0 8px #9b6bff;transition:width .6s cubic-bezier(.4,0,.2,1)}
#wk-bub .wk-xp i::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 9.6%,rgba(0,0,0,.35) 9.6% 10%)}
#wk-bub button.wk-go,#wk-bub button.wk-alt{font:inherit;font-weight:700;font-size:.92rem;border-radius:999px;padding:8px 15px;cursor:pointer;border:1px solid var(--gold);white-space:nowrap}
#wk-bub button.wk-go{background:var(--gold);color:var(--gold-ink)}
#wk-bub button.wk-alt{background:none;color:var(--fg);border-color:var(--line)}
#wk-bub button.wk-go:hover{filter:brightness(1.08)}
#wk-bub .wk-acts{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
#wk-bub.fin{text-align:center}
#wk-bub.fin .wk-row{justify-content:center;flex-wrap:wrap}
#wk-bub.fin .wk-acts{justify-content:center;width:100%}
#wk-bub.fin .wk-xp{flex-basis:100%;margin-bottom:10px}
.wk-big{font-family:var(--f-display);font-size:1.9rem;color:var(--gold);line-height:1.1;margin:4px 0 2px;text-shadow:0 2px 0 rgba(0,0,0,.25)}
.wk-plus{position:fixed;z-index:1006;font-family:var(--f-display);font-weight:700;font-size:1.6rem;color:#b07cff;text-shadow:0 2px 0 #000,0 0 14px #8a5cff;pointer-events:none;animation:wkplus 1.6s cubic-bezier(.2,.8,.2,1) forwards}
@keyframes wkplus{0%{opacity:0;transform:translate(-50%,10px) scale(.6)}15%{opacity:1;transform:translate(-50%,0) scale(1.15)}100%{opacity:0;transform:translate(-50%,-70px) scale(1)}}
.wk-ring{position:fixed;z-index:1002;width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;border:3px solid #ffd56a;box-shadow:0 0 30px #ffd56a,inset 0 0 20px #ffd56a;pointer-events:none;animation:wkring 1.1s cubic-bezier(.1,.7,.2,1) forwards}
@keyframes wkring{from{opacity:1;transform:scale(.2)}to{opacity:0;transform:scale(9)}}
.wk-beam{position:fixed;z-index:1001;width:140px;margin-left:-70px;top:0;bottom:0;pointer-events:none;background:linear-gradient(90deg,transparent,rgba(255,214,110,.35) 35%,rgba(255,244,200,.6) 50%,rgba(255,214,110,.35) 65%,transparent);filter:blur(4px);animation:wkbeam 1.6s ease-out forwards}
@keyframes wkbeam{0%{opacity:0;transform:scaleX(.2)}20%{opacity:1;transform:scaleX(1)}100%{opacity:0;transform:scaleX(1.4)}}
.wk-conf{position:fixed;z-index:1006;top:-12px;width:9px;height:14px;pointer-events:none;border-radius:2px;animation:wkconf linear forwards}
@keyframes wkconf{to{transform:translate(var(--dx),110vh) rotate(var(--r));}}
@media (max-width:639.98px){
  #wk{width:72px;height:84px}
  #wk-bub{width:calc(100vw - 24px)}
}
@media (prefers-reduced-motion: reduce){
  #wk,#wk-spot{transition-duration:.01s!important}#wk-bub{transition:opacity .2s!important}
  #wk .wk-bob,#wk .wk-wl,#wk .wk-aura,#wk .wk-glint{animation:none!important}
  .wk-conf,.wk-beam{display:none}
}

/* ---------- Classic 2005 skin (an original homage: stone, gold and parchment) ---------- */
html:root[data-skin="classic"]{
  color-scheme:dark;
  --bg:#0b0907; --surface:#19140d; --surface-2:#251d13; --line:#6e5426; --line-soft:#3b2e1b;
  --fg:#f1e6c8; --muted:#bba985; --faint:#8b7b5d;
  --gold:#ffc93c; --gold-ink:#1d1102; --gold-soft:rgba(255,201,60,.13);
  --horde:#e2412e; --alliance:#4e8ef2; --good:#47d65a; --warn:#ffa72a; --bad:#ff4a3b;
  --c-warrior:#C69B6D; --c-paladin:#F48CBA; --c-hunter:#AAD372; --c-rogue:#FFF468; --c-priest:#EDEDED;
  --c-shaman:#3a95ff; --c-mage:#3FC7EB; --c-warlock:#8f90f0; --c-druid:#FF7C0A;
  --armor-cloth:#7f6fd0; --armor-leather:#a8713f; --armor-mail:#3f8f8f; --armor-plate:#7c869c;
  --f-display:"Cinzel","Marcellus",Georgia,serif;
  --r:7px;
  --fx-frame:#8a6a2a;
  --fx-rivet:radial-gradient(circle at 9px 9px,#fff0b8 0 1.1px,#c99536 1.8px,#3b2408 2.9px,transparent 3.5px),radial-gradient(circle at calc(100% - 9px) 9px,#fff0b8 0 1.1px,#c99536 1.8px,#3b2408 2.9px,transparent 3.5px),radial-gradient(circle at 9px calc(100% - 9px),#fff0b8 0 1.1px,#c99536 1.8px,#3b2408 2.9px,transparent 3.5px),radial-gradient(circle at calc(100% - 9px) calc(100% - 9px),#fff0b8 0 1.1px,#c99536 1.8px,#3b2408 2.9px,transparent 3.5px);
  scrollbar-color:#7a5c22 #0b0907;
}
${S}, ${S} *{cursor:${svgUrl(CUR_ARROW)} 3 3, auto}
${S} :is(a[href],button:not(:disabled),summary,label,select,[role="button"],[role="tab"],input[type="checkbox"],input[type="radio"],input[type="range"],.chip,.ccard,#wk.peek),${S} :is(a[href],button:not(:disabled),summary,label,[role="button"],[role="tab"],.chip,.ccard,#wk.peek) *{cursor:${svgUrl(CUR_SWORD)} 3 3, pointer}
${S} :is(input:not([type]),input[type="text"],input[type="search"],input[type="number"],input[type="email"],input[type="url"],textarea,[contenteditable="true"]){cursor:text}
${S} ::selection{background:#8a6a2a;color:#fff}
${S} body{background:radial-gradient(1200px 520px at 50% -140px,rgba(255,170,60,.14),transparent 70%),var(--fx-noise),linear-gradient(180deg,#16110b 0%,#0b0907 55%);background-attachment:fixed}
${S} :is(h1,h2,h3){color:var(--gold);text-shadow:0 1px 0 #000,0 2px 8px rgba(0,0,0,.6);font-weight:600;letter-spacing:.02em}
${S} h1{font-family:"Cinzel Decorative","Cinzel",Georgia,serif;font-weight:700;color:#ffd451;text-shadow:0 2px 0 #000,0 4px 14px rgba(0,0,0,.7)}
${S} .eyebrow{color:#d8b866}
${S} a{color:#ffd451}
${S} :is(.step,.panel,.verdict,.cg,.device,#view-plan section,#view-launch section){background:var(--fx-c-tl) top left/34px no-repeat,var(--fx-c-tr) top right/34px no-repeat,var(--fx-c-br) bottom right/34px no-repeat,var(--fx-c-bl) bottom left/34px no-repeat,linear-gradient(180deg,rgba(255,214,140,.06),rgba(0,0,0,0) 140px),var(--fx-noise),#17120c;border:2px solid var(--fx-frame);border-radius:8px;box-shadow:0 0 0 1px #000,inset 0 0 0 1px #000,inset 0 0 0 3px rgba(217,178,90,.15),inset 0 0 44px rgba(0,0,0,.55),0 16px 34px -20px #000}
${S} :is(.step-head .n){background:radial-gradient(circle at 35% 30%,#fff1b0,#d39a2a 55%,#7a4c0e);color:#2a1604;border:1px solid #2a1604;box-shadow:0 1px 0 #000;font-weight:700}
${S} .sic{background:radial-gradient(circle at 35% 30%,#4a3a1a,#1d1509);border:1px solid #8a6a2a;color:#ffc93c;box-shadow:0 1px 0 #000}
${S} .emb{filter:drop-shadow(0 1px 0 #000)}
${S} :is(.ccard .nm,#view-launch details.cls summary b,.cg .panel-head h3) .emb{width:30px;height:30px;padding:5px;margin-right:10px;border-radius:5px;background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.1),transparent 60%),linear-gradient(180deg,#2b2620,#0e0c09);border:1px solid #9c8a64;box-shadow:0 0 0 1px #000,inset 0 0 0 1px rgba(0,0,0,.8),inset 0 2px 5px rgba(255,255,255,.08),inset 0 -6px 10px rgba(0,0,0,.6);vertical-align:-.55em;filter:none}
${S} .ccard.on .nm .emb{border-color:#ffd451}
${S} #view-launch .check li.ok b::after{content:" (Complete)";color:var(--good);font-weight:600}
${S} #view-launch .check li:not(.ok) b{color:#ffd451}
.fx-tip{display:none}
${S} .fx-tip{display:block;margin:0;max-width:62ch;color:#e8d9b0;font-size:.95rem;line-height:1.45;padding:10px 14px;border-radius:7px;background:rgba(0,0,0,.35);border:1px solid #4a3a1c;box-shadow:inset 0 1px 0 rgba(255,220,150,.06)}
${S} .fx-tip b{color:#ffd451;font-family:var(--f-display);font-weight:700;margin-right:6px}
.fx-xp{display:none}
${S} .fx-xp{display:grid;gap:5px;max-width:520px}
${S} .fx-xp .bar{position:relative;height:13px;border-radius:3px;background:linear-gradient(180deg,#120c1d,#211731);border:1px solid #5d4a2a;box-shadow:0 0 0 1px #000,inset 0 2px 4px rgba(0,0,0,.7);overflow:hidden}
${S} .fx-xp .bar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(180deg,#b38bff,#6b38d6 55%,#4d22a8);box-shadow:inset 0 1px 0 rgba(255,255,255,.35);transition:width .8s cubic-bezier(.16,1,.3,1)}
${S} .fx-xp .bar::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 calc(20% - 1px),rgba(0,0,0,.75) calc(20% - 1px) 20%)}
${S} .fx-xp .lab{display:flex;justify-content:space-between;gap:10px;font-size:.86rem;color:#d8c69c}
${S} .fx-xp .lab b{color:#ffd451;font-family:var(--f-display);font-weight:700}
${S} .tabs{border-bottom:2px solid var(--fx-frame)!important;background:linear-gradient(180deg,#120e09,#0d0a07)}
${S} .tab{font-family:var(--f-display);font-weight:600;letter-spacing:.03em;color:#c9b48a;border:2px solid transparent;border-bottom:0;border-radius:8px 8px 0 0;margin-bottom:-2px}
${S} .tab:hover{color:#ffe08a;background:linear-gradient(180deg,rgba(255,201,60,.12),transparent)}
${S} .tab[aria-selected="true"]{color:#ffd451;background:linear-gradient(180deg,#3d2c12,#17120c);border-color:var(--fx-frame);border-bottom:2px solid #17120c;text-shadow:0 1px 0 #000}
${S} .tab .count{background:radial-gradient(circle at 35% 30%,#ff8a6a,#b3200f 60%,#5e0a03);color:#fff;border:1px solid #000;font-weight:700}
${S} ${PRIMARY}{background:linear-gradient(180deg,#c42a1c 0%,#8e1309 48%,#6a0c05 52%,#8a160b 100%);color:#ffe9a8;border:2px solid #d4a640;border-radius:7px;box-shadow:0 0 0 1px #000,inset 0 1px 0 rgba(255,220,160,.45),inset 0 -2px 0 rgba(0,0,0,.35),0 4px 10px -4px #000;font-family:var(--f-display);font-weight:700;letter-spacing:.04em;text-shadow:0 1px 0 #000}
${S} ${PRIMARY}:hover{filter:brightness(1.18)}
${S} ${PRIMARY}:active{transform:translateY(1px);filter:brightness(.92)}
${S} ${STONE}{background:linear-gradient(180deg,#3d3427,#211b12);color:#f1dfae;border:1px solid #8a6a2a;border-radius:7px;box-shadow:0 0 0 1px #000,inset 0 1px 0 rgba(255,230,170,.18);text-shadow:0 1px 0 #000}
${S} ${STONE}:hover{border-color:#ffc93c;color:#fff2c4}
${S} :is(.btn,.btn.primary)[disabled]{filter:grayscale(.75) brightness(.7)}
${S} :is(.chip,.seg button,.uchip,#view-launch .seg button){background:linear-gradient(180deg,#2c2318,#1a150e);color:var(--fg);border-color:#5e4720}
${S} :is(.chip[aria-pressed="true"],.seg button[aria-pressed="true"],#view-launch .seg button[aria-pressed="true"]){background:linear-gradient(180deg,#5a4214,#33240a);border-color:#ffc93c;color:#fff2c4;box-shadow:0 0 0 1px #000,inset 0 1px 0 rgba(255,236,170,.3),inset 0 -2px 6px rgba(0,0,0,.45)}
${S} .ccard{background:linear-gradient(180deg,#261e13,#15110b)}
${S} :is(input:not([type]),input[type="text"],input[type="number"],select,textarea,.name-input,#view-launch .lvform input){background:#0d0a07;color:#f6ebcf;border:1px solid #6e5426;box-shadow:inset 0 2px 6px rgba(0,0,0,.8)}
${S} .date{background:linear-gradient(180deg,#2a2116,#17120c);border-color:#6e5426}
${S} .savebar{background:var(--fx-noise),linear-gradient(180deg,#241b10,#120d08);border-top:2px solid var(--fx-frame);box-shadow:0 -1px 0 #000,0 -12px 30px rgba(0,0,0,.6)}
${S} #fd-nav{background:var(--fx-noise),linear-gradient(90deg,#110c07,#1d160d);border-right:2px solid var(--fx-frame);box-shadow:1px 0 0 #000}
${S} #fd-nav .fd-h b{font-family:var(--f-display);color:#ffc93c;letter-spacing:.04em;font-weight:700}
${S} #fd-nav .fd-pages>li>a span{font-family:var(--f-display);color:#f3dfa6;font-weight:600}
${S} #fd-nav .fd-pages>li.on>a{background:linear-gradient(90deg,rgba(255,201,60,.2),rgba(255,201,60,.04));box-shadow:inset 0 0 0 1px rgba(255,201,60,.35)}
${S} #fd-nav .fd-secs a.act{color:#ffd451}
${S} .hero-art{border:3px solid var(--fx-frame);border-radius:9px;box-shadow:0 0 0 1px #000,inset 0 0 0 1px #000,0 24px 50px -24px #000}
${S} .hero-art svg{filter:sepia(.28) saturate(1.2) contrast(1.06)}
${S} .toast{background:var(--fx-noise),linear-gradient(180deg,#f3e4bb,#d8bf88);color:#2b1906;border:2px solid #7a5a22;box-shadow:0 0 0 1px #000,0 10px 30px rgba(0,0,0,.6);font-family:var(--f-display);font-weight:700}
${S} .toast :is(a,button){color:#7a1f0a}
${S} th{color:#ffd451;font-family:var(--f-display)}
${S} #wk-bub{background:var(--fx-noise),linear-gradient(180deg,#f3e4bb,#dcc490);color:#2b1906;border:2px solid #7a5a22;box-shadow:0 0 0 1px #000,0 22px 50px -12px rgba(0,0,0,.7)}
${S} #wk-bub .wk-hd{color:#7a1f0a}
${S} #wk-bub .wk-hd small,${S} #wk-bub .wk-ic{color:#6b4a1c}
${S} #wk-bub .wk-ic:hover{background:rgba(0,0,0,.08);color:#2b1906}
${S} #wk-bub .wk-xp{background:#2a1a08}
${S} #wk-bub .wk-txt .typed::after{background:#7a1f0a}
${S} .wk-big{color:#7a1f0a;text-shadow:none}
${S} .wk-ask{color:#c9a24a}
${S} #view-plan .rc{background:linear-gradient(180deg,rgba(255,214,140,.07),rgba(0,0,0,.15));box-shadow:inset 0 0 0 1px rgba(138,106,42,.45)}
${S} #view-plan .rc-list li{background:rgba(0,0,0,.35)}
${S} #view-plan .rc .roll{color:#ffd451;text-shadow:0 1px 0 #000}
${S} .wk-ask:hover,${S} .wk-ask:focus-visible{color:#ffd451;background:radial-gradient(circle at 50% 35%,#4a3a1a,#1d1509);border-color:#8a6a2a}
`;
const st = document.createElement("style"); st.id = "fx-style"; st.textContent = CSS;
(document.head || root).appendChild(st);
root.style.setProperty("--fx-noise", svgUrl(NOISE));
const CORNER = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><g transform="ROT"><path d="M3 31V10a7 7 0 0 1 7-7h21" fill="none" stroke="#1a1006" stroke-width="4.2" stroke-linecap="round"/><path d="M3 31V10a7 7 0 0 1 7-7h21" fill="none" stroke="#d9ac4b" stroke-width="2.2" stroke-linecap="round"/><path d="M7.5 29V11.5a4 4 0 0 1 4-4H29" fill="none" stroke="#f6dc94" stroke-width=".8" stroke-linecap="round" opacity=".55"/><path d="M10 10l3.2-3.2 3.2 3.2-3.2 3.2z" fill="#f2cf72" stroke="#1a1006" stroke-width="1"/><path d="M14 17c3-.4 4.4-2 4-5" fill="none" stroke="#d9ac4b" stroke-width="1.2" stroke-linecap="round"/></g></svg>';
[["tl", ""], ["tr", "rotate(90 17 17)"], ["br", "rotate(180 17 17)"], ["bl", "rotate(270 17 17)"]].forEach(([k, r]) => root.style.setProperty("--fx-c-" + k, svgUrl(CORNER.replace("ROT", r))));
function loadFonts(){
  if (document.getElementById("fx-fonts")) return;
  const l = document.createElement("link"); l.id = "fx-fonts"; l.rel = "stylesheet";
  l.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cinzel+Decorative:wght@700&display=swap";
  document.head.appendChild(l);
}
if (root.dataset.skin === "classic") loadFonts();

/* ---------- Sound: every effect is synthesized, nothing is sampled ---------- */
const Snd = (() => {
  let ctx = null, master = null, noiseBuf = null;
  function ac(){
    if (!ctx){ const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); master = ctx.createGain(); master.gain.value = .5; const comp = ctx.createDynamicsCompressor(); master.connect(comp); comp.connect(ctx.destination); }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function tone(f, t, dur, type, vol, f2){
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || "sine"; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .008); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + .03);
  }
  function noise(t, dur, vol, type, f, q, f2){
    if (!noiseBuf){ noiseBuf = ctx.createBuffer(1, ctx.sampleRate * .8, ctx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
    const s = ctx.createBufferSource(); s.buffer = noiseBuf;
    const fl = ctx.createBiquadFilter(); fl.type = type || "bandpass"; fl.frequency.setValueAtTime(f || 1200, t); if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur); fl.Q.value = q || 1;
    const g = ctx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(master); s.start(t); s.stop(t + dur + .03);
  }
  const bell = (f, t, dur, vol) => { tone(f, t, dur, "sine", vol); tone(f * 2.01, t, dur * .6, "sine", vol * .35); tone(f * 3.02, t, dur * .35, "sine", vol * .15); };
  const FX = {
    click(t){ tone(540, t, .05, "triangle", .3, 320); noise(t, .035, .2, "bandpass", 2600, 2.5); },
    page(t){ noise(t, .24, .32, "bandpass", 800, .9, 3400); noise(t + .06, .14, .14, "highpass", 4200, .7); },
    open(t){ tone(170, t, .14, "triangle", .42, 85); noise(t, .1, .22, "lowpass", 700, .8); },
    toggle(t){ tone(660, t, .06, "square", .08, 880); tone(990, t + .045, .1, "triangle", .2); },
    pop(t){ tone(520, t, .09, "sine", .3, 980); },
    whoosh(t){ noise(t, .42, .22, "bandpass", 380, 1.4, 2600); },
    blip(t){ const f = 560 + Math.random() * 260; tone(f, t, .045, "square", .045, f * 1.06); tone(f * 1.5, t, .04, "sine", .05); },
    quest(t){ [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => bell(f, t + i * .085, .7, .2)); },
    coin(t){ bell(1568, t, .25, .16); bell(2093, t + .07, .4, .14); },
    error(t){ tone(220, t, .16, "square", .09, 180); tone(160, t + .14, .26, "square", .09, 130); },
    gong(t){ [98, 196, 294.5, 392.6, 588].forEach((f, i) => tone(f, t, 2 - i * .25, "sine", .3 / (i + 1))); noise(t, .1, .14, "lowpass", 900); },
    dice(t){ for (let i = 0; i < 8; i++){ const tt = t + i * .075 + Math.random() * .03; noise(tt, .035, .28, "bandpass", 1800 + Math.random() * 2600, 3); tone(260 + Math.random() * 380, tt, .03, "triangle", .1); } bell(1318.5, t + .7, .5, .12); },
    ding(t){ [659.25, 783.99, 987.77, 1318.5].forEach((f, i) => bell(f, t + i * .06, 1.4, .17)); bell(1975.5, t + .32, 1.6, .12); noise(t + .25, 1.1, .05, "highpass", 6000, .5); }
  };
  let last = 0;
  return {
    play(name, force){
      if (!force && !soundOn()) return;
      const c = ac(); if (!c || !FX[name]) return;
      const now = c.currentTime; if (name !== "blip" && now - last < .03) return; if (name !== "blip") last = now;
      try { FX[name](now + .005); } catch(e){}
    },
    unlock(){ ac(); }
  };
})();
function skinOn(){ return root.dataset.skin === "classic"; }
function soundOn(){ return ls.get(K.snd) !== "off"; }
function setSkin(on){
  if (on){ root.dataset.skin = "classic"; loadFonts(); } else delete root.dataset.skin;
  ls.set(K.skin, on ? "classic" : null);
  const m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", on ? "#0b0907" : "#0e1120");
  mount();
  if (on) Snd.play("gong"); else Snd.play("toggle");
}
function setSound(on){ ls.set(K.snd, on ? null : "off"); mount(); if (on) Snd.play("toggle", true); }

/* Classic skin: UI sounds on click */
document.addEventListener("click", ev => {
  if (!skinOn() || Tour.active) return;
  const t = ev.target.closest('.tab, #fd-nav a, summary, button, a[href], [role="button"], input[type="checkbox"], input[type="radio"], .ccard');
  if (!t || t.closest("[data-fx-ctl]") || t.closest("#wk-bub") || t.closest(".wk-ask")) return;
  if (t.matches(":disabled")) return Snd.play("error");
  if (t.matches(".tab") || t.closest("#fd-nav a[data-page]")) return Snd.play("page");
  if (t.closest("#fd-nav")) return Snd.play("click");
  if (t.matches("summary")) return Snd.play("open");
  Snd.play("click");
}, true);
function toastSound(msg){
  const s = String(msg || "");
  if (/copied|copy/i.test(s)) Snd.play("coin");
  else if (/couldn|can't|cannot|failed|error|offline|missing|pick a|add your|need/i.test(s)) Snd.play("error");
  else if (/rolled/i.test(s)) Snd.play("pop");
  else if (/saved|confirmed|in with|level|withdrawn|updated|locked/i.test(s)) Snd.play("quest");
  else Snd.play("pop");
}

/* ---------- Loading-screen tips (classic look only) ---------- */
const TIPS = [
  "Horde and Alliance can never group, on any ruleset. Agree on a faction before anyone reserves a name.",
  "Characters can't move between rulesets later, so lock the ruleset in before names open on Oct 27.",
  "Name reservations run Oct 27 to Nov 3: up to three characters each, first come, first served.",
  "The Heroic Pack is needed for early name reservation and the Skyborne race, and each one comes with an Invite-A-Friend code.",
  "Launch is Nov 4 at 3 PM PST. Pick a starting zone with the party so nobody runs across the world alone.",
  "The level cap is 60 and dungeons don't scale. Five players clear them; four makes for a long night.",
  "There's no flying here. Plan your routes, and your flight paths, like it's the old days.",
  "Dual spec unlocks at 40, so choose a spec you'd enjoy leveling with, not just the one you'd raid in.",
  "Dibs tells the planner you're set on a class. It will always slot you as that class.",
  "Won't play keeps a class off your plate. Suggestions will never push you toward it.",
  "Two clicks to anywhere: pick a page in the Legend, then a section.",
  "Every section has a small lantern button. Tap it and I'll explain that section.",
  "Copy the plan for Discord from the Game plan tab. It reads well on a phone, too.",
  "Confirm the lineup on the Game plan. It locks once everyone in the party has confirmed.",
  "Too many healers? The Role call on the Game plan settles it with a roll, the old-fashioned way.",
  "Your vote link moves your ballot to another device. Keep it to yourself."
];
let tipI = Math.floor(Math.random() * TIPS.length);
function renderTip(advance){
  if (advance) tipI = (tipI + 1) % TIPS.length;
  document.querySelectorAll("[data-fx-tip]").forEach(el => { el.innerHTML = `<b>Tip</b>${TIPS[tipI]}`; });
}
document.addEventListener("click", ev => { if (skinOn() && ev.target.closest(".tab, #fd-nav a[data-page]")) renderTip(true); });

/* ---------- Controls (hero and legend) ---------- */
function mount(){
  renderTip(false);
  document.querySelectorAll("[data-fx-ctl]").forEach(el => {
    const sk = skinOn(), sn = soundOn();
    el.innerHTML = `<button type="button" class="fx-b" data-fx="page">${ICON.page}<span>Tour this page</span></button>`
      + `<button type="button" class="fx-b" data-fx="tour">${ICON.lantern}<span>Full site tour</span></button>`
      + `<button type="button" class="fx-b" data-fx="skin" aria-pressed="${sk}">${ICON.shield}<span>Classic 2005 look</span><i class="sw" aria-hidden="true"></i></button>`
      + `<button type="button" class="fx-b" data-fx="snd" aria-pressed="${sn}" aria-label="Sounds ${sn ? "on" : "off"}">${sn ? ICON.sound : ICON.mute}<span>Sounds</span><i class="sw" aria-hidden="true"></i></button>`;
  });
}
document.addEventListener("click", ev => {
  const b = ev.target.closest("[data-fx-ctl] [data-fx]"); if (!b) return;
  Snd.unlock();
  const a = b.dataset.fx;
  if (a === "skin") setSkin(!skinOn());
  else if (a === "snd") setSound(!soundOn());
  else if (a === "tour"){ document.body.classList.remove("fd-open"); Tour.start(); }
  else if (a === "page"){ document.body.classList.remove("fd-open"); Tour.startPage(); }
});

/* ---------- Section guides: what Wick says about every section of every tab ---------- */
const TABS = { ballot:"My ballot", results:"Party board", guide:"Field guide", plan:"Game plan", launch:"Launch guide" };
const TAB_ORDER = ["ballot", "results", "plan", "launch", "guide"];
const OFFER = {
  ballot:["Want a quick walk through your ballot? Seven stops, one minute.", "Quick tour of your ballot?"],
  results:["First time on the Party board? I can walk you through it.", "Quick tour of the Party board?"],
  plan:["First time on the Game plan? I can walk you through it.", "Quick tour of the Game plan?"],
  launch:["First time in the Launch guide? Want the quick version?", "Quick tour of the Launch guide?"],
  guide:["First time in the Field guide? Want the quick version?", "Quick tour of the Field guide?"]
};
const NOTES = {
  ballot:[
    [/^Your name$/, "Your name shows next to your picks on the party board, and only people who've voted can see it. Nicknames welcome. I go by Wick, legally."],
    [/Rank the classes/, "Tap up to five classes in the order you'd play them. Your #1 gets 5 points, your #5 gets 1. Each pick can take up to two specs, and a Dibs if you're set on it."],
    [/^Won't play$/, "Classes you'd rather not touch. Suggestions will never push you toward them, and the party can see them on the board, so nobody's surprised."],
    [/Faction and playstyle/, "Horde or Alliance, and how much you're here for PvP. The two factions can never group, so this is the one to settle first."],
    [/Ruleset$/, "Forever has no realms, just rulesets, and you can only group on the same one. Mark every ruleset you'd play and star your favorite."],
    [/Roles you'd fill/, "Main is what you want to play. Can flex is what you'd do if the party needs it. The planner fits one tank and one healer per five, so flex generously."],
    [/Race$/, "Races that can play your #1 pick. Where you start matters if you want to level together from the very first quest."],
    [/^Heroic Pack$/, "Yes, maybe or no on the Heroic Pack. It's needed for early name reservation and the Skyborne race, and each one comes with an Invite-A-Friend code."],
    [/^Character names$/, "Up to three name ideas for reservation week, Oct 27 to Nov 3. Mark one Reserved once you've grabbed it, so nobody chases the same name."],
    [/Professions$/, "Up to two professions, once for your #1 or for each class you ranked. The game plan spots gaps and doubles, like two blacksmiths and no alchemist."],
    [/Schedule and pace/, "Days, times, hours a week and how fast you level. This is how the plan finds the night most of you can actually play."],
    [/^Loot rule$/, "How drops get split. Agree before the first dungeon and spare the party an argument over the first shiny sword."],
    [/Start over or withdraw/, "Start over clears your draft. Withdraw takes your ballot off the board entirely, and it asks twice, because I care."]
  ],
  results:[
    [/Where we're landing/, "The headline: faction, ruleset, playstyle, top classes, best night and launch night, from every ballot so far."],
    [/Everyone's picks/, "Every ballot by name, ranked 1st to 5th. A star means dibs, and won't-play classes sit on the far right."],
    [/What could change/, "Suggestions that would make the party work better, like a crowded role, a doubled class or a schedule gap."],
    [/Suggested party/, "The planner's lineup: one ranked class each, in a role you said you'd play, with one tank and one healer per five."],
    [/What the party brings/, "The buffs and tools the suggested party covers, like resurrection, crowd control and dispels, and anything it's missing."],
    [/Gear overlap/, "Armor types in the suggested party. Fewer people sharing an armor type means fewer loot fights."],
    [/Class standings/, "Points per class across every ballot. A 1st-place pick is worth 5, a 5th is worth 1."],
    [/^Faction$/, "Where everyone leans, from Horde for sure to Alliance for sure. Your own answer is marked."],
    [/PvE/, "How the group splits between dungeons and quests on one side and PvP on the other."],
    [/Rulesets people would play/, "How many of you would play each ruleset, with favorites counted separately."],
    [/Role coverage/, "Who can tank, heal and deal damage, as main or flex. A dungeon wants one tank, one healer and three damage."],
    [/When we can play/, "Who's free when. The outlined cell is the best slot, and the gold dot is you."],
    [/^Races$/, "The races everyone picked, plus who's buying the Heroic Pack for Skyborne."],
    [/^Professions$/, "Professions for each person's slotted class. Dashed means nobody has it yet."]
  ],
  guide:[
    [/Key dates/, "Every date that matters, from the beta to raids. The highlighted one is what's coming up next."],
    [/How Forever works/, "The ground rules in one list: rulesets instead of realms, no cross-faction groups, level 60 with no flying, camping and the legacy system."],
    [/^Classes$/, "All nine classes, their roles and what changed in the beta. Worth a skim before you rank."],
    [/^(Warrior|Paladin|Hunter|Rogue|Priest|Shaman|Mage|Warlock|Druid)$/, "Roles, specs and the biggest beta changes for this class. The launch guide has every change."],
    [/Race and class combos/, "Which races can play which classes, so your race and your #1 pick actually match."],
    [/^Sources$/, "Where all of this comes from. Beta details can still change before launch."]
  ],
  plan:[
    [/short version/, "The whole plan in five lines, plus one-tap copies for Discord and a calendar file for your group nights."],
    [/^Role call$/, "When more of you want to heal or tank than a party of five has room for, settle it here. Roll for it or flex. Everyone keeps their pick; this only decides the suggested party."],
    [/^Decisions/, "Every big call with a status: settled, leaning or open. The open ones need a conversation."],
    [/Adjustments/, "The changes that would help the party most, ranked by impact, with who needs to act."],
    [/Proposed lineup/, "The suggested party with each person's class, role and what they bring. Confirm it here; it locks once everyone has."],
    [/Sample parties/, "Three ways the party could look, each with what it gains and what it misses. Handy when two of you want the same role."],
    [/When to play/, "The best group nights and how many of you are free for each."],
    [/Your plan/, "Just you: your slot, race, starting zone, names and what's new for your class."],
    [/happens next/, "The road from here to raids, and what to do at each stop."]
  ],
  launch:[
    [/Before Oct 27/, "Your party's pre-launch checklist, built from the ballots. Green is done; everything else says what's left."],
    [/^The party$/, "Who's playing what, where they start, Heroic Pack, names, level and time zone, all in one table."],
    [/^Names$/, "How name reservation works, plus everyone's name ideas. It's first come, first served, so keep a backup."],
    [/Where you'll start/, "Starting zones by race, and where the party can meet up if you start apart."],
    [/What's new for your classes/, "The beta changes for the classes in your party."],
    [/^Every class$/, "Changes for all nine classes. Tap one to open it."],
    [/Levels and dungeons/, "Log your level after each session and see which dungeons fit the party right now."],
    [/^All dungeons$/, "Every dungeon by level range. Filter by side to see what's close to home."],
    [/Professions and campfires/, "Each profession's campfire buff and who in the party has it."],
    [/Costs and milestones/, "What costs what and when, from the Heroic Pack to riding at 40 and 60."],
    [/Raids and PvP/, "The launch raids and battlegrounds, their sizes, and how many more players you'd need for each raid."],
    [/Rulesets, explained/, "Every ruleset in a sentence, so the vote means something."],
    [/^Sources$/, "Where the launch guide's facts come from, and when they were last checked."]
  ]
};
const STOPS = {
  ballot:[/^Your name$/, /Rank the classes/, /Faction and playstyle/, /Ruleset$/, /Roles you'd fill/, /Race$/, /Professions$/, /Schedule and pace/],
  results:[/Where we're landing/, /Everyone's picks/, /What could change/, /Suggested party/, /What the party brings/, /Role coverage/, /When we can play/],
  guide:[/Key dates/, /How Forever works/, /^Classes$/, /Race and class combos/, /^Sources$/],
  plan:[/short version/, /^Role call$/, /^Decisions/, /Adjustments/, /Proposed lineup/, /Sample parties/, /When to play/, /Your plan/, /happens next/],
  launch:[/Before Oct 27/, /^The party$/, /^Names$/, /Where you'll start/, /What's new for your classes/, /Levels and dungeons/, /Costs and milestones/, /Raids and PvP/]
};
const LOCKED = {
  results:"The party board unlocks once you've voted. Then you'll see everyone's picks by name and the party that fits best. No peeking. I tried.",
  plan:"The game plan fills in once you've voted: decisions, a lineup to confirm and sample parties. Cast your ballot and I'll show you around."
};
const noteFor = (tab, label) => { const hit = (NOTES[tab] || []).find(([re]) => re.test(label)); return hit ? hit[1] : null; };

/* ---------- Wick's tour ---------- */
const Tour = {
  active:false, i:0, steps:[], cfg:{}, els:null, typing:null, lastTarget:null,
  init(cfg){ this.cfg = cfg || {}; },
  state(){ const c = this.cfg; return { voted: !!(c.voted && c.voted()), phone: innerWidth < 980, small: innerWidth < 640 }; },
  build(){
    if (this.els) return this.els;
    const dim = document.createElement("div"); dim.id = "wk-dim"; dim.style.display = "none";
    const spot = document.createElement("div"); spot.id = "wk-spot"; spot.className = "empty";
    const wk = document.createElement("div"); wk.id = "wk"; wk.innerHTML = WICK;
    const bub = document.createElement("div"); bub.id = "wk-bub"; bub.setAttribute("role", "dialog"); bub.setAttribute("aria-live", "polite"); bub.setAttribute("aria-label", "Tour guide");
    document.body.append(dim, spot, wk, bub);
    dim.addEventListener("click", () => { if (this.active && this.typing) this.finishTyping(); });
    bub.addEventListener("click", ev => {
      const b = ev.target.closest("button");
      if (!b){ if (ev.target.closest(".wk-txt") && this.typing) this.finishTyping(); return; }
      const a = b.dataset.a;
      if (a === "next") this.next(); else if (a === "back") this.go(this.i - 1); else if (a === "close") this.end(false);
      else if (a === "mute"){ setSound(!soundOn()); this.renderHead(); }
      else if (a === "start"){ Snd.unlock(); const o = this.peekOpts; this.peeking = false; if (o) o.onStart(); }
      else if (a === "later"){ const o = this.peekOpts; if (o && o.onLater) o.onLater(); this.hide(); }
      else if (a === "finish-go"){ const g = this.finishGo; this.end(true); if (g) g(); }
      else if (a === "done") this.end(true);
      else if (a === "pagetour"){ this.end(true); setTimeout(() => this.startPage(), 260); }
      else if (a === "nextpage"){ const t = b.dataset.tab; this.end(true); setTimeout(() => this.startPage(t), 260); }
    });
    document.addEventListener("click", ev => { if (this.peeking && !ev.target.closest("#wk-bub, #wk, [data-fx-ctl]")){ const o = this.peekOpts; if (o && o.onLater) o.onLater(); this.hide(); } }, true);
    wk.addEventListener("click", () => { if (wk.classList.contains("peek")){ Snd.unlock(); const o = this.peekOpts; this.peeking = false; if (o) o.onStart(); } });
    addEventListener("resize", () => this.reflow());
    addEventListener("scroll", () => this.reflow(), { passive:true });
    document.addEventListener("keydown", ev => {
      if (!this.active) return;
      if (ev.key === "Escape"){ ev.preventDefault(); this.end(false); }
      else if (ev.key === "ArrowRight" || ev.key === "Enter"){ if (ev.target.closest && ev.target.closest("#wk-bub button") && ev.key === "Enter") return; ev.preventDefault(); this.next(); }
      else if (ev.key === "ArrowLeft"){ ev.preventDefault(); if (this.i > 1) this.go(this.i - 1); }
    });
    this.els = { dim, spot, wk, bub };
    return this.els;
  },
  mood(m){ const wk = this.els.wk; wk.classList.remove("happy", "wow"); if (m) wk.classList.add(m); },
  anim(name){ const wk = this.els.wk; wk.classList.remove(name); void wk.offsetWidth; wk.classList.add(name); setTimeout(() => wk.classList.remove(name), 1100); },
  makeSteps(){
    const s = this.state();
    return [
      { center:true, mood:"happy", go:"Lead on!", alt:"Not now",
        text:"Hi! I'm Wick, your lantern. Seven quick stops and you'll know your way around. I promise not to set anything on fire. Probably." },
      { target:".tabs", text: s.phone
          ? "Five tabs, one tap each, and no loading screens. The Legend button jumps to any section, so nothing here is more than two taps away."
          : "Five tabs, one click each, and no loading screens. The Legend on the left jumps to any section, so nothing here is more than two clicks away." },
      { target:"#nextup", text:"This button always knows your next step: vote, confirm the lineup, reserve names. It's smarter than me. Rude, but true." },
      { tab:"ballot", target:["#view-ballot .ranking", "#view-ballot .step"], text: s.voted
          ? "Your ballot lives here. Rerank classes, change faction or schedule, add character names. One tap on Save and you're done."
          : "Start here: rank up to five classes you'd actually play, then one tap on Save. Nobody sees anyone's picks until they've voted, so be honest." },
      { tab:"results", target:["#view-results .verdict", "#view-results .panel", "#view-results .locked", "#view-results"], text: s.voted
          ? "The party board: everyone's picks by name, where we're landing, and the party that fits best."
          : "The party board unlocks once you've voted. Then you'll see everyone's picks by name and the party that fits best. No peeking. I tried." },
      { tab:"plan", target:["#brief section", "#brief"], text:"The game plan turns votes into decisions, sample parties and a lineup everyone confirms. The launch guide next door has the checklist, names, dungeons and costs." },
      { target:["#fx-hero [data-fx='skin']", "#fd-nav [data-fx='skin']"], mood:"happy", text:"Feeling nostalgic? Flip on the Classic 2005 look for stone, gold and a sword cursor. Sounds toggle right next to it, and every section has a little lantern button if you want me again." },
      { finale:true }
    ];
  },
  peek(o){
    if (this.active) return;
    const { wk, bub } = this.build();
    this.peeking = true; this.peekOpts = o;
    wk.classList.add("peek"); this.mood("happy");
    const small = innerWidth < 640, bw = small ? innerWidth - 86 : Math.min(310, innerWidth - 24);
    bub.className = small ? "mini" : ""; bub.style.width = bw + "px";
    bub.innerHTML = small ? `<div class="wk-row"><span class="wk-q">${esc(o.mini)}</span><button type="button" class="wk-go" data-a="start">Show me</button><button type="button" class="wk-ic" data-a="later" aria-label="No thanks"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></div>` : `<div class="wk-hd">Wick<small>${esc(o.title)}</small><button type="button" class="wk-ic" data-a="mute" aria-label="${soundOn() ? "Mute sounds" : "Turn sounds on"}">${soundOn() ? ICON.sound : ICON.mute}</button></div><div class="wk-txt">${esc(o.text)}</div><div class="wk-row"><div class="wk-acts" style="margin-left:auto"><button type="button" class="wk-alt" data-a="later">Maybe later</button><button type="button" class="wk-go" data-a="start">Show me</button></div></div>`;
    const sb = document.getElementById("savebar"), sbH = sb && !sb.hidden ? sb.getBoundingClientRect().height : 0;
    const bh = bub.offsetHeight, ox = innerWidth - bw - 12 - (small ? 0 : 12), oy = Math.max(110, innerHeight - sbH - bh - 14);
    bub.style.transition = "none"; bub.style.translate = `${ox}px ${oy}px`; void bub.offsetWidth; bub.style.transition = "";
    const wx = small ? 6 : ox + bw - 100, wy = small ? oy + bh / 2 - 46 : oy - 88;
    wk.style.transition = "none"; wk.style.transform = `translate(${innerWidth + 20}px,${wy}px)`; void wk.offsetWidth; wk.style.transition = "";
    wk.style.transform = `translate(${wx}px,${wy}px)`;
    setTimeout(() => { if (this.peeking && this.peekOpts === o){ bub.classList.add("show"); this.anim("hop"); } }, 650);
  },
  offer(){
    if (this.active || ls.get(K.tour)) return;
    this.peek({ title:"First visit?", text:"Hi! I'm Wick. Want a one-minute tour? It has sound; the speaker mutes it.", mini:"New here? One-minute tour, with sound.",
      onStart:() => this.begin(), onLater:() => ls.set(K.tour, "1") });
  },
  offerPage(tab){
    if (!tab || this.active || this.peeking || !ls.get(K.tour) || ls.get("fpd-tab-" + tab) || !OFFER[tab]) return;
    if (this.cfg.current && this.cfg.current() !== tab) return;
    if (this.pageSteps(tab).length < 2) return;
    this.peek({ title:TABS[tab], text:OFFER[tab][0], mini:OFFER[tab][1],
      onStart:() => this.startPage(tab), onLater:() => ls.set("fpd-tab-" + tab, "1") });
  },
  onTab(tab){
    clearTimeout(this.offerT);
    if (this.peeking){ const o = this.peekOpts; if (o && o.onLater) o.onLater(); this.hide(); }
    this.syncSoon();
    if (this.active) return;
    this.offerT = setTimeout(() => this.offerPage(tab), 1100);
  },
  hide(){
    if (!this.els) return;
    const { wk, bub, spot, dim } = this.els;
    bub.classList.remove("show"); wk.classList.remove("peek");
    setTimeout(() => { if (!this.active && !this.peeking) bub.style.translate = "-9999px 0"; }, 400);
    wk.style.transform = `translate(${innerWidth + 40}px,${innerHeight * .4}px)`;
    spot.style.opacity = "0"; dim.style.display = "none"; this.peeking = false;
  },
  start(){ this.build(); Snd.unlock(); this.active = false; this.peeking = false; this.els.wk.classList.remove("peek"); this.begin(); },
  begin(){ this.run(this.makeSteps(), { kind:"site" }); },
  run(steps, meta){
    const { wk, bub, spot, dim } = this.build();
    this.peeking = false; wk.classList.remove("peek"); clearTimeout(this.offerT);
    this.meta = meta || { kind:"site" }; this.active = true; this.steps = steps;
    dim.style.display = ""; spot.style.opacity = "1"; bub.style.width = "";
    document.body.classList.remove("fd-open");
    this.go(0);
    clearInterval(this.watch); this.watch = setInterval(() => { if (!this.active) return clearInterval(this.watch); this.reflow(); }, 350);
  },
  findSection(re){
    const it = (this.cfg.sections ? this.cfg.sections() : []).find(x => re.test(x.label));
    return it ? (it.el.matches(".panel-head") && it.el.closest(".panel")) || it.el : null;
  },
  pageSteps(tab){
    const items = this.cfg.sections ? this.cfg.sections() : [], steps = [];
    (STOPS[tab] || []).forEach(re => {
      const it = items.find(x => re.test(x.label)), text = it && noteFor(tab, it.label);
      if (it && text) steps.push({ tab, label:it.label, target:() => this.findSection(re), text });
    });
    if (steps.length < 2 && LOCKED[tab]) return [{ tab, label:TABS[tab], target:["#view-" + tab + " .locked", "#view-" + tab], text:LOCKED[tab] }];
    return steps;
  },
  async startPage(tab){
    this.build(); Snd.unlock();
    tab = tab || (this.cfg.current && this.cfg.current()) || "ballot";
    ls.set("fpd-tab-" + tab, "1");
    if (this.cfg.current && this.cfg.current() !== tab && this.cfg.setTab){ this.cfg.setTab(tab); Snd.play("page"); await wait(180); }
    const steps = this.pageSteps(tab);
    if (!steps.length) return;
    if (steps.length > 1) steps.push({ finale:true });
    this.run(steps, { kind: steps.length > 1 ? "page" : "one", tab });
  },
  explain(label){
    const tab = (this.cfg.current && this.cfg.current()) || "ballot", text = noteFor(tab, label);
    if (!text) return;
    const re = new RegExp("^" + label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$");
    this.build(); Snd.unlock();
    this.run([{ tab, label, target:() => this.findSection(re), text }], { kind:"one", tab });
  },
  sync(){
    if (!this.cfg.sections || !this.cfg.current) return;
    const tab = this.cfg.current();
    for (const it of this.cfg.sections()){
      if (!it.el || !noteFor(tab, it.label)) continue;
      const h = it.el.matches("h2,h3,h4,.lbl") ? it.el : it.el.querySelector("h2, h3, h4, .lbl");
      if (!h || h.querySelector(".wk-ask")) continue;
      h.insertAdjacentHTML("beforeend", `<button type="button" class="wk-ask" data-label="${esc(it.label)}" aria-label="Ask Wick about ${esc(it.label)}" title="Ask Wick about this">${ICON.lantern}</button>`);
    }
  },
  syncSoon(){ clearTimeout(this.syncT); this.syncT = setTimeout(() => this.sync(), 120); },
  next(){ this.stopTyping(); if (this.meta && this.meta.kind === "one"){ this.end(true); return; } if (this.i < this.steps.length - 1) this.go(this.i + 1); },
  async go(i){
    if (i < 0 || i >= this.steps.length) return;
    const token = this.tok = (this.tok || 0) + 1;
    this.i = i; const step = this.steps[i]; const { wk, bub, spot } = this.els;
    this.stopTyping();
    bub.classList.remove("show");
    if (step.finale) return this.finale();
    if (step.tab && this.cfg.setTab && this.cfg.current && this.cfg.current() !== step.tab){ this.cfg.setTab(step.tab); Snd.play("page"); await wait(140); }
    if (token !== this.tok) return;
    const el = this.resolve(step.target);
    this.lastTarget = el; this.lastSel = step.target;
    if (el) await this.scrollTo(el);
    if (token !== this.tok) return;
    this.mood(step.mood || "");
    const pos = this.layout(el, step);
    Snd.play("whoosh"); this.trail();
    wk.style.transform = `translate(${pos.wx}px,${pos.wy}px)`;
    setTimeout(() => { if (token === this.tok) this.anim("land"); }, 520);
    await wait(reduce() ? 0 : 380);
    if (token !== this.tok) return;
    this.renderBubble(step);
    bub.style.translate = `${pos.bx}px ${pos.by}px`;
    requestAnimationFrame(() => bub.classList.add("show"));
    Snd.play("pop");
    this.type(step.text);
  },
  resolve(t){
    if (!t) return null;
    if (typeof t === "function"){ const el = t(); return el && el.getClientRects().length ? el : null; }
    for (const sel of [].concat(t)){
      for (const el of document.querySelectorAll(sel)){
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== "hidden") return el;
      }
    }
    return null;
  },
  fixed(el){ for (let n = el; n && n !== document.body; n = n.parentElement){ const p = getComputedStyle(n).position; if (p === "fixed") return true; } return false; },
  stickyH(){ const t = document.querySelector(".tabs"); return t ? t.getBoundingClientRect().height : 0; },
  async scrollTo(el){
    if (this.fixed(el)) return;
    const r = el.getBoundingClientRect(), small = innerWidth < 640;
    const top = this.stickyH() + 18, room = innerHeight - top - (small ? 240 : 220);
    const fits = r.top >= top && r.top + Math.min(r.height, room) <= innerHeight - (small ? 230 : 40);
    if (fits) return;
    let y = r.top + scrollY - top;
    if (el.matches(".tabs")) y = Math.max(0, el.offsetTop - 220);
    window.scrollTo({ top:Math.max(0, y), behavior: reduce() ? "auto" : "smooth" });
    let last = -1, same = 0;
    for (let k = 0; k < 60 && same < 3; k++){ await wait(30); if (Math.abs(scrollY - last) < 1) same++; else same = 0; last = scrollY; }
  },
  spotRect(el){
    if (!el) return null;
    const r = el.getBoundingClientRect(), pad = 8, small = innerWidth < 640;
    const top = Math.max(r.top - pad, 6), left = Math.max(r.left - pad, 6);
    const maxB = small ? innerHeight - 6 : innerHeight - 6;
    return { left, top, right: Math.min(r.right + pad, innerWidth - 6), bottom: Math.min(r.bottom + pad, maxB) };
  },
  layout(el, step){
    const { spot, bub } = this.els, small = innerWidth < 640;
    if (el && !el.isConnected) el = this.lastTarget = this.resolve(step.target);
    const s = this.spotRect(el);
    spot.classList.toggle("empty", !s);
    if (s){ Object.assign(spot.style, { left:s.left + "px", top:s.top + "px", width:(s.right - s.left) + "px", height:(s.bottom - s.top) + "px" }); }
    else Object.assign(spot.style, { left:"50%", top:"50%", width:"0px", height:"0px" });
    this.hole(s);
    // measure the bubble with this step's text
    this.renderBubble(step, true);
    const bw = bub.offsetWidth, bh = bub.offsetHeight, ww = small ? 72 : 88, wh = small ? 84 : 103;
    let bx, by;
    if (small){
      bx = 12; by = innerHeight - bh - 14;
      if (s && s.bottom > by - 8 && s.top > bh + 120){ by = Math.max(12, s.top - bh - 20); }
      return { bx, by, wx: 6, wy: by - wh + 18 };
    }
    if (!s){ bx = (innerWidth - bw) / 2 + 30; by = innerHeight / 2 - bh / 2; }
    else {
      const below = s.bottom + 16, above = s.top - bh - 16, right = s.right + ww + 16;
      if (s.right - s.left < 320 && s.left < 260 && right + bw < innerWidth - 12){ bx = right; by = Math.min(Math.max(12, s.top + 40), innerHeight - bh - 12); }
      else if (below + bh < innerHeight - 12){ bx = s.left + ww; by = below; }
      else if (above > 12){ bx = s.left + ww; by = above; }
      else { bx = Math.min(s.right - bw - 20, innerWidth - bw - 20); by = innerHeight - bh - 20; }
    }
    bx = Math.min(Math.max(bx, ww + 8), innerWidth - bw - 12);
    by = Math.min(Math.max(by, 12), innerHeight - bh - 12);
    return { bx, by, wx: bx - ww + 6, wy: by - wh * .45 };
  },
  reflow(){
    if (!this.active || !this.els || this.reflowing) return;
    this.reflowing = true;
    requestAnimationFrame(() => {
      this.reflowing = false;
      const step = this.steps[this.i]; if (!step || step.finale) return;
      if (this.lastSel && !(this.lastTarget && this.lastTarget.isConnected)) this.lastTarget = this.resolve(this.lastSel);
      const s = this.spotRect(this.lastTarget && this.lastTarget.isConnected ? this.lastTarget : null);
      if (!s) return;
      this.hole(s);
      const sp = this.els.spot; sp.style.transition = "none";
      Object.assign(sp.style, { left:s.left + "px", top:s.top + "px", width:(s.right - s.left) + "px", height:(s.bottom - s.top) + "px" });
      void sp.offsetWidth; sp.style.transition = "";
    });
  },
  hole(s){
    const d = this.els.dim;
    d.style.clipPath = s ? `polygon(evenodd,0 0,100% 0,100% 100%,0 100%,0 0,${s.left}px ${s.top}px,${s.right}px ${s.top}px,${s.right}px ${s.bottom}px,${s.left}px ${s.bottom}px,${s.left}px ${s.top}px)` : "none";
  },
  renderHead(){
    const h = this.els.bub.querySelector(".wk-hd"); if (!h) return;
    const m = h.querySelector('[data-a="mute"]'); if (m){ m.innerHTML = soundOn() ? ICON.sound : ICON.mute; m.setAttribute("aria-label", soundOn() ? "Mute sounds" : "Turn sounds on"); }
  },
  renderBubble(step, measureOnly){
    const { bub } = this.els, kind = (this.meta && this.meta.kind) || "site", i = this.i;
    const n = kind === "one" ? 1 : this.steps.length - 1, pct = Math.round(i / n * 100);
    const tag = kind === "one" ? esc(step.label) : kind === "page" ? `${TABS[this.meta.tab]} · ${i + 1} of ${n}` : `${i + 1} of ${n}`;
    bub.className = measureOnly ? "" : bub.className.replace(/\bfin\b/, "").trim();
    bub.innerHTML = `<div class="wk-hd">Wick<small>${tag}</small><button type="button" class="wk-ic" data-a="mute" aria-label="${soundOn() ? "Mute sounds" : "Turn sounds on"}">${soundOn() ? ICON.sound : ICON.mute}</button><button type="button" class="wk-ic" data-a="close" aria-label="End the tour"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></div>`
      + `<div class="wk-txt"><span class="full">${step.text}</span><span class="typed"></span></div>`
      + (kind === "one" ? `<div class="wk-row"><div class="wk-acts" style="margin-left:auto"><button type="button" class="wk-alt" data-a="pagetour">Tour this page</button><button type="button" class="wk-go" data-a="done">Got it</button></div></div>` :
        `<div class="wk-row"><div class="wk-xp" title="Tour XP"><i style="width:${pct}%"></i></div><div class="wk-acts">`
      + (step.alt ? `<button type="button" class="wk-alt" data-a="close">${step.alt}</button>` : (i > 0 ? `<button type="button" class="wk-alt" data-a="back">Back</button>` : ""))
      + `<button type="button" class="wk-go" data-a="next">${step.go || (i === n - 1 ? "Finish" : "Next")}</button></div></div>`);
    if (measureOnly) bub.querySelector(".typed").textContent = "";
  },
  type(text){
    const { bub, wk } = this.els;
    const out = bub.querySelector(".typed"); if (!out) return;
    if (reduce()){ out.textContent = text; return; }
    bub.classList.add("typing"); wk.classList.add("talk");
    let k = 0;
    const tick = () => {
      if (!this.typing) return;
      k += 1;
      const ch = text[k - 1];
      out.textContent = text.slice(0, k);
      if (k % 3 === 1 && /[a-z0-9]/i.test(ch || "")) Snd.play("blip");
      if (k >= text.length){ this.finishTyping(); return; }
      const d = /[.!?]/.test(ch) ? 210 : /[,:]/.test(ch) ? 110 : 19;
      this.typing = setTimeout(tick, d);
    };
    this.typing = setTimeout(tick, 60);
    this.fullText = text;
  },
  stopTyping(){ if (this.typing){ clearTimeout(this.typing); this.typing = null; } if (this.els){ this.els.bub.classList.remove("typing"); this.els.wk.classList.remove("talk"); } },
  finishTyping(){
    this.stopTyping();
    const out = this.els.bub.querySelector(".typed"); if (out && this.fullText) out.textContent = this.fullText;
  },
  trail(){
    if (reduce()) return;
    const wk = this.els.wk; let n = 0;
    const id = setInterval(() => {
      const r = wk.getBoundingClientRect();
      const sp = document.createElement("i"); sp.className = "wk-spark";
      sp.style.left = (r.left + r.width / 2 + (Math.random() * 20 - 10)) + "px"; sp.style.top = (r.top + r.height * .8) + "px";
      sp.style.setProperty("--dx", (Math.random() * 30 - 15) + "px"); sp.style.setProperty("--dy", (10 + Math.random() * 30) + "px");
      document.body.appendChild(sp); setTimeout(() => sp.remove(), 950);
      if (++n > 14) clearInterval(id);
    }, 45);
  },
  async pageFinale(){
    const { wk, bub, spot } = this.els, token = this.tok, tab = this.meta.tab;
    spot.classList.add("empty"); Object.assign(spot.style, { left:"50%", top:"50%", width:"0px", height:"0px" }); this.hole(null);
    const nextTab = TAB_ORDER[(TAB_ORDER.indexOf(tab) + 1) % TAB_ORDER.length];
    const n = this.steps.length - 1;
    bub.className = "fin";
    bub.innerHTML = `<div class="wk-hd">Wick<small>${TABS[tab]} explored</small><button type="button" class="wk-ic" data-a="close" aria-label="Close"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></div>`
      + `<div class="wk-big">${TABS[tab]} explored!</div><div class="wk-txt" style="margin-top:4px">Every section has a little lantern button if you want me again. I'll be right here. Glowing.</div>`
      + `<div class="wk-row"><div class="wk-xp"><i style="width:${Math.round((n - 1) / n * 100)}%"></i></div><div class="wk-acts"><button type="button" class="wk-alt" data-a="close">Close</button><button type="button" class="wk-go" data-a="nextpage" data-tab="${nextTab}">Tour the ${TABS[nextTab]}</button></div></div>`;
    const bw = Math.min(380, innerWidth - 24); bub.style.width = bw + "px";
    const bh = bub.offsetHeight, bx = (innerWidth - bw) / 2, by = Math.max(110, innerHeight / 2 - bh / 2 + 40);
    bub.style.translate = `${bx}px ${by}px`;
    const small = innerWidth < 640, ww = small ? 72 : 88;
    wk.style.transform = `translate(${innerWidth / 2 - ww / 2}px,${by - (small ? 92 : 112)}px)`;
    this.mood("happy"); Snd.play("whoosh");
    await wait(500); if (token !== this.tok) return;
    requestAnimationFrame(() => bub.classList.add("show"));
    await wait(350); if (token !== this.tok) return;
    const bar = bub.querySelector(".wk-xp i"); if (bar) bar.style.width = "100%";
    await wait(500); if (token !== this.tok) return;
    Snd.play("quest"); this.anim("hop");
    if (!reduce()){
      const r = wk.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const ring = document.createElement("i"); ring.className = "wk-ring"; ring.style.left = cx + "px"; ring.style.top = cy + "px"; document.body.appendChild(ring); setTimeout(() => ring.remove(), 1200);
      const plus = document.createElement("div"); plus.className = "wk-plus"; plus.textContent = "+50 XP"; plus.style.left = cx + "px"; plus.style.top = (r.top - 10) + "px"; document.body.appendChild(plus); setTimeout(() => plus.remove(), 1700);
    }
  },
  async finale(){
    if (this.meta && this.meta.kind === "page") return this.pageFinale();
    const { wk, bub, spot } = this.els, token = this.tok;
    spot.classList.add("empty"); Object.assign(spot.style, { left:"50%", top:"50%", width:"0px", height:"0px" }); this.hole(null);
    const voted = this.state().voted;
    this.finishGo = voted ? () => this.cfg.setTab && this.cfg.setTab("plan") : () => this.cfg.setTab && this.cfg.setTab("ballot");
    bub.className = "fin";
    bub.innerHTML = `<div class="wk-hd">Wick<small>Quest complete</small><button type="button" class="wk-ic" data-a="close" aria-label="Close"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></div>`
      + `<div class="wk-big">Tour complete!</div><div class="wk-txt" style="margin-top:4px">You now know everything I know. Which, to be fair, is mostly this website.</div>`
      + `<div class="wk-row"><div class="wk-xp"><i style="width:${Math.round((this.steps.length - 2) / (this.steps.length - 1) * 100)}%"></i></div><div class="wk-acts"><button type="button" class="wk-alt" data-a="close">Close</button><button type="button" class="wk-go" data-a="finish-go">${voted ? "Open the game plan" : "Cast my ballot"}</button></div></div>`;
    const bw = Math.min(380, innerWidth - 24); bub.style.width = bw + "px";
    const bh = bub.offsetHeight, bx = (innerWidth - bw) / 2, by = Math.max(110, innerHeight / 2 - bh / 2 + 40);
    bub.style.translate = `${bx}px ${by}px`;
    const small = innerWidth < 640, ww = small ? 72 : 88;
    wk.style.transform = `translate(${innerWidth / 2 - ww / 2}px,${by - (small ? 92 : 112)}px)`;
    this.mood("happy");
    Snd.play("whoosh");
    await wait(500); if (token !== this.tok) return;
    requestAnimationFrame(() => bub.classList.add("show"));
    await wait(350); if (token !== this.tok) return;
    const bar = bub.querySelector(".wk-xp i"); if (bar) bar.style.width = "100%";
    await wait(550); if (token !== this.tok) return;
    Snd.play("ding"); this.anim("spin");
    const r = wk.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    if (!reduce()){
      const ring = document.createElement("i"); ring.className = "wk-ring"; ring.style.left = cx + "px"; ring.style.top = cy + "px"; document.body.appendChild(ring); setTimeout(() => ring.remove(), 1200);
      const beam = document.createElement("i"); beam.className = "wk-beam"; beam.style.left = cx + "px"; document.body.appendChild(beam); setTimeout(() => beam.remove(), 1700);
      const plus = document.createElement("div"); plus.className = "wk-plus"; plus.textContent = "+250 XP"; plus.style.left = cx + "px"; plus.style.top = (r.top - 10) + "px"; document.body.appendChild(plus); setTimeout(() => plus.remove(), 1700);
      const colors = ["#ffd56a", "#C69B6D", "#F48CBA", "#AAD372", "#FFF468", "#3FC7EB", "#8f90f0", "#FF7C0A", "#3a95ff", "#ffffff"];
      for (let k = 0; k < 44; k++){
        const c = document.createElement("i"); c.className = "wk-conf";
        c.style.left = (Math.random() * 100) + "vw"; c.style.background = colors[k % colors.length];
        c.style.setProperty("--dx", (Math.random() * 160 - 80) + "px"); c.style.setProperty("--r", (Math.random() * 900 - 450) + "deg");
        c.style.animationDuration = (1.8 + Math.random() * 1.6) + "s"; c.style.animationDelay = (Math.random() * .35) + "s";
        document.body.appendChild(c); setTimeout(() => c.remove(), 4200);
      }
    }
    ls.set(K.tour, "1");
  },
  end(done){
    this.tok = (this.tok || 0) + 1;
    this.stopTyping();
    this.active = false; ls.set(K.tour, "1");
    if (!this.els) return;
    const { wk, bub, spot, dim } = this.els;
    bub.classList.remove("show"); spot.style.opacity = "0"; spot.classList.add("empty");
    this.mood("happy"); if (!done) Snd.play("toggle");
    wk.style.transform = `translate(${innerWidth + 60}px,${Math.max(40, innerHeight * .25)}px)`;
    setTimeout(() => { if (!this.active){ dim.style.display = "none"; Object.assign(spot.style, { left:"50%", top:"50%", width:"0px", height:"0px" }); } }, 350);
  }
};

/* ---------- Public API ---------- */
window.FX = {
  skinOn, soundOn, setSkin, setSound, mount,
  play: (n, force) => Snd.play(n, force),
  tour: Tour,
  init(cfg){
    Tour.init(cfg);
    mount();
    if (typeof window.toast === "function" && !window.toast.__fx){
      const t0 = window.toast;
      const w = function(msg){ if (skinOn() || Tour.active) toastSound(msg); return t0.apply(this, arguments); };
      w.__fx = true; window.toast = w;
    }
    if (!/^#vote=/.test(location.hash) && !(cfg && cfg.noOffer)){
      if (!ls.get(K.tour)) setTimeout(() => { if (!Tour.active) Tour.offer(); }, 1600);
      else setTimeout(() => { if (!Tour.active && !Tour.peeking) Tour.offerPage(cfg.current && cfg.current()); }, 1600);
    }
    const main = document.querySelector("main");
    if (main && window.MutationObserver) new MutationObserver(() => Tour.syncSoon()).observe(main, { childList:true, subtree:true });
    Tour.sync();
  },
  onTab(tab){ Tour.onTab(tab); },
  sync(){ Tour.sync(); }
};
document.addEventListener("click", ev => {
  const b = ev.target.closest(".wk-ask"); if (!b) return;
  ev.preventDefault(); ev.stopPropagation();
  Tour.explain(b.dataset.label);
}, true);
})();
