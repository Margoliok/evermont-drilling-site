/* EVERMONT Drilling & Geoservices — mockup interactions */
(function () {
  'use strict';

  /* ---------- SVG icon sprite (one stroke family, 1.6px) ---------- */
  var P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chev: '<path d="M6 9l6 6 6-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    wa: '<path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z"/><path d="M9 8.5c0 3.5 2.6 6.5 6.5 6.5l1-1.6-2-1-1 .9c-1.3-.5-2.3-1.5-2.8-2.8l.9-1-1-2z"/>',
    wechat: '<path d="M9.5 4C5.4 4 2 6.8 2 10.2c0 1.9 1 3.6 2.7 4.7L4 17l2.6-1.3c.9.3 1.9.4 2.9.4"/><path d="M15.5 9c3.6 0 6.5 2.4 6.5 5.3 0 1.6-.9 3-2.3 4l.5 1.9-2.3-1.1c-.8.3-1.6.4-2.4.4-3.6 0-6.5-2.4-6.5-5.2S11.9 9 15.5 9z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 4.5 9-4.5" opacity=".5"/>',
    wave: '<path d="M2 12h3l2-6 3 12 3-9 2 5 2-2h5"/>',
    drill: '<path d="M12 2v4M9 6h6v4l-1 2h-4l-1-2z"/><path d="M12 12v10M10 15l4 1.5M10 18.5l4 1.5"/>',
    rig: '<path d="M7 3v15M11 3v15M7 3h4M7 7l4 3M11 7l-4 3M7 12l4 3M11 12l-4 3"/><path d="M3 18h18v2H3zM13 18v-5h6l2 5"/>',
    bit: '<path d="M7 4h10v6l-2 4h-6l-2-4z"/><path d="M9 14l1 6h4l1-6M10 7h4"/>',
    rods: '<rect x="4" y="3" width="4" height="18" rx="1"/><rect x="10" y="3" width="4" height="18" rx="1"/><rect x="16" y="3" width="4" height="18" rx="1"/><path d="M4 7h4M10 7h4M16 7h4"/>',
    crown: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4"/>',
    pump: '<circle cx="9" cy="13" r="5"/><path d="M14 13h7M17 9v8M9 8V4h6M4 20h10"/><circle cx="9" cy="13" r="1.5"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    gen: '<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M7 7V4h4v3M13 10l-2 4h3l-2 4"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.2A5 5 0 0 1 21.5 19"/>',
    truck: '<path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
    file: '<path d="M6 2h8l5 5v15H6z"/><path d="M14 2v5h5M9 13h7M9 17h5"/>',
    sat: '<path d="M4 14l6 6M7 11l6 6M13 5l6 6-3 3-6-6z"/><path d="M5 19l2-2M17 3l4 4"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5z"/>',
    filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
    core: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16M4 13h16M4 17h16M9 3v18"/>'
  };
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">';
  Object.keys(P).forEach(function (k) { sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + P[k] + '</symbol>'; });
  document.body.insertAdjacentHTML('afterbegin', sprite + '</svg>');

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- header ---------- */
  var header = $('.site-header');
  var onScroll = function () {
    if (header && !header.classList.contains('solid')) header.classList.toggle('scrolled', window.scrollY > 40);
    updateDepth();
  };

  /* depth rail: прокрутка = «глубина бурения» */
  var rail = $('.depth-rail');
  var maxDepth = rail ? Number(rail.getAttribute('data-max') || 1200) : 0;
  function updateDepth() {
    if (!rail) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
    $('.bit', rail).style.top = (p * 100) + '%';
    $('.val', rail).textContent = String(Math.round(p * maxDepth)).padStart(4, '0') + ' м';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* burger */
  var burger = $('.burger'), mnav = $('.mobile-nav');
  if (burger && mnav) {
    burger.addEventListener('click', function () {
      var open = !mnav.classList.contains('open');
      mnav.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
      $('use', burger).setAttribute('href', open ? '#i-close' : '#i-menu');
      document.body.classList.toggle('no-scroll', open);
      header.classList.toggle('scrolled', open || window.scrollY > 40);
    });
    $$('a', mnav).forEach(function (a) {
      a.addEventListener('click', function () { if (mnav.classList.contains('open')) burger.click(); });
    });
  }

  /* popovers: lang + wechat */
  function popover(btnSel, boxSel, cls, target) {
    var btn = $(btnSel); if (!btn) return;
    var box = target || btn.parentElement;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !box.classList.contains(cls);
      closePops();
      box.classList.toggle(cls, open);
      btn.setAttribute('aria-expanded', open);
    });
  }
  function closePops() {
    $$('.lang.open').forEach(function (n) { n.classList.remove('open'); });
    $$('.wechat-pop.open').forEach(function (n) { n.classList.remove('open'); });
    $$('[aria-expanded="true"].lang-btn, [aria-expanded="true"].wechat-btn').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
  }
  popover('.lang-btn', null, 'open');
  var wb = $('.wechat-btn');
  if (wb) wb.addEventListener('click', function (e) {
    e.stopPropagation(); var p = $('.wechat-pop'); var o = !p.classList.contains('open'); closePops(); p.classList.toggle('open', o); wb.setAttribute('aria-expanded', o);
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.lang-menu, .wechat-pop')) closePops(); });

  /* ---------- i18n (навигация, hero, заголовки разделов) ---------- */
  var I18N = {
    ru: {
      'nav.home': 'Главная', 'nav.about': 'О компании', 'nav.services': 'Услуги', 'nav.equipment': 'Оборудование', 'nav.projects': 'Проекты', 'nav.news': 'Новости', 'nav.contacts': 'Контакты',
      'cta.request': 'Оставить заявку', 'cta.more': 'Подробнее', 'cta.catalog': 'Перейти в каталог', 'cta.consult': 'Запросить консультацию', 'cta.kp': 'Запросить КП', 'cta.pdf': 'Скачать каталог',
      'hero.kicker': 'Казахстан · Центральная Азия',
      'hero.title': 'Геологические, геофизические и <em>буровые решения</em>',
      'hero.sub': 'Комплексные услуги и современное буровое оборудование для геологоразведки и добывающей отрасли.',
      'hero.b1': 'Наши услуги', 'hero.b2': 'Оборудование',
      'sec.directions': 'Наши направления', 'sec.cycle': 'Полный цикл', 'sec.equipment': 'Буровое оборудование', 'sec.projects': 'Проекты', 'sec.why': 'Почему выбирают нас', 'sec.about': 'О компании', 'sec.news': 'Новости', 'sec.request': 'Оставить заявку', 'sec.contacts': 'Контакты',
      'mob.call': 'Звонок', 'search.ph': 'Поиск: услуги, оборудование, проекты…'
    },
    kz: {
      'nav.home': 'Басты бет', 'nav.about': 'Компания туралы', 'nav.services': 'Қызметтер', 'nav.equipment': 'Жабдықтар', 'nav.projects': 'Жобалар', 'nav.news': 'Жаңалықтар', 'nav.contacts': 'Байланыс',
      'cta.request': 'Өтінім қалдыру', 'cta.more': 'Толығырақ', 'cta.catalog': 'Каталогқа өту', 'cta.consult': 'Кеңес сұрау', 'cta.kp': 'КҰ сұрау', 'cta.pdf': 'Каталогты жүктеу',
      'hero.kicker': 'Қазақстан · Орталық Азия',
      'hero.title': 'Геологиялық, геофизикалық және <em>бұрғылау шешімдері</em>',
      'hero.sub': 'Геологиялық барлау және тау-кен өндіру саласына арналған кешенді қызметтер мен заманауи бұрғылау жабдықтары.',
      'hero.b1': 'Біздің қызметтер', 'hero.b2': 'Жабдықтар',
      'sec.directions': 'Біздің бағыттар', 'sec.cycle': 'Толық цикл', 'sec.equipment': 'Бұрғылау жабдықтары', 'sec.projects': 'Жобалар', 'sec.why': 'Неліктен бізді таңдайды', 'sec.about': 'Компания туралы', 'sec.news': 'Жаңалықтар', 'sec.request': 'Өтінім қалдыру', 'sec.contacts': 'Байланыс',
      'mob.call': 'Қоңырау', 'search.ph': 'Іздеу: қызметтер, жабдықтар, жобалар…'
    },
    en: {
      'nav.home': 'Home', 'nav.about': 'About', 'nav.services': 'Services', 'nav.equipment': 'Equipment', 'nav.projects': 'Projects', 'nav.news': 'News', 'nav.contacts': 'Contacts',
      'cta.request': 'Send a request', 'cta.more': 'Learn more', 'cta.catalog': 'Open catalogue', 'cta.consult': 'Request consultation', 'cta.kp': 'Request a quote', 'cta.pdf': 'Download catalogue',
      'hero.kicker': 'Kazakhstan · Central Asia',
      'hero.title': 'Geological, geophysical and <em>drilling solutions</em>',
      'hero.sub': 'Integrated services and modern drilling equipment for mineral exploration and the mining industry.',
      'hero.b1': 'Our services', 'hero.b2': 'Equipment',
      'sec.directions': 'What we do', 'sec.cycle': 'Full cycle', 'sec.equipment': 'Drilling equipment', 'sec.projects': 'Projects', 'sec.why': 'Why choose us', 'sec.about': 'About the company', 'sec.news': 'News', 'sec.request': 'Send a request', 'sec.contacts': 'Contacts',
      'mob.call': 'Call', 'search.ph': 'Search services, equipment, projects…'
    },
    zh: {
      'nav.home': '首页', 'nav.about': '关于我们', 'nav.services': '服务', 'nav.equipment': '设备', 'nav.projects': '项目', 'nav.news': '新闻', 'nav.contacts': '联系我们',
      'cta.request': '提交申请', 'cta.more': '了解更多', 'cta.catalog': '查看产品目录', 'cta.consult': '申请咨询', 'cta.kp': '获取报价', 'cta.pdf': '下载目录',
      'hero.kicker': '哈萨克斯坦 · 中亚',
      'hero.title': '地质、地球物理与<em>钻探解决方案</em>',
      'hero.sub': '为地质勘探和采矿行业提供综合服务与现代化钻探设备。',
      'hero.b1': '我们的服务', 'hero.b2': '设备',
      'sec.directions': '业务方向', 'sec.cycle': '全流程服务', 'sec.equipment': '钻探设备', 'sec.projects': '项目案例', 'sec.why': '选择我们的理由', 'sec.about': '关于公司', 'sec.news': '新闻动态', 'sec.request': '提交申请', 'sec.contacts': '联系方式',
      'mob.call': '电话', 'search.ph': '搜索服务、设备、项目…'
    }
  };
  var LABEL = { ru: 'RU', kz: 'KZ', en: 'EN', zh: '中文' };
  var HTML_LANG = { ru: 'ru', kz: 'kk', en: 'en', zh: 'zh-Hans' };
  function setLang(l) {
    if (!I18N[l]) l = 'ru';
    var d = I18N[l];
    $$('[data-i18n]').forEach(function (n) { var v = d[n.getAttribute('data-i18n')]; if (v) n.textContent = v; });
    $$('[data-i18n-html]').forEach(function (n) { var v = d[n.getAttribute('data-i18n-html')]; if (v) n.innerHTML = v; });
    $$('[data-i18n-ph]').forEach(function (n) { var v = d[n.getAttribute('data-i18n-ph')]; if (v) n.setAttribute('placeholder', v); });
    $$('.lang-current').forEach(function (n) { n.textContent = LABEL[l]; });
    $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-checked', b.getAttribute('data-lang') === l); });
    document.documentElement.lang = HTML_LANG[l];
    store.set('em-lang', l);
  }
  $$('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); closePops(); });
  });
  setLang(store.get('em-lang') || 'ru');

  /* ---------- reveal on scroll ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    reveals.forEach(function (n) { io.observe(n); });
  } else reveals.forEach(function (n) { n.classList.add('in'); });

  /* counters */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  $$('[data-count]').forEach(function (n) {
    var to = Number(n.getAttribute('data-count'));
    if (reduce || !('IntersectionObserver' in window)) { n.textContent = to; return; }
    var o = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return; o.disconnect();
      var t0 = performance.now();
      (function tick(t) {
        var p = Math.min(1, (t - t0) / 1100); n.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
    o.observe(n);
  });

  /* ---------- search ---------- */
  var IDX = [
    ['Геологические услуги', 'Услуга', 'index.html#services'],
    ['Геологическое сопровождение · документация · описание керна', 'Услуга', 'index.html#services'],
    ['Геофизические услуги · каротаж · наземная геофизика', 'Услуга', 'index.html#services'],
    ['Обработка и интерпретация космических снимков', 'Услуга', 'index.html#services'],
    ['Буровые услуги', 'Услуга', 'drilling.html'],
    ['Колонковое бурение', 'Вид бурения', 'drilling.html#core'],
    ['RC drilling — бурение с обратной циркуляцией', 'Вид бурения', 'drilling.html#rc'],
    ['Разведочное бурение', 'Вид бурения', 'drilling.html#explore'],
    ['Подземное бурение', 'Вид бурения', 'drilling.html#underground'],
    ['Буровая установка CS-1200', 'Модель', 'rig.html'],
    ['Буровая установка CS-600', 'Модель', 'rig.html#catalog'],
    ['Установка RC-450', 'Модель', 'rig.html#catalog'],
    ['Буровые коронки · алмазные коронки · PDC', 'Инструмент', 'index.html#equipment'],
    ['Бурильные трубы и штанги', 'Инструмент', 'index.html#equipment'],
    ['Насосы · mud pumps', 'Комплектующие', 'index.html#equipment'],
    ['Запасные части · вращатели · лебёдки', 'Комплектующие', 'index.html#equipment'],
    ['Akshiyli Copper-Gold — геологоразведочное бурение', 'Проект', 'index.html#projects'],
    ['Старт бурения на участке Akshiyli', 'Новость', 'index.html#news'],
    ['Сертификаты и лицензии', 'Документы', 'index.html#about'],
    ['Контакты · Астана, ул. Достык 16', 'Контакты', 'index.html#contacts']
  ];
  var sBox = $('.search'), sIn = $('.search input'), sRes = $('.search-results');
  function renderSearch(q) {
    q = (q || '').trim().toLowerCase();
    var list = IDX.filter(function (r) { return !q || (r[0] + ' ' + r[1]).toLowerCase().indexOf(q) > -1; });
    sRes.innerHTML = list.length ? list.map(function (r) {
      return '<a href="' + r[2] + '"><span>' + r[0] + '</span><small>' + r[1] + '</small></a>';
    }).join('') : '<div class="search-empty">Ничего не найдено. Попробуйте «бурение», «керн» или «CS-1200».</div>';
  }
  function openSearch(o) {
    if (!sBox) return;
    sBox.classList.toggle('open', o); document.body.classList.toggle('no-scroll', o);
    if (o) { renderSearch(''); sIn.value = ''; setTimeout(function () { sIn.focus(); }, 30); }
  }
  $$('.search-open').forEach(function (b) { b.addEventListener('click', function () { openSearch(true); }); });
  if (sBox) {
    sIn.addEventListener('input', function () { renderSearch(sIn.value); });
    $('.search-close').addEventListener('click', function () { openSearch(false); });
    sBox.addEventListener('click', function (e) { if (e.target === sBox) openSearch(false); });
    $$('a', sRes); sRes.addEventListener('click', function (e) { if (e.target.closest('a')) openSearch(false); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { openSearch(false); closePops(); }
    if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(true); }
  });

  /* ---------- request form ---------- */
  var form = $('#request-form');
  if (form) {
    var drop = $('.file-drop', form), fileIn = $('input[type=file]', form), fileName = $('.file-name', form);
    if (fileIn) {
      fileIn.addEventListener('change', function () {
        fileName.textContent = fileIn.files.length ? fileIn.files[0].name + ' · ' + Math.ceil(fileIn.files[0].size / 1024) + ' КБ' : 'PDF, DOCX, XLSX, JPG — до 20 МБ';
      });
      ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('drag'); }); });
      ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function () { drop.classList.remove('drag'); }); });
      drop.addEventListener('drop', function (e) { e.preventDefault(); if (e.dataTransfer.files.length) { fileIn.files = e.dataTransfer.files; fileIn.dispatchEvent(new Event('change')); } });
    }
    var rules = {
      name: function (v) { return v.trim().length > 1; },
      phone: function (v) { return v.replace(/\D/g, '').length >= 10; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }
    };
    function check(inp) {
      var ok = rules[inp.name] ? rules[inp.name](inp.value) : true;
      inp.closest('.field').classList.toggle('invalid', !ok);
      inp.setAttribute('aria-invalid', !ok);
      return ok;
    }
    Object.keys(rules).forEach(function (k) {
      var inp = form.elements[k];
      inp.addEventListener('blur', function () { if (inp.value) check(inp); });
      inp.addEventListener('input', function () { if (inp.closest('.field').classList.contains('invalid')) check(inp); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var first = null;
      Object.keys(rules).forEach(function (k) { if (!check(form.elements[k]) && !first) first = form.elements[k]; });
      if (first) { first.focus(); return; }
      var btn = $('button[type=submit]', form);
      btn.setAttribute('aria-busy', 'true'); btn.disabled = true;
      setTimeout(function () {
        form.closest('.form-card').classList.add('sent');
        $('.form-success').focus();
      }, 1100);
    });
    var again = $('.form-again');
    if (again) again.addEventListener('click', function () {
      form.reset(); var btn = $('button[type=submit]', form); btn.removeAttribute('aria-busy'); btn.disabled = false;
      form.closest('.form-card').classList.remove('sent');
    });
    /* preselect direction from links like index.html?dir=drill#request */
    var m = location.search.match(/dir=(\w+)/);
    if (m) { var c = form.querySelector('input[value="' + m[1] + '"]'); if (c) c.checked = true; }
  }

  /* ---------- sub-navigation scroll spy (drilling page) ---------- */
  var sub = $$('.subnav a');
  if (sub.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) sub.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + e.target.id; a.classList.toggle('active', on);
          if (on) a.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' });
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sub.forEach(function (a) { var t = $(a.getAttribute('href')); if (t) spy.observe(t); });
  }

  /* ---------- rig page: gallery, tabs, filters ---------- */
  var main = $('.gallery-main img');
  $$('.thumbs button').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('.thumbs button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      main.src = b.getAttribute('data-src'); main.alt = b.getAttribute('data-alt') || '';
      main.classList.toggle('contain', b.hasAttribute('data-contain'));
    });
  });
  var tabs = $$('.tabs [role=tab]');
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { selectTab(i); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { selectTab((i + 1) % tabs.length); tabs[(i + 1) % tabs.length].focus(); }
      if (e.key === 'ArrowLeft') { var j = (i - 1 + tabs.length) % tabs.length; selectTab(j); tabs[j].focus(); }
    });
  });
  function selectTab(i) {
    tabs.forEach(function (t, j) {
      t.setAttribute('aria-selected', i === j); t.tabIndex = i === j ? 0 : -1;
      $('#' + t.getAttribute('aria-controls')).hidden = i !== j;
    });
  }
  var filters = $('.filters');
  if (filters) {
    var models = $$('.model'), cnt = $('.result-count'), range = $('#f-depth'), rv = $('#f-depth-val');
    function apply() {
      var types = $$('input[name=ftype]:checked', filters).map(function (c) { return c.value; });
      var moves = $$('input[name=fmove]:checked', filters).map(function (c) { return c.value; });
      var dep = Number(range.value), n = 0;
      models.forEach(function (m) {
        var ok = (!types.length || types.indexOf(m.dataset.type) > -1) && (!moves.length || moves.indexOf(m.dataset.move) > -1) && Number(m.dataset.depth) >= dep;
        m.classList.toggle('hide', !ok); if (ok) n++;
      });
      rv.textContent = 'от ' + dep + ' м';
      cnt.textContent = 'Найдено моделей: ' + n;
    }
    filters.addEventListener('input', apply);
    $('.f-reset').addEventListener('click', function () { $$('input[type=checkbox]', filters).forEach(function (c) { c.checked = false; }); range.value = 0; apply(); });
    var ft = $('.filter-toggle');
    if (ft) ft.addEventListener('click', function () { var o = filters.classList.toggle('open'); ft.setAttribute('aria-expanded', o); });
    apply();
  }

  /* download stubs */
  $$('[data-demo]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var t = a.getAttribute('data-demo'); var old = a.innerHTML;
      a.textContent = t; setTimeout(function () { a.innerHTML = old; }, 1800);
    });
  });
})();
