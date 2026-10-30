/* Mantis Medicinals store locator.
   One shared data file for index / seltzer / shop. Self-initialising: does
   nothing unless the locator markup is on the page. No dependencies. */
(function () {
  var STORES = [

    // ---- Portland ----
    { n: "Atlantic Farms", a: "460 Warren Ave", t: "Portland", z: "04103", p: "2076139520", r: "Portland" },
    { n: "Green Gnome Holistics", a: "112 Ocean St", t: "South Portland", z: "04106", p: "2077475561", r: "Portland" },
    { n: "Portland Food Co-Op", a: "290 Congress St", t: "Portland", z: "04101", p: "2078051599", r: "Portland" },
    { n: "Evergreen Cannabis", a: "178 Washington Ave", t: "Portland", z: "04101", p: "2076139546", r: "Portland" },
    { n: "Flowers & Candy", a: "10 Exchange St", t: "Portland", z: "04101", p: "9178920198", r: "Portland" },
    { n: "Barber Bros. Meat + Provisions", a: "101 Ocean St", t: "South Portland", z: "04106", p: "2075364985", r: "Portland" },
    { n: "CIA Cafe", a: "72 Ocean St, Ste 103", t: "South Portland", z: "04106", p: "2077474414", r: "Portland" },

    // ---- Southern Maine ----
    { n: "Lois' Natural Marketplace", a: "152 US-1", t: "Scarborough", z: "04074", p: "2078850602", r: "Southern Maine" },
    { n: "Pine Tree Seafood and Produce", a: "655 US-1", t: "Scarborough", z: "04074", p: "2077307121", r: "Southern Maine" },
    { n: "Saco River Farms", a: "29 Weeman Rd", t: "Steep Falls", z: "04085", p: "2076429090", r: "Southern Maine" },
    { n: "Cousin's Natural Foods", a: "230 Main St", t: "Biddeford", z: "04005", p: "2072821434", r: "Southern Maine" },
    { n: "New Morning Natural Foods", a: "3 York St", t: "Kennebunk", z: "04043", p: "2079856774", r: "Southern Maine" },
    { n: "Nature's Way Market", a: "271 Main St", t: "South Berwick", z: "03908", p: "2073843210", r: "Southern Maine" },
    { n: "Rising Tide Natural Foods", a: "165 State Rd #1519", t: "Kittery", z: "03904", p: "2074398898", r: "Southern Maine" },

    // ---- Mid-Coast ----
    { n: "Morning Glory Natural Foods", a: "60 Maine St", t: "Brunswick", z: "04011", p: "2077290546", r: "Mid-Coast", note: "Downtown" },
    { n: "Morning Glory Natural Foods", a: "17 Seahawk Ave", t: "Brunswick", z: "04011", p: "2077290546", r: "Mid-Coast", note: "Brunswick Landing" },
    { n: "Atlantic Farms", a: "640 Rockland Rd", t: "Somerville", z: "04348", p: "2076565533", r: "Mid-Coast" },
    { n: "Atlantic Farms", a: "210 New County Rd", t: "Thomaston", z: "04861", p: "2074669334", r: "Mid-Coast" },
    { n: "Sheepscot General Store and Farm", a: "98 Townhouse Rd", t: "Whitefield", z: "04353", p: "2075495185", r: "Mid-Coast" },
    { n: "Rising Tide Co Op", a: "323 Main St", t: "Damariscotta", z: "04543", p: "2075635556", r: "Mid-Coast" },
    { n: "Blue Sky", a: "434 Main St", t: "Damariscotta", z: "04543", p: "2075636087", r: "Mid-Coast" },
    { n: "Washington General Store", a: "7 Waldoboro Rd", t: "Washington", z: "04574", p: "2078452007", r: "Mid-Coast" },
    { n: "Elevation Station", a: "132 Waldoboro Rd", t: "Jefferson", z: "04348", p: "2075490154", r: "Mid-Coast" },
    { n: "French and Brawn", a: "1 Elm St", t: "Camden", z: "04843", p: "2072363361", r: "Mid-Coast" },
    { n: "Megunticook Market", a: "2 Gould St", t: "Camden", z: "04843", p: "2072363537", r: "Mid-Coast" },
    { n: "Lucky Betty's", a: "46 Elm St", t: "Camden", z: "04843", p: "", r: "Mid-Coast" },
    { n: "Dots", a: "2457 Atlantic Hwy", t: "Lincolnville", z: "04849", p: "2077067922", r: "Mid-Coast" },
    { n: "Owen's General Store", a: "269 Main St", t: "Lincolnville", z: "04849", p: "2077634411", r: "Mid-Coast" },
    { n: "Sunflower Farmacy", a: "1367 Atlantic Hwy", t: "Northport", z: "04849", p: "2079305214", r: "Mid-Coast" },
    { n: "Lake St. George Brewing", a: "4 Marshall Shore Rd", t: "Liberty", z: "04949", p: "2072807159", r: "Mid-Coast" },
    { n: "Belfast Community Co-op", a: "123 High St", t: "Belfast", z: "04915", p: "2073382532", r: "Mid-Coast" },
    { n: "Marshall Wharf Brewing", a: "36 Marshall Wharf", t: "Belfast", z: "04915", p: "2073382700", r: "Mid-Coast" },
    { n: "Vinolio", a: "74 Main St", t: "Belfast", z: "04915", p: "2073388466", r: "Mid-Coast" },
    { n: "Your Coastal Connection", a: "3 Main St, 2nd Floor", t: "Belfast", z: "04915", p: "2075056305", r: "Mid-Coast" },
    { n: "Marsh River Cooperative", a: "5 Veterans Hwy", t: "Brooks", z: "04921", p: "2077223053", r: "Mid-Coast" },

    // ---- Down East ----
    { n: "Blue Hill Co Op", a: "70 South St", t: "Blue Hill", z: "04614", p: "2073742165", r: "Down East" },
    { n: "Brooklin General Store", a: "4 Reach Rd", t: "Brooklin", z: "04616", p: "2073598359", r: "Down East" },
    { n: "Makers Market Shop & Studio", a: "47 Caterpillar Hill Rd", t: "Sargentville", z: "04673", p: "2078123703", r: "Down East" },
    { n: "John Edward's Market", a: "158 Main St", t: "Ellsworth", z: "04605", p: "2076679377", r: "Down East" },
    { n: "Sassafrass Cafe", a: "1317 ME-102", t: "Bar Harbor", z: "04609", p: "", r: "Down East" },
    { n: "The Salt Market", a: "141 Main St", t: "Northeast Harbor", z: "04662", p: "2072768508", r: "Down East" },
    { n: "The Barnacle", a: "112 Main St", t: "Bar Harbor", z: "04609", p: "2078019249", r: "Down East" },
    { n: "Sweet Pea's Cafe", a: "854 ME-3", t: "Bar Harbor", z: "04609", p: "", r: "Down East" },
    { n: "Wind and Wine by the Sea", a: "4 Breakneck Rd", t: "Bar Harbor", z: "04609", p: "2072889690", r: "Down East" },
    { n: "Spruce & Gussy", a: "12 Mt Desert St", t: "Bar Harbor", z: "04609", p: "2072882454", r: "Down East" },

    // ---- Bangor ----
    { n: "Tiller and Rye", a: "20 S Main St", t: "Brewer", z: "04412", p: "2075734021", r: "Bangor" },
    { n: "Natural Living Center", a: "209 Longview Dr", t: "Bangor", z: "04401", p: "2079902646", r: "Bangor" },

    // ---- Western Maine ----
    { n: "Blue Sky", a: "104 Fairbanks Rd", t: "Farmington", z: "04938", p: "2075787328", r: "Western Maine" },

    // ---- Online ----
    { n: "Day Break Growers Alliance", a: "", t: "Online", z: "", p: "", r: "Online", url: "https://daybreakgrowersalliance.com" }
  ];

  var ORDER = ["Southern Maine", "Portland", "Mid-Coast", "Western Maine", "Bangor", "Down East", "Online"];

  var root = document.getElementById("shops");
  var anchor = document.getElementById("stockists");
  var input = document.getElementById("zip");
  var status = document.getElementById("locStatus");
  if (!root || !input) return;

  var form = document.querySelector(".find-form");
  var chips = document.querySelectorAll(".regions button");
  var activeRegion = null;
  var compact = root.getAttribute("data-mode") === "compact";

  function tel(p) {
    return p ? "(" + p.slice(0, 3) + ") " + p.slice(3, 6) + "-" + p.slice(6) : "";
  }
  function mapHref(s) {
    return "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(s.n + ", " + s.a + ", " + s.t + ", ME " + s.z);
  }
  function esc(x) {
    return String(x).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function matches(s, q) {
    if (!q) return true;
    return (s.n + " " + s.t + " " + s.z + " " + s.a + " " + s.r)
      .toLowerCase().indexOf(q) > -1;
  }

  function card(s) {
    var bits = [];
    bits.push('<p class="shop__name">' + esc(s.n) +
      (s.note ? ' <span class="shop__note">' + esc(s.note) + "</span>" : "") + "</p>");
    if (s.a) bits.push('<p class="shop__addr">' + esc(s.a) + "<br>" + esc(s.t) + ", ME " + esc(s.z) + "</p>");
    else if (s.t && s.t !== "Online") bits.push('<p class="shop__addr">' + esc(s.t) + ", Maine</p>");
    var links = [];
    if (s.p) links.push('<a href="tel:+1' + s.p + '">' + tel(s.p) + "</a>");
    if (s.a) links.push('<a href="' + mapHref(s) + '" target="_blank" rel="noopener">Directions</a>');
    if (s.url) links.push('<a href="' + esc(s.url) + '" target="_blank" rel="noopener">Visit site</a>');
    if (links.length) bits.push('<p class="shop__links">' + links.join("") + "</p>");
    return '<li class="shop">' + bits.join("") + "</li>";
  }

  function render() {
    var q = input.value.trim().toLowerCase();

    // compact pages stay quiet until someone actually asks
    if (compact && !q && !activeRegion) {
      if (status) status.textContent = "";
      root.innerHTML = '<p class="shops__idle">' + STORES.length +
        ' stores across Maine. Search above, browse by region, or ' +
        '<a href="find.html">see the whole list</a>.</p>';
      return;
    }

    var hits = STORES.filter(function (s) {
      return matches(s, q) && (!activeRegion || s.r === activeRegion);
    });

    if (!hits.length) {
      if (status) status.textContent = "No stores match that yet";
      root.innerHTML = '<p class="shops__empty">No stores match that yet. Try a nearby town, ' +
        'browse by region, or <a href="shop.html">order direct from the farm</a>.</p>';
      return;
    }

    var byRegion = {};
    hits.forEach(function (s) { (byRegion[s.r] = byRegion[s.r] || []).push(s); });

    var label = hits.length + " " + (hits.length === 1 ? "store" : "stores") +
      (activeRegion ? " in " + esc(activeRegion) : "") +
      (q ? ' matching "' + esc(input.value.trim()) + '"' : "");
    if (status) status.textContent = label;
    var html = '<p class="shops__count">' + label + "</p>";

    ORDER.forEach(function (r) {
      if (!byRegion[r]) return;
      html += '<div class="shops__region"><h4 class="shops__rname">' + esc(r) + "</h4>" +
        '<ul class="shops__list">' + byRegion[r].map(card).join("") + "</ul></div>";
    });
    root.innerHTML = html;
  }

  input.addEventListener("input", render);
  if (form) form.addEventListener("submit", function (e) { e.preventDefault(); render(); });

  chips.forEach(function (c) {
    c.addEventListener("click", function (e) {
      e.preventDefault();
      var name = c.textContent.trim();
      activeRegion = (activeRegion === name) ? null : name;
      chips.forEach(function (o) { o.classList.toggle("is-on", o === c && activeRegion); });
      render();
    });
  });

  render();
})();
