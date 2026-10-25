/* Cap sur le DE — interactions */
(function () {
  "use strict";

  const LS_THEME = "capde-theme";
  const LS_PROGRESS = "capde-progress-v1";
  const LS_PLAN = "capde-plan-v1";
  const SUBJECT_TOTALS = { eh: 12, reseau: 12, os: 15, si: 14, vs: 14 };

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------- Theme ---------- */
  function initTheme() {
    const saved = localStorage.getItem(LS_THEME);
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = saved || (prefersLight ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
    updateThemeIcon(theme);
  }
  function updateThemeIcon(theme) {
    const btn = $("#btn-theme");
    if (!btn) return;
    btn.innerHTML =
      theme === "dark"
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    btn.setAttribute("aria-label", theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre");
  }
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(LS_THEME, next);
    updateThemeIcon(next);
  }

  /* ---------- Progress ---------- */
  function getProgress() {
    try { return JSON.parse(localStorage.getItem(LS_PROGRESS) || "{}"); } catch (e) { return {}; }
  }
  function saveProgress(p) {
    localStorage.setItem(LS_PROGRESS, JSON.stringify(p));
  }
  function initProgress() {
    const progress = getProgress();
    $$(".topic-check input[data-topic]").forEach((cb) => {
      cb.checked = !!progress[cb.dataset.topic];
      cb.addEventListener("change", () => {
        const p = getProgress();
        if (cb.checked) p[cb.dataset.topic] = 1;
        else delete p[cb.dataset.topic];
        saveProgress(p);
        updateSubjectProgress();
        const label = cb.closest(".topic-check");
        if (label) toast(cb.checked ? "Notion validée ✓" : "Notion décochée");
      });
    });
    updateSubjectProgress();
  }
  function updateSubjectProgress() {
    const progress = getProgress();
    const boxes = $$(".topic-check input[data-topic]");
    if (boxes.length) {
      const done = boxes.filter((b) => progress[b.dataset.topic]).length;
      const pct = Math.round((done / boxes.length) * 100);
      $$(".subject-hero .bar > i").forEach((el) => (el.style.width = pct + "%"));
      const txt = $("#subject-progress-text");
      if (txt) txt.textContent = done + "/" + boxes.length + " notions · " + pct + "%";
      updateTopRing(pct, done + "/" + boxes.length);
    }
    updateDashboardProgress();
    updateGlobalProgress();
  }
  function updateGlobalProgress() {
    const progress = getProgress();
    let done = 0;
    let total = 0;
    Object.keys(SUBJECT_TOTALS).forEach((key) => {
      total += SUBJECT_TOTALS[key];
      Object.keys(progress).forEach((k) => {
        if (k.indexOf(key + "-") === 0) done++;
      });
    });
    const pct = total ? Math.round((done / total) * 100) : 0;
    updateTopRing(pct, done + "/" + total);
  }
  function updateTopRing(pct, label) {
    const ring = $("#top-ring .fg");
    if (!ring) return;
    const r = 9;
    const c = 2 * Math.PI * r;
    ring.style.strokeDasharray = c;
    ring.style.strokeDashoffset = c - (pct / 100) * c;
    const txt = $("#top-progress-text");
    if (txt) txt.textContent = label || pct + "%";
  }
  function updateDashboardProgress() {
    const progress = getProgress();
    $$("[data-subject-card]").forEach((card) => {
      const subject = card.dataset.subjectCard;
      if (subject === "all") return;
      const total = SUBJECT_TOTALS[subject] || Number(card.dataset.total || 0);
      let done = 0;
      Object.keys(progress).forEach((k) => {
        if (k.indexOf(subject + "-") === 0) done++;
      });
      if (total > 0) done = Math.min(done, total);
      const pct = total ? Math.round((done / total) * 100) : 0;
      const bar = $(".bar > i", card);
      if (bar) bar.style.width = pct + "%";
      const span = $(".card-progress span", card);
      if (span) span.textContent = done + "/" + total + " · " + pct + "%";
    });
  }

  /* ---------- TOC active ---------- */
  function initToc() {
    const links = $$(".toc a[href^='#']");
    if (!links.length) return;
    const map = new Map();
    links.forEach((a) => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) map.set(el, a);
    });
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((a) => a.classList.remove("active"));
            const a = map.get(e.target);
            if (a) a.classList.add("active");
          }
        });
      },
      { rootMargin: "-90px 0px -70% 0px", threshold: 0 }
    );
    map.forEach((_, el) => obs.observe(el));
  }

  /* ---------- Details expand/collapse ---------- */
  function initDetails() {
    $$("[data-action='expand']").forEach((b) =>
      b.addEventListener("click", () => {
        $$("details").forEach((d) => (d.open = true));
        toast("Toutes les réponses sont affichées");
      })
    );
    $$("[data-action='collapse']").forEach((b) =>
      b.addEventListener("click", () => {
        $$("details").forEach((d) => (d.open = false));
        toast("Réponses masquées — mode récupération active");
      })
    );
  }

  /* ---------- Quiz ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function initQuiz() {
    const shell = $("[data-quiz]");
    if (!shell) return;
    const subject = shell.dataset.quiz;
    const data = (window.QUIZ_DATA || {})[subject];
    if (!data || !data.length) return;
    const count = Math.min(Number(shell.dataset.count || 10), data.length);
    let deck = [];
    let idx = 0;
    let score = 0;
    let answered = false;

    function start() {
      deck = shuffle(data).slice(0, count);
      idx = 0;
      score = 0;
      answered = false;
      render();
    }

    function render() {
      const q = deck[idx];
      if (!q) return renderResult();
      answered = false;
      const pct = Math.round((idx / deck.length) * 100);
      shell.innerHTML =
        '<div class="quiz-top">' +
        '<h3>Quiz express</h3>' +
        '<div class="quiz-progress"><span>Question ' + (idx + 1) + " / " + deck.length + '</span><div class="bar"><i style="width:' + pct + '%"></i></div><span class="quiz-score">' + score + " pt" + (score > 1 ? "s" : "") + "</span></div>" +
        "</div>" +
        '<div class="quiz-question">' + q.q + "</div>" +
        '<div class="quiz-options">' +
        q.options
          .map(
            (opt, i) =>
              '<button class="quiz-option" data-opt="' + i + '"><span class="letter">' + "ABCDE"[i] + "</span><span>" + opt + "</span></button>"
          )
          .join("") +
        "</div>" +
        '<div class="quiz-explain" id="quiz-explain">' + (q.explain || "") + "</div>" +
        '<div class="quiz-actions"><span class="small muted">' + (q.tag || "") + '</span><button class="btn primary sm" id="quiz-next" disabled>Question suivante →</button></div>';

      $$(".quiz-option", shell).forEach((btn) => {
        btn.addEventListener("click", () => {
          if (answered) return;
          answered = true;
          const chosen = Number(btn.dataset.opt);
          const correct = Number(q.answer);
          $$(".quiz-option", shell).forEach((b) => {
            b.disabled = true;
            const i = Number(b.dataset.opt);
            if (i === correct) b.classList.add("correct");
            if (i === chosen && chosen !== correct) b.classList.add("wrong");
          });
          if (chosen === correct) score++;
          const ex = $("#quiz-explain");
          if (ex && q.explain) {
            ex.classList.add("show");
            ex.innerHTML = (chosen === correct ? "<strong>✓ Exact.</strong> " : "<strong>✕ Raté.</strong> ") + q.explain;
          }
          const next = $("#quiz-next");
          if (next) {
            next.disabled = false;
            next.textContent = idx === deck.length - 1 ? "Voir le score →" : "Question suivante →";
          }
          const sc = $(".quiz-score", shell);
          if (sc) sc.textContent = score + " pt" + (score > 1 ? "s" : "");
        });
      });
      const next = $("#quiz-next");
      if (next) {
        next.addEventListener("click", () => {
          idx++;
          if (idx >= deck.length) renderResult();
          else render();
        });
      }
    }

    function renderResult() {
      const pct = Math.round((score / deck.length) * 100);
      let verdict = "À retravailler : relis la fiche puis refais le quiz.";
      if (pct >= 80) verdict = "Excellent — tu es au niveau attendu. Passe aux questions ouvertes.";
      else if (pct >= 60) verdict = "Bien, mais sécurise les notions ratées avant l'examen.";
      shell.innerHTML =
        '<div class="quiz-result"><div class="big">' + score + "/" + deck.length + "</div>" +
        '<p class="mt-2"><strong>' + pct + "%</strong> — " + verdict + "</p>" +
        '<div class="hero-actions" style="justify-content:center"><button class="btn primary" id="quiz-restart">Refaire un tirage</button><button class="btn ghost" id="quiz-review">Revoir la fiche</button></div></div>';
      $("#quiz-restart").addEventListener("click", start);
      $("#quiz-review").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    start();
  }

  /* ---------- Flashcards ---------- */
  let flashState = null;
  function initFlashcards() {
    const trigger = $("[data-flashcards]");
    if (!trigger) return;
    const subject = trigger.dataset.flashcards;
    const cards = (window.FLASH_DATA || {})[subject] || [];
    if (!cards.length) return;
    const overlay = $("#fc-overlay");
    if (!overlay) return;
    flashState = { cards: cards.slice(), idx: 0, flipped: false };
    trigger.addEventListener("click", () => {
      flashState = { cards: shuffle(cards), idx: 0, flipped: false };
      overlay.classList.add("open");
      document.body.classList.add("no-scroll");
      renderFlash();
    });
    $("#fc-close").addEventListener("click", closeFlash);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeFlash(); });
    $("#fc-next").addEventListener("click", () => moveFlash(1));
    $("#fc-prev").addEventListener("click", () => moveFlash(-1));
    $("#fc-shuffle").addEventListener("click", () => {
      flashState.cards = shuffle(flashState.cards);
      flashState.idx = 0;
      flashState.flipped = false;
      renderFlash();
    });
    const card = $("#fc-card");
    card.addEventListener("click", () => {
      flashState.flipped = !flashState.flipped;
      card.classList.toggle("flipped", flashState.flipped);
    });
    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") closeFlash();
      if (e.key === "ArrowRight") moveFlash(1);
      if (e.key === "ArrowLeft") moveFlash(-1);
      if (e.key === " ") { e.preventDefault(); card.click(); }
    });
  }
  function renderFlash() {
    const st = flashState;
    const card = $("#fc-card");
    card.classList.toggle("flipped", st.flipped);
    const c = st.cards[st.idx];
    if (!c) return;
    $("#fc-front .fc-text").textContent = c.front;
    $("#fc-back .fc-text").textContent = c.back;
    $("#fc-count").textContent = st.idx + 1 + " / " + st.cards.length;
  }
  function moveFlash(dir) {
    if (!flashState) return;
    flashState.idx = (flashState.idx + dir + flashState.cards.length) % flashState.cards.length;
    flashState.flipped = false;
    renderFlash();
  }
  function closeFlash() {
    const overlay = $("#fc-overlay");
    if (overlay) overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  /* ---------- Search ---------- */
  let searchIndex = null;
  function initSearch() {
    const btn = $("#btn-search");
    const overlay = $("#search-overlay");
    const input = $("#search-input");
    if (!btn || !overlay || !input) return;
    btn.addEventListener("click", openSearch);
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape" && overlay.classList.contains("open")) closeSearch();
    });
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeSearch(); });
    $$("[data-search-open]").forEach((b) => b.addEventListener("click", openSearch));
    input.addEventListener("input", () => runSearch(input.value));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const first = $(".search-result", overlay);
        if (first) window.location.href = first.getAttribute("href");
      }
    });
  }
  function openSearch() {
    const overlay = $("#search-overlay");
    if (!overlay) return;
    overlay.classList.add("open");
    document.body.classList.add("no-scroll");
    const input = $("#search-input");
    setTimeout(() => input && input.focus(), 50);
    if (!searchIndex) {
      searchIndex = (window.SEARCH_INDEX || []).slice();
      runSearch("");
    }
  }
  function closeSearch() {
    const overlay = $("#search-overlay");
    if (overlay) overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function runSearch(q) {
    const box = $("#search-results");
    if (!box) return;
    const query = q.trim().toLowerCase();
    if (!query) {
      box.innerHTML =
        '<div class="search-hint"><strong>Cherche une notion, un outil, une commande…</strong><br>Exemples : <em>DMZ</em>, <em>SUID</em>, <em>RGPD</em>, <em>Set-UID</em>, <em>docker run</em>, <em>IPsec</em>, <em>mémoire</em>. Raccourci : <span class="kbd">Ctrl</span> + <span class="kbd">K</span>.</div>';
      return;
    }
    const terms = query.split(/\s+/).filter(Boolean);
    const results = [];
    searchIndex.forEach((item) => {
      const hay = (item.title + " " + item.text + " " + item.subject).toLowerCase();
      if (terms.every((t) => hay.includes(t))) {
        let score = 0;
        if (item.title.toLowerCase().includes(query)) score += 8;
        terms.forEach((t) => { if (item.title.toLowerCase().includes(t)) score += 4; });
        score += (hay.match(new RegExp(escRe(query), "g")) || []).length;
        results.push({ item, score });
      }
    });
    results.sort((a, b) => b.score - a.score);
    if (!results.length) {
      box.innerHTML = '<div class="search-hint">Aucun résultat pour « ' + escapeHtml(q) + ' ». Essaie un mot-clé plus court.</div>';
      return;
    }
    box.innerHTML = results
      .slice(0, 14)
      .map(({ item }) => {
        const snip = highlight(makeSnippet(item.text, query), query);
        return (
          '<a class="search-result" href="' + item.url + '">' +
          '<div class="sr-subject">' + escapeHtml(item.subject) + "</div>" +
          '<div class="sr-title">' + highlight(escapeHtml(item.title), query) + "</div>" +
          '<div class="sr-snip">' + snip + "</div></a>"
        );
      })
      .join("");
  }
  function makeSnippet(text, query) {
    const i = text.toLowerCase().indexOf(query.toLowerCase());
    const start = Math.max(0, i - 70);
    return (start > 0 ? "… " : "") + text.slice(start, start + 230) + " …";
  }
  function highlight(html, query) {
    if (!query) return html;
    try {
      return html.replace(new RegExp("(" + escRe(escapeHtml(query)) + ")", "gi"), "<mark>$1</mark>");
    } catch (e) { return html; }
  }

  /* ---------- Plan ---------- */
  function initPlan() {
    const p = (() => { try { return JSON.parse(localStorage.getItem(LS_PLAN) || "{}"); } catch (e) { return {}; } })();
    $$(".plan-item input[data-plan]").forEach((cb) => {
      cb.checked = !!p[cb.dataset.plan];
      if (cb.checked) cb.closest(".plan-item").classList.add("done");
      cb.addEventListener("change", () => {
        const cur = (() => { try { return JSON.parse(localStorage.getItem(LS_PLAN) || "{}"); } catch (e) { return {}; } })();
        if (cb.checked) cur[cb.dataset.plan] = 1;
        else delete cur[cb.dataset.plan];
        localStorage.setItem(LS_PLAN, JSON.stringify(cur));
        cb.closest(".plan-item").classList.toggle("done", cb.checked);
        updatePlanProgress();
      });
    });
    updatePlanProgress();
  }
  function updatePlanProgress() {
    const items = $$(".plan-item input[data-plan]");
    const bar = $("#plan-progress");
    if (!items.length) return;
    const done = items.filter((i) => i.checked).length;
    if (bar) bar.style.width = Math.round((done / items.length) * 100) + "%";
    const txt = $("#plan-progress-text");
    if (txt) txt.textContent = done + "/" + items.length + " étapes";
  }

  /* ---------- Misc ---------- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  let toastTimer;
  function toast(msg) {
    let el = $("#toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 1900);
  }
  function initNav() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    $$(".nav-links a, .mobile-nav a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path) a.classList.add("active");
    });
  }
  function initPrint() {
    $$("[data-action='print']").forEach((b) => b.addEventListener("click", () => window.print()));
    // Ensure all answers are visible when printing
    window.addEventListener("beforeprint", () => $$("details").forEach((d) => (d.open = true)));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    const btn = $("#btn-theme");
    if (btn) btn.addEventListener("click", toggleTheme);
    initNav();
    initProgress();
    initToc();
    initDetails();
    initQuiz();
    initFlashcards();
    initSearch();
    initPlan();
    initPrint();
  });
})();
