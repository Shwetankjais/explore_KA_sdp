/* ===================== DATA ===================== */
// Destination photos use Wikimedia Commons thumbnails to avoid unreliable keyword-based image results.
const DESTINATION_IMAGES = {
  "hampi,temple":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg/330px-Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg",
  "mysore,palace":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/330px-Mysore_Palace_Morning.jpg",
  "coorg,coffee":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Tadiandamol_Valley%2C_Western_Ghats.jpg/330px-Tadiandamol_Valley%2C_Western_Ghats.jpg",
  "chikmagalur,hills":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Chikmagalur%2C_India._%287793316622%29.jpg/330px-Chikmagalur%2C_India._%287793316622%29.jpg",
  "gokarna,beach":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Delight_india.jpg/330px-Delight_india.jpg",
  "udupi,temple":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Udupi_Krishna_Temple.jpg/330px-Udupi_Krishna_Temple.jpg",
  "bengaluru,city":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg/330px-View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg",
  "waterfall,india":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Jog_Falls_05092016.jpg/330px-Jog_Falls_05092016.jpg",
  "badami,cave":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Vishnu_image_inside_cave_number_3_in_Badami.jpg/330px-Vishnu_image_inside_cave_number_3_in_Badami.jpg",
  "pattadakal,temple":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Pattadakal_000.JPG/330px-Pattadakal_000.JPG",
  "belur,temple":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Belur_street_towards_Chennakesava_temple.JPG/330px-Belur_street_towards_Chennakesava_temple.JPG",
  "kabini,elephant":
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Kabani_River.jpg/330px-Kabani_River.jpg",
};
let imgCount = 0;
const IMG = (kw) =>
  DESTINATION_IMAGES[kw] ||
  `https://loremflickr.com/640/420/${kw}?lock=${++imgCount}`;
const $ = (s, r = document) => r.querySelector(s);
const PAGES = [
  ["index.html", "Home"],
  ["places.html", "Destinations"],
  ["historical.html", "Historical"],
  ["nature.html", "Nature"],
  ["food.html", "Food"],
  ["gallery.html", "Gallery"],
  ["travel.html", "Travel Guide"],
];
const CATS = [
  "All",
  "Heritage",
  "Nature",
  "Hill Stations",
  "Waterfalls",
  "Beaches",
  "Wildlife",
  "Food & Culture",
];

const PLACES = [
  {
    id: "hampi",
    name: "Hampi",
    loc: "Vijayanagara",
    cat: ["Heritage"],
    r: 4.9,
    n: 2140,
    blurb: "Explore the magnificent ruins of the Vijayanagara Empire.",
    best: "Oct – Feb",
    days: 3,
    cost: [2500, 5000],
    things: [
      "Virupaksha Temple",
      "Vittala Temple and Stone Chariot",
      "Hampi sunset at Matanga Hill",
      "Coracle ride on the Tungabhadra",
    ],
    nearby: ["Anegundi", "Daroji Sloth Bear Sanctuary"],
    kw: "hampi,temple",
  },
  {
    id: "mysuru",
    name: "Mysuru",
    loc: "Mysuru district",
    cat: ["Heritage", "Food & Culture"],
    r: 4.8,
    n: 3120,
    blurb: "The City of Palaces, with silk, sandalwood and royal history.",
    best: "Oct – Mar",
    days: 2,
    cost: [3000, 6000],
    things: [
      "Mysore Palace",
      "Devaraja Market",
      "Chamundi Hill",
      "Brindavan Gardens",
    ],
    nearby: ["Srirangapatna", "Somanathapura"],
    kw: "mysore,palace",
  },
  {
    id: "coorg",
    name: "Coorg",
    loc: "Kodagu",
    cat: ["Hill Stations", "Nature"],
    r: 4.8,
    n: 2760,
    blurb: "Coffee estates, mist and waterfalls: the Scotland of India.",
    best: "Oct – Mar",
    days: 3,
    cost: [4000, 8000],
    things: [
      "Abbey Falls",
      "Raja's Seat",
      "Madikeri Fort",
      "Coffee plantation walk",
    ],
    nearby: ["Dubare Elephant Camp", "Talakaveri"],
    kw: "coorg,coffee",
  },
  {
    id: "chik",
    name: "Chikkamagaluru",
    loc: "Chikkamagaluru district",
    cat: ["Hill Stations", "Nature"],
    r: 4.7,
    n: 1890,
    blurb: "Coffee country, home to Mullayanagiri, the state's highest peak.",
    best: "Sep – Mar",
    days: 3,
    cost: [3500, 7000],
    things: [
      "Mullayanagiri trek",
      "Hebbe Falls",
      "Baba Budangiri",
      "Coffee estate stay",
    ],
    nearby: ["Kemmangundi", "Kudremukh"],
    kw: "chikmagalur,hills",
  },
  {
    id: "gokarna",
    name: "Gokarna",
    loc: "Uttara Kannada",
    cat: ["Beaches"],
    r: 4.6,
    n: 1520,
    blurb: "Quiet beaches and a pilgrim town on the Arabian Sea.",
    best: "Nov – Feb",
    days: 2,
    cost: [2500, 5000],
    things: [
      "Om Beach",
      "Kudle Beach",
      "Mahabaleshwar Temple",
      "Beach trek to Paradise Beach",
    ],
    nearby: ["Yana Caves", "Murudeshwar"],
    kw: "gokarna,beach",
  },
  {
    id: "udupi",
    name: "Udupi",
    loc: "Udupi district",
    cat: ["Food & Culture", "Beaches"],
    r: 4.6,
    n: 1340,
    blurb: "Krishna Temple, Udupi cuisine and the shores of Malpe.",
    best: "Oct – Feb",
    days: 2,
    cost: [2000, 4000],
    things: [
      "Sri Krishna Temple",
      "Malpe Beach",
      "St Mary's Island",
      "Udupi thali",
    ],
    nearby: ["Manipal", "Kaup Lighthouse"],
    kw: "udupi,temple",
  },
  {
    id: "blr",
    name: "Bengaluru",
    loc: "Bengaluru Urban",
    cat: ["Food & Culture"],
    r: 4.5,
    n: 5210,
    blurb: "Garden city, craft breweries and India's tech capital.",
    best: "Oct – Feb",
    days: 2,
    cost: [3000, 7000],
    things: [
      "Lalbagh Botanical Garden",
      "Bangalore Palace",
      "VV Puram Food Street",
      "Cubbon Park",
    ],
    nearby: ["Nandi Hills", "Bannerghatta"],
    kw: "bengaluru,city",
  },
  {
    id: "shiv",
    name: "Shivamogga",
    loc: "Malnad",
    cat: ["Waterfalls", "Nature"],
    r: 4.6,
    n: 1210,
    blurb: "Gateway to Jog Falls and the Sharavathi valley.",
    best: "Jul – Dec",
    days: 2,
    cost: [2000, 4500],
    things: [
      "Jog Falls",
      "Sakrebailu Elephant Camp",
      "Agumbe sunset",
      "Tunga riverbank",
    ],
    nearby: ["Agumbe", "Kodachadri"],
    kw: "waterfall,india",
  },
  {
    id: "badami",
    name: "Badami",
    loc: "Bagalkot",
    cat: ["Heritage"],
    r: 4.7,
    n: 1430,
    blurb: "Rock-cut Chalukyan caves above Agastya Lake.",
    best: "Oct – Feb",
    days: 2,
    cost: [1800, 3800],
    things: [
      "Badami cave temples",
      "Agastya Lake",
      "Bhutanatha Temple",
      "Badami Fort",
    ],
    nearby: ["Aihole", "Pattadakal"],
    kw: "badami,cave",
  },
  {
    id: "patta",
    name: "Pattadakal",
    loc: "Bagalkot",
    cat: ["Heritage"],
    r: 4.7,
    n: 980,
    blurb: "UNESCO-listed group of Chalukya temples.",
    best: "Oct – Feb",
    days: 1,
    cost: [1200, 2500],
    things: [
      "Virupaksha Temple",
      "Sangameshwara Temple",
      "Mallikarjuna Temple",
      "Malaprabha sunset",
    ],
    nearby: ["Aihole", "Mahakuta"],
    kw: "pattadakal,temple",
  },
  {
    id: "belur",
    name: "Belur",
    loc: "Hassan",
    cat: ["Heritage"],
    r: 4.8,
    n: 1160,
    blurb: "Hoysala masterpiece: the Chennakeshava Temple.",
    best: "Oct – Mar",
    days: 1,
    cost: [1500, 3000],
    things: [
      "Chennakeshava Temple",
      "Carved friezes tour",
      "Veeranarayana Temple",
      "Halebidu day trip",
    ],
    nearby: ["Halebidu", "Shravanabelagola"],
    kw: "belur,temple",
  },
  {
    id: "kabini",
    name: "Kabini",
    loc: "Mysuru border",
    cat: ["Wildlife", "Nature"],
    r: 4.7,
    n: 1670,
    blurb: "Backwater safaris with elephants and the odd black panther.",
    best: "Oct – May",
    days: 2,
    cost: [6000, 12000],
    things: [
      "Jungle safari",
      "Boat safari",
      "Backwater sunset",
      "Bird watching",
    ],
    nearby: ["Nagarhole", "Bandipur"],
    kw: "kabini,elephant",
  },
];
const HIST = [
  [
    "Hampi",
    "Vijayanagara",
    "Vijayanagara Empire",
    "Capital of a 14th-century empire spread over boulder hills.",
    "hampi",
  ],
  [
    "Mysore Palace",
    "Mysuru",
    "Wodeyars",
    "Indo-Saracenic palace lit by 97,000 bulbs on festival nights.",
    "mysore,palace",
  ],
  [
    "Badami Caves",
    "Bagalkot",
    "Chalukyas",
    "Sandstone cave temples carved in the 6th century.",
    "badami",
  ],
  [
    "Pattadakal",
    "Bagalkot",
    "Chalukyas",
    "Temples mixing northern and southern styles.",
    "pattadakal",
  ],
  [
    "Aihole",
    "Bagalkot",
    "Chalukyas",
    "The cradle of temple architecture, with 100+ early shrines.",
    "aihole,temple",
  ],
  [
    "Belur",
    "Hassan",
    "Hoysalas",
    "Star-shaped Chennakeshava Temple with intricate carvings.",
    "belur,temple",
  ],
  [
    "Halebidu",
    "Hassan",
    "Hoysalas",
    "Hoysaleswara Temple, famous for its sculpted walls.",
    "halebidu",
  ],
  [
    "Srirangapatna",
    "Mandya",
    "Wodeyars / Tipu Sultan",
    "Island fortress town on the Kaveri.",
    "srirangapatna",
  ],
  [
    "Gol Gumbaz",
    "Vijayapura",
    "Adil Shahis",
    "Massive dome with a famous whispering gallery.",
    "gol,gumbaz",
  ],
];
const TIMELINE = [
  ["Kadamba", "4th c."],
  ["Chalukyas", "6th c."],
  ["Hoysalas", "11th c."],
  ["Vijayanagara", "14th c."],
  ["Wodeyars", "1399–1950"],
  ["Modern Karnataka", "1956"],
];
const NATURE = [
  [
    "Hill Stations",
    "Coorg",
    "Kodagu",
    4.8,
    "Oct – Feb",
    "🥾 Trekking 📸 Photography 🌄 Views",
    "coorg,hills",
  ],
  [
    "Hill Stations",
    "Chikkamagaluru",
    "Malnad",
    4.7,
    "Sep – Feb",
    "☕ Coffee walks 🥾 Trekking",
    "chikmagalur",
  ],
  [
    "Hill Stations",
    "Kudremukh",
    "Western Ghats",
    4.8,
    "Oct – Feb",
    "🥾 Trekking 📸 Photography 🌄 Views",
    "kudremukh,mountain",
  ],
  [
    "Hill Stations",
    "Agumbe",
    "Shivamogga",
    4.6,
    "Jun – Feb",
    "🌅 Sunsets 🐍 Rainforest",
    "agumbe,forest",
  ],
  [
    "Hill Stations",
    "Kemmangundi",
    "Chikkamagaluru",
    4.5,
    "Sep – Feb",
    "🌄 Views 🥾 Short hikes",
    "kemmangundi",
  ],
  [
    "Waterfalls",
    "Jog Falls",
    "Shivamogga",
    4.8,
    "Jul – Dec",
    "📸 Photography 🌄 Viewpoints",
    "jogfalls",
  ],
  [
    "Waterfalls",
    "Abbey Falls",
    "Coorg",
    4.5,
    "Jun – Dec",
    "📸 Photography 🚶 Short walk",
    "abbey,waterfall",
  ],
  [
    "Waterfalls",
    "Dudhsagar Falls",
    "Belagavi border",
    4.7,
    "Jul – Dec",
    "🥾 Trekking 🚙 Jeep ride",
    "dudhsagar",
  ],
  [
    "Waterfalls",
    "Shivanasamudra",
    "Chamarajanagar",
    4.6,
    "Jul – Nov",
    "📸 Photography 🌊 Twin falls",
    "shivanasamudra",
  ],
  [
    "Waterfalls",
    "Kunchikal Falls",
    "Shivamogga",
    4.6,
    "Jul – Nov",
    "🥾 Trekking 🌧️ Monsoon views",
    "kunchikal,waterfall",
  ],
  [
    "Wildlife",
    "Bandipur",
    "Chamarajanagar",
    4.7,
    "Oct – May",
    "🐘 Safari 🦅 Birding",
    "bandipur,tiger",
  ],
  [
    "Wildlife",
    "Nagarhole",
    "Kodagu",
    4.7,
    "Oct – May",
    "🐅 Safari 🌲 Forest walks",
    "nagarhole",
  ],
  [
    "Wildlife",
    "Kabini",
    "Mysuru border",
    4.7,
    "Oct – May",
    "🚤 Boat safari 🐘 Elephants",
    "kabini",
  ],
  [
    "Wildlife",
    "Bhadra Sanctuary",
    "Chikkamagaluru",
    4.5,
    "Nov – May",
    "🐆 Safari 🦜 Birding",
    "bhadra,wildlife",
  ],
];
const FOOD = [
  ["Masala Dosa", "Statewide", 1, 1, "Crisp rice crepe with spiced potato."],
  [
    "Mysore Pak",
    "Mysuru",
    1,
    1,
    "Gram flour, ghee and sugar fudge from the palace kitchens.",
  ],
  [
    "Bisi Bele Bath",
    "Bengaluru",
    1,
    1,
    "Spicy lentil rice with vegetables and ghee.",
  ],
  [
    "Ragi Mudde",
    "Old Mysuru",
    1,
    0,
    "Finger-millet balls eaten with saaru or sambar.",
  ],
  [
    "Neer Dosa",
    "Coastal",
    1,
    0,
    "Paper-thin rice crepes with coconut chutney.",
  ],
  [
    "Mangaluru Buns",
    "Mangaluru",
    1,
    0,
    "Sweet banana puris served with chutney.",
  ],
  [
    "Dharwad Peda",
    "Dharwad",
    1,
    1,
    "Caramelised milk sweet with a grainy bite.",
  ],
  [
    "Maddur Vada",
    "Maddur",
    1,
    0,
    "Onion-rich fried snack from the Bengaluru–Mysuru road.",
  ],
  [
    "Udupi Sambar",
    "Udupi",
    1,
    0,
    "Mildly sweet sambar with coconut and jaggery.",
  ],
  [
    "Mysore Masala Dosa",
    "Mysuru",
    1,
    1,
    "Dosa smeared with fiery red chutney.",
  ],
].map((f, i) => ({
  name: f[0],
  region: f[1],
  veg: f[2],
  must: f[3],
  d: f[4],
  kw: f[0].replace(/ /g, ",") + ",food",
}));

/* ===================== HELPERS ===================== */
const stars = (r) =>
  [1, 2, 3, 4, 5]
    .map(
      (i) =>
        `<i class="bi bi-star${r >= i ? "-fill" : r >= i - 0.5 ? "-half" : ""}"></i>`,
    )
    .join("");
const imgTag = (kw, alt) =>
  `<img loading="lazy" src="${IMG(kw)}" alt="${alt}" onerror="this.style.display='none'">`;
const fmt = (n) => "₹" + n.toLocaleString("en-IN");

/* ===================== NAV + FOOTER ===================== */
function renderChrome() {
  const page = location.pathname.split("/").pop() || "index.html";
  $("#nav").innerHTML =
    `<nav class="navbar navbar-expand-lg sticky-top"><div class="container">
   <a class="brand" href="index.html">🌿 Explore Karnataka</a>
   <button class="navbar-toggler bg-light" data-bs-toggle="collapse" data-bs-target="#menu"><span class="navbar-toggler-icon"></span></button>
   <div class="collapse navbar-collapse" id="menu"><ul class="navbar-nav ms-auto align-items-lg-center">
   ${PAGES.map(([h, t]) => `<li class="nav-item"><a class="nav-link ${h === page ? "active" : ""}" href="${h}">${t}</a></li>`).join("")}
   <li class="nav-item ms-lg-2"><a class="btn btn-gold btn-sm" href="index.html#planner">Plan My Trip <span class="badge bg-dark" id="tripCount">0</span></a></li></ul></div></div></nav>`;
  $("#foot").innerHTML = `<footer><div class="container"><div class="row g-4">
   <div class="col-md-4"><h3>Explore Karnataka</h3><p>Discover Karnataka. Experience the extraordinary.</p><span class="fs-4"><i class="bi bi-instagram me-3"></i><i class="bi bi-facebook me-3"></i><i class="bi bi-youtube"></i></span></div>
   <div class="col-6 col-md-4"><h3>Quick Links</h3>${PAGES.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}</div>
   <div class="col-6 col-md-4"><h3>Popular Destinations</h3>${[
     "hampi",
     "coorg",
     "mysuru",
     "gokarna",
     "chik",
   ]
     .map((id) => {
       const p = PLACES.find((x) => x.id === id);
       return `<a href="places.html">${p.name}</a>`;
     })
     .join("")}</div>
  </div><hr><small>© Explore Karnataka – college project</small></div></footer>`;
}

/* ===================== DESTINATIONS ===================== */
function placeCard(p) {
  // Destination card
  return `<div class="col-md-6 col-lg-4 place" data-cat="${p.cat.join("|")}" data-text="${(p.name + " " + p.loc).toLowerCase()}"><div class="card h-100">
  <div class="ph">${imgTag(p.kw, p.name)}<span class="rate">★ ${p.r}</span></div>
  <div class="card-body d-flex flex-column"><h3 class="h4">${p.name}</h3>
   <div class="meta mb-1">📍 ${p.loc}</div>
   <div class="mb-2">${p.cat.map((c) => `<span class="badge badge-cat">${c}</span>`).join("")}</div>
   <div class="stars small">${stars(p.r)} <span class="text-muted">${p.r} / 5 · ${p.n.toLocaleString("en-IN")} reviews</span></div>
   <p class="mt-2">${p.blurb}</p>
   <div class="mt-auto d-flex gap-2"><button class="btn btn-forest btn-sm" onclick="openPlace('${p.id}')">Explore</button>
   <button class="btn btn-outline-success btn-sm" onclick="addTrip('${p.id}')">+ Add to Trip</button></div></div></div></div>`;
}
function openPlace(id) {
  // Place details modal
  const p = PLACES.find((x) => x.id === id);
  $("#placeModal .modal-body").innerHTML =
    `<div class="ph mb-3" style="height:260px">${imgTag(p.kw, p.name)}</div>
   <h2>${p.name}</h2><div class="meta">📍 ${p.loc}</div><div class="stars">${stars(p.r)} <span class="text-muted">${p.r}/5</span></div>
   <div class="row my-3 text-center"><div class="col"><b>Best time</b><br>${p.best}</div><div class="col"><b>Duration</b><br>${p.days} day${p.days > 1 ? "s" : ""}</div><div class="col"><b>Budget</b><br>${fmt(p.cost[0])} – ${fmt(p.cost[1])}</div></div>
   <h3 class="h5">Things to do</h3><ul>${p.things.map((t) => `<li>${t}</li>`).join("")}</ul>
   <h3 class="h5">Nearby</h3><p>${p.nearby.join(" · ")}</p>
   <button class="btn btn-forest" data-bs-dismiss="modal" onclick="addTrip('${p.id}')">+ Add to Trip</button>`;
  bootstrap.Modal.getOrCreateInstance("#placeModal").show();
}
function initPlaces() {
  $("#placeList").innerHTML = PLACES.map(placeCard).join("");
  let cat = "All";
  $("#filters").innerHTML = CATS.map(
    (c) => `<button class="chip ${c === "All" ? "on" : ""}">${c}</button>`,
  ).join("");
  const apply = () => {
    // Filter by category + search text
    const q = $("#search").value.toLowerCase();
    let shown = 0;
    document.querySelectorAll(".place").forEach((el) => {
      const ok =
        (cat === "All" || el.dataset.cat.split("|").includes(cat)) &&
        el.dataset.text.includes(q);
      el.classList.toggle("d-none", !ok);
      if (ok) shown++;
    });
    $("#none").classList.toggle("d-none", shown > 0);
  };
  $("#filters").onclick = (e) => {
    if (e.target.matches(".chip")) {
      cat = e.target.textContent;
      document
        .querySelectorAll("#filters .chip")
        .forEach((b) => b.classList.toggle("on", b === e.target));
      apply();
    }
  };
  $("#search").oninput = apply;
}

/* ===================== MY TRIP (localStorage) ===================== */
const getTrip = () => {
  try {
    return JSON.parse(localStorage.getItem("trip")) || [];
  } catch (e) {
    return [];
  }
};
function addTrip(id) {
  // Add destination to trip
  const t = getTrip();
  if (!t.includes(id)) {
    t.push(id);
    localStorage.setItem("trip", JSON.stringify(t));
  }
  renderTrip();
}
function removeTrip(id) {
  // Remove destination from trip
  localStorage.setItem(
    "trip",
    JSON.stringify(getTrip().filter((x) => x !== id)),
  );
  renderTrip();
}
function renderTrip() {
  const items = getTrip().map((id) => PLACES.find((p) => p.id === id));
  const c = $("#tripCount");
  if (c) c.textContent = items.length;
  const box = $("#tripBox");
  if (!box) return;
  if (!items.length) {
    box.innerHTML = `<p class="text-muted">No places yet. Tap “+ Add to Trip” on any destination.</p>`;
    return;
  }
  const days = items.reduce((s, p) => s + p.days, 0),
    lo = items.reduce((s, p) => s + p.cost[0], 0),
    hi = items.reduce((s, p) => s + p.cost[1], 0);
  box.innerHTML = `<ul class="list-group mb-3">${items
    .map(
      (
        p,
      ) => `<li class="list-group-item d-flex justify-content-between align-items-center">❤️ ${p.name}
   <button class="btn btn-sm btn-outline-danger" onclick="removeTrip('${p.id}')">Remove</button></li>`,
    )
    .join("")}</ul>
   <p><b>Total:</b> ${days} days · <b>Estimated budget:</b> ${fmt(lo)} – ${fmt(hi)}</p>
   <button class="btn btn-forest" onclick="planFromTrip()">Generate Itinerary</button>`;
}

/* ===================== ITINERARY GENERATOR ===================== */
function buildItinerary(stops, days, start, style, budget) {
  const mult = { Budget: 0.8, Moderate: 1, Premium: 1.8 }[budget];
  const slots = ["Morning", "Afternoon", "Evening"],
    out = [];
  let prev = start,
    cost = [0, 0];
  stops.forEach((p) => {
    cost[0] += (p.cost[0] / p.days) * mult;
    cost[1] += (p.cost[1] / p.days) * mult;
  });
  const perStop = Math.max(1, Math.ceil(days / stops.length));
  for (let d = 0; d < days; d++) {
    const p = stops[Math.min(Math.floor(d / perStop), stops.length - 1)],
      list = p.things.concat(p.nearby),
      k = (d % perStop) * 3;
    const moving = prev !== p.name,
      acts = slots.map((s, i) => [
        s,
        moving && i === 0
          ? `Travel ${prev} → ${p.name}`
          : list[(k + i) % list.length],
      ]);
    out.push(`<div class="col-md-6 col-lg-4"><div class="card h-100"><div class="card-body"><h3 class="h5">Day ${d + 1}</h3>
      <div class="meta mb-2">${moving ? prev + " → " : ""}${p.name}</div>${acts.map((a) => `<p class="mb-1"><b>${a[0]}:</b> ${a[1]}</p>`).join("")}</div></div></div>`);
    prev = p.name;
  }
  const per = days / (stops.reduce((s, p) => s + p.days, 0) || 1);
  return (
    `<div class="col-12"><div class="alert alert-success mb-0">Style: <b>${style}</b> · ${budget} · Estimated budget ${fmt(Math.round((cost[0] * per) / 100) * 100)} – ${fmt(Math.round((cost[1] * per) / 100) * 100)}</div></div>` +
    out.join("")
  );
}
function planFromForm() {
  const p = PLACES.find((x) => x.id === $("#pDest").value),
    days = Math.min(10, Math.max(1, +$("#pDays").value || 1));
  $("#itinerary").innerHTML = buildItinerary(
    [p],
    days,
    $("#pStart").value || "Bengaluru",
    $("#pStyle").value,
    $("#pBudget").value,
  );
}
function planFromTrip() {
  const stops = getTrip().map((id) => PLACES.find((p) => p.id === id)),
    days = stops.reduce((s, p) => s + p.days, 0);
  $("#itinerary").innerHTML = buildItinerary(
    stops,
    days,
    "Bengaluru",
    "Mixed",
    "Moderate",
  );
  $("#planner").scrollIntoView();
}

/* ===================== OTHER PAGES ===================== */
function initHome() {
  $("#featured").innerHTML = PLACES.slice(0, 3)
    .concat(PLACES[7])
    .map(placeCard)
    .join("")
    .replace(/col-lg-4/g, "col-lg-3");
  $("#pDest").innerHTML = PLACES.map(
    (p) => `<option value="${p.id}">${p.name}</option>`,
  ).join("");
}
function initHistory() {
  $("#timeline").innerHTML = TIMELINE.map(
    (t) => `<div>${t[0]}<small>${t[1]}</small></div>`,
  ).join("");
  $("#histList").innerHTML = HIST.map(
    (
      h,
    ) => `<div class="col-md-6 col-lg-4"><div class="card h-100"><div class="ph">${imgTag(h[4], h[0])}</div>
   <div class="card-body"><h3 class="h5">${h[0]}</h3><div class="meta">📍 ${h[1]}</div><span class="badge badge-cat my-2">${h[2]}</span><p>${h[3]}</p></div></div></div>`,
  ).join("");
}
function initNature() {
  $("#natureList").innerHTML = [...new Set(NATURE.map((n) => n[0]))]
    .map(
      (g) =>
        `<h2 class="mt-4">${g}</h2><div class="row g-4">` +
        NATURE.filter((n) => n[0] === g)
          .map(
            (
              n,
            ) => `<div class="col-md-6 col-lg-4"><div class="card h-100"><div class="ph">${imgTag(n[6], n[1])}<span class="rate">★ ${n[3]}</span></div>
   <div class="card-body"><h3 class="h5">🌿 ${n[1]}</h3><div class="meta">📍 ${n[2]}</div><div class="stars small">${stars(n[3])}</div>
   <p class="mb-1 mt-2"><b>Best season:</b> ${n[4]}</p><p class="mb-0">${n[5]}</p></div></div></div>`,
          )
          .join("") +
        `</div>`,
    )
    .join("");
}
function initFood() {
  $("#foodList").innerHTML = FOOD.map(
    (
      f,
    ) => `<div class="col-md-6 col-lg-4"><div class="card h-100"><div class="ph">${imgTag(f.kw, f.name)}</div>
   <div class="card-body"><h3 class="h5">${f.name}</h3><div class="meta mb-2">📍 ${f.region}</div>
   ${f.veg ? '<span class="badge bg-success me-1">Vegetarian</span>' : ""}${f.must ? '<span class="badge bg-warning text-dark">Must Try</span>' : ""}<p class="mt-2">${f.d}</p></div></div></div>`,
  ).join("");
}
function initGallery() {
  const map = {
    Heritage: "Heritage",
    "Hill Stations": "Nature",
    Waterfalls: "Nature",
    Nature: "Nature",
    Beaches: "Beaches",
    Wildlife: "Wildlife",
    "Food & Culture": "Culture",
  };
  const items = PLACES.map((p) => ({
    t: p.name,
    loc: p.loc,
    c: map[p.cat[0]],
    kw: p.kw,
    cap: p.blurb,
  })).concat(
    FOOD.slice(0, 4).map((f) => ({
      t: f.name,
      loc: f.region,
      c: "Food",
      kw: f.kw,
      cap: f.d,
    })),
  );
  const draw = (c) => {
    $("#gallery").innerHTML = items
      .filter((i) => c === "All" || i.c === c)
      .map(
        (i, n) => `<figure onclick="openPhoto(${items.indexOf(i)})">
    <img loading="lazy" src="${(i.src = i.src || IMG(i.kw))}" alt="${i.t}" style="aspect-ratio:${n % 3 === 0 ? "3/4" : "4/3"};object-fit:cover" onerror="this.style.display='none'"><figcaption>${i.t}</figcaption></figure>`,
      )
      .join("");
  };
  window.openPhoto = (n) => {
    const i = items[n];
    $("#photoModal .modal-body").innerHTML =
      `<img class="img-fluid rounded mb-3" src="${i.src}" alt="${i.t}"><h2>${i.t}</h2><div class="meta">📍 ${i.loc}</div><p>${i.cap}</p>`;
    bootstrap.Modal.getOrCreateInstance("#photoModal").show();
  };
  const cats = [
    "All",
    "Heritage",
    "Nature",
    "Food",
    "Culture",
    "Wildlife",
    "Beaches",
  ];
  $("#gFilters").innerHTML = cats
    .map((c) => `<button class="chip ${c === "All" ? "on" : ""}">${c}</button>`)
    .join("");
  $("#gFilters").onclick = (e) => {
    if (e.target.matches(".chip")) {
      document
        .querySelectorAll("#gFilters .chip")
        .forEach((b) => b.classList.toggle("on", b === e.target));
      draw(e.target.textContent);
    }
  };
  draw("All");
}
function initTravel() {
  $("#tips").innerHTML = [
    "💧 Carry water",
    "🌦️ Check weather",
    "🥾 Wear comfortable shoes",
    "📱 Keep offline maps",
    "🪪 Carry identification",
    "🌿 Respect nature",
    "🏛️ Respect heritage sites",
    "📸 Follow photography rules",
  ]
    .map((t) => `<div class="col-6 col-md-3"><div>${t}</div></div>`)
    .join("");
}

/* ===================== START ===================== */
document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  $("#modals").innerHTML =
    `<div class="modal fade" id="placeModal" tabindex="-1"><div class="modal-dialog modal-lg modal-dialog-scrollable"><div class="modal-content"><div class="modal-header border-0"><button class="btn-close ms-auto" data-bs-dismiss="modal"></button></div><div class="modal-body pt-0"></div></div></div></div>
   <div class="modal fade" id="photoModal" tabindex="-1"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content"><div class="modal-header border-0"><button class="btn-close ms-auto" data-bs-dismiss="modal"></button></div><div class="modal-body pt-0"></div></div></div></div>`;
  const page = document.body.dataset.page;
  (
    ({
      home: initHome,
      places: initPlaces,
      historical: initHistory,
      nature: initNature,
      food: initFood,
      gallery: initGallery,
      travel: initTravel,
    })[page] || (() => {})
  )();
  if (page === "home") initPlaces_sharedModal();
  renderTrip();
});
function initPlaces_sharedModal() {} // Home reuses openPlace() and the modal above
