/* EVERMONT Drilling & Geoservices — макет v2 */
(function () {
  'use strict';

  var P = {
    chev: '<path d="M6 9l6 6 6-6"/>',
    right: '<path d="M9 6l6 6-6 6"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    wa: '<path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z"/><path d="M9 8.5c0 3.5 2.6 6.5 6.5 6.5l1-1.6-2-1-1 .9c-1.3-.5-2.3-1.5-2.8-2.8l.9-1-1-2z"/>',
    wechat: '<path d="M9.5 4C5.4 4 2 6.8 2 10.2c0 1.9 1 3.6 2.7 4.7L4 17l2.6-1.3c.9.3 1.9.4 2.9.4"/><path d="M15.5 9c3.6 0 6.5 2.4 6.5 5.3 0 1.6-.9 3-2.3 4l.5 1.9-2.3-1.1c-.8.3-1.6.4-2.4.4-3.6 0-6.5-2.4-6.5-5.2S11.9 9 15.5 9z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    mail: '<rect x="3" y="5" width="18" height="14"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    wave: '<path d="M2 12h3l2-6 3 12 3-9 2 5 2-2h5"/>',
    drill: '<path d="M12 2v4M9 6h6v4l-1 2h-4l-1-2z"/><path d="M12 12v10M10 15l4 1.5M10 18.5l4 1.5"/>',
    rig: '<path d="M7 3v15M11 3v15M7 3h4M7 7l4 3M11 7l-4 3M7 12l4 3M11 12l-4 3"/><path d="M3 18h18v2H3zM13 18v-5h6l2 5"/>',
    rods: '<path d="M5 3v18M9.5 3v18M14 3v18M18.5 3v18"/><path d="M3.5 6h3M8 6h3M12.5 6h3M17 6h3"/>',
    crown: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4"/>',
    pump: '<circle cx="9" cy="13" r="5"/><path d="M14 13h7M17 9v8M9 8V4h6M4 20h10"/><circle cx="9" cy="13" r="1.5"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    gen: '<rect x="3" y="7" width="18" height="12"/><path d="M7 7V4h4v3M13 10l-2 4h3l-2 4"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.2A5 5 0 0 1 21.5 19"/>',
    truck: '<path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
    file: '<path d="M6 2h8l5 5v15H6z"/><path d="M14 2v5h5M9 13h7M9 17h5"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>'
  };
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">';
  Object.keys(P).forEach(function (k) { sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + P[k] + '</symbol>'; });
  sprite += '<symbol id="i-marker" viewBox="0 0 26 34"><path fill="currentColor" d="M13 0C5.8 0 0 5.7 0 12.8 0 22.4 13 34 13 34s13-11.6 13-21.2C26 5.7 20.2 0 13 0z"/><circle cx="13" cy="12.6" r="5" fill="#fff"/></symbol>';
  document.body.insertAdjacentHTML('afterbegin', sprite + '</svg>');

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* header */
  var header = $('.header');
  function onScroll() { if (header && !header.classList.contains('solid')) header.classList.toggle('scrolled', window.scrollY > 30); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var burger = $('.burger'), mnav = $('.mnav');
  if (burger) burger.addEventListener('click', function () {
    var open = !mnav.classList.contains('open');
    mnav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    $('use', burger).setAttribute('href', open ? '#i-close' : '#i-menu');
    document.body.classList.toggle('no-scroll', open);
    if (!header.classList.contains('solid')) header.classList.toggle('scrolled', open || window.scrollY > 30);
  });
  $$('.mnav a').forEach(function (a) { a.addEventListener('click', function () { if (mnav.classList.contains('open')) burger.click(); }); });

  function closePops() {
    $$('.lang.open').forEach(function (n) { n.classList.remove('open'); });
    $$('.wechat-pop.open').forEach(function (n) { n.classList.remove('open'); });
    $$('.lang-btn,.wechat-btn').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
  }
  $$('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function (e) { e.stopPropagation(); var o = !b.parentElement.classList.contains('open'); closePops(); b.parentElement.classList.toggle('open', o); b.setAttribute('aria-expanded', o); });
  });
  $$('.wechat-btn').forEach(function (b) {
    b.addEventListener('click', function (e) { e.stopPropagation(); var p = b.nextElementSibling, o = !p.classList.contains('open'); closePops(); p.classList.toggle('open', o); b.setAttribute('aria-expanded', o); });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.lang-menu,.wechat-pop')) closePops(); });

  /* i18n: меню, первый экран, заголовки разделов, кнопки */
  var I18N = {
    ru: { 'nav.about': 'О компании', 'nav.services': 'Услуги', 'nav.equipment': 'Оборудование', 'nav.projects': 'Проекты', 'nav.news': 'Новости', 'nav.contacts': 'Контакты',
      'cta.request': 'Оставить заявку', 'cta.more': 'Подробнее', 'cta.catalog': 'Каталог', 'cta.consult': 'Запросить консультацию', 'cta.kp': 'Запросить КП', 'cta.pdf': 'Скачать каталог', 'cta.all': 'Все услуги', 'cta.allnews': 'Все новости',
      'hero.title': 'Геологические, геофизические и буровые решения', 'hero.sub': 'Комплексные услуги и современное буровое оборудование для геологоразведки и добывающей отрасли.', 'hero.b1': 'Наши услуги', 'hero.b2': 'Оборудование', 'hero.since': 'Компания группы Evermont Mining Group',
      'sec.services': 'Услуги', 'sec.equipment': 'Буровое оборудование', 'sec.geo': 'География проектов', 'sec.adv': 'Почему выбирают нас', 'sec.partners': 'Партнёры и производители', 'sec.about': 'О компании', 'sec.docs': 'Сертификаты и лицензии', 'sec.news': 'Новости', 'sec.request': 'Оставить заявку', 'sec.contacts': 'Контакты',
      'mob.call': 'Позвонить', 'search.ph': 'Поиск по сайту' },
    kz: { 'nav.about': 'Компания туралы', 'nav.services': 'Қызметтер', 'nav.equipment': 'Жабдықтар', 'nav.projects': 'Жобалар', 'nav.news': 'Жаңалықтар', 'nav.contacts': 'Байланыс',
      'cta.request': 'Өтінім қалдыру', 'cta.more': 'Толығырақ', 'cta.catalog': 'Каталог', 'cta.consult': 'Кеңес сұрау', 'cta.kp': 'КҰ сұрау', 'cta.pdf': 'Каталогты жүктеу', 'cta.all': 'Барлық қызметтер', 'cta.allnews': 'Барлық жаңалықтар',
      'hero.title': 'Геологиялық, геофизикалық және бұрғылау шешімдері', 'hero.sub': 'Геологиялық барлау және тау-кен өндіру саласына арналған кешенді қызметтер мен заманауи бұрғылау жабдықтары.', 'hero.b1': 'Біздің қызметтер', 'hero.b2': 'Жабдықтар', 'hero.since': 'Evermont Mining Group тобының компаниясы',
      'sec.services': 'Қызметтер', 'sec.equipment': 'Бұрғылау жабдықтары', 'sec.geo': 'Жобалардың географиясы', 'sec.adv': 'Неліктен бізді таңдайды', 'sec.partners': 'Серіктестер мен өндірушілер', 'sec.about': 'Компания туралы', 'sec.docs': 'Сертификаттар мен лицензиялар', 'sec.news': 'Жаңалықтар', 'sec.request': 'Өтінім қалдыру', 'sec.contacts': 'Байланыс',
      'mob.call': 'Қоңырау', 'search.ph': 'Сайт бойынша іздеу' },
    en: { 'nav.about': 'About', 'nav.services': 'Services', 'nav.equipment': 'Equipment', 'nav.projects': 'Projects', 'nav.news': 'News', 'nav.contacts': 'Contacts',
      'cta.request': 'Send a request', 'cta.more': 'Learn more', 'cta.catalog': 'Catalogue', 'cta.consult': 'Request consultation', 'cta.kp': 'Request a quote', 'cta.pdf': 'Download catalogue', 'cta.all': 'All services', 'cta.allnews': 'All news',
      'hero.title': 'Geological, geophysical and drilling solutions', 'hero.sub': 'Integrated services and modern drilling equipment for mineral exploration and mining.', 'hero.b1': 'Our services', 'hero.b2': 'Equipment', 'hero.since': 'A member of Evermont Mining Group',
      'sec.services': 'Services', 'sec.equipment': 'Drilling equipment', 'sec.geo': 'Project geography', 'sec.adv': 'Why clients choose us', 'sec.partners': 'Partners and manufacturers', 'sec.about': 'About the company', 'sec.docs': 'Certificates and licences', 'sec.news': 'News', 'sec.request': 'Send a request', 'sec.contacts': 'Contacts',
      'mob.call': 'Call', 'search.ph': 'Search the site' },
    zh: { 'nav.about': '关于我们', 'nav.services': '服务', 'nav.equipment': '设备', 'nav.projects': '项目', 'nav.news': '新闻', 'nav.contacts': '联系我们',
      'cta.request': '提交申请', 'cta.more': '了解更多', 'cta.catalog': '产品目录', 'cta.consult': '申请咨询', 'cta.kp': '获取报价', 'cta.pdf': '下载目录', 'cta.all': '全部服务', 'cta.allnews': '全部新闻',
      'hero.title': '地质、地球物理与钻探解决方案', 'hero.sub': '为地质勘探和采矿行业提供综合服务与现代化钻探设备。', 'hero.b1': '我们的服务', 'hero.b2': '设备', 'hero.since': 'Evermont Mining Group 旗下公司',
      'sec.services': '服务', 'sec.equipment': '钻探设备', 'sec.geo': '项目分布', 'sec.adv': '选择我们的理由', 'sec.partners': '合作伙伴与制造商', 'sec.about': '关于公司', 'sec.docs': '证书与许可证', 'sec.news': '新闻', 'sec.request': '提交申请', 'sec.contacts': '联系方式',
      'mob.call': '电话', 'search.ph': '站内搜索' }
  };
  var LABEL = { ru: 'Ru', kz: 'Kz', en: 'En', zh: '中文' }, HL = { ru: 'ru', kz: 'kk', en: 'en', zh: 'zh-Hans' };
  function setLang(l) {
    if (!I18N[l]) l = 'ru';
    var d = I18N[l];
    $$('[data-i18n]').forEach(function (n) { var v = d[n.getAttribute('data-i18n')]; if (v) n.textContent = v; });
    $$('[data-i18n-ph]').forEach(function (n) { var v = d[n.getAttribute('data-i18n-ph')]; if (v) n.placeholder = v; });
    $$('.lang-current').forEach(function (n) { n.textContent = LABEL[l]; });
    $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-checked', b.getAttribute('data-lang') === l); });
    document.documentElement.lang = HL[l];
    store.set('em-lang', l);
  }
  $$('[data-lang]').forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); closePops(); }); });
  setLang(store.get('em-lang') || 'ru');

  /* reveal */
  var rv = $$('.rv-up');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -6% 0px' });
    rv.forEach(function (n) { io.observe(n); });
  } else rv.forEach(function (n) { n.classList.add('in'); });

  /* hero slideshow */
  var slides = $$('.slides img');
  if (slides.length > 1 && !reduce) {
    var si = 0;
    setInterval(function () { slides[si].classList.remove('on'); si = (si + 1) % slides.length; slides[si].classList.add('on'); }, 6500);
  }

  /* hero news */
  var hn = $$('.hero-news .slide'), dots = $$('.hero-news .dots button');
  function showNews(i) {
    hn.forEach(function (s, j) { s.classList.toggle('on', i === j); });
    dots.forEach(function (d, j) { d.setAttribute('aria-current', i === j); });
  }
  dots.forEach(function (d, i) { d.addEventListener('click', function () { showNews(i); }); });

  /* accordion */
  $$('.acc-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var item = b.closest('.acc-item'), open = !item.classList.contains('open');
      $$('.acc-item').forEach(function (x) { x.classList.remove('open'); $('.acc-btn', x).setAttribute('aria-expanded', 'false'); });
      item.classList.toggle('open', open); b.setAttribute('aria-expanded', open);
      var img = $('.svc-left .photo img');
      if (open && img && item.dataset.img) img.src = item.dataset.img;
    });
  });

  /* map */
  var PROJ = {
    aksh: { s: 'Проект группы Evermont · в работе', t: 'Akshiyli Copper-Gold', kv: [['Вид работ', 'Геологоразведочное бурение'], ['Регион', 'Казахстан'], ['Старт', '16.07.2026']] },
    x: { s: 'Пример карточки', t: 'Буровые работы на участке X', kv: [['Вид работ', 'Колонковое бурение'], ['Оборудование', 'CS-1200'], ['Регион', 'Восточный Казахстан']] },
    y: { s: 'Пример карточки', t: 'Геофизика на участке Y', kv: [['Вид работ', 'Наземная геофизика'], ['Объём', 'по запросу'], ['Регион', 'Центральный Казахстан']] },
    office: { s: 'Головной офис', t: 'Астана', kv: [['Адрес', 'ул. Достык, 16'], ['График', 'Пн–Пт, 09:00–18:00']] }
  };
  var card = $('.map-card');
  function showProj(id) {
    var p = PROJ[id]; if (!p || !card) return;
    card.innerHTML = '<span class="small">' + p.s + '</span><h3>' + p.t + '</h3><dl class="kv">' + p.kv.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join('') + '</dl>';
    $$('.pin').forEach(function (n) { n.classList.toggle('active', n.dataset.id === id); });
    $$('.geo-tabs .chip').forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.id === id); });
  }
  $$('.pin, .geo-tabs .chip').forEach(function (n) { n.addEventListener('click', function () { showProj(n.dataset.id); }); });
  if (card) showProj('aksh');

  /* search */
  var IDX = [
    ['Геологические услуги', 'Услуга', 'index.html#services'], ['Описание керна, опробование, геологические отчёты', 'Геология', 'index.html#services'],
    ['Геофизические услуги, каротаж', 'Услуга', 'index.html#services'], ['Обработка и интерпретация космических снимков', 'Геофизика', 'index.html#services'],
    ['Буровые услуги', 'Услуга', 'drilling.html'], ['Колонковое бурение', 'Вид бурения', 'drilling.html#core'], ['RC drilling', 'Вид бурения', 'drilling.html#rc'],
    ['Разведочное бурение', 'Вид бурения', 'drilling.html#explore'], ['Подземное бурение', 'Вид бурения', 'drilling.html#underground'],
    ['Буровая установка CS-1200', 'Модель', 'rig.html'], ['Каталог буровых установок', 'Оборудование', 'rig.html#catalog'],
    ['Буровые коронки, PDC, долота', 'Инструмент', 'index.html#equipment'], ['Бурильные трубы и штанги', 'Инструмент', 'index.html#equipment'],
    ['Насосы, mud pumps', 'Комплектующие', 'index.html#equipment'], ['Akshiyli Copper-Gold', 'Проект', 'index.html#projects'],
    ['Начато бурение на участке Akshiyli', 'Новость', 'index.html#news'], ['Сертификаты и лицензии', 'Документы', 'index.html#about'], ['Контакты, Астана', 'Контакты', 'index.html#contacts']
  ];
  var sBox = $('.search'), sIn = sBox && $('input', sBox), sRes = sBox && $('.results', sBox);
  function render(q) {
    q = (q || '').trim().toLowerCase();
    var l = IDX.filter(function (r) { return !q || (r[0] + ' ' + r[1]).toLowerCase().indexOf(q) > -1; });
    sRes.innerHTML = l.length ? l.map(function (r) { return '<a href="' + r[2] + '"><span>' + r[0] + '</span><small>' + r[1] + '</small></a>'; }).join('') : '<div class="empty">Ничего не нашлось. Попробуйте «керн» или «CS-1200».</div>';
  }
  function openSearch(o) {
    if (!sBox) return;
    sBox.classList.toggle('open', o); document.body.classList.toggle('no-scroll', o);
    if (o) { sIn.value = ''; render(''); setTimeout(function () { sIn.focus(); }, 30); }
  }
  $$('.search-open').forEach(function (b) { b.addEventListener('click', function () { openSearch(true); }); });
  if (sBox) {
    sIn.addEventListener('input', function () { render(sIn.value); });
    $('.x', sBox).addEventListener('click', function () { openSearch(false); });
    sBox.addEventListener('click', function (e) { if (e.target === sBox || e.target.closest('.results a')) openSearch(false); });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { openSearch(false); closePops(); } });

  /* form */
  var form = $('#request-form');
  if (form) {
    var fileIn = $('input[type=file]', form), fileName = $('.file-name', form), drop = $('.file', form);
    fileIn.addEventListener('change', function () { fileName.textContent = fileIn.files.length ? fileIn.files[0].name : 'PDF, DOCX, XLSX, JPG, до 20 МБ'; });
    ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('drag'); }); });
    ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function () { drop.classList.remove('drag'); }); });
    drop.addEventListener('drop', function (e) { e.preventDefault(); if (e.dataTransfer.files.length) { fileIn.files = e.dataTransfer.files; fileIn.dispatchEvent(new Event('change')); } });
    var rules = {
      name: function (v) { return v.trim().length > 1; },
      phone: function (v) { return v.replace(/\D/g, '').length >= 10; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }
    };
    function check(inp) { var ok = rules[inp.name](inp.value); inp.closest('.field').classList.toggle('invalid', !ok); inp.setAttribute('aria-invalid', !ok); return ok; }
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
      var btn = $('button[type=submit]', form); btn.setAttribute('aria-busy', 'true');
      setTimeout(function () { form.parentElement.classList.add('sent'); $('.done').focus(); }, 900);
    });
    $('.again').addEventListener('click', function () { form.reset(); $('button[type=submit]', form).removeAttribute('aria-busy'); form.parentElement.classList.remove('sent'); });
    var m = location.search.match(/dir=(\w+)/);
    if (m) { var c = form.querySelector('input[value="' + m[1] + '"]'); if (c) c.checked = true; }
  }

  /* drilling page tabs bar */
  var tb = $$('.tabsbar a');
  if (tb.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) tb.forEach(function (a) { var on = a.getAttribute('href') === '#' + e.target.id; a.classList.toggle('active', on); if (on) a.scrollIntoView({ block: 'nearest', inline: 'center' }); }); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    tb.forEach(function (a) { var t = $(a.getAttribute('href')); if (t) spy.observe(t); });
  }

  /* rig: gallery, tabs, filters */
  var gm = $('.g-main img');
  $$('.thumbs button').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('.thumbs button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      gm.src = b.dataset.src; gm.alt = b.dataset.alt || ''; gm.classList.toggle('contain', b.hasAttribute('data-contain'));
    });
  });
  var tabs = $$('.tabs [role=tab]');
  function sel(i) { tabs.forEach(function (t, j) { t.setAttribute('aria-selected', i === j); t.tabIndex = i === j ? 0 : -1; $('#' + t.getAttribute('aria-controls')).hidden = i !== j; }); }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(i); });
    t.addEventListener('keydown', function (e) {
      var j = e.key === 'ArrowRight' ? (i + 1) % tabs.length : e.key === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length : -1;
      if (j > -1) { sel(j); tabs[j].focus(); }
    });
  });
  var filters = $('.filters');
  if (filters) {
    var models = $$('.model'), cnt = $('.count'), range = $('#f-depth'), rvv = $('#f-depth-val');
    var apply = function () {
      var types = $$('input[name=ftype]:checked', filters).map(function (c) { return c.value; });
      var moves = $$('input[name=fmove]:checked', filters).map(function (c) { return c.value; });
      var dep = +range.value, n = 0;
      models.forEach(function (m) {
        var ok = (!types.length || types.indexOf(m.dataset.type) > -1) && (!moves.length || moves.indexOf(m.dataset.move) > -1) && +m.dataset.depth >= dep;
        m.classList.toggle('hide', !ok); if (ok) n++;
      });
      rvv.textContent = 'от ' + dep + ' м'; cnt.textContent = 'Моделей: ' + n;
    };
    filters.addEventListener('input', apply);
    $('.f-reset').addEventListener('click', function () { $$('input[type=checkbox]', filters).forEach(function (c) { c.checked = false; }); range.value = 0; apply(); });
    var ft = $('.ftoggle');
    if (ft) ft.addEventListener('click', function () { ft.setAttribute('aria-expanded', filters.classList.toggle('open')); });
    apply();
  }

  $$('[data-demo]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); var old = a.innerHTML; a.textContent = a.dataset.demo; setTimeout(function () { a.innerHTML = old; }, 1600); });
  });
})();
