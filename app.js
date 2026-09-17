/* ========================================
   All Things Shine — App Logic
   ======================================== */

// =======================================
// INTERNATIONALIZATION (i18n)
// =======================================
const STORAGE_KEY_LANG = 'heartbeat_lang';

const i18n = {
  en: {
    // Onboarding
    app_title: 'All Things Shine',
    ob1_line1: 'In a world that moves so fast,<br>this is your quiet corner.',
    ob1_line2: 'A place to pause,<br>to notice the small things —<br>a warm meal, a kind word,<br>flowers on the way home.',
    ob2_line1: 'Every time something good happens,<br>no matter how small,<br>press the heart.',
    ob2_tag1: 'a healthy breakfast', ob2_tag2: 'bought flowers', ob2_tag3: 'called a friend',
    ob2_tag4: 'took a walk', ob2_tag5: 'cooked dinner',
    ob2_small: 'One tap. One moment of gratitude.<br>Over time, these moments add up.',
    ob3_date: 'Tuesday, September 16',
    ob3_sample: 'Today my colleague brought me coffee without asking.',
    ob3_line1: 'Some days, you\'ll want to say more.<br>Swipe to your gratitude journal —<br>write what made you smile.',
    ob3_small: 'It stays here, just for you.<br>Look back whenever you\'d like.',
    ob_begin: 'Begin',
    // Heart page
    greetings: [
      'All things shine', 'Notice the good', 'You are enough', 'One small joy',
      'Let it glow', 'Breathe and bloom', 'Light is here', 'Something beautiful today',
      'This moment matters', 'Softly, gently', 'The world is kind', 'You belong here',
    ],
    heart_hint: 'press to add a heart',
    tap_to_add: 'tap to add note',
    moments: 'moments',
    modal_title: 'What was this heart for?',
    modal_placeholder: 'e.g. healthy meal, bought flowers...',
    cancel: 'Cancel',
    save: 'Save',
    saved: 'Saved!',
    // Journal
    journal_subtitle: 'What are you grateful for today?',
    journal_placeholder: 'Today I\'m grateful for...',
    journal_saved: 'Journal saved',
    past_entries: 'Past Entries',
    // Stats
    stat_today: 'Today\'s Hearts', stat_total: 'Total Hearts',
    stat_streak: 'Day Streak', stat_journal: 'Journal Entries',
    stats_title: 'Your Journey',
    chart_14days: 'Last 14 Days', chart_recent: 'Recent Gratitudes',
    no_hearts_today: 'No hearts yet today',
    todays_hearts: 'Today\'s Hearts',
    no_hearts: 'No hearts yet',
    all_hearts: 'All Hearts',
    streak_empty: 'Start a streak by logging a heart today',
    consecutive_days: (n) => `${n} consecutive day${n > 1 ? 's' : ''}`,
    n_hearts: (n) => `${n} heart${n > 1 ? 's' : ''}`,
    no_journal: 'No journal entries yet',
    journal_entries: 'Journal Entries',
    no_note: 'no note',
    gratitudes_empty: 'Start writing to see your gratitudes here',
    // Theme picker
    picker_title: 'Choose your mood',
    picker_photo: 'Your photo',
    picker_intro: 'Read the intro again',
    photo_too_large: 'Photo is too large. Try a smaller image.',
    // Nav
    swipe: 'swipe',
  },
  zh: {
    app_title: '万物闪耀',
    ob1_line1: '在这个快节奏的世界里，<br>这是属于你的安静角落。',
    ob1_line2: '停下来，<br>留意那些小小的美好 ——<br>一顿暖心的饭，一句温柔的话，<br>回家路上的花。',
    ob2_line1: '每当有好事发生，<br>无论多么微小，<br>按下这颗心。',
    ob2_tag1: '健康的早餐', ob2_tag2: '买了花', ob2_tag3: '给朋友打了电话',
    ob2_tag4: '散了步', ob2_tag5: '做了晚餐',
    ob2_small: '轻轻一按，记录一刻感恩。<br>日积月累，这些瞬间汇聚成光。',
    ob3_date: '九月十六日 星期二',
    ob3_sample: '今天同事默默给我带了咖啡。',
    ob3_line1: '有些日子，你想说得更多。<br>滑动到感恩日记 ——<br>写下让你微笑的事。',
    ob3_small: '这些文字只属于你。<br>随时可以回头看看。',
    ob_begin: '开始',
    greetings: [
      '万物闪耀', '留意美好', '你已足够好', '一个小小的快乐',
      '让它发光', '呼吸与绽放', '光就在这里', '今天有件美好的事',
      '此刻很重要', '轻轻地，柔柔地', '世界是温柔的', '你属于这里',
    ],
    heart_hint: '点一点，加颗心',
    tap_to_add: '点击添加备注',
    moments: '个瞬间',
    modal_title: '这颗心为了什么？',
    modal_placeholder: '例如：健康的一餐、买了花...',
    cancel: '取消',
    save: '保存',
    saved: '已保存！',
    journal_subtitle: '今天你感恩什么？',
    journal_placeholder: '今天我感恩...',
    journal_saved: '日记已保存',
    past_entries: '过往记录',
    stat_today: '今日之心', stat_total: '累计之心',
    stat_streak: '连续天数', stat_journal: '日记条数',
    stats_title: '你的旅程',
    chart_14days: '最近14天', chart_recent: '近期感恩',
    no_hearts_today: '今天还没有记录',
    todays_hearts: '今日之心',
    no_hearts: '还没有记录',
    all_hearts: '所有记录',
    streak_empty: '今天记录一颗心，开始你的连续打卡',
    consecutive_days: (n) => `连续 ${n} 天`,
    n_hearts: (n) => `${n} 颗心`,
    no_journal: '还没有日记',
    journal_entries: '日记条数',
    no_note: '无备注',
    gratitudes_empty: '写下你的感恩，它们会出现在这里',
    picker_title: '选择你的心情',
    picker_photo: '你的照片',
    picker_intro: '再看一次介绍',
    photo_too_large: '照片太大了，请选择小一点的图片。',
    swipe: '滑动',
  }
};

function getLang() {
  return localStorage.getItem(STORAGE_KEY_LANG) || 'en';
}

function setLang(lang) {
  localStorage.setItem(STORAGE_KEY_LANG, lang);
  applyLang(lang);
}

function t(key) {
  const lang = getLang();
  return (i18n[lang] && i18n[lang][key]) || i18n.en[key] || key;
}

function applyLang(lang) {
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[lang][key] || i18n.en[key];
    if (val) el.innerHTML = val;
  });
  // Update all data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = i18n[lang][key] || i18n.en[key];
    if (val) el.placeholder = val;
  });
  // Update date locale
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  // Update language selector active state
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

// Initialize language on load
applyLang(getLang());

// ---- Storage helpers ----
const STORAGE_KEY_SCORES = 'heartbeat_scores';
const STORAGE_KEY_JOURNAL = 'heartbeat_journal';

function todayKey() {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

function loadScores() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_SCORES)) || {};
  } catch { return {}; }
}

function saveScores(scores) {
  localStorage.setItem(STORAGE_KEY_SCORES, JSON.stringify(scores));
}

function loadJournal() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_JOURNAL)) || {};
  } catch { return {}; }
}

function saveJournal(journal) {
  localStorage.setItem(STORAGE_KEY_JOURNAL, JSON.stringify(journal));
}

// ---- Greeting ----
const greetings = [
  'All things shine',
  'Notice the good',
  'You are enough',
  'One small joy',
  'Let it glow',
  'Breathe and bloom',
  'Light is here',
  'Something beautiful today',
  'This moment matters',
  'Softly, gently',
  'The world is kind',
  'You belong here',
];

function getGreeting() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  const g = i18n[getLang()].greetings || greetings;
  return g[dayOfYear % g.length];
}

// ---- Format date ----
function getLocale() { return getLang() === 'zh' ? 'zh-CN' : 'en-US'; }

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString(getLocale(), {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString(getLocale(), { month: 'short', day: 'numeric' });
}

// ---- Small heart SVG for inline use ----
const miniHeart = `<svg viewBox="0 0 100 100"><path d="M50 88 C25 65, 2 45, 2 28 C2 14, 13 2, 28 2 C38 2, 46 8, 50 16 C54 8, 62 2, 72 2 C87 2, 98 14, 98 28 C98 45, 75 65, 50 88Z" /></svg>`;

// ---- HTML escape ----
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// =======================================
// ONBOARDING (first visit only)
// =======================================
const STORAGE_KEY_ONBOARDED = 'heartbeat_onboarded';

(function initOnboarding() {
  if (localStorage.getItem(STORAGE_KEY_ONBOARDED)) return;

  const overlay = document.getElementById('onboarding');
  const pagesEl = document.getElementById('onboarding-pages');
  const dots = document.querySelectorAll('.onboarding-dot');
  const beginBtn = document.getElementById('onboarding-begin');

  overlay.classList.remove('hidden');

  // Language selector
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.dataset.lang;
      setLang(lang);
      // Refresh greeting
      if (typeof updateGreeting === 'function') updateGreeting();
    });
  });

  let page = 0;
  const total = 3;

  function goTo(i) {
    if (i < 0 || i >= total) return;
    page = i;
    pagesEl.style.transform = `translateX(-${i * 100}vw)`;
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  }

  // Swipe
  let sx = 0, dx = 0;
  overlay.addEventListener('touchstart', e => { sx = e.touches[0].clientX; dx = 0; }, { passive: true });
  overlay.addEventListener('touchmove', e => {
    dx = e.touches[0].clientX - sx;
    const base = -page * window.innerWidth;
    pagesEl.style.transition = 'none';
    pagesEl.style.transform = `translateX(${base + dx * 0.4}px)`;
  }, { passive: true });
  overlay.addEventListener('touchend', () => {
    pagesEl.style.transition = '';
    if (dx < -60) goTo(page + 1);
    else if (dx > 60) goTo(page - 1);
    else goTo(page);
  }, { passive: true });

  // Keyboard
  overlay.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') goTo(page + 1);
    if (e.key === 'ArrowLeft') goTo(page - 1);
  });
  overlay.setAttribute('tabindex', '0');
  overlay.focus();

  // Begin button
  beginBtn.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY_ONBOARDED, '1');
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.classList.add('hidden');
      cancelAnimationFrame(obBgRaf);
    }, 600);
  });

  // Aurora Sky background for onboarding
  const obCanvas = document.getElementById('onboarding-bg');
  const obCtx = obCanvas.getContext('2d');
  const obDpr = window.devicePixelRatio || 1;
  obCanvas.width = window.innerWidth * obDpr;
  obCanvas.height = window.innerHeight * obDpr;
  let obBgRaf = 0;
  const obT0 = performance.now();

  function drawAuroraSky(ctx, w, h, t) {
    const bg = ctx.createLinearGradient(0,0,0,h);
    bg.addColorStop(0,'#050510'); bg.addColorStop(0.3,'#0a0a25');
    bg.addColorStop(0.6,'#0d1520'); bg.addColorStop(1,'#080812');
    ctx.fillStyle = bg; ctx.fillRect(0,0,w,h);
    const bands = [
      {y:.25,c:[50,220,120],sp:.12},{y:.35,c:[30,180,200],sp:.1},
      {y:.3,c:[100,60,220],sp:.08},{y:.2,c:[50,255,150],sp:.15},
    ];
    for (const b of bands) {
      ctx.beginPath(); ctx.moveTo(0,h);
      for (let x=0; x<=w; x+=3) {
        const wave = Math.sin(x*0.01+t*0.4+b.y*10)*h*0.08 + Math.sin(x*0.005+t*0.2+b.c[0]*0.1)*h*0.05;
        ctx.lineTo(x, b.y*h+wave);
      }
      ctx.lineTo(w,h); ctx.closePath();
      const ag = ctx.createLinearGradient(0,(b.y-b.sp)*h,0,(b.y+b.sp)*h);
      const a = 0.08+0.04*Math.sin(t*0.3+b.y*5);
      ag.addColorStop(0,`rgba(${b.c},0)`); ag.addColorStop(0.3,`rgba(${b.c},${a})`);
      ag.addColorStop(0.7,`rgba(${b.c},${a*0.5})`); ag.addColorStop(1,`rgba(${b.c},0)`);
      ctx.fillStyle = ag; ctx.fill();
    }
    function sr(i) { let x=Math.sin(42+i*127.1)*43758.5453; return x-Math.floor(x); }
    for (let i=0; i<80; i++) {
      const sx=sr(i)*w, sy=sr(i+1000)*h*0.6, sz=0.3+sr(i+2000)*0.8;
      const tw=0.3+0.5*(0.5+0.5*Math.sin(t+i*1.7));
      ctx.fillStyle=`rgba(255,255,255,${tw})`; ctx.beginPath(); ctx.arc(sx,sy,sz,0,Math.PI*2); ctx.fill();
    }
  }

  function obLoop() {
    const t = (performance.now() - obT0) / 1000;
    drawAuroraSky(obCtx, obCanvas.width, obCanvas.height, t);
    obBgRaf = requestAnimationFrame(obLoop);
  }
  obBgRaf = requestAnimationFrame(obLoop);

  // Expose for "Read intro again" button
  window._startOnboardingBg = () => {
    obCanvas.width = window.innerWidth * obDpr;
    obCanvas.height = window.innerHeight * obDpr;
    cancelAnimationFrame(obBgRaf);
    obBgRaf = requestAnimationFrame(obLoop);
  };
})();

// =======================================
// THEME SYSTEM
// =======================================
const STORAGE_KEY_THEME = 'heartbeat_theme';
const STORAGE_KEY_THEME_MODE = 'heartbeat_theme_mode'; // 'daily', 'manual', or 'photo'
const STORAGE_KEY_PHOTO = 'heartbeat_theme_photo';

const themes = [
  {
    name: 'Sunflower Field',
    bg: `
      radial-gradient(circle at 75% 15%, #fde68a 0%, transparent 25%),
      linear-gradient(180deg, #87ceeb 0%, #b4dff0 25%, #90c95e 55%, #6aad3a 65%, #4a8c2a 100%)
    `,
    decor: [
      { type: 'sun', top: '8%', right: '15%' },
      { type: 'sunflower', bottom: '30%', left: '15%' },
      { type: 'sunflower', bottom: '35%', right: '20%' },
      { type: 'sunflower', bottom: '28%', left: '50%' },
    ]
  },
  {
    name: 'Ocean Sunrise',
    bg: `
      radial-gradient(circle at 50% 30%, #fde68a 0%, transparent 20%),
      linear-gradient(180deg, #fca5a5 0%, #fdba74 15%, #fde68a 25%, #93c5fd 50%, #3b82f6 75%, #1e40af 100%)
    `,
    decor: []
  },
  {
    name: 'Lavender Dream',
    bg: `
      radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
      linear-gradient(160deg, #e9d5ff 0%, #c4b5fd 30%, #a78bfa 50%, #7c3aed 80%, #6d28d9 100%)
    `,
    decor: []
  },
  {
    name: 'Cherry Blossom',
    bg: `
      radial-gradient(ellipse at 40% 30%, rgba(255,255,255,0.4) 0%, transparent 50%),
      linear-gradient(160deg, #fce7f3 0%, #fbcfe8 30%, #f9a8d4 60%, #ec4899 100%)
    `,
    decor: [
      { type: 'petal', top: '10%', left: '20%' },
      { type: 'petal', top: '15%', right: '25%' },
      { type: 'petal', top: '25%', left: '60%' },
      { type: 'petal', top: '8%', left: '45%' },
    ]
  },
  {
    name: 'Mountain Dawn',
    bg: `
      radial-gradient(circle at 50% 20%, #fde68a 0%, transparent 18%),
      linear-gradient(180deg, #312e81 0%, #4338ca 15%, #f97316 30%, #fbbf24 38%, #6ee7b7 50%, #059669 70%, #064e3b 100%)
    `,
    decor: []
  },
  {
    name: 'Golden Hour',
    bg: `
      radial-gradient(circle at 30% 40%, rgba(255,255,255,0.25) 0%, transparent 40%),
      linear-gradient(160deg, #fef3c7 0%, #fcd34d 25%, #f59e0b 50%, #d97706 75%, #92400e 100%)
    `,
    decor: []
  },
  {
    name: 'Northern Lights',
    bg: `
      radial-gradient(ellipse at 25% 50%, rgba(52,211,153,0.4) 0%, transparent 50%),
      radial-gradient(ellipse at 75% 30%, rgba(139,92,246,0.4) 0%, transparent 50%),
      linear-gradient(180deg, #0f172a 0%, #1e293b 40%, #0f766e 70%, #134e4a 100%)
    `,
    decor: []
  },
  {
    name: 'Spring Meadow',
    bg: `
      radial-gradient(circle at 65% 20%, #fef9c3 0%, transparent 25%),
      linear-gradient(180deg, #dbeafe 0%, #bfdbfe 20%, #86efac 50%, #4ade80 70%, #16a34a 100%)
    `,
    decor: [
      { type: 'petal', top: '12%', left: '30%' },
      { type: 'petal', top: '18%', right: '35%' },
    ]
  },
  {
    name: 'Warm Sunset',
    bg: `
      radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.15) 0%, transparent 50%),
      linear-gradient(160deg, #fef6f3 0%, #fce8e4 50%, #fdf0ec 100%)
    `,
    decor: []
  },
  // --- Animated canvas backgrounds ---
  {
    name: 'Bokeh Lights',
    bg: 'linear-gradient(180deg, #1a1025 0%, #2d1b3d 50%, #1a1025 100%)',
    decor: [],
    canvasDraw(ctx, w, h, t) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#1a1025'); bg.addColorStop(0.5, '#2d1b3d'); bg.addColorStop(1, '#1a1025');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      const bk = [
        {x:.2,y:.15,r:.08,c:[255,200,100]},{x:.7,y:.25,r:.12,c:[255,150,180]},
        {x:.4,y:.45,r:.1,c:[150,200,255]},{x:.85,y:.6,r:.09,c:[255,220,130]},
        {x:.15,y:.7,r:.11,c:[200,150,255]},{x:.55,y:.8,r:.07,c:[255,180,150]},
        {x:.3,y:.3,r:.06,c:[180,255,200]},{x:.75,y:.45,r:.05,c:[255,255,180]},
        {x:.5,y:.15,r:.04,c:[255,160,200]},{x:.9,y:.85,r:.06,c:[150,220,255]},
        {x:.1,y:.9,r:.05,c:[255,200,180]},{x:.6,y:.65,r:.08,c:[220,180,255]},
      ];
      for (const b of bk) {
        const bx = b.x*w + Math.sin(t*0.3+b.x*10)*5;
        const by = b.y*h + Math.cos(t*0.2+b.y*10)*5;
        const br = b.r*w;
        const a = 0.15 + 0.08*Math.sin(t*0.5+b.x*5);
        const g = ctx.createRadialGradient(bx,by,0,bx,by,br);
        g.addColorStop(0,`rgba(${b.c},${a+0.1})`); g.addColorStop(0.4,`rgba(${b.c},${a})`);
        g.addColorStop(0.7,`rgba(${b.c},${a*0.3})`); g.addColorStop(1,`rgba(${b.c},0)`);
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(bx,by,br,0,Math.PI*2); ctx.fill();
      }
    }
  },
  {
    name: 'Starfield',
    bg: 'linear-gradient(180deg, #0a0a1a 0%, #0d1030 40%, #1a1045 70%, #0a0a1a 100%)',
    decor: [],
    canvasDraw(ctx, w, h, t) {
      const bg = ctx.createLinearGradient(0,0,0,h);
      bg.addColorStop(0,'#0a0a1a'); bg.addColorStop(0.4,'#0d1030');
      bg.addColorStop(0.7,'#1a1045'); bg.addColorStop(1,'#0a0a1a');
      ctx.fillStyle = bg; ctx.fillRect(0,0,w,h);
      // Nebula
      const nb = ctx.createRadialGradient(w*0.3,h*0.4,0,w*0.3,h*0.4,w*0.4);
      nb.addColorStop(0,'rgba(80,40,120,0.15)'); nb.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle = nb; ctx.fillRect(0,0,w,h);
      const nb2 = ctx.createRadialGradient(w*0.7,h*0.6,0,w*0.7,h*0.6,w*0.35);
      nb2.addColorStop(0,'rgba(30,60,120,0.12)'); nb2.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle = nb2; ctx.fillRect(0,0,w,h);
      // Stars
      function sr(i) { let x=Math.sin(42+i*127.1)*43758.5453; return x-Math.floor(x); }
      for (let i=0; i<150; i++) {
        const sx=sr(i)*w, sy=sr(i+1000)*h, sz=0.3+sr(i+2000)*1.8;
        const tw=0.3+0.7*(0.5+0.5*Math.sin(t*(1+sr(i+3000)*2)+sr(i+4000)*10));
        ctx.beginPath(); ctx.arc(sx,sy,sz,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,255,255,${tw})`; ctx.fill();
        if (sz>1.2) {
          const sg=ctx.createRadialGradient(sx,sy,0,sx,sy,sz*4);
          sg.addColorStop(0,`rgba(200,220,255,${tw*0.12})`); sg.addColorStop(1,'rgba(200,220,255,0)');
          ctx.fillStyle=sg; ctx.beginPath(); ctx.arc(sx,sy,sz*4,0,Math.PI*2); ctx.fill();
        }
      }
    }
  },
  {
    name: 'Stained Glass',
    bg: 'linear-gradient(160deg, #2a1530 0%, #1a1520 50%, #201025 100%)',
    decor: [],
    canvasDraw(ctx, w, h, t) {
      ctx.fillStyle = '#1a1520'; ctx.fillRect(0,0,w,h);
      const pts = [
        {x:.15,y:.1,c:[180,50,60]},{x:.5,y:.05,c:[50,80,180]},{x:.85,y:.12,c:[60,150,80]},
        {x:.1,y:.35,c:[160,80,180]},{x:.4,y:.3,c:[200,160,50]},{x:.7,y:.28,c:[50,140,160]},
        {x:.9,y:.4,c:[180,60,100]},{x:.2,y:.55,c:[80,60,160]},{x:.55,y:.5,c:[60,130,60]},
        {x:.8,y:.58,c:[180,120,50]},{x:.1,y:.75,c:[50,100,180]},{x:.4,y:.72,c:[180,50,80]},
        {x:.65,y:.78,c:[100,160,60]},{x:.9,y:.8,c:[140,60,160]},{x:.3,y:.92,c:[200,150,60]},
        {x:.7,y:.95,c:[50,120,150]},
      ];
      const step = Math.max(4, Math.round(4 * (w / 400)));
      for (let y=0; y<h; y+=step) {
        for (let x=0; x<w; x+=step) {
          let minD=Infinity, minD2=Infinity, nearest=0;
          for (let i=0; i<pts.length; i++) {
            const dx=x/w-pts[i].x, dy=y/h-pts[i].y, d=dx*dx+dy*dy;
            if (d<minD) { minD2=minD; minD=d; nearest=i; } else if (d<minD2) { minD2=d; }
          }
          const c=pts[nearest].c;
          const light = 0.4+0.25*Math.sin(t*0.3+nearest*0.8);
          ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${light})`;
          ctx.fillRect(x,y,step,step);
          if (minD2-minD < 0.003) {
            ctx.fillStyle = `rgba(200,170,80,${0.6+0.2*Math.sin(t*0.5)})`;
            ctx.fillRect(x,y,step,step);
          }
        }
      }
      const lx=w*(0.5+0.15*Math.sin(t*0.15)), ly=h*0.35;
      const lg=ctx.createRadialGradient(lx,ly,0,lx,ly,w*0.4);
      lg.addColorStop(0,'rgba(255,255,200,0.1)'); lg.addColorStop(1,'rgba(255,255,200,0)');
      ctx.fillStyle = lg; ctx.fillRect(0,0,w,h);
    }
  },
  {
    name: 'Marble Gold',
    bg: 'linear-gradient(160deg, #f5f0ec 0%, #ede5dd 50%, #f5f0ec 100%)',
    decor: [],
    canvasDraw(ctx, w, h, t) {
      ctx.fillStyle = '#f5f0ec'; ctx.fillRect(0,0,w,h);
      function sd(i) { return (Math.sin(i*127.1+42)*43758.5453)%1; }
      // Grey veins
      ctx.strokeStyle = 'rgba(180,175,170,0.15)'; ctx.lineWidth = 1.5;
      for (let i=0; i<12; i++) {
        ctx.beginPath();
        let vx=(i%4)*w/3-w*0.1, vy=Math.floor(i/4)*h/3;
        ctx.moveTo(vx,vy);
        for (let s=0; s<8; s++) { vx+=20+Math.sin(i*3+s*1.5)*30; vy+=15+Math.cos(i*2+s*2)*25; ctx.lineTo(vx,vy); }
        ctx.stroke();
      }
      // Gold veins
      for (let i=0; i<5; i++) {
        ctx.beginPath();
        let vx=Math.abs(sd(i))*w, vy=Math.abs(sd(i+10))*h*0.3;
        ctx.moveTo(vx,vy);
        for (let s=0; s<10; s++) { vx+=15+Math.sin(i*5+s*1.3)*25; vy+=20+Math.cos(i*3+s*1.7)*15; ctx.lineTo(vx,vy); }
        const a = 0.25+0.1*Math.sin(t*0.3+i*2);
        ctx.strokeStyle = `rgba(200,170,80,${a})`; ctx.lineWidth = 2; ctx.stroke();
        ctx.strokeStyle = `rgba(240,220,140,${a*0.4})`; ctx.lineWidth = 4; ctx.stroke();
        ctx.lineWidth = 2;
      }
      // Sheen
      const sh = ctx.createLinearGradient(0,0,w,h);
      sh.addColorStop(0,'rgba(255,255,255,0)');
      sh.addColorStop(0.4+0.1*Math.sin(t*0.2),`rgba(255,255,255,${0.06+0.03*Math.sin(t*0.4)})`);
      sh.addColorStop(0.6,'rgba(255,255,255,0)'); sh.addColorStop(1,'rgba(255,255,255,0)');
      ctx.fillStyle = sh; ctx.fillRect(0,0,w,h);
    }
  },
  {
    name: 'Aurora Sky',
    bg: 'linear-gradient(180deg, #050510 0%, #0a0a25 30%, #0d1520 60%, #080812 100%)',
    decor: [],
    canvasDraw(ctx, w, h, t) {
      const bg = ctx.createLinearGradient(0,0,0,h);
      bg.addColorStop(0,'#050510'); bg.addColorStop(0.3,'#0a0a25');
      bg.addColorStop(0.6,'#0d1520'); bg.addColorStop(1,'#080812');
      ctx.fillStyle = bg; ctx.fillRect(0,0,w,h);
      const bands = [
        {y:.25,c:[50,220,120],sp:.12},{y:.35,c:[30,180,200],sp:.1},
        {y:.3,c:[100,60,220],sp:.08},{y:.2,c:[50,255,150],sp:.15},
      ];
      for (const b of bands) {
        ctx.beginPath(); ctx.moveTo(0,h);
        for (let x=0; x<=w; x+=3) {
          const wave = Math.sin(x*0.01+t*0.4+b.y*10)*h*0.08 + Math.sin(x*0.005+t*0.2+b.c[0]*0.1)*h*0.05;
          ctx.lineTo(x, b.y*h+wave);
        }
        ctx.lineTo(w,h); ctx.closePath();
        const ag = ctx.createLinearGradient(0,(b.y-b.sp)*h,0,(b.y+b.sp)*h);
        const a = 0.08+0.04*Math.sin(t*0.3+b.y*5);
        ag.addColorStop(0,`rgba(${b.c},0)`); ag.addColorStop(0.3,`rgba(${b.c},${a})`);
        ag.addColorStop(0.7,`rgba(${b.c},${a*0.5})`); ag.addColorStop(1,`rgba(${b.c},0)`);
        ctx.fillStyle = ag; ctx.fill();
      }
      function sr(i) { let x=Math.sin(i*127.1+42)*43758.5453; return x-Math.floor(x); }
      for (let i=0; i<80; i++) {
        const sx=sr(i)*w, sy=sr(i+1000)*h*0.6, sz=0.3+sr(i+2000)*0.8;
        const tw=0.3+0.5*(0.5+0.5*Math.sin(t+i*1.7));
        ctx.fillStyle=`rgba(255,255,255,${tw})`; ctx.beginPath(); ctx.arc(sx,sy,sz,0,Math.PI*2); ctx.fill();
      }
    }
  },
  {
    name: 'Ocean Depth',
    bg: 'linear-gradient(180deg, #0a2540 0%, #0d3050 30%, #082838 60%, #041620 100%)',
    decor: [],
    canvasDraw(ctx, w, h, t) {
      const bg = ctx.createLinearGradient(0,0,0,h);
      bg.addColorStop(0,'#0a2540'); bg.addColorStop(0.3,'#0d3050');
      bg.addColorStop(0.6,'#082838'); bg.addColorStop(1,'#041620');
      ctx.fillStyle = bg; ctx.fillRect(0,0,w,h);
      for (let i=0; i<5; i++) {
        const rx=w*(0.15+i*0.18)+Math.sin(t*0.2+i)*15;
        ctx.save(); ctx.translate(rx,0);
        const sp=20+i*5;
        ctx.beginPath(); ctx.moveTo(-sp*0.3,0); ctx.lineTo(-sp*1.5,h); ctx.lineTo(sp*1.5,h); ctx.lineTo(sp*0.3,0); ctx.closePath();
        const rg=ctx.createLinearGradient(0,0,0,h);
        const a=0.03+0.02*Math.sin(t*0.3+i*1.5);
        rg.addColorStop(0,`rgba(100,200,255,${a*2})`); rg.addColorStop(0.5,`rgba(50,150,200,${a})`); rg.addColorStop(1,'rgba(20,80,120,0)');
        ctx.fillStyle=rg; ctx.fill(); ctx.restore();
      }
      function sr(i) { let x=Math.sin(i*127.1+42)*43758.5453; return Math.abs(x-Math.floor(x)); }
      for (let i=0; i<20; i++) {
        const cx=sr(i)*w, cy=sr(i+500)*h, cr=10+sr(i+1000)*25;
        const a=0.02+0.02*Math.sin(t*0.8+i*2.3);
        const cg=ctx.createRadialGradient(cx,cy,0,cx,cy,cr);
        cg.addColorStop(0,`rgba(120,220,255,${a})`); cg.addColorStop(1,'rgba(120,220,255,0)');
        ctx.fillStyle=cg; ctx.beginPath(); ctx.arc(cx,cy,cr,0,Math.PI*2); ctx.fill();
      }
      for (let i=0; i<15; i++) {
        const px=sr(i+100)*w, py=(sr(i+200)*h+Math.sin(t*0.5+i)*10)%h;
        ctx.fillStyle=`rgba(150,220,255,${0.15+0.1*Math.sin(t+i*1.5)})`;
        ctx.beginPath(); ctx.arc(px,py,1.5,0,Math.PI*2); ctx.fill();
      }
    }
  },
];

function getActiveThemeIndex() {
  // Default to Warm Sunset (index 8) if no preference set
  if (!localStorage.getItem(STORAGE_KEY_THEME)) return 8;
  return parseInt(localStorage.getItem(STORAGE_KEY_THEME) || '8', 10);
}

function renderThemeBg(index) {
  const theme = themes[index];
  // Apply to both the score-page bg and the global app bg
  const bgEl = document.getElementById('theme-bg');
  const appBg = document.getElementById('app-bg');
  bgEl.style.background = theme.bg;
  appBg.style.background = theme.bg;

  // Render decorative elements
  const existing = bgEl.querySelectorAll('.theme-decor');
  existing.forEach(el => el.remove());

  for (const d of theme.decor) {
    const el = document.createElement('div');
    el.className = 'theme-decor';
    el.style.position = 'absolute';
    if (d.top) el.style.top = d.top;
    if (d.bottom) el.style.bottom = d.bottom;
    if (d.left) el.style.left = d.left;
    if (d.right) el.style.right = d.right;

    if (d.type === 'sun') {
      el.style.width = '60px';
      el.style.height = '60px';
      el.style.borderRadius = '50%';
      el.style.background = 'radial-gradient(circle, #fef08a 30%, #fde047 60%, transparent 70%)';
      el.style.boxShadow = '0 0 40px 15px rgba(253,224,71,0.4)';
    } else if (d.type === 'sunflower') {
      el.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="6" fill="#92400e"/>
        ${[0,30,60,90,120,150,180,210,240,270,300,330].map(a =>
          `<ellipse cx="20" cy="8" rx="4" ry="7" fill="#fbbf24" transform="rotate(${a} 20 20)"/>`
        ).join('')}
      </svg>`;
    } else if (d.type === 'petal') {
      el.style.width = '12px';
      el.style.height = '12px';
      el.style.borderRadius = '50% 0 50% 0';
      el.style.background = 'rgba(251,207,232,0.6)';
      el.style.transform = `rotate(${Math.random()*360}deg)`;
      el.style.animation = `petal-float ${4+Math.random()*4}s ease-in-out infinite`;
      el.style.animationDelay = `${Math.random()*3}s`;
    }
    bgEl.appendChild(el);
  }
}

function applyPhotoBg(dataUrl) {
  const bgEl = document.getElementById('theme-bg');
  const appBg = document.getElementById('app-bg');
  const css = `url(${dataUrl}) center/cover no-repeat`;
  bgEl.style.background = css;
  appBg.style.background = css;
  bgEl.querySelectorAll('.theme-decor').forEach(el => el.remove());
}

// --- Animated background controller ---
let _animBgRaf = 0;
let _animBgDraw = null;

function stopAnimatedBg() {
  if (_animBgRaf) { cancelAnimationFrame(_animBgRaf); _animBgRaf = 0; }
  _animBgDraw = null;
  const c = document.getElementById('animated-bg');
  if (c) c.style.display = 'none';
  document.getElementById('app').classList.remove('animated-bg-active');
}

function startAnimatedBg(drawFn) {
  stopAnimatedBg();
  const canvas = document.getElementById('animated-bg');
  if (!canvas) return;
  canvas.style.display = 'block';
  document.getElementById('app').classList.add('animated-bg-active');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  function resize() {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
  }
  resize();
  window.addEventListener('resize', resize);

  _animBgDraw = drawFn;
  const t0 = performance.now();
  function loop() {
    if (_animBgDraw !== drawFn) return; // stopped or replaced
    const t = (performance.now() - t0) / 1000;
    drawFn(ctx, canvas.width, canvas.height, t);
    _animBgRaf = requestAnimationFrame(loop);
  }
  _animBgRaf = requestAnimationFrame(loop);
}

function applyTheme(index) {
  // Check if photo mode is active
  const mode = localStorage.getItem(STORAGE_KEY_THEME_MODE);
  if (mode === 'photo') {
    const photo = localStorage.getItem(STORAGE_KEY_PHOTO);
    if (photo) {
      stopAnimatedBg();
      applyPhotoBg(photo);
      document.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('active'));
      return;
    }
  }

  const theme = themes[index];
  if (theme && theme.canvasDraw) {
    // Animated canvas background — hide the CSS layers so they don't cover the canvas
    const bgEl = document.getElementById('theme-bg');
    const appBg = document.getElementById('app-bg');
    bgEl.style.background = 'transparent';
    appBg.style.background = 'transparent';
    bgEl.querySelectorAll('.theme-decor').forEach(el => el.remove());
    startAnimatedBg(theme.canvasDraw);
  } else {
    stopAnimatedBg();
    renderThemeBg(index);
  }
  document.querySelectorAll('.theme-swatch').forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
}

// Theme picker
function initThemePicker() {
  const overlay = document.getElementById('theme-picker-overlay');
  const grid = document.getElementById('theme-picker-grid');
  const closeBtn = document.getElementById('theme-picker-close');
  const themeBtn = document.getElementById('theme-btn');
  // Render swatches
  let swatchHtml = '';
  for (let i = 0; i < themes.length; i++) {
    swatchHtml += `<div class="theme-swatch" data-index="${i}" style="background: ${themes[i].bg}">
      <span class="theme-swatch-name">${themes[i].name}</span>
    </div>`;
  }
  grid.innerHTML = swatchHtml;

  // Open picker
  themeBtn.addEventListener('click', () => {
    overlay.classList.add('open');
    // Mark current active
    const active = getActiveThemeIndex();
    grid.querySelectorAll('.theme-swatch').forEach((s, i) => {
      s.classList.toggle('active', i === active);
    });
  });

  // Close
  closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });

  // Pick a theme
  grid.addEventListener('click', (e) => {
    const swatch = e.target.closest('.theme-swatch');
    if (!swatch) return;
    const idx = parseInt(swatch.dataset.index, 10);
    localStorage.setItem(STORAGE_KEY_THEME, idx.toString());
    localStorage.setItem(STORAGE_KEY_THEME_MODE, 'manual');
    applyTheme(idx);
    overlay.classList.remove('open');
  });

  // Language toggle in picker
  const pickerLangBtns = document.querySelectorAll('.picker-lang-btn');
  function updatePickerLangBtns() {
    const lang = getLang();
    pickerLangBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  }
  pickerLangBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      updatePickerLangBtns();
      updateGreeting();
      updateTodayScore();
      renderJournal();
      if (currentPage === 2) renderStats();
    });
  });

  // Sync picker lang buttons when opening
  const origOpenHandler = themeBtn.onclick;
  themeBtn.addEventListener('click', updatePickerLangBtns);

  // Photo upload
  document.getElementById('theme-photo-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      // Resize to save localStorage space (max 800px wide)
      const img = new Image();
      img.onload = () => {
        const maxW = 800;
        const scale = Math.min(1, maxW / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        try {
          localStorage.setItem(STORAGE_KEY_PHOTO, dataUrl);
          localStorage.setItem(STORAGE_KEY_THEME_MODE, 'photo');
          applyPhotoBg(dataUrl);
          overlay.classList.remove('open');
        } catch (err) {
          alert(t('photo_too_large'));
        }
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // reset so same file can be re-selected
  });

  // Show intro again
  document.getElementById('theme-picker-about').addEventListener('click', () => {
    overlay.classList.remove('open');
    const ob = document.getElementById('onboarding');
    const pagesEl = document.getElementById('onboarding-pages');
    ob.classList.remove('hidden', 'fade-out');
    pagesEl.style.transform = 'translateX(0)';
    document.querySelectorAll('.onboarding-dot').forEach((d, i) => d.classList.toggle('active', i === 0));
    // Restart Aurora Sky background
    if (window._startOnboardingBg) window._startOnboardingBg();
  });
}

// Initialize theme
applyTheme(getActiveThemeIndex());
initThemePicker();

// =======================================
// PAGE NAVIGATION (Swipe)
// =======================================
let currentPage = 0;
const totalPages = 3;
const pagesEl = document.getElementById('pages');
const dots = document.querySelectorAll('.dot');

function goToPage(index) {
  if (index < 0 || index >= totalPages) return;
  currentPage = index;
  pagesEl.style.transform = `translateX(-${index * 100}vw)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));

  // Refresh stats when navigating to stats page
  if (index === 2) renderStats();
  // Refresh journal when navigating to journal page
  if (index === 1) renderJournal();
}

// Dot click navigation
dots.forEach(d => {
  d.addEventListener('click', () => goToPage(Number(d.dataset.page)));
});

// Swipe detection
let touchStartX = 0;
let touchStartY = 0;
let touchDeltaX = 0;
let isSwiping = false;

function isOnboardingOpen() {
  const ob = document.getElementById('onboarding');
  return ob && !ob.classList.contains('hidden');
}

document.addEventListener('touchstart', (e) => {
  if (isOnboardingOpen()) { touchStartX = -9999; return; }
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  touchDeltaX = 0;
  isSwiping = false;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  const dx = e.touches[0].clientX - touchStartX;
  const dy = e.touches[0].clientY - touchStartY;

  // Determine if horizontal swipe (first significant movement)
  if (!isSwiping && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
    isSwiping = true;
    if (Math.abs(dy) > Math.abs(dx)) {
      // Vertical scroll — don't interfere
      touchStartX = -9999;
      return;
    }
  }

  if (touchStartX === -9999) return;
  touchDeltaX = dx;

  // Live drag feedback
  const baseOffset = -currentPage * window.innerWidth;
  pagesEl.style.transition = 'none';
  pagesEl.style.transform = `translateX(${baseOffset + touchDeltaX * 0.4}px)`;
}, { passive: true });

document.addEventListener('touchend', () => {
  pagesEl.style.transition = '';
  if (touchStartX === -9999) {
    pagesEl.style.transform = `translateX(-${currentPage * 100}vw)`;
    return;
  }

  const threshold = 60;
  if (touchDeltaX < -threshold) {
    goToPage(currentPage + 1);
  } else if (touchDeltaX > threshold) {
    goToPage(currentPage - 1);
  } else {
    goToPage(currentPage); // snap back
  }
}, { passive: true });

// Keyboard navigation (for desktop testing)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') goToPage(currentPage - 1);
  if (e.key === 'ArrowRight') goToPage(currentPage + 1);
});

// =======================================
// DATA MIGRATION — old format (number) → new format (array of entries)
// =======================================
function migrateScores() {
  const scores = loadScores();
  let changed = false;
  for (const key of Object.keys(scores)) {
    if (typeof scores[key] === 'number') {
      const count = scores[key];
      scores[key] = [];
      for (let i = 0; i < count; i++) {
        scores[key].push({ note: '', time: '' });
      }
      changed = true;
    }
  }
  if (changed) saveScores(scores);
}
migrateScores();

// Helper: get heart count for a date
function getHeartCount(scores, dateKey) {
  const entries = scores[dateKey];
  if (!entries) return 0;
  if (Array.isArray(entries)) return entries.length;
  return entries; // fallback
}

// =======================================
// PAGE 1 — DAILY SCORE
// =======================================
const heartBtn = document.getElementById('heart-btn');
const pulseRing = document.getElementById('pulse-ring');
const heartNotesEl = document.getElementById('heart-notes');
const greetingEl = document.getElementById('greeting');

function updateGreeting() {
  greetingEl.textContent = getGreeting();
}

function formatTime(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  return d.toLocaleTimeString(getLocale(), { hour: 'numeric', minute: '2-digit' });
}

function updateTodayScore() {
  const scores = loadScores();
  const entries = scores[todayKey()] || [];
  renderHeartNotes(entries);
  // Quiet total
  const total = Object.keys(scores).reduce((sum, k) => sum + getHeartCount(scores, k), 0);
  document.getElementById('total-quiet').textContent = total > 0 ? `${total} ${t('moments')}` : '';
  // Sparkline
  renderSparkline(scores);
}

function renderSparkline(scores) {
  const canvas = document.getElementById('sparkline');
  const wrap = document.getElementById('sparkline-wrap');
  if (!canvas) return;

  // Build cumulative data: last 30 days
  const days = [];
  const d = new Date();
  for (let i = 29; i >= 0; i--) {
    const dd = new Date(d);
    dd.setDate(dd.getDate() - i);
    days.push(dd.toISOString().slice(0, 10));
  }

  let cum = 0;
  // Count all hearts before the 30-day window
  const allKeys = Object.keys(scores).sort();
  for (const k of allKeys) {
    if (k < days[0]) cum += getHeartCount(scores, k);
  }

  const points = [];
  for (const day of days) {
    cum += getHeartCount(scores, day);
    points.push(cum);
  }

  // Hide if no data
  if (cum === 0) {
    wrap.classList.add('hidden');
    return;
  }
  wrap.classList.remove('hidden');

  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth * dpr;
  const h = canvas.offsetHeight * dpr;
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, w, h);

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  // Layout margins to make room for labels
  const fontSize = 10 * dpr;
  const marginBottom = fontSize + 4 * dpr; // space for date label
  const marginTop = fontSize + 2 * dpr;    // space for heart count label
  const chartH = h - marginTop - marginBottom;

  function px(i) {
    return (i / (points.length - 1)) * w;
  }
  function py(v) {
    return marginTop + (1 - (v - min) / range) * chartH;
  }

  // Fill gradient under the line
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, 'rgba(255,255,255,0.25)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');

  ctx.beginPath();
  ctx.moveTo(px(0), py(points[0]));
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(px(i), py(points[i]));
  }
  ctx.lineTo(px(points.length - 1), marginTop + chartH);
  ctx.lineTo(px(0), marginTop + chartH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(px(0), py(points[0]));
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(px(i), py(points[i]));
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.7)';
  ctx.lineWidth = 1.5 * dpr;
  ctx.lineJoin = 'round';
  ctx.stroke();

  // End dot
  const lastX = px(points.length - 1);
  const lastY = py(points[points.length - 1]);
  ctx.beginPath();
  ctx.arc(lastX, lastY, 2.5 * dpr, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.fill();

  // --- Axis labels ---
  ctx.font = `${fontSize}px Nunito, sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,0.7)';

  // Y-axis: accumulated heart count (top-right of chart, next to end dot)
  const heartLabel = `${points[points.length - 1]}`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillText(heartLabel, w - 2 * dpr, marginTop - 2 * dpr);

  // X-axis: current date with year (bottom-right)
  const lastDate = new Date(days[days.length - 1] + 'T00:00:00');
  const todayLabel = lastDate.toLocaleDateString(getLocale(), { month: 'short', day: 'numeric', year: 'numeric' });
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillText(todayLabel, w - 2 * dpr, marginTop + chartH + 2 * dpr);
}

function renderHeartNotes(entries) {
  if (entries.length === 0) {
    heartNotesEl.innerHTML = '';
    return;
  }
  let html = '';
  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    const noteText = e.note
      ? `<span class="heart-note-text">${escapeHtml(e.note)}</span>`
      : `<span class="heart-note-text empty">${t('tap_to_add')}</span>`;
    const timeText = e.time ? formatTime(e.time) : '';
    html += `
      <div class="heart-note" data-index="${i}">
        <span class="heart-note-icon">${miniHeart}</span>
        ${noteText}
        <span class="heart-note-time">${timeText}</span>
      </div>`;
  }
  heartNotesEl.innerHTML = html;

  // Attach tap handlers
  heartNotesEl.querySelectorAll('.heart-note').forEach(el => {
    el.addEventListener('click', () => {
      openNoteModal(Number(el.dataset.index));
    });
  });
}

function handleHeartTap() {
  const scores = loadScores();
  const key = todayKey();
  if (!Array.isArray(scores[key])) scores[key] = [];
  const newIndex = scores[key].length;
  scores[key].push({ note: '', time: new Date().toISOString() });
  saveScores(scores);

  // Bounce animation
  heartBtn.classList.remove('bounce');
  void heartBtn.offsetWidth;
  heartBtn.classList.add('bounce');

  // Pulse ring
  pulseRing.classList.remove('animate');
  void pulseRing.offsetWidth;
  pulseRing.classList.add('animate');

  // Float number
  const floater = document.createElement('div');
  floater.className = 'float-number';
  floater.textContent = `+1`;
  const rect = heartBtn.getBoundingClientRect();
  floater.style.left = `${rect.left + rect.width / 2 - 15}px`;
  floater.style.top = `${rect.top - 10}px`;
  document.body.appendChild(floater);
  setTimeout(() => floater.remove(), 1000);

  updateTodayScore();
}

heartBtn.addEventListener('click', handleHeartTap);

// ---- Note Edit Modal ----
let noteModalOverlay = null;

function createNoteModal() {
  noteModalOverlay = document.createElement('div');
  noteModalOverlay.className = 'note-modal-overlay';
  noteModalOverlay.innerHTML = `
    <div class="note-modal">
      <div class="note-modal-title">${t('modal_title')}</div>
      <input id="note-modal-input" type="text" placeholder="${t('modal_placeholder')}" maxlength="100" />
      <div class="note-modal-actions">
        <button class="note-modal-btn cancel" id="note-modal-cancel">${t('cancel')}</button>
        <button class="note-modal-btn save" id="note-modal-save">${t('save')}</button>
      </div>
    </div>`;
  document.body.appendChild(noteModalOverlay);

  // Close on overlay click
  noteModalOverlay.addEventListener('click', (e) => {
    if (e.target === noteModalOverlay) closeNoteModal();
  });
  document.getElementById('note-modal-cancel').addEventListener('click', closeNoteModal);
  document.getElementById('note-modal-save').addEventListener('click', saveNote);
  // Enter key saves
  document.getElementById('note-modal-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveNote();
  });
}

let editingNoteIndex = -1;

function openNoteModal(index) {
  if (!noteModalOverlay) createNoteModal();
  editingNoteIndex = index;
  const scores = loadScores();
  const entries = scores[todayKey()] || [];
  const input = document.getElementById('note-modal-input');
  input.value = entries[index]?.note || '';
  noteModalOverlay.classList.add('open');
  setTimeout(() => input.focus(), 100);
}

function closeNoteModal() {
  noteModalOverlay.classList.remove('open');
  editingNoteIndex = -1;
}

function saveNote() {
  if (editingNoteIndex < 0) return;
  const input = document.getElementById('note-modal-input');
  const scores = loadScores();
  const key = todayKey();
  if (scores[key] && scores[key][editingNoteIndex] !== undefined) {
    scores[key][editingNoteIndex].note = input.value.trim();
    saveScores(scores);
    updateTodayScore();
  }
  closeNoteModal();
}

// Initialize
updateGreeting();
updateTodayScore();
setInterval(updateGreeting, 60000);

// =======================================
// CROWN JEWEL HEART — Canvas Rendering
// =======================================
function initCrownJewelHeart(canvasId, cssSize) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const dpr = window.devicePixelRatio || 1;
  cssSize = cssSize || 120;
  canvas.width = cssSize * dpr;
  canvas.height = cssSize * dpr;
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2;
  const innerSize = w * 0.6;
  const outerSize = w * 0.69;

  function makeHeartPath(size) {
    const p = new Path2D();
    const s = size / 100;
    function hx(x) { return cx + (x - 50) * s; }
    function hy(y) { return cy + (y - 50) * s; }
    p.moveTo(hx(50), hy(88));
    p.bezierCurveTo(hx(25), hy(65), hx(2), hy(45), hx(2), hy(28));
    p.bezierCurveTo(hx(2), hy(14), hx(13), hy(2), hx(28), hy(2));
    p.bezierCurveTo(hx(38), hy(2), hx(46), hy(8), hx(50), hy(16));
    p.bezierCurveTo(hx(54), hy(8), hx(62), hy(2), hx(72), hy(2));
    p.bezierCurveTo(hx(87), hy(2), hx(98), hy(14), hx(98), hy(28));
    p.bezierCurveTo(hx(98), hy(45), hx(75), hy(65), hx(50), hy(88));
    p.closePath();
    return p;
  }

  const innerHeart = makeHeartPath(innerSize);
  const outerHeart = makeHeartPath(outerSize);
  let phase = 0;

  function draw() {
    phase += 0.015;
    ctx.clearRect(0, 0, w, h);

    // Shadow
    ctx.save();
    ctx.shadowColor = 'rgba(160,20,40,0.4)';
    ctx.shadowBlur = 15 * dpr;
    ctx.shadowOffsetY = 3 * dpr;
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fill(outerHeart);
    ctx.restore();

    // Gold bezel
    ctx.save();
    ctx.clip(outerHeart);
    const goldGrad = ctx.createLinearGradient(0, 0, w, h);
    goldGrad.addColorStop(0, '#ffe8a0');
    goldGrad.addColorStop(0.2, '#f0d060');
    goldGrad.addColorStop(0.45, '#b49530');
    goldGrad.addColorStop(0.55, '#d4b040');
    goldGrad.addColorStop(0.8, '#f0d060');
    goldGrad.addColorStop(1, '#8a6a10');
    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 0, w, h);

    // Bezel texture lines
    for (let i = 0; i < 24; i++) {
      const a = (Math.PI * 2 / 24) * i;
      const ir = outerSize * 0.0042 * w * 0.1;
      const or_ = outerSize * 0.005 * w * 0.1;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * outerSize * 0.42, cy + Math.sin(a) * outerSize * 0.42);
      ctx.lineTo(cx + Math.cos(a) * outerSize * 0.5, cy + Math.sin(a) * outerSize * 0.5);
      ctx.strokeStyle = 'rgba(255,240,180,0.15)';
      ctx.lineWidth = 0.8 * dpr;
      ctx.stroke();
    }
    ctx.restore();

    // Cut inner heart from bezel
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill(innerHeart);
    ctx.restore();

    // Bezel edge highlights
    ctx.strokeStyle = `rgba(255,240,180,${0.5 + 0.15 * Math.sin(phase * 0.5)})`;
    ctx.lineWidth = 1.5 * dpr;
    ctx.stroke(innerHeart);
    ctx.strokeStyle = 'rgba(90,68,12,0.5)';
    ctx.lineWidth = 1 * dpr;
    ctx.stroke(outerHeart);

    // Gold granulation dots
    for (let i = 0; i < 20; i++) {
      const a = (Math.PI * 2 / 20) * i;
      const r = outerSize * 0.52 + 4 * dpr;
      const dx = cx + Math.cos(a) * r;
      const dy = cy + Math.sin(a) * r - 3 * dpr;
      ctx.beginPath();
      ctx.arc(dx, dy, 2 * dpr, 0, Math.PI * 2);
      const dg = ctx.createRadialGradient(dx - dpr, dy - dpr, 0, dx, dy, 2 * dpr);
      dg.addColorStop(0, '#ffe8a0');
      dg.addColorStop(1, '#b49530');
      ctx.fillStyle = dg;
      ctx.fill();
    }

    // Ruby fill
    ctx.save();
    ctx.clip(innerHeart);

    const grad = ctx.createRadialGradient(cx - w * 0.06, cy - h * 0.08, w * 0.02, cx, cy, innerSize * 0.52);
    grad.addColorStop(0, 'rgba(255,140,160,1)');
    grad.addColorStop(0.25, 'rgba(230,55,75,0.95)');
    grad.addColorStop(0.55, 'rgba(180,30,50,0.9)');
    grad.addColorStop(0.8, 'rgba(120,15,30,0.95)');
    grad.addColorStop(1, 'rgba(70,5,15,1)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Facets
    const fn = 14;
    for (let i = 0; i < fn; i++) {
      const a0 = (Math.PI * 2 / fn) * i;
      const a1 = (Math.PI * 2 / fn) * (i + 1);
      const aMid = (a0 + a1) / 2;
      const ir = innerSize * 0.17, or_ = innerSize * 0.4;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a0) * ir, cy + Math.sin(a0) * ir);
      ctx.lineTo(cx + Math.cos(aMid) * or_, cy + Math.sin(aMid) * or_);
      ctx.lineTo(cx + Math.cos(a1) * ir, cy + Math.sin(a1) * ir);
      ctx.closePath();
      const b = 0.04 + 0.1 * Math.sin(phase * 1.3 + i * 0.8);
      ctx.fillStyle = `rgba(255,255,255,${b})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(255,255,255,${b * 0.5})`;
      ctx.lineWidth = 0.6 * dpr;
      ctx.stroke();
    }

    // Primary specular highlight
    const hlX = cx - w * 0.07 + Math.cos(phase * 0.35) * w * 0.025;
    const hlY = cy - h * 0.09 + Math.sin(phase * 0.35) * h * 0.015;
    const hl = ctx.createRadialGradient(hlX, hlY, 0, hlX, hlY, innerSize * 0.22);
    hl.addColorStop(0, `rgba(255,255,255,${0.85 + 0.15 * Math.sin(phase * 1.5)})`);
    hl.addColorStop(0.25, 'rgba(255,255,255,0.3)');
    hl.addColorStop(0.5, 'rgba(255,255,255,0.05)');
    hl.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = hl;
    ctx.fillRect(0, 0, w, h);

    // Secondary highlight
    const hl2 = ctx.createRadialGradient(cx + w * 0.06, cy + h * 0.07, 0, cx + w * 0.06, cy + h * 0.07, innerSize * 0.1);
    hl2.addColorStop(0, `rgba(255,255,255,${0.3 + 0.1 * Math.sin(phase * 2)})`);
    hl2.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = hl2;
    ctx.fillRect(0, 0, w, h);

    // Rainbow fire
    const fp = Math.sin(phase * 2.5);
    if (fp > 0.2) {
      const colors = [[255,100,100],[255,200,80],[100,255,180],[100,160,255],[200,120,255]];
      const fc = colors[Math.floor(phase * 0.5) % colors.length];
      const intensity = (fp - 0.2) / 0.8;
      const fa = phase * 0.7;
      const fx = cx + Math.cos(fa) * innerSize * 0.15;
      const fy = cy + Math.sin(fa) * innerSize * 0.15;
      const fg = ctx.createRadialGradient(fx, fy, 0, fx, fy, innerSize * 0.25);
      fg.addColorStop(0, `rgba(${fc[0]},${fc[1]},${fc[2]},${0.22 * intensity})`);
      fg.addColorStop(0.5, `rgba(${fc[0]},${fc[1]},${fc[2]},${0.06 * intensity})`);
      fg.addColorStop(1, `rgba(${fc[0]},${fc[1]},${fc[2]},0)`);
      ctx.fillStyle = fg;
      ctx.fillRect(0, 0, w, h);
    }

    // Edge depth
    const edg = ctx.createRadialGradient(cx, cy, innerSize * 0.25, cx, cy, innerSize * 0.52);
    edg.addColorStop(0, 'rgba(0,0,0,0)');
    edg.addColorStop(0.65, 'rgba(0,0,0,0)');
    edg.addColorStop(1, 'rgba(0,0,0,0.3)');
    ctx.fillStyle = edg;
    ctx.fillRect(0, 0, w, h);

    ctx.restore();

    requestAnimationFrame(draw);
  }
  draw();
}

initCrownJewelHeart('heart-gem-canvas', 120);
initCrownJewelHeart('onboarding-heart-canvas', 70);

// =======================================
// PAGE 2 — GRATITUDE JOURNAL
// =======================================
const journalDateEl = document.getElementById('journal-date');
const journalInput = document.getElementById('journal-input');
const journalSaveBtn = document.getElementById('journal-save');
const pastEntriesEl = document.getElementById('past-entries');

function renderJournal() {
  // Update date
  journalDateEl.textContent = formatDate(todayKey());

  const journal = loadJournal();
  const today = todayKey();

  // Load today's draft if exists
  if (journal[today]) {
    journalInput.value = journal[today].text || '';
  }

  // Render past entries (most recent first, skip today)
  const days = Object.keys(journal)
    .filter(d => d !== today && journal[d].text)
    .sort((a, b) => b.localeCompare(a));

  if (days.length === 0) {
    pastEntriesEl.innerHTML = '';
    return;
  }

  const scores = loadScores();
  let html = `<h3>${t('past_entries')}</h3>`;
  for (const day of days.slice(0, 30)) {
    const entry = journal[day];
    const heartCount = getHeartCount(scores, day);
    html += `
      <div class="past-entry">
        <div class="past-entry-date">${formatDate(day)}</div>
        <div class="past-entry-text">${escapeHtml(entry.text)}</div>
        ${heartCount > 0 ? `<div class="past-entry-hearts">${miniHeart} ${heartCount}</div>` : ''}
      </div>`;
  }
  pastEntriesEl.innerHTML = html;
}

function saveJournalEntry() {
  const text = journalInput.value.trim();
  if (!text) return;

  const journal = loadJournal();
  const today = todayKey();
  journal[today] = {
    text: text,
    savedAt: new Date().toISOString()
  };
  saveJournal(journal);

  // Button feedback
  journalSaveBtn.textContent = t('saved');
  journalSaveBtn.classList.add('saved');
  setTimeout(() => {
    journalSaveBtn.textContent = t('save');
    journalSaveBtn.classList.remove('saved');
  }, 1500);

  showToast(t('journal_saved'));
}

journalSaveBtn.addEventListener('click', saveJournalEntry);

// Auto-save draft on blur
journalInput.addEventListener('blur', () => {
  const text = journalInput.value.trim();
  if (text) {
    const journal = loadJournal();
    journal[todayKey()] = {
      text: text,
      savedAt: new Date().toISOString()
    };
    saveJournal(journal);
  }
});

// =======================================
// PAGE 3 — STATISTICS
// =======================================
function renderStats() {
  const scores = loadScores();
  const journal = loadJournal();
  const today = todayKey();

  // Today's score
  document.getElementById('stat-today-score').textContent = getHeartCount(scores, today);

  // Total hearts
  const totalHearts = Object.keys(scores).reduce((sum, k) => sum + getHeartCount(scores, k), 0);
  document.getElementById('stat-total-score').textContent = totalHearts;

  // Streak (consecutive days with at least 1 heart)
  let streak = 0;
  const d = new Date();
  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (getHeartCount(scores, key) > 0) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  document.getElementById('stat-streak').textContent = streak;

  // Journal entry count
  const journalCount = Object.values(journal).filter(e => e.text).length;
  document.getElementById('stat-journal-count').textContent = journalCount;

  // Chart — last 14 days
  renderChart(scores);

  // Recent gratitudes
  renderRecentGratitudes(journal);

  // Wire up clickable stat cards
  setupStatCards(scores, journal, today, streak);
}

// ---- Clickable stat cards ----
let activeCard = null;

function setupStatCards(scores, journal, today, streak) {
  const detailEl = document.getElementById('stat-detail');
  const cards = document.querySelectorAll('.stat-card[data-card]');

  cards.forEach(card => {
    card.onclick = () => {
      const type = card.dataset.card;

      // Toggle off if same card clicked
      if (activeCard === type) {
        detailEl.classList.remove('open');
        card.classList.remove('selected');
        activeCard = null;
        return;
      }

      // Deselect previous
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      activeCard = type;

      let html = '';

      if (type === 'today') {
        const entries = scores[today] || [];
        if (entries.length === 0) {
          html = `<div class="stat-detail-empty">${t('no_hearts_today')}</div>`;
        } else {
          html = `<div class="stat-detail-title">${t('todays_hearts')}</div>`;
          for (const e of entries) {
            const time = e.time ? formatTime(e.time) : '';
            const text = e.note
              ? `<span class="stat-detail-item-text">${escapeHtml(e.note)}</span>`
              : `<span class="stat-detail-item-text empty">${t('no_note')}</span>`;
            html += `<div class="stat-detail-item">
              <span class="stat-detail-item-icon">${miniHeart}</span>
              ${text}
              <span class="stat-detail-item-meta">${time}</span>
            </div>`;
          }
        }

      } else if (type === 'total') {
        const allDays = Object.keys(scores).sort((a, b) => b.localeCompare(a));
        if (allDays.length === 0) {
          html = `<div class="stat-detail-empty">${t('no_hearts')}</div>`;
        } else {
          html = `<div class="stat-detail-title">${t('all_hearts')}</div>`;
          for (const day of allDays) {
            const entries = scores[day];
            if (!Array.isArray(entries) || entries.length === 0) continue;
            html += `<div class="stat-detail-day"><div class="stat-detail-day-label">${formatDate(day)}</div>`;
            for (const e of entries) {
              const time = e.time ? formatTime(e.time) : '';
              const text = e.note
                ? `<span class="stat-detail-item-text">${escapeHtml(e.note)}</span>`
                : `<span class="stat-detail-item-text empty">${t('no_note')}</span>`;
              html += `<div class="stat-detail-item">
                <span class="stat-detail-item-icon">${miniHeart}</span>
                ${text}
                <span class="stat-detail-item-meta">${time}</span>
              </div>`;
            }
            html += '</div>';
          }
        }

      } else if (type === 'streak') {
        if (streak === 0) {
          html = `<div class="stat-detail-empty">${t('streak_empty')}</div>`;
        } else {
          const lang = getLang();
          const cdf = i18n[lang].consecutive_days || i18n.en.consecutive_days;
          html = `<div class="stat-detail-title">${cdf(streak)}</div>`;
          const d = new Date();
          for (let i = 0; i < streak; i++) {
            const key = d.toISOString().slice(0, 10);
            const count = getHeartCount(scores, key);
            const nhf = i18n[lang].n_hearts || i18n.en.n_hearts;
            html += `<div class="stat-detail-item">
              <span class="stat-detail-item-icon">${miniHeart}</span>
              <span class="stat-detail-item-text">${formatDate(key)}</span>
              <span class="stat-detail-item-meta">${nhf(count)}</span>
            </div>`;
            d.setDate(d.getDate() - 1);
          }
        }

      } else if (type === 'journal') {
        const days = Object.keys(journal).filter(d => journal[d].text).sort((a, b) => b.localeCompare(a));
        if (days.length === 0) {
          html = `<div class="stat-detail-empty">${t('no_journal')}</div>`;
        } else {
          html = `<div class="stat-detail-title">${t('journal_entries')}</div>`;
          for (const day of days) {
            const preview = journal[day].text.length > 80
              ? journal[day].text.slice(0, 80) + '...'
              : journal[day].text;
            html += `<div class="stat-detail-item">
              <span class="stat-detail-item-text">${escapeHtml(preview)}</span>
              <span class="stat-detail-item-meta">${formatDateShort(day)}</span>
            </div>`;
          }
        }
      }

      detailEl.innerHTML = html;
      detailEl.classList.add('open');
    };
  });
}

function renderChart(scores) {
  const container = document.getElementById('chart-container');
  const days = [];
  const d = new Date();
  for (let i = 13; i >= 0; i--) {
    const dd = new Date(d);
    dd.setDate(dd.getDate() - i);
    days.push(dd.toISOString().slice(0, 10));
  }

  const values = days.map(day => getHeartCount(scores, day));
  const max = Math.max(...values, 1);

  let html = '';
  for (let i = 0; i < days.length; i++) {
    const pct = (values[i] / max) * 100;
    const label = formatDateShort(days[i]);
    html += `
      <div class="chart-bar-row">
        <span class="chart-label">${label}</span>
        <div class="chart-bar-track">
          <div class="chart-bar" style="width: ${pct}%"></div>
        </div>
        <span class="chart-bar-value">${values[i]}</span>
      </div>`;
  }
  container.innerHTML = html;
}

function renderRecentGratitudes(journal) {
  const list = document.getElementById('recent-gratitudes-list');
  const days = Object.keys(journal)
    .filter(d => journal[d].text)
    .sort((a, b) => b.localeCompare(a))
    .slice(0, 7);

  if (days.length === 0) {
    list.innerHTML = `<div class="empty-state">${t('gratitudes_empty')}</div>`;
    return;
  }

  let html = '';
  for (const day of days) {
    html += `
      <div class="gratitude-item">
        <div class="gratitude-item-date">${formatDate(day)}</div>
        <div class="gratitude-item-text">${escapeHtml(journal[day].text)}</div>
      </div>`;
  }
  list.innerHTML = html;
}

// ---- Toast ----
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ---- Initialize journal page ----
renderJournal();

// =======================================
// FLOATING GEMS — Dynamic Background Layer
// =======================================
function initFloatingGems(canvasId, pageIndex) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const gemColors = [
    { base: [100, 210, 190], hi: [180, 245, 230], mid: [60, 180, 160], dark: [30, 120, 100] },
    { base: [210, 200, 220], hi: [240, 235, 255], mid: [190, 180, 210], dark: [140, 130, 170] },
    { base: [180, 130, 210], hi: [220, 185, 255], mid: [150, 100, 190], dark: [100, 60, 150] },
    { base: [220, 120, 160], hi: [255, 180, 210], mid: [200, 90, 140], dark: [150, 50, 100] },
    { base: [140, 200, 160], hi: [200, 240, 210], mid: [100, 175, 130], dark: [60, 130, 80] },
    { base: [200, 80, 80],   hi: [255, 140, 140], mid: [180, 50, 60],  dark: [130, 20, 30] },
    { base: [80, 140, 220],  hi: [150, 200, 255], mid: [50, 110, 200], dark: [20, 70, 160] },
    { base: [240, 200, 100], hi: [255, 235, 170], mid: [220, 175, 60], dark: [180, 140, 20] },
  ];

  const fireColors = [
    [255, 100, 100], [255, 180, 80], [255, 255, 100],
    [100, 255, 150], [100, 180, 255], [180, 120, 255],
  ];

  const shapeTypes = ['round', 'round', 'emerald', 'pear', 'oval', 'marquise'];

  let w, h, dpr;
  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = canvas.width = canvas.offsetWidth * dpr;
    h = canvas.height = canvas.offsetHeight * dpr;
  }
  resize();
  window.addEventListener('resize', resize);

  const COUNT = 10;
  const gems = [];
  for (let i = 0; i < COUNT; i++) {
    gems.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: (7 + Math.random() * 8) * dpr,
      dx: (Math.random() - 0.5) * 1.5 * dpr,
      dy: (-0.8 - Math.random() * 1.2) * dpr,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.025 + Math.random() * 0.035,
      color: gemColors[Math.floor(Math.random() * gemColors.length)],
      shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      highlightOffset: Math.random() * Math.PI * 2,
      fireIdx: Math.floor(Math.random() * fireColors.length),
    });
  }

  // --- Shape clip paths ---
  function clipShape(shape, s) {
    ctx.beginPath();
    if (shape === 'round') {
      ctx.arc(0, 0, s, 0, Math.PI * 2);
    } else if (shape === 'oval') {
      ctx.ellipse(0, 0, s, s * 0.68, 0, 0, Math.PI * 2);
    } else if (shape === 'emerald') {
      const ew = s * 0.75, eh = s, c = s * 0.22;
      ctx.moveTo(-ew + c, -eh); ctx.lineTo(ew - c, -eh);
      ctx.lineTo(ew, -eh + c);  ctx.lineTo(ew, eh - c);
      ctx.lineTo(ew - c, eh);   ctx.lineTo(-ew + c, eh);
      ctx.lineTo(-ew, eh - c);  ctx.lineTo(-ew, -eh + c);
      ctx.closePath();
    } else if (shape === 'pear') {
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.55, -s * 0.5, s * 0.85, s * 0.1, s * 0.68, s * 0.55);
      ctx.bezierCurveTo(s * 0.52, s * 0.88, s * 0.2, s, 0, s);
      ctx.bezierCurveTo(-s * 0.2, s, -s * 0.52, s * 0.88, -s * 0.68, s * 0.55);
      ctx.bezierCurveTo(-s * 0.85, s * 0.1, -s * 0.55, -s * 0.5, 0, -s);
      ctx.closePath();
    } else if (shape === 'marquise') {
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.85, -s * 0.55, s * 0.85, s * 0.55, 0, s);
      ctx.bezierCurveTo(-s * 0.85, s * 0.55, -s * 0.85, -s * 0.55, 0, -s);
      ctx.closePath();
    }
  }

  function drawFacetPath(pts) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.closePath();
  }

  // --- Facets per shape ---
  function drawBrilliantFacets(shape, s, phase) {
    const n = 10;
    const step = (Math.PI * 2) / n;

    // Adaptive radius function per shape
    function outerR(a) {
      if (shape === 'oval') return { x: Math.cos(a) * s, y: Math.sin(a) * s * 0.68 };
      if (shape === 'marquise') {
        const r = s * (0.5 + 0.5 * Math.abs(Math.sin(a)));
        return { x: Math.cos(a) * r, y: Math.sin(a) * r };
      }
      if (shape === 'pear') {
        const r = s * (0.65 + 0.35 * Math.sin(a + Math.PI * 0.5 + 0.2));
        return { x: Math.cos(a) * r, y: Math.sin(a) * r };
      }
      // round / default
      return { x: Math.cos(a) * s, y: Math.sin(a) * s };
    }
    function tableR(a) {
      const o = outerR(a);
      return { x: o.x * 0.38, y: o.y * 0.38 };
    }

    for (let i = 0; i < n; i++) {
      const a0 = step * i, a1 = step * (i + 1), aMid = (a0 + a1) / 2;
      const t0 = tableR(a0), t1 = tableR(a1), oM = outerR(aMid);

      // Crown kite
      drawFacetPath([[t0.x, t0.y], [oM.x, oM.y], [t1.x, t1.y]]);
      const b = 0.06 + 0.12 * Math.sin(phase * 1.2 + a0 * 2);
      ctx.fillStyle = `rgba(255,255,255,${b})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(255,255,255,${0.05 + b * 0.3})`;
      ctx.lineWidth = 0.4 * dpr;
      ctx.stroke();

      // Girdle triangle
      const o0 = outerR(a0);
      drawFacetPath([[oM.x, oM.y], [o0.x, o0.y], [t0.x, t0.y]]);
      ctx.fillStyle = `rgba(255,255,255,${0.02 + 0.06 * Math.sin(phase + i)})`;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 0.3 * dpr;
      ctx.stroke();
    }
  }

  function drawEmeraldFacets(s, phase) {
    const ew = s * 0.75, eh = s, c = s * 0.22;
    const rings = 3;
    for (let r = 0; r < rings; r++) {
      const t = (r + 1) / (rings + 1);
      const iw = ew * (1 - t * 0.7), ih = eh * (1 - t * 0.7);
      const ow = ew * (1 - (r / (rings + 1)) * 0.7), oh = eh * (1 - (r / (rings + 1)) * 0.7);
      const ic = c * (1 - t * 0.5), oc = c * (1 - (r / (rings + 1)) * 0.5);
      const b = 0.04 + 0.1 * Math.sin(phase * 1.1 + r * 1.5);

      drawFacetPath([[-ow + oc, -oh], [ow - oc, -oh], [iw - ic, -ih], [-iw + ic, -ih]]);
      ctx.fillStyle = `rgba(255,255,255,${b})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(255,255,255,${0.04 + b * 0.3})`;
      ctx.lineWidth = 0.4 * dpr;
      ctx.stroke();

      drawFacetPath([[-ow + oc, oh], [ow - oc, oh], [iw - ic, ih], [-iw + ic, ih]]);
      ctx.fillStyle = `rgba(255,255,255,${b * 0.7})`;
      ctx.fill(); ctx.stroke();

      drawFacetPath([[ow, -oh + oc], [ow, oh - oc], [iw, ih - ic], [iw, -ih + ic]]);
      ctx.fillStyle = `rgba(255,255,255,${0.03 + 0.07 * Math.sin(phase * 0.8 + r)})`;
      ctx.fill(); ctx.stroke();

      drawFacetPath([[-ow, -oh + oc], [-ow, oh - oc], [-iw, ih - ic], [-iw, -ih + ic]]);
      ctx.fillStyle = `rgba(255,255,255,${0.03 + 0.07 * Math.sin(phase * 0.8 + r + 2)})`;
      ctx.fill(); ctx.stroke();
    }
  }

  // --- Draw a single floating gem ---
  function drawGem(g) {
    const s = g.size;
    const [br, bg, bb] = g.color.base;
    const [hr, hg, hb] = g.color.hi;
    const [mr, mg, mb] = g.color.mid;
    const [dr, dg, db] = g.color.dark;
    const phase = g.phase;
    const bx = s * 1.2;

    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(g.rot);
    ctx.globalAlpha = 0.75 + 0.25 * Math.sin(phase * 0.7);

    // Outer glow
    const glowR = s * 2;
    const glow = ctx.createRadialGradient(0, 0, s * 0.4, 0, 0, glowR);
    glow.addColorStop(0, `rgba(${hr},${hg},${hb}, 0.4)`);
    glow.addColorStop(0.5, `rgba(${hr},${hg},${hb}, 0.12)`);
    glow.addColorStop(1, `rgba(${hr},${hg},${hb}, 0)`);
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, glowR, 0, Math.PI * 2);
    ctx.fill();

    // Clip to shape
    ctx.save();
    clipShape(g.shape, s);
    ctx.clip();

    // Base gradient
    const baseGrad = ctx.createRadialGradient(-s * 0.2, -s * 0.2, 0, 0, 0, s);
    baseGrad.addColorStop(0, `rgba(${hr},${hg},${hb}, 0.95)`);
    baseGrad.addColorStop(0.35, `rgba(${br},${bg},${bb}, 0.85)`);
    baseGrad.addColorStop(0.65, `rgba(${mr},${mg},${mb}, 0.8)`);
    baseGrad.addColorStop(1, `rgba(${dr},${dg},${db}, 0.9)`);
    ctx.fillStyle = baseGrad;
    ctx.fillRect(-bx, -bx, bx * 2, bx * 2);

    // Facets
    if (g.shape === 'emerald') {
      drawEmeraldFacets(s, phase);
    } else {
      drawBrilliantFacets(g.shape, s, phase);
    }

    // Primary highlight
    const hlAngle = phase * 0.4 + g.highlightOffset;
    const hlX = Math.cos(hlAngle) * s * 0.2;
    const hlY = Math.sin(hlAngle) * s * 0.2;
    const hlGrad = ctx.createRadialGradient(hlX, hlY, 0, hlX, hlY, s * 0.45);
    hlGrad.addColorStop(0, `rgba(255,255,255,${0.5 + 0.3 * Math.sin(phase * 2)})`);
    hlGrad.addColorStop(0.2, 'rgba(255,255,255,0.12)');
    hlGrad.addColorStop(0.5, 'rgba(255,255,255,0.02)');
    hlGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = hlGrad;
    ctx.fillRect(-bx, -bx, bx * 2, bx * 2);

    // Rainbow fire
    const fp = Math.sin(phase * 3);
    if (fp > 0.3) {
      const intensity = (fp - 0.3) / 0.7;
      const fc = fireColors[(g.fireIdx + Math.floor(phase)) % fireColors.length];
      const fa = phase * 0.8 + g.highlightOffset;
      const fx = Math.cos(fa) * s * 0.3, fy = Math.sin(fa) * s * 0.3;
      const fGrad = ctx.createRadialGradient(fx, fy, 0, fx, fy, s * 0.3);
      fGrad.addColorStop(0, `rgba(${fc[0]},${fc[1]},${fc[2]},${0.2 * intensity})`);
      fGrad.addColorStop(0.5, `rgba(${fc[0]},${fc[1]},${fc[2]},${0.05 * intensity})`);
      fGrad.addColorStop(1, `rgba(${fc[0]},${fc[1]},${fc[2]},0)`);
      ctx.fillStyle = fGrad;
      ctx.fillRect(-bx, -bx, bx * 2, bx * 2);
    }

    ctx.restore(); // restore clip

    // Outline
    clipShape(g.shape, s);
    ctx.strokeStyle = `rgba(255,255,255,${0.1 + 0.06 * Math.sin(phase * 1.3)})`;
    ctx.lineWidth = 0.6 * dpr;
    ctx.stroke();

    ctx.restore();
  }

  function draw() {
    if (currentPage !== pageIndex) {
      requestAnimationFrame(draw);
      return;
    }

    // Mobile safety: re-check dimensions if canvas was 0 at init
    if (w === 0 || h === 0) {
      resize();
      for (const g of gems) {
        g.x = Math.random() * w;
        g.y = Math.random() * h;
      }
    }

    ctx.clearRect(0, 0, w, h);

    for (const g of gems) {
      g.x += g.dx;
      g.y += g.dy;
      g.rot += g.rotSpeed;
      g.phase += g.twinkleSpeed;

      if (g.y < -g.size * 3) { g.y = h + g.size * 3; g.x = Math.random() * w; }
      if (g.x < -g.size * 3) g.x = w + g.size * 3;
      if (g.x > w + g.size * 3) g.x = -g.size * 3;

      drawGem(g);
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

// Initialize floating gems on all three pages
initFloatingGems('floating-gems-canvas', 0);
initFloatingGems('floating-gems-canvas-2', 1);
initFloatingGems('floating-gems-canvas-3', 2);

// =======================================
// JEWELED FRAME — Gems Embedded Like a Reliquary
// =======================================
(function initGems() {
  const canvas = document.getElementById('shimmer-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // --- Gold palette ---
  const gold = {
    dark:   [110, 82, 15],
    mid:    [175, 140, 45],
    bright: [230, 200, 90],
    hi:     [255, 240, 180],
  };

  // --- Gem colors (cabochon style) ---
  const gemPalette = [
    { base: [160, 20, 40],  hi: [255, 120, 140], mid: [200, 50, 60],  dark: [100, 10, 20]  }, // ruby
    { base: [30, 70, 180],  hi: [130, 180, 255], mid: [50, 100, 220], dark: [15, 40, 120]  }, // sapphire
    { base: [20, 140, 80],  hi: [120, 230, 160], mid: [30, 170, 100], dark: [10, 90, 50]   }, // emerald
    { base: [160, 100, 200],hi: [220, 180, 255], mid: [140, 80, 190], dark: [90, 40, 140]  }, // amethyst
    { base: [80, 190, 180], hi: [170, 240, 230], mid: [50, 160, 150], dark: [25, 110, 100] }, // aquamarine
    { base: [200, 100, 140],hi: [255, 180, 210], mid: [180, 70, 120], dark: [130, 40, 80]  }, // pink tourmaline
    { base: [210, 190, 220],hi: [245, 240, 255], mid: [200, 185, 215],dark: [160, 150, 180]}, // moonstone
    { base: [220, 180, 60], hi: [255, 235, 160], mid: [200, 160, 40], dark: [160, 120, 15] }, // citrine
  ];

  // Pearl color
  const pearl = { base: [230, 225, 215], hi: [255, 252, 248], mid: [215, 210, 200], dark: [180, 175, 165] };

  const fireColors = [
    [255, 90, 90], [255, 170, 70], [255, 255, 90],
    [90, 255, 140], [90, 170, 255], [170, 110, 255],
  ];

  let w, h, dpr;
  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = canvas.width = canvas.offsetWidth * dpr;
    h = canvas.height = canvas.offsetHeight * dpr;
    layoutGems();
  }

  // --- Gem layout: placed along borders like a jeweled frame ---
  let gems = [];

  function layoutGems() {
    gems = [];
    const margin = 18 * dpr;
    const S = dpr; // scale factor

    // Helper to add a gem
    function add(x, y, size, shape, colorIdx, rot) {
      const color = colorIdx === -1 ? pearl : gemPalette[colorIdx % gemPalette.length];
      gems.push({
        x, y, size: size * S, shape, color,
        rot: rot || 0,
        isPearl: colorIdx === -1,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.006 + Math.random() * 0.008,
        highlightOffset: Math.random() * Math.PI * 2,
        fireIdx: Math.floor(Math.random() * fireColors.length),
      });
    }

    // Four corner large gems
    const cs = 16; // corner gem size
    add(margin + cs * S, margin + cs * S, cs, 'round', 0);                     // top-left ruby
    add(w - margin - cs * S, margin + cs * S, cs, 'round', 1);                 // top-right sapphire
    add(margin + cs * S, h - margin - cs * S, cs, 'oval', 4);                  // bottom-left aqua
    add(w - margin - cs * S, h - margin - cs * S, cs, 'round', 3);             // bottom-right amethyst

    // Top edge gems
    const topY = margin + 10 * S;
    const topSpacing = (w - 2 * (margin + cs * S * 2)) / 5;
    for (let i = 1; i <= 4; i++) {
      const x = margin + cs * S * 2 + topSpacing * i;
      const isPearl = i % 2 === 0;
      if (isPearl) {
        add(x, topY, 7, 'round', -1);
      } else {
        add(x, topY, 10, i === 1 ? 'marquise' : 'emerald', 2 + i, i === 1 ? Math.PI / 2 : 0);
      }
    }

    // Bottom edge gems
    const botY = h - margin - 10 * S;
    for (let i = 1; i <= 4; i++) {
      const x = margin + cs * S * 2 + topSpacing * i;
      const isPearl = i % 2 === 1;
      if (isPearl) {
        add(x, botY, 7, 'round', -1);
      } else {
        add(x, botY, 10, i === 2 ? 'pear' : 'oval', 5 + i);
      }
    }

    // Left edge gems
    const leftX = margin + 10 * S;
    const sideSpacing = (h - 2 * (margin + cs * S * 2)) / 4;
    for (let i = 1; i <= 3; i++) {
      const y = margin + cs * S * 2 + sideSpacing * i;
      if (i === 2) {
        add(leftX, y, 12, 'emerald', 7, Math.PI / 4);
      } else {
        add(leftX, y, 6, 'round', -1);
      }
    }

    // Right edge gems
    const rightX = w - margin - 10 * S;
    for (let i = 1; i <= 3; i++) {
      const y = margin + cs * S * 2 + sideSpacing * i;
      if (i === 2) {
        add(rightX, y, 12, 'pear', 5);
      } else {
        add(rightX, y, 6, 'round', -1);
      }
    }

    // Small accent pearls scattered along the midpoints of edges
    add(w * 0.5, margin + 3 * S, 4, 'round', -1);
    add(w * 0.5, h - margin - 3 * S, 4, 'round', -1);
  }

  resize();
  window.addEventListener('resize', resize);

  // --- Shape clip paths ---
  function clipShape(shape, s) {
    ctx.beginPath();
    if (shape === 'round') {
      ctx.arc(0, 0, s, 0, Math.PI * 2);
    } else if (shape === 'oval') {
      ctx.ellipse(0, 0, s, s * 0.7, 0, 0, Math.PI * 2);
    } else if (shape === 'emerald') {
      const ew = s * 0.78, eh = s, c = s * 0.24;
      ctx.moveTo(-ew + c, -eh); ctx.lineTo(ew - c, -eh);
      ctx.lineTo(ew, -eh + c);  ctx.lineTo(ew, eh - c);
      ctx.lineTo(ew - c, eh);   ctx.lineTo(-ew + c, eh);
      ctx.lineTo(-ew, eh - c);  ctx.lineTo(-ew, -eh + c);
      ctx.closePath();
    } else if (shape === 'pear') {
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.55, -s * 0.5, s * 0.85, s * 0.1, s * 0.68, s * 0.55);
      ctx.bezierCurveTo(s * 0.52, s * 0.88, s * 0.2, s, 0, s);
      ctx.bezierCurveTo(-s * 0.2, s, -s * 0.52, s * 0.88, -s * 0.68, s * 0.55);
      ctx.bezierCurveTo(-s * 0.85, s * 0.1, -s * 0.55, -s * 0.5, 0, -s);
      ctx.closePath();
    } else if (shape === 'marquise') {
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.85, -s * 0.55, s * 0.85, s * 0.55, 0, s);
      ctx.bezierCurveTo(-s * 0.85, s * 0.55, -s * 0.85, -s * 0.55, 0, -s);
      ctx.closePath();
    }
  }

  // --- Gold bezel with 3D metallic look ---
  function drawBezel(shape, s, phase) {
    const bezelW = s * 0.22;
    const outerS = s + bezelW;

    // Drop shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 6 * dpr;
    ctx.shadowOffsetY = 2 * dpr;
    clipShape(shape, outerS);
    ctx.fillStyle = 'rgba(0,0,0,0.01)'; // trigger shadow
    ctx.fill();
    ctx.restore();

    // Outer gold ring
    clipShape(shape, outerS);
    const [gd0, gd1, gd2] = gold.dark;
    const [gm0, gm1, gm2] = gold.mid;
    const [gb0, gb1, gb2] = gold.bright;
    const [gh0, gh1, gh2] = gold.hi;

    const ringGrad = ctx.createLinearGradient(-outerS, -outerS, outerS, outerS);
    ringGrad.addColorStop(0, `rgb(${gh0},${gh1},${gh2})`);
    ringGrad.addColorStop(0.25, `rgb(${gb0},${gb1},${gb2})`);
    ringGrad.addColorStop(0.5, `rgb(${gm0},${gm1},${gm2})`);
    ringGrad.addColorStop(0.75, `rgb(${gb0},${gb1},${gb2})`);
    ringGrad.addColorStop(1, `rgb(${gd0},${gd1},${gd2})`);
    ctx.fillStyle = ringGrad;
    ctx.fill();

    // Inner cutout (will be covered by gem)
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    clipShape(shape, s);
    ctx.fill();
    ctx.restore();

    // Bezel inner edge highlight (raised lip)
    clipShape(shape, s + 1.5 * dpr);
    ctx.strokeStyle = `rgba(${gh0},${gh1},${gh2}, ${0.5 + 0.2 * Math.sin(phase * 0.5)})`;
    ctx.lineWidth = 1.2 * dpr;
    ctx.stroke();

    // Bezel outer edge shadow
    clipShape(shape, outerS);
    ctx.strokeStyle = `rgba(${gd0},${gd1},${gd2}, 0.6)`;
    ctx.lineWidth = 1 * dpr;
    ctx.stroke();

    // Gold granulation dots (tiny decorative bumps around larger gems)
    if (s > 10 * dpr) {
      const dotCount = shape === 'round' ? 12 : 8;
      const dotR = outerS + 4 * dpr;
      const dotSize = 1.5 * dpr;
      for (let i = 0; i < dotCount; i++) {
        const a = (Math.PI * 2 / dotCount) * i;
        const dx = Math.cos(a) * dotR, dy = Math.sin(a) * dotR;
        ctx.beginPath();
        ctx.arc(dx, dy, dotSize, 0, Math.PI * 2);
        const dGrad = ctx.createRadialGradient(dx - dotSize * 0.3, dy - dotSize * 0.3, 0, dx, dy, dotSize);
        dGrad.addColorStop(0, `rgb(${gh0},${gh1},${gh2})`);
        dGrad.addColorStop(1, `rgb(${gm0},${gm1},${gm2})`);
        ctx.fillStyle = dGrad;
        ctx.fill();
      }
    }
  }

  // --- Cabochon gem body (smooth dome, no facets — like the reference image) ---
  function drawCabochon(g) {
    const s = g.size;
    const [br, bg, bb] = g.color.base;
    const [hr, hg, hb] = g.color.hi;
    const [mr, mg, mb] = g.color.mid;
    const [dr, dg, db] = g.color.dark;
    const phase = g.phase;
    const bx = s * 1.2;

    // Clip to shape
    ctx.save();
    clipShape(g.shape, s);
    ctx.clip();

    // Base dome gradient (3D curvature)
    const domeGrad = ctx.createRadialGradient(-s * 0.25, -s * 0.3, s * 0.1, 0, 0, s);
    domeGrad.addColorStop(0, `rgba(${hr},${hg},${hb}, 1)`);
    domeGrad.addColorStop(0.3, `rgba(${br},${bg},${bb}, 0.95)`);
    domeGrad.addColorStop(0.6, `rgba(${mr},${mg},${mb}, 0.9)`);
    domeGrad.addColorStop(0.85, `rgba(${dr},${dg},${db}, 0.95)`);
    domeGrad.addColorStop(1, `rgba(${dr*0.6|0},${dg*0.6|0},${db*0.6|0}, 1)`);
    ctx.fillStyle = domeGrad;
    ctx.fillRect(-bx, -bx, bx * 2, bx * 2);

    // Depth ring (darker edge to show gem is recessed into bezel)
    clipShape(g.shape, s);
    const edgeGrad = ctx.createRadialGradient(0, 0, s * 0.7, 0, 0, s);
    edgeGrad.addColorStop(0, 'rgba(0,0,0,0)');
    edgeGrad.addColorStop(0.8, 'rgba(0,0,0,0)');
    edgeGrad.addColorStop(1, 'rgba(0,0,0,0.3)');
    ctx.fillStyle = edgeGrad;
    ctx.fillRect(-bx, -bx, bx * 2, bx * 2);

    if (!g.isPearl) {
      // --- Subtle internal patterns (for colored gems) ---
      // Silk-like inclusions
      for (let i = 0; i < 3; i++) {
        const a = (Math.PI * 2 / 3) * i + phase * 0.02;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * s * 0.1, Math.sin(a) * s * 0.1);
        ctx.lineTo(Math.cos(a) * s * 0.7, Math.sin(a) * s * 0.7);
        ctx.strokeStyle = `rgba(${hr},${hg},${hb}, ${0.06 + 0.03 * Math.sin(phase + i)})`;
        ctx.lineWidth = 2 * dpr;
        ctx.stroke();
      }
    } else {
      // --- Pearl iridescence ---
      const iriAngle = phase * 0.3;
      const iriGrad = ctx.createLinearGradient(
        Math.cos(iriAngle) * s, Math.sin(iriAngle) * s,
        -Math.cos(iriAngle) * s, -Math.sin(iriAngle) * s
      );
      iriGrad.addColorStop(0, 'rgba(255,200,200,0.08)');
      iriGrad.addColorStop(0.33, 'rgba(200,255,220,0.06)');
      iriGrad.addColorStop(0.66, 'rgba(200,210,255,0.08)');
      iriGrad.addColorStop(1, 'rgba(255,220,255,0.06)');
      ctx.fillStyle = iriGrad;
      ctx.fillRect(-bx, -bx, bx * 2, bx * 2);
    }

    // --- Primary specular highlight (the big bright spot) ---
    const hlX = -s * 0.2 + Math.cos(phase * 0.3 + g.highlightOffset) * s * 0.08;
    const hlY = -s * 0.28 + Math.sin(phase * 0.3 + g.highlightOffset) * s * 0.05;
    const hlR = s * (g.isPearl ? 0.35 : 0.28);
    const hlGrad = ctx.createRadialGradient(hlX, hlY, 0, hlX, hlY, hlR);
    const hlBright = 0.85 + 0.15 * Math.sin(phase * 1.5);
    hlGrad.addColorStop(0, `rgba(255,255,255,${hlBright})`);
    hlGrad.addColorStop(0.3, `rgba(255,255,255,${hlBright * 0.4})`);
    hlGrad.addColorStop(0.6, 'rgba(255,255,255,0.05)');
    hlGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = hlGrad;
    ctx.fillRect(-bx, -bx, bx * 2, bx * 2);

    // --- Small secondary highlight ---
    const hl2X = s * 0.15, hl2Y = s * 0.2;
    const hl2Grad = ctx.createRadialGradient(hl2X, hl2Y, 0, hl2X, hl2Y, s * 0.15);
    hl2Grad.addColorStop(0, `rgba(255,255,255,${0.2 + 0.1 * Math.sin(phase * 2)})`);
    hl2Grad.addColorStop(0.5, 'rgba(255,255,255,0.03)');
    hl2Grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = hl2Grad;
    ctx.fillRect(-bx, -bx, bx * 2, bx * 2);

    // --- Rainbow fire flash (colored gems only) ---
    if (!g.isPearl) {
      const fp = Math.sin(phase * 2.5);
      if (fp > 0.4) {
        const intensity = (fp - 0.4) / 0.6;
        const fc = fireColors[(g.fireIdx + Math.floor(phase * 0.5)) % fireColors.length];
        const fa = phase * 0.6 + g.highlightOffset;
        const fx = Math.cos(fa) * s * 0.25, fy = Math.sin(fa) * s * 0.25;
        const fGrad = ctx.createRadialGradient(fx, fy, 0, fx, fy, s * 0.35);
        fGrad.addColorStop(0, `rgba(${fc[0]},${fc[1]},${fc[2]},${0.18 * intensity})`);
        fGrad.addColorStop(0.4, `rgba(${fc[0]},${fc[1]},${fc[2]},${0.05 * intensity})`);
        fGrad.addColorStop(1, `rgba(${fc[0]},${fc[1]},${fc[2]},0)`);
        ctx.fillStyle = fGrad;
        ctx.fillRect(-bx, -bx, bx * 2, bx * 2);
      }
    }

    ctx.restore(); // restore clip
  }

  // --- Gold filigree curls connecting gems along borders ---
  function drawFiligree() {
    const [gm0, gm1, gm2] = gold.mid;
    const [gb0, gb1, gb2] = gold.bright;
    const margin = 18 * dpr;

    ctx.save();
    ctx.strokeStyle = `rgba(${gm0},${gm1},${gm2}, 0.25)`;
    ctx.lineWidth = 1.2 * dpr;
    ctx.lineCap = 'round';

    // Top border filigree
    const topY = margin + 10 * dpr;
    for (let x = margin + 40 * dpr; x < w - margin - 40 * dpr; x += 20 * dpr) {
      ctx.beginPath();
      ctx.moveTo(x, topY - 5 * dpr);
      ctx.quadraticCurveTo(x + 5 * dpr, topY - 12 * dpr, x + 10 * dpr, topY - 5 * dpr);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, topY + 5 * dpr);
      ctx.quadraticCurveTo(x + 5 * dpr, topY + 12 * dpr, x + 10 * dpr, topY + 5 * dpr);
      ctx.stroke();
    }

    // Bottom border filigree
    const botY = h - margin - 10 * dpr;
    for (let x = margin + 40 * dpr; x < w - margin - 40 * dpr; x += 20 * dpr) {
      ctx.beginPath();
      ctx.moveTo(x, botY - 5 * dpr);
      ctx.quadraticCurveTo(x + 5 * dpr, botY - 12 * dpr, x + 10 * dpr, botY - 5 * dpr);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, botY + 5 * dpr);
      ctx.quadraticCurveTo(x + 5 * dpr, botY + 12 * dpr, x + 10 * dpr, botY + 5 * dpr);
      ctx.stroke();
    }

    // Left border filigree
    const leftX = margin + 10 * dpr;
    for (let y = margin + 50 * dpr; y < h - margin - 50 * dpr; y += 20 * dpr) {
      ctx.beginPath();
      ctx.moveTo(leftX - 5 * dpr, y);
      ctx.quadraticCurveTo(leftX - 12 * dpr, y + 5 * dpr, leftX - 5 * dpr, y + 10 * dpr);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(leftX + 5 * dpr, y);
      ctx.quadraticCurveTo(leftX + 12 * dpr, y + 5 * dpr, leftX + 5 * dpr, y + 10 * dpr);
      ctx.stroke();
    }

    // Right border filigree
    const rightX = w - margin - 10 * dpr;
    for (let y = margin + 50 * dpr; y < h - margin - 50 * dpr; y += 20 * dpr) {
      ctx.beginPath();
      ctx.moveTo(rightX - 5 * dpr, y);
      ctx.quadraticCurveTo(rightX - 12 * dpr, y + 5 * dpr, rightX - 5 * dpr, y + 10 * dpr);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(rightX + 5 * dpr, y);
      ctx.quadraticCurveTo(rightX + 12 * dpr, y + 5 * dpr, rightX + 5 * dpr, y + 10 * dpr);
      ctx.stroke();
    }

    // Corner flourishes (small spiral near each corner gem)
    const corners = [
      [margin, margin, 1, 1],
      [w - margin, margin, -1, 1],
      [margin, h - margin, 1, -1],
      [w - margin, h - margin, -1, -1],
    ];
    ctx.strokeStyle = `rgba(${gb0},${gb1},${gb2}, 0.2)`;
    ctx.lineWidth = 1 * dpr;
    for (const [cx, cy, sx, sy] of corners) {
      // Small decorative swirl
      for (let r = 0; r < 2; r++) {
        ctx.beginPath();
        const startA = r * Math.PI;
        for (let a = 0; a <= Math.PI * 1.5; a += 0.1) {
          const radius = (8 + a * 4) * dpr;
          const px = cx + Math.cos(startA + a * sx) * radius * sx;
          const py = cy + Math.sin(startA + a * sy) * radius * sy;
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  // --- Outer frame border lines ---
  function drawFrameBorder() {
    const [gm0, gm1, gm2] = gold.mid;
    const [gd0, gd1, gd2] = gold.dark;
    const margin = 18 * dpr;
    const r = 8 * dpr; // corner radius

    // Outer line
    ctx.beginPath();
    ctx.roundRect(margin - 4 * dpr, margin - 4 * dpr, w - 2 * margin + 8 * dpr, h - 2 * margin + 8 * dpr, r + 2 * dpr);
    ctx.strokeStyle = `rgba(${gd0},${gd1},${gd2}, 0.3)`;
    ctx.lineWidth = 1.5 * dpr;
    ctx.stroke();

    // Inner line
    ctx.beginPath();
    ctx.roundRect(margin + 24 * dpr, margin + 24 * dpr, w - 2 * margin - 48 * dpr, h - 2 * margin - 48 * dpr, r);
    ctx.strokeStyle = `rgba(${gm0},${gm1},${gm2}, 0.15)`;
    ctx.lineWidth = 0.8 * dpr;
    ctx.stroke();
  }

  // --- Main render loop ---
  function draw() {
    if (currentPage !== 0) {
      requestAnimationFrame(draw);
      return;
    }

    // Mobile safety: re-check dimensions if canvas was 0 at init
    if (w === 0 || h === 0) {
      resize();
    }

    ctx.clearRect(0, 0, w, h);

    // Draw the frame structure
    drawFrameBorder();
    drawFiligree();

    // Draw each gem: bezel first, then cabochon stone
    for (const g of gems) {
      g.phase += g.twinkleSpeed;

      ctx.save();
      ctx.translate(g.x, g.y);
      ctx.rotate(g.rot);

      drawBezel(g.shape, g.size, g.phase);
      drawCabochon(g);

      ctx.restore();
    }

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// ---- Service Worker Registration ----
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
