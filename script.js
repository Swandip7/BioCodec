/* ========= CONFIG: edit these ========= */
const SOCIAL = { scholar: "", github: "", linkedin: "", kaggle: "" }; // empty links are hidden

// Google Forms: create a form, click ⋮ > "Get pre-filled link" to find each entry.XXXX id.
// Replace FORM_ID and the entry ids. Field names on the left match the <input name="…"> in index.html.
const FORMS = {
  join: {
    action: "https://docs.google.com/forms/d/e/YOUR_JOIN_FORM_ID/formResponse",
    entries: { name: "entry.0000000001", email: "entry.0000000002", affiliation: "entry.0000000003", role: "entry.0000000004", message: "entry.0000000005" }
  },
  contact: {
    action: "https://docs.google.com/forms/d/e/YOUR_CONTACT_FORM_ID/formResponse",
    entries: { name: "entry.0000000011", email: "entry.0000000012", message: "entry.0000000013" }
  }
};

/* ========= DATA ========= */
const PUBS = [
  { t: "J", title: "Adaptive Digital Filtering and TreeSHAP Feature Selection for Non-Invasive Diabetes Classification from Photoplethysmography Signals", authors: "S. Singha, A. Chowdhury", venue: "Discover Artificial Intelligence, 2026", link: "" },
  { t: "C", title: "1D-CNN-Based Denoising of PPG Signals for Preserving Heart Rate Variability Information", authors: "S. Singha, A. Chowdhury, R. C. C. Cheung, M. H. Chowdhury", venue: "IEEE ICEIC, 2026 · oral presentation", link: "" },
  { t: "C", title: "MIT-BIH ECG Arrhythmia Multi-Class Classification Using AdamW-Optimized Deep Ensembles with SMOTE-Based Sampling", authors: "S. Singha, A. Saha, et al.", venue: "IEEE QPAIN, 2026 · oral presentation", link: "" },
  { t: "P", title: "MoWaveQFormer: A Motion-Conditioned Quality-Gated Transformer for Smartphone-Based PPG Heart Rate Estimation", authors: "S. Singha, R. B. Reza, S. R. Sabuj", venue: "arXiv:2609.16248, 2026", link: "https://arxiv.org/abs/2609.16248" },
  { t: "U", title: "BAFF-ECG: SNR-Conditioned ECG Denoising via Dirichlet Filter Fusion and Residual Gating", authors: "S. Singha, A. Chowdhury", venue: "Under review at Measurement", link: "" },
  { t: "U", title: "Non-Invasive Blood Glucose Estimation from Multi-Wavelength Photoplethysmography Using Adaptive Signal Quality Assessment and Statistical Feature Selection", authors: "S. Singha, A. Chowdhury", venue: "Under review at Health Information Science and Systems", link: "" },
  { t: "U", title: "Lightweight Domain-Adaptive SNR Estimation for 5G NR Channels via Scenario-Embedded Transfer Learning", authors: "S. Singha, A. Chowdhury", venue: "Under review at Arabian Journal for Science and Engineering", link: "" }
];
const LABEL = { J: "Journal", C: "Conf.", P: "Preprint", U: "Review" };

const PROJECTS = [
  { stat: "7.85", unit: "bpm MAE", name: "MoWaveQFormer", blurb: "Smartphone PPG heart-rate estimation.", more: "A motion-conditioned, quality-gated Transformer evaluated on a subject-independent split of BUT PPG v2.0. About 816K parameters and sub-3-ms latency make it suitable for on-device use.", tags: ["Transformer", "Wavelets", "Heart rate"] },
  { stat: "11.71", unit: "dB output SNR", name: "BAFF-ECG", blurb: "SNR-aware ECG denoising.", more: "A Bayesian filter-fusion framework: Dirichlet attention blends classical filters and a residual gate adapts to the estimated noise level. Cross-correlation with clean ECG reaches 0.917.", tags: ["ECG", "Filter fusion", "Gating"] },
  { stat: "27.88", unit: "dB SNR", name: "HRV-preserving PPG denoiser", blurb: "Clean signals that keep HRV intact.", more: "An attention-enhanced 1D-CNN encoder–decoder trained with an HRV-preserving loss, reaching 0.998 correlation on synthetic data. Presented at IEEE ICEIC 2026.", tags: ["1D-CNN", "PPG", "HRV"] },
  { stat: "90.91%", unit: "accuracy", name: "PPG diabetes screening", blurb: "Non-invasive screening from PPG.", more: "Adaptive filtering, signal-quality assessment and TreeSHAP feature selection give 0.915 ROC-AUC. A companion glucose-estimation study reaches R² = 0.410.", tags: ["TreeSHAP", "Glucose", "Screening"] },
  { stat: "150", unit: "studies", name: "ECG denoising review", blurb: "A PRISMA-guided systematic review.", more: "Finds a reconstruction–decision gap: 74% test only on synthetic noise, 79% use one lead and 73% never test clinical impact. Proposes a five-part reporting standard. Manuscript in preparation.", tags: ["PRISMA", "Review", "Reporting"] },
  { stat: "0.86", unit: "macro F1", name: "Arrhythmia ensembles", blurb: "MIT-BIH multi-class classification.", more: "AdamW-optimized deep ensembles with SMOTE balancing lift macro F1 from 0.74 to 0.86 over the baseline. Presented at IEEE QPAIN 2026.", tags: ["Ensembles", "SMOTE", "ECG"] }
];

/* ========= HELPERS ========= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

$("#yr").textContent = new Date().getFullYear();

/* nav */
const burger = $(".burger"), links = $("#links");
burger.addEventListener("click", () => { const o = links.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
links.addEventListener("click", e => { if (e.target.closest("a")) { links.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
const secs = $$("main section");
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$("#links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id && !a.classList.contains("cta")));
}), { rootMargin: "-45% 0px -50% 0px" });
secs.forEach(s => spy.observe(s));

/* social links */
$$("[data-link]").forEach(a => { const u = SOCIAL[a.dataset.link]; if (u) { a.href = u; a.target = "_blank"; a.rel = "noopener"; } else a.remove(); });

/* publications */
const pubs = $("#pubs");
function renderPubs(f = "all") {
  pubs.innerHTML = PUBS.filter(p => f === "all" || p.t === f).map((p, i) =>
    `<li class="glass" style="animation-delay:${i * 60}ms"><span class="tag ${p.t}">${LABEL[p.t]}</span><h3>${esc(p.title)}</h3><span class="m">${esc(p.authors)}</span><span class="m">${esc(p.venue)}${p.link ? ` · <a href="${p.link}" target="_blank" rel="noopener">Read</a>` : ""}</span></li>`).join("");
}
renderPubs();
$$(".chip").forEach(c => c.addEventListener("click", () => { $$(".chip").forEach(x => x.classList.remove("on")); c.classList.add("on"); renderPubs(c.dataset.f); }));

/* projects */
$("#projects-grid").innerHTML = PROJECTS.map(p =>
  `<button class="card glass proj" aria-expanded="false"><div class="top"><div class="stat">${p.stat}<small>${p.unit}</small></div><h3>${p.name}</h3><p>${p.blurb}</p></div><div class="more">${p.more}</div><span class="toggle">Details</span><div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div></button>`).join("");
$$(".proj").forEach(b => b.addEventListener("click", () => {
  const o = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", !o); $(".toggle", b).textContent = o ? "Details" : "Hide";
}));

/* gentle reveal */
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } }), { threshold: .12 });
$$("section:not(.hero) h2, section:not(.hero) .sub, .grid, .people, .pubs, .roles, .form, .about > *, .stats").forEach(el => { el.classList.add("rv"); rv.observe(el); });

/* ========= SIGNAL SCOPE ========= */
const cv = $("#wave"), ctx = cv.getContext("2d");
const noiseIn = $("#noise"), codecIn = $("#codec"), hrEl = $("#hr"), sqEl = $("#sq");
let W, H, DPR;
function size() { DPR = Math.min(devicePixelRatio || 1, 2); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0); }
size(); addEventListener("resize", size);

const BPM = 72, PERIOD = 60 / BPM, SPEED = 120; // px per second
const g = (x, m, s) => Math.exp(-((x - m) ** 2) / (2 * s * s));
function clean(t) { const p = ((t % PERIOD) + PERIOD) % PERIOD / PERIOD; return g(p, .2, .07) + .38 * g(p, .5, .09); }
function motion(t) { return Math.sin(t * 2.3) * .55 + Math.sin(t * 5.1 + 1) * .35 + Math.sin(t * .7) * .4 + (Math.sin(t * 1.3) > .6 ? Math.sin(t * 17) * .5 : 0); }
function hash(x) { const s = Math.sin(x * 12.9898) * 43758.5453; return s - Math.floor(s); }
function jitter(t) { return hash(Math.floor(t * 90)) - .5; }

function y(v) { return H * .72 - v * H * .5; }
function trace(fn, color, width, alpha) {
  ctx.beginPath();
  for (let x = 0; x <= W; x += 2) { const t = T + x / SPEED; const v = fn(t); x ? ctx.lineTo(x, y(v)) : ctx.moveTo(x, y(v)); }
  ctx.strokeStyle = color; ctx.lineWidth = width; ctx.globalAlpha = alpha; ctx.lineJoin = "round"; ctx.stroke(); ctx.globalAlpha = 1;
}
let T = 0, last = performance.now(), visible = true;
new IntersectionObserver(e => visible = e[0].isIntersecting).observe(cv);

function frame(now) {
  requestAnimationFrame(frame);
  if (!visible) { last = now; return; }
  T += reduce ? 0 : (now - last) / 1000; last = now;
  const n = noiseIn.value / 100, on = codecIn.checked;
  ctx.clearRect(0, 0, W, H);
  ctx.strokeStyle = "rgba(42,111,176,.08)"; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let k = 1; k < 6; k++) { ctx.beginPath(); ctx.moveTo(0, k * H / 6); ctx.lineTo(W, k * H / 6); ctx.stroke(); }
  const noisy = t => clean(t) + n * (1.1 * motion(t) + .5 * jitter(t));
  const denoised = t => clean(t) + (n * .06) * motion(t) * (n > .85 ? 2.5 : 1);
  trace(noisy, "#f08a5d", 2, on ? .5 : 1);
  if (on) { ctx.shadowColor = "rgba(23,184,162,.6)"; ctx.shadowBlur = 12; trace(denoised, "#17b8a2", 3.5, 1); ctx.shadowBlur = 0; }
  // scan line
  const sx = (T * SPEED) % W; const gr = ctx.createLinearGradient(sx - 60, 0, sx, 0); gr.addColorStop(0, "rgba(90,209,238,0)"); gr.addColorStop(1, "rgba(90,209,238,.12)");
  ctx.fillStyle = gr; ctx.fillRect(sx - 60, 0, 60, H);
}
requestAnimationFrame(frame);

setInterval(() => {
  const n = noiseIn.value / 100, on = codecIn.checked;
  const err = on ? n * 1.5 : n * 22;
  hrEl.textContent = Math.round(BPM + (Math.random() - .5) * 2 * err);
  const q = n < .35 ? "High" : n < .7 ? "Medium" : "Low";
  sqEl.textContent = on && n > .85 ? "Low · segment gated" : q;
}, 600);

/* ========= FORMS (Google Forms backend) ========= */
$$(".form").forEach(form => form.addEventListener("submit", async e => {
  e.preventDefault();
  const st = $(".status", form), cfg = FORMS[form.dataset.kind], btn = $("button", form);
  st.className = "status";
  const bad = $$("[required]", form).filter(f => !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value)));
  $$("input,textarea", form).forEach(f => f.classList.toggle("invalid", bad.includes(f)));
  if (bad.length) { st.textContent = "Fill in the highlighted fields. Use a valid email address."; st.classList.add("err"); bad[0].focus(); return; }
  if (cfg.action.includes("YOUR_")) { st.textContent = "Form not connected yet. Add your Google Form ids in script.js."; st.classList.add("err"); return; }
  const body = new URLSearchParams();
  for (const [k, id] of Object.entries(cfg.entries)) if (form.elements[k]) body.append(id, form.elements[k].value);
  btn.disabled = true; st.textContent = "Sending…";
  try {
    await fetch(cfg.action, { method: "POST", mode: "no-cors", body });
    st.textContent = form.dataset.kind === "join" ? "Application sent. We will reply by email." : "Message sent. Thank you."; st.classList.add("ok"); form.reset();
  } catch { st.textContent = "Could not send. Check your connection or email us directly."; st.classList.add("err"); }
  btn.disabled = false;
}));
