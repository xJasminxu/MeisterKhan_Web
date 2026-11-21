/* Meister Khan – Nudelbar · main.js
 * - DE/EN language toggle (DE default, remembers choice, ?lang=en works too)
 * - Menu rendered from MENU data below (edit prices/dishes here)
 * - Live "open now" status (Europe/Berlin time)
 * - Mobile nav, scroll reveal, parallax, gallery lightbox, click-to-load map
 * - Light/dark toggle (dark "Tusche" default, light "Zinnober"; remembers choice)
 */
(function () {
  "use strict";

  /* ================= CONTENT ================= */

  var HOURS = { open: 11 * 60, close: 23 * 60 }; // every day, no break

  var I18N = {
    de: {
      "ribbon": "Täglich 11:00 – 23:00 Uhr · durchgehend geöffnet · Bodanstraße 34, Konstanz",
      "nav.about": "Über uns", "nav.menu": "Speisekarte", "nav.gallery": "Galerie", "nav.visit": "Kontakt",
      "hero.kicker": "Nudelbar · Konstanz",
      "hero.title": "Von Hand gezogen.<br />Mit Herz gekocht.",
      "hero.lead": "Frische Biang-Biang-Nudeln, jeden Tag vor Ort handgezogen – in hausgemachter Brühe, mit feuriger Chilisauce und viel Liebe zum Detail.",
      "hero.cta1": "Zur Speisekarte", "hero.cta2": "Route planen",
      "feat.1.t": "Handgezogene Nudeln", "feat.1.d": "Jeder Teig wird bei uns frisch geknetet und auf Bestellung von Hand gezogen – breit, bissfest, unverwechselbar.",
      "feat.2.t": "Hausgemachte Brühe", "feat.2.d": "Stundenlang geköchelt, kräftig gewürzt: unsere Brühe ist die Seele jeder Schüssel.",
      "feat.3.t": "Dumplings & Bao", "feat.3.d": "Xiao Long Bao, Har Gow, gedämpfte Bao und knusprige Wan Tan – perfekt zum Teilen.",
      "about.eyebrow": "Unsere Geschichte", "about.title": "Ein Meister, ein Teig, tausend Nudeln.",
      "about.p1": "„Biang Biang“ – so klingt es, wenn der Teig auf die Arbeitsplatte schlägt. In unserer Nudelbar mitten in Konstanz holen wir dieses Stück chinesischer Streetfood-Kultur an den Bodensee.",
      "about.p2": "Bei Meister Khan wird jede Portion frisch gezogen, in hausgemachter Brühe serviert und mit unserer eigenen Chilisauce verfeinert. Ob mild oder extrem scharf – Sie entscheiden, wie viel Feuer in Ihre Schüssel kommt.",
      "about.cta": "Jetzt Speisekarte ansehen", "about.badge": "handgemacht", "about.alt": "Handgezogene Nudeln mit Stäbchen",
      "band.q": "„Gute Nudeln brauchen Zeit, Kraft und Geduld – und eine Brühe, die man nie vergisst.“",
      "menu.eyebrow": "Frisch aus der Küche", "menu.title": "Speisekarte",
      "menu.foot": "Alle Preise in Euro inkl. MwSt. Keine Online-Reservierung – kommen Sie einfach vorbei!",
      "allergen.title": "Allergen-Übersicht",
      "allergen.note": "Alle Gerichte können Spuren von Allergenen enthalten. Biere enthalten Gluten. Wein- und cocktailbasierte Getränke enthalten Sulfite. Die Allergene zu jedem Gericht sowie die Zusatzstoffliste erhalten Sie gerne bei unserem Personal.",
      "gal.eyebrow": "Folgen Sie uns", "gal.cta": "Auf Instagram folgen",
      "visit.eyebrow": "Besuchen Sie uns", "visit.title": "Kontakt & Öffnungszeiten",
      "visit.addr": "Adresse", "visit.phone": "Telefon", "visit.hours": "Öffnungszeiten",
      "visit.hoursNote": "Durchgehend geöffnet – keine Mittagspause.",
      "map.text": "Mit dem Laden der Karte werden Daten an Google übertragen. Es gilt die Datenschutzerklärung von Google.",
      "map.btn": "Karte laden", "map.link": "In Google Maps öffnen",
      "footer.tag": "Nudelbar · Konstanz", "footer.imprint": "Impressum", "footer.privacy": "Datenschutz",
      "status.open": "Jetzt geöffnet · bis 23:00 Uhr", "status.closed": "Geschlossen · öffnet um 11:00 Uhr",
      "hours.time": "11:00 – 23:00",
      "days": ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
      "spice.title": "Schärfegrad",
      "spice.note": "Alle Biang-Biang-Nudeln werden standardmäßig scharf serviert. Wenn Sie es noch schärfer mögen, sprechen Sie bitte unser Servicepersonal an.",
      "spice.pick": "Stufe {n} – {l}: Einfach bei der Bestellung Bescheid geben.",
      "spice.levels": ["Nicht scharf", "Mild", "Extra scharf", "Asiatisch scharf", "Extrem scharf"],
      "vegan": "Vegan", "pcs": "Stk", "piece": "Stück",
      "aria.menuOpen": "Menü öffnen", "aria.menuClose": "Menü schließen",
      "theme.toLight": "Helles Design", "theme.toDark": "Dunkles Design",
      "allergens": ["Glutenhaltiges Getreide", "Krebstiere", "Eier", "Fisch", "Erdnüsse", "Soja", "Milch und Laktose", "Schalenfrüchte", "Sellerie", "Senf", "Sesam", "Schwefeldioxid & Sulfite", "Lupinen", "Weichtiere"]
    },
    en: {
      "ribbon": "Open daily 11 am – 11 pm · no lunch break · Bodanstraße 34, Konstanz",
      "nav.about": "About", "nav.menu": "Menu", "nav.gallery": "Gallery", "nav.visit": "Contact",
      "hero.kicker": "Noodle bar · Konstanz",
      "hero.title": "Pulled by hand.<br />Cooked with heart.",
      "hero.lead": "Fresh Biang Biang noodles, hand-pulled in-house every day – served in homemade broth with fiery chili sauce and plenty of love for detail.",
      "hero.cta1": "See the menu", "hero.cta2": "Get directions",
      "feat.1.t": "Hand-pulled noodles", "feat.1.d": "Every dough is kneaded fresh and pulled by hand to order – wide, chewy and unmistakable.",
      "feat.2.t": "Homemade broth", "feat.2.d": "Simmered for hours and richly spiced: our broth is the soul of every bowl.",
      "feat.3.t": "Dumplings & bao", "feat.3.d": "Xiao long bao, har gow, steamed bao and crispy wontons – perfect for sharing.",
      "about.eyebrow": "Our story", "about.title": "One master, one dough, a thousand noodles.",
      "about.p1": "“Biang biang” – that’s the sound the dough makes as it slaps the counter. At our noodle bar in the heart of Konstanz, we bring this piece of Chinese street-food culture to Lake Constance.",
      "about.p2": "At Meister Khan every portion is pulled fresh, served in homemade broth and finished with our own chili sauce. Mild or extremely hot – you decide how much fire goes into your bowl.",
      "about.cta": "Explore the menu", "about.badge": "handmade", "about.alt": "Hand-pulled noodles lifted with chopsticks",
      "band.q": "“Good noodles take time, strength and patience – and a broth you’ll never forget.”",
      "menu.eyebrow": "Fresh from the kitchen", "menu.title": "Menu",
      "menu.foot": "All prices in euros incl. VAT. No online reservations – just drop by!",
      "allergen.title": "Allergen overview",
      "allergen.note": "All dishes may contain traces of allergens. Beers contain gluten. Wine- and cocktail-based drinks contain sulphites. Our staff will gladly tell you the allergens in each dish and provide the list of additives.",
      "gal.eyebrow": "Follow us", "gal.cta": "Follow on Instagram",
      "visit.eyebrow": "Come visit", "visit.title": "Contact & opening hours",
      "visit.addr": "Address", "visit.phone": "Phone", "visit.hours": "Opening hours",
      "visit.hoursNote": "Open all day – no lunch break.",
      "map.text": "Loading the map sends data to Google. Google’s privacy policy applies.",
      "map.btn": "Load map", "map.link": "Open in Google Maps",
      "footer.tag": "Noodle bar · Konstanz", "footer.imprint": "Legal notice", "footer.privacy": "Privacy",
      "status.open": "Open now · until 11 pm", "status.closed": "Closed · opens at 11 am",
      "hours.time": "11 am – 11 pm",
      "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "spice.title": "Spice level",
      "spice.note": "All Biang Biang noodles are served spicy by default. If you like it even hotter, just let our staff know.",
      "spice.pick": "Level {n} – {l}: just tell us when you order.",
      "spice.levels": ["Not spicy", "Mild", "Extra hot", "Asian hot", "Extremely hot"],
      "vegan": "Vegan", "pcs": "pcs", "piece": "piece",
      "aria.menuOpen": "Open menu", "aria.menuClose": "Close menu",
      "theme.toLight": "Light mode", "theme.toDark": "Dark mode",
      "allergens": ["Cereals containing gluten", "Crustaceans", "Eggs", "Fish", "Peanuts", "Soy", "Milk & lactose", "Tree nuts", "Celery", "Mustard", "Sesame", "Sulphur dioxide & sulphites", "Lupin", "Molluscs"]
    }
  };

  // Menu from the printed Meister Khan A3 menu. Prices in EUR.
  var MENU = [
    {
      id: "noodles", label: { de: "Nudeln", en: "Noodles" },
      groups: [
        {
          title: { de: "Biang Biang Hand-Pulled Noodles", en: "Biang Biang hand-pulled noodles" },
          desc: {
            de: "Frische handgezogene Weizennudeln in hausgemachter Brühe, serviert mit hausgemachter Biang-Biang-Chilisauce, frischem Chili, Koriander, Frühlingszwiebeln und aromatischem Zwiebelöl.",
            en: "Fresh hand-pulled wheat noodles in homemade broth, served with our homemade Biang Biang chili sauce, fresh chili, coriander, spring onions and fragrant onion oil."
          },
           spice: true,
          items: [
            { c: "B1", de: "Rindfleisch", en: "Beef", p: 16.5 },
            { c: "B2", de: "Hausgeschmortes Schweinekotelett", en: "House-braised pork chop", p: 15.8 },
            { c: "B3", de: "Tofu & Shiitake-Pilze", en: "Tofu & shiitake mushrooms", p: 15.5 },
            { c: "B4", de: "Würzige Auberginenwürfel", en: "Spicy diced aubergine", p: 15.5, tag: "vegan" }
          ]
        },
        {
          title: { de: "Khan’s Signatur handgezogene Nudeln", en: "Khan’s signature hand-pulled noodles" },
          desc: {
            de: "Frische handgezogene Weizennudeln in hausgemachter Brühe mit unserer Spezial-Haussauce, Tomaten-Knoblauch-Sauce, eingelegtem Senfkohl und frischem Koriander.",
            en: "Fresh hand-pulled wheat noodles in homemade broth with our special house sauce, tomato-garlic sauce, pickled mustard greens and fresh coriander."
          },
          
          items: [
            { c: "K1", de: "Rindfleisch", en: "Beef", p: 16.5 },
            { c: "K2", de: "Hausgeschmortes Schweinekotelett", en: "House-braised pork chop", p: 15.8 },
            { c: "K3", de: "Tofu & Shiitake-Pilze", en: "Tofu & shiitake mushrooms", p: 15.5 },
            { c: "K4", de: "Khan’s Spezialnudeln", en: "Khan’s special noodles", p: 15.5 }
          ]
        }
      ]
    },
    {
      id: "sets", label: { de: "Menü-Sets", en: "Set menus" }, type: "sets",
      items: [
        { c: "M1", p: 22.9,
          de: "Wahl zwischen Khan’s Rindfleisch-Nudelsuppe oder Biang Biang Nudeln, dazu 1 großer Bao und 1 Softdrink nach Wahl.",
          en: "Choice of Khan’s beef noodle soup or Biang Biang noodles, plus 1 large bao and 1 soft drink of your choice." },
        { c: "M2", p: 23.9,
          de: "Geschmorte Rindfleisch-Nudelsuppe, 4 Mini-Frühlingsrollen und 1 Softdrink nach Wahl.",
          en: "Braised beef noodle soup, 4 mini spring rolls and 1 soft drink of your choice." },
        { c: "M3", p: 23.6,
          de: "Knuspriges Knoblauch-Hähnchen auf Reis, chinesischer Gurkensalat und 1 Softdrink nach Wahl.",
          en: "Crispy garlic chicken on rice, Chinese cucumber salad and 1 soft drink of your choice." }
      ]
    },
    {
      id: "rice", label: { de: "Reisschalen", en: "Rice bowls" },
      groups: [
        {
          title: { de: "Reisschalen", en: "Rice bowls" },  single: true,
          items: [
            { c: "G1", de: "Geschmortes Rindfleisch", en: "Braised beef", p: 16.5 },
            { c: "G2", de: "Mapo Tofu", en: "Mapo tofu", p: 14.8 },
            { c: "G3", de: "Hausgeschmortes Schweinekotelett", en: "House-braised pork chop", p: 15.8 },
            { c: "G4", de: "Gemischtes Gemüse & Tofu", en: "Mixed vegetables & tofu", p: 13.8 },
            { c: "G5", de: "Knuspriges Knoblauch-Hähnchen", en: "Crispy garlic chicken", p: 15.8 }
          ]
        }
      ]
    },
    {
      id: "dumplings", label: { de: "Dumplings & Vorspeisen", en: "Dumplings & starters" },
      groups: [
        {
          title: { de: "Dumplings", en: "Dumplings" }, 
          items: [
            { c: "D1", de: "Schweinefleisch-Schnittlauch-Dumplings", en: "Pork & chive dumplings", q: 5, p: 6.5 },
            { c: "D2", de: "Gemüse-Dumplings", en: "Vegetable dumplings", q: 5, p: 5.5 },
            { c: "D3", de: "Har Gow Garnelen-Dumplings", en: "Har gow shrimp dumplings", q: 5, p: 7.5 },
            { c: "D4", de: "Xiao Long Bao", en: "Xiao long bao (soup dumplings)", q: 5, p: 7.5 },
            { c: "D5", de: "Gebackene Wan Tan", en: "Fried wontons", q: 5, p: 5.5 },
            { c: "D6", de: "Wan-Tan-Suppe", en: "Wonton soup", p: 5.5 },
            { c: "D7", de: "Mini-Frühlingsrollen", en: "Mini spring rolls", q: 6, p: 5.5 },
            { c: "D8", de: "Knusprige chinesische Brotscheiben", en: "Crispy Chinese bread slices", q: 3, p: 2.6 }
          ]
        },
        {
          title: { de: "Kalte Vorspeisen", en: "Cold starters" }, 
          items: [
            { c: "C1", de: "Chinesischer Gurkensalat", en: "Chinese cucumber salad", p: 5.5 },
            { c: "C2", de: "Rindfleischsalat", en: "Beef salad", p: 6.5 }
          ]
        }
      ]
    },
    {
      id: "bao", label: { de: "Bao", en: "Bao" },
      groups: [
        {
          title: { de: "Bao · Gedämpfte Teigtaschen", en: "Bao · steamed buns" },  single: true,
          items: [
            { c: "BAO01", de: "Großer Bao (Schwein oder Rind)", en: "Large bao (pork or beef)", n: 1, p: 3.8 },
            { c: "BAO02", de: "Großer Bao (Schwein oder Rind)", en: "Large bao (pork or beef)", n: 2, p: 6.9 },
            { c: "BAO03", de: "Vegetarischer Tofu-Bao", en: "Vegetarian tofu bao", n: 1, p: 3.2 },
            { c: "BAO04", de: "Vegetarischer Tofu-Bao", en: "Vegetarian tofu bao", n: 2, p: 6.0 }
          ]
        }
      ]
    },
    {
      id: "drinks", label: { de: "Getränke", en: "Drinks" }, type: "drinks",
      groups: [
        {
          title: { de: "Alkoholfreie Getränke", en: "Soft drinks" },
          items: [
            { de: "Coca-Cola 0,33 l", en: "Coca-Cola 0.33 l", p: 3.5 },
            { de: "Coca-Cola Zero 0,33 l", en: "Coca-Cola Zero 0.33 l", p: 3.5 },
            { de: "Mezzo Mix 0,33 l", en: "Mezzo Mix 0.33 l", p: 3.5 },
            { de: "Fanta 0,33 l", en: "Fanta 0.33 l", p: 3.5 },
            { de: "Sprite 0,33 l", en: "Sprite 0.33 l", p: 3.5 },
            { de: "Fuze Eistee Zitrone 0,25 l", en: "Fuze iced tea lemon 0.25 l", p: 3.0 },
            { de: "Vio Still Gastro 0,75 l", en: "Vio still water 0.75 l", p: 7.9 },
            { de: "Vio Medium Gastro 0,75 l", en: "Vio medium sparkling water 0.75 l", p: 7.9 }
          ]
        },
        {
          title: { de: "Bier", en: "Beer" },
          items: [
            { de: "Hirsch Hefeweizen 0,5 l", en: "Hirsch wheat beer 0.5 l", p: 4.5 },
            { de: "Hirsch Helles 0,5 l", en: "Hirsch Helles lager 0.5 l", p: 4.5 },
            { de: "Hirsch Radler 0,5 l", en: "Hirsch Radler (shandy) 0.5 l", p: 4.5 },
            { de: "Hirsch Dunkles Hefeweizen 0,5 l", en: "Hirsch dark wheat beer 0.5 l", p: 4.5 },
            { de: "Hirsch Pils 0,33 l", en: "Hirsch Pils 0.33 l", p: 3.9 },
            { de: "Tsingtao 0,33 l", en: "Tsingtao 0.33 l", p: 3.9 }
          ]
        },
        {
          title: { de: "Alkoholfreies Bier", en: "Alcohol-free beer" },
          items: [
            { de: "Hirsch Alkoholfreies Helles 0,5 l", en: "Hirsch alcohol-free lager 0.5 l", p: 3.9 },
            { de: "Hirsch Alkoholfreies Hefeweizen 0,5 l", en: "Hirsch alcohol-free wheat beer 0.5 l", p: 3.9 }
          ]
        },
        {
          title: { de: "Cocktails", en: "Cocktails" },
          items: [
            { de: "Lillet Wild Berry", en: "Lillet Wild Berry", p: 8.5 },
            { de: "Hugo", en: "Hugo", p: 8.5 },
            { de: "Aperol Spritz", en: "Aperol Spritz", p: 8.5 }
          ]
        }
      ]
    }
  ];

  /* ================= HELPERS ================= */

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var lang = "de";
  var activeTab = MENU[0].id;
  var activeSpice = null;
  var CHILI = '<svg class="chili" viewBox="0 0 12 16" aria-hidden="true"><path d="M7.5 1c1 0 1.5.8 1.2 1.6C10.6 3.4 11 5 10.6 7 9.8 11 6.5 14.6 1.5 15c-.8 0-1-.8-.3-1.2C4.6 11.6 5.4 8 5.6 5.2 5.7 3.6 6.4 3 7 2.7 6.9 2 7 1 7.5 1Z"/></svg>';

  function t(key) { return I18N[lang][key]; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function price(p) {
    return lang === "de"
      ? p.toFixed(2).replace(".", ",") + " €"
      : "€" + p.toFixed(2);
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ================= LANGUAGE ================= */

  function applyLang(next) {
    lang = next === "en" ? "en" : "de";
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) { var v = t(el.dataset.i18n); if (typeof v === "string") el.textContent = v; });
    $$("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-alt]").forEach(function (el) { el.alt = t(el.dataset.i18nAlt); });
    $$(".lang__btn").forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on);
    });
    var burger = $("#burger");
    burger.setAttribute("aria-label", t(burger.getAttribute("aria-expanded") === "true" ? "aria.menuClose" : "aria.menuOpen"));
    syncThemeToggle();
    renderMenu();
    renderHours();
    renderAllergens();
    updateStatus();
    store("mk-lang", lang);
  }

  /* ================= MENU ================= */

  function itemName(it) {
    var name = esc(it[lang]);
    if (it.q) name += " <small>(" + it.q + " " + t("pcs") + ")</small>";
    if (it.n) name += " <small>– " + it.n + " " + t("piece") + "</small>";
    if (it.tag === "vegan") name += '<span class="item__tag">' + t("vegan") + "</span>";
    return name;
  }

  function renderItems(items, withCode) {
    return '<ul class="items">' + items.map(function (it) {
      return '<li class="item">' +
        (withCode ? '<span class="item__code">' + esc(it.c) + "</span>" : "") +
        '<span class="item__name">' + itemName(it) + "</span>" +
        '<span class="item__price">' + price(it.p) + "</span></li>";
    }).join("") + "</ul>";
  }

  function renderSpice() {
    var levels = t("spice.levels");
    var note = activeSpice
      ? t("spice.pick").replace("{n}", activeSpice).replace("{l}", levels[activeSpice - 1])
      : t("spice.note");
    return '<div class="spice"><p class="spice__title">' + t("spice.title") + '</p><div class="spice__levels">' +
      levels.map(function (l, i) {
        var n = i + 1;
        return '<button type="button" class="spice__lvl' + (activeSpice === n ? " is-active" : "") + '" data-spice="' + n + '" aria-pressed="' + (activeSpice === n) + '">' +
          "<b>" + (n === 1 ? "–" : new Array(n).join(CHILI)) + "</b>" + esc(l) + "</button>";
      }).join("") + '</div><p class="spice__note">' + esc(note) + "</p></div>";
  }

  function renderGroup(g) {
    return '<div class="group">' +
      '<div class="group__head">' +
      '<div><h3 class="group__title">' + esc(g.title[lang]) + "</h3>" +
      (g.desc ? '<p class="group__desc">' + esc(g.desc[lang]) + "</p>" : "") + "</div></div>" +
      (g.spice ? renderSpice() : "") +
      renderItems(g.items, true) + "</div>";
  }

  function renderPanel(cat) {
    if (cat.type === "sets") {
      return '<div class="sets">' + cat.items.map(function (s) {
        return '<article class="set"><div class="set__code">' + s.c + "</div><p>" + esc(s[lang]) + '</p><div class="set__price">' + price(s.p) + "</div></article>";
      }).join("") + "</div>";
    }
    if (cat.type === "drinks") {
      return '<div class="drinks">' + cat.groups.map(function (g) {
        return '<div class="group"><h3 class="group__title">' + esc(g.title[lang]) + "</h3>" + renderItems(g.items, false) + "</div>";
      }).join("") + "</div>";
    }
    var single = cat.groups.length === 1;
    return '<div class="panel__groups' + (single ? " panel__groups--single" : "") + '">' + cat.groups.map(renderGroup).join("") + "</div>";
  }

  function renderMenu() {
    var tabs = $("[data-tabs]"), panels = $("[data-panels]");
    tabs.innerHTML = MENU.map(function (c) {
      var on = c.id === activeTab;
      return '<button type="button" class="tab" role="tab" id="tab-' + c.id + '" aria-controls="panel-' + c.id + '" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '" data-tab="' + c.id + '">' + esc(c.label[lang]) + "</button>";
    }).join("");
    panels.innerHTML = MENU.map(function (c) {
      return '<div class="panel" role="tabpanel" id="panel-' + c.id + '" aria-labelledby="tab-' + c.id + '"' + (c.id === activeTab ? "" : " hidden") + ">" + renderPanel(c) + "</div>";
    }).join("");
  }

  function selectTab(id, focus) {
    activeTab = id;
    $$(".tab").forEach(function (b) {
      var on = b.dataset.tab === id;
      b.setAttribute("aria-selected", on);
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    });
    $$(".panel").forEach(function (p) { p.hidden = p.id !== "panel-" + id; });
  }

  function initMenuEvents() {
    var tabs = $("[data-tabs]");
    tabs.addEventListener("click", function (e) {
      var b = e.target.closest("[data-tab]");
      if (b) selectTab(b.dataset.tab);
    });
    tabs.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var ids = MENU.map(function (c) { return c.id; });
      var i = ids.indexOf(activeTab) + (e.key === "ArrowRight" ? 1 : -1);
      selectTab(ids[(i + ids.length) % ids.length], true);
      e.preventDefault();
    });
    $("[data-panels]").addEventListener("click", function (e) {
      var b = e.target.closest("[data-spice]");
      if (!b) return;
      var n = +b.dataset.spice;
      activeSpice = activeSpice === n ? null : n;
      var spice = b.closest(".spice");
      spice.outerHTML = renderSpice();
    });
  }

  function renderAllergens() {
    $("[data-allergens]").innerHTML = t("allergens").map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
  }

  /* ================= OPENING STATUS ================= */

  function berlinNow() {
    var parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Berlin", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date());
    var get = function (type) { return (parts.find(function (p) { return p.type === type; }) || {}).value; };
    var dayIdx = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(get("weekday"));
    return { day: dayIdx, minutes: (+get("hour")) * 60 + (+get("minute")) };
  }

  function updateStatus() {
    var now = berlinNow();
    var open = now.minutes >= HOURS.open && now.minutes < HOURS.close;
    $$("[data-status]").forEach(function (el) {
      el.classList.toggle("is-open", open);
      el.classList.toggle("is-closed", !open);
      $(".status__text", el).textContent = t(open ? "status.open" : "status.closed");
    });
    $$(".hours li").forEach(function (li, i) { li.classList.toggle("is-today", i === now.day); });
  }

  function renderHours() {
    $("[data-hours]").innerHTML = t("days").map(function (d) {
      return "<li><span>" + d + "</span><span>" + t("hours.time") + "</span></li>";
    }).join("");
  }

  /* ================= UI ================= */

  function initNav() {
    var burger = $("#burger"), nav = $("#nav");
    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open);
      burger.setAttribute("aria-label", t(open ? "aria.menuClose" : "aria.menuOpen"));
    }
    burger.addEventListener("click", function () { setOpen(!nav.classList.contains("is-open")); });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

    // highlight current section
    if ("IntersectionObserver" in window) {
      var links = $$("a", nav);
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (l) { l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id); });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ["about", "menu", "gallery", "visit"].forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  function initReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    els.forEach(function (e) { io.observe(e); });
  }

  function initScrollEffects() {
    var band = $(".band"), bg = $(".band__bg"), toTop = $(".to-top");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var ticking = false;
    function onScroll() {
      ticking = false;
      toTop.classList.toggle("is-visible", window.scrollY > 700);
      if (reduce || !band) return;
      var r = band.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) {
        var progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        bg.style.setProperty("--parallax", (progress * -60).toFixed(1) + "px");
      }
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  }

  function initLightbox() {
    var box = $("[data-lightbox]"), img = $("img", box), lastFocus = null;
    function close() { box.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
    $("[data-gallery]").addEventListener("click", function (e) {
      var item = e.target.closest(".gallery__item");
      if (!item) return;
      var src = $("img", item);
      img.src = src.src; img.alt = src.alt;
      lastFocus = item;
      box.hidden = false;
      document.body.style.overflow = "hidden";
      $(".lightbox__close", box).focus();
    });
    box.addEventListener("click", function (e) { if (e.target !== img) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !box.hidden) close(); });
  }

  function initMap() {
    var btn = $("[data-map-load]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var map = $("[data-map]");
      map.innerHTML = '<iframe title="Google Maps – Meister Khan" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ' +
        'src="https://maps.google.com/maps?q=' + encodeURIComponent("Meister Khan Nudel Bar, Bodanstraße 34, 78462 Konstanz") + '&z=16&output=embed"></iframe>';
    });
  }

  // Hero video: muted autoplay loop, pause/play button, respects reduced motion
  function initHeroVideo() {
    var v = $("[data-hero-video]"), btn = $("[data-hero-toggle]");
    if (!v || !btn) return;
    v.muted = true;
    function sync() { btn.classList.toggle("is-paused", v.paused); btn.setAttribute("aria-pressed", v.paused); }
    function play() { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    btn.addEventListener("click", function () { if (v.paused) play(); else v.pause(); });
    v.addEventListener("play", sync); v.addEventListener("pause", sync);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.pause(); else play();
    // don't decode video while the hero is off-screen
    if ("IntersectionObserver" in window) {
      var userPaused = false;
      btn.addEventListener("click", function () { userPaused = v.paused; });
      new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { if (!userPaused && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) play(); }
        else v.pause();
      }, { threshold: 0.05 }).observe(v);
    }
    sync();
  }

  // Appearance: dark (Tusche) by default, light (Zinnober) on request
  var THEME_COLOR = { dark: "#100f0d", light: "#fbf7ef" };
  function isLight() { return document.documentElement.getAttribute("data-theme") === "light"; }
  function syncThemeToggle() {
    var btn = $("[data-theme-toggle]");
    if (!btn) return;
    var label = t(isLight() ? "theme.toDark" : "theme.toLight");
    btn.setAttribute("aria-pressed", isLight());
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }
  function setTheme(mode) {
    var root = document.documentElement, meta = $('meta[name="theme-color"]');
    if (mode === "light") root.setAttribute("data-theme", "light"); else root.removeAttribute("data-theme");
    if (meta) meta.setAttribute("content", THEME_COLOR[mode]);
    store("mk-theme", mode);
    syncThemeToggle();
  }
  function initTheme() {
    var btn = $("[data-theme-toggle]");
    if (btn) btn.addEventListener("click", function () { setTheme(isLight() ? "dark" : "light"); });
    syncThemeToggle();
  }

  /* ================= INIT ================= */

  document.documentElement.classList.remove("no-js");
  var urlLang = new URLSearchParams(location.search).get("lang");
  var initial = urlLang || store("mk-lang") || "de";

  $$(".lang__btn").forEach(function (b) { b.addEventListener("click", function () { applyLang(b.dataset.lang); }); });
  $("[data-year]").textContent = new Date().getFullYear();

  initMenuEvents();
  applyLang(initial);
  initNav();
  initReveal();
  initScrollEffects();
  initLightbox();
  initMap();
  initHeroVideo();
  initTheme();
  setInterval(updateStatus, 60 * 1000);
})();
