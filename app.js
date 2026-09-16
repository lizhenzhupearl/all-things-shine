/* ========================================
   All Things Shine — App Logic
   ======================================== */

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
  // One greeting per day, consistent throughout the day
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  return greetings[dayOfYear % greetings.length];
}

// ---- Format date ----
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
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
// THEME SYSTEM
// =======================================
const STORAGE_KEY_THEME = 'heartbeat_theme';
const STORAGE_KEY_THEME_MODE = 'heartbeat_theme_mode'; // 'daily' or 'manual'

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
];

function getDailyThemeIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return dayOfYear % themes.length;
}

function loadThemePrefs() {
  const mode = localStorage.getItem(STORAGE_KEY_THEME_MODE) || 'manual';
  const manual = parseInt(localStorage.getItem(STORAGE_KEY_THEME) || '0', 10);
  return { mode, manual };
}

function getActiveThemeIndex() {
  const prefs = loadThemePrefs();
  if (prefs.mode === 'daily') return getDailyThemeIndex();
  // Default to Ocean Sunrise (index 1) if no preference set
  if (!localStorage.getItem(STORAGE_KEY_THEME)) return 1;
  return prefs.manual;
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

function applyTheme(index) {
  renderThemeBg(index);
  // Update the theme picker swatches to show active
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
  const randomBtn = document.getElementById('theme-picker-random');

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

  // Daily surprise mode
  randomBtn.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY_THEME_MODE, 'daily');
    localStorage.removeItem(STORAGE_KEY_THEME);
    applyTheme(getDailyThemeIndex());
    overlay.classList.remove('open');
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

document.addEventListener('touchstart', (e) => {
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
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function updateTodayScore() {
  const scores = loadScores();
  const entries = scores[todayKey()] || [];
  renderHeartNotes(entries);
  // Quiet total
  const total = Object.keys(scores).reduce((sum, k) => sum + getHeartCount(scores, k), 0);
  document.getElementById('total-quiet').textContent = total > 0 ? `${total} moments` : '';
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
      : `<span class="heart-note-text empty">tap to add note</span>`;
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

  // Auto-open note modal so user can immediately add a description
  setTimeout(() => openNoteModal(newIndex), 400);
}

heartBtn.addEventListener('click', handleHeartTap);

// ---- Note Edit Modal ----
let noteModalOverlay = null;

function createNoteModal() {
  noteModalOverlay = document.createElement('div');
  noteModalOverlay.className = 'note-modal-overlay';
  noteModalOverlay.innerHTML = `
    <div class="note-modal">
      <div class="note-modal-title">What was this heart for?</div>
      <input id="note-modal-input" type="text" placeholder="e.g. healthy meal, bought flowers..." maxlength="100" />
      <div class="note-modal-actions">
        <button class="note-modal-btn cancel" id="note-modal-cancel">Cancel</button>
        <button class="note-modal-btn save" id="note-modal-save">Save</button>
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
  let html = '<h3>Past Entries</h3>';
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
  journalSaveBtn.textContent = 'Saved!';
  journalSaveBtn.classList.add('saved');
  setTimeout(() => {
    journalSaveBtn.textContent = 'Save';
    journalSaveBtn.classList.remove('saved');
  }, 1500);

  showToast('Journal saved');
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
          html = '<div class="stat-detail-empty">No hearts yet today</div>';
        } else {
          html = '<div class="stat-detail-title">Today\'s Hearts</div>';
          for (const e of entries) {
            const time = e.time ? formatTime(e.time) : '';
            const text = e.note
              ? `<span class="stat-detail-item-text">${escapeHtml(e.note)}</span>`
              : `<span class="stat-detail-item-text empty">no note</span>`;
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
          html = '<div class="stat-detail-empty">No hearts yet</div>';
        } else {
          html = '<div class="stat-detail-title">All Hearts</div>';
          for (const day of allDays) {
            const entries = scores[day];
            if (!Array.isArray(entries) || entries.length === 0) continue;
            html += `<div class="stat-detail-day"><div class="stat-detail-day-label">${formatDate(day)}</div>`;
            for (const e of entries) {
              const time = e.time ? formatTime(e.time) : '';
              const text = e.note
                ? `<span class="stat-detail-item-text">${escapeHtml(e.note)}</span>`
                : `<span class="stat-detail-item-text empty">no note</span>`;
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
          html = '<div class="stat-detail-empty">Start a streak by logging a heart today</div>';
        } else {
          html = `<div class="stat-detail-title">${streak} consecutive day${streak > 1 ? 's' : ''}</div>`;
          const d = new Date();
          for (let i = 0; i < streak; i++) {
            const key = d.toISOString().slice(0, 10);
            const count = getHeartCount(scores, key);
            html += `<div class="stat-detail-item">
              <span class="stat-detail-item-icon">${miniHeart}</span>
              <span class="stat-detail-item-text">${formatDate(key)}</span>
              <span class="stat-detail-item-meta">${count} heart${count > 1 ? 's' : ''}</span>
            </div>`;
            d.setDate(d.getDate() - 1);
          }
        }

      } else if (type === 'journal') {
        const days = Object.keys(journal).filter(d => journal[d].text).sort((a, b) => b.localeCompare(a));
        if (days.length === 0) {
          html = '<div class="stat-detail-empty">No journal entries yet</div>';
        } else {
          html = '<div class="stat-detail-title">Journal Entries</div>';
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
    list.innerHTML = '<div class="empty-state">Start writing to see your gratitudes here</div>';
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

// ---- Service Worker Registration ----
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
