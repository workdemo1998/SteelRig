import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const site = {
  phoneDisplay: "+44 7858 304 518",
  phoneTel: "+447858304518",
  whatsapp: "https://wa.me/447858304518",
  email: "info@steelrig.co.uk",
  address: "12 Harris Avenue, Cardiff, CF3 1QE",
  street: "12 Harris Avenue",
  locality: "Cardiff",
  postcode: "CF3 1QE",
  mapsUrl: "https://maps.google.com/?q=12+Harris+Avenue,+Cardiff,+CF3+1QE",
  url: "https://www.steelrig.co.uk",
};

const nav = [
  ["services/", "Services", "services"],
  ["portfolio/", "Portfolio", "portfolio"],
  ["accreditations/", "Accreditations", "accreditations"],
  ["about/", "About", "about"],
  ["gallery/", "Gallery", "gallery"],
  ["contact/", "Contact", "contact"],
];

const jobs = [
  "Roof repairs",
  "Loft conversions",
  "Extensions",
  "New builds",
  "Rendering",
  "Painting",
  "Solar installation",
  "Emergency access",
  "Tight and narrow access",
  "Lifting",
  "Scaffold towers",
  "Temporary structures",
  "Something else",
];

const heroServices = ["Roof access", "Extensions", "Narrow access", "Towers", "Temporary structures"];

const why = [
  ["CISRS-accredited team", "The scaffolders on site hold the recognised competency card for this trade."],
  ["Domestic and specialist", "From a loft conversion to a tight plot or a temporary structure, the job is planned around the site."],
  ["Survey, then a quote", "We look at the property before pricing it. The quote is free and there is no obligation."],
  ["Up for the job, then down", "The scaffold stays while the work needs it, and comes down promptly when you are finished."],
];

const steps = [
  "Tell us about the project",
  "Site survey",
  "Receive quote",
  "Scaffold erected",
  "Project completed",
  "Prompt dismantling",
];

const faqs = [
  ["Is the quote free?", "Yes. We survey the site and send a written quote. There is no obligation and no charge for the survey."],
  ["Are your scaffolders CISRS accredited?", "Yes. The SteelRig team is CISRS-accredited."],
  ["Can you scaffold a narrow side passage?", "Often, yes. Tell us how tight the access is, or attach a description in the form, and we will confirm on the survey."],
  ["Which areas do you cover?", "Cardiff, Barry, Caerphilly, Newport, Risca, Rogerstone, Pontyclun, Bargoed and the surrounding towns. The full list is on the areas page."],
  ["Do you take the scaffold down at the end?", "Yes. Once the project is finished, dismantling is part of the job."],
];

const services = [
  {
    id: "domestic",
    title: "Domestic scaffold hire",
    summary: "Loft conversions, extensions, rendering, painting and everyday house repairs.",
    image: "images/service-domestic.jpg",
    imageAlt: "A working scaffold along the wall of a house, with lifts up to the roof.",
    credit: "Photo: PantheraLeo1359531, CC BY-SA 4.0",
    paragraphs: [
      "Most of our work is on houses. Loft conversions, extensions, new builds, rendering, painting and general repairs all need a platform that fits the property, not a one-size frame dropped on the drive.",
      "We survey the site, agree the quote, erect the scaffold and take it down when the work is finished.",
    ],
  },
  {
    id: "roof",
    title: "Roof access",
    summary: "Platforms for roof repairs, chimneys and solar installation.",
    image: "images/service-roof.jpg",
    imageAlt: "Scaffolders on a house scaffold, passing a roof sheet up to the working lift.",
    paragraphs: [
      "Roof repairs, chimney work and solar installation need a safe working lift, guard rails and, where the elevation calls for it, brick guards. The scaffold is there before the roofing or solar crew starts, and it comes down after.",
    ],
  },
  {
    id: "narrow",
    title: "Narrow access",
    summary: "Side returns, terraces and plots a standard tower will not fit.",
    image: "images/service-narrow.jpg",
    imageAlt: "Scaffold built in the narrow gap between two brick buildings, with a lift up to the roof.",
    paragraphs: [
      "Terraces, side returns and gardens with a tight gate are normal in Cardiff and the valleys. If a standard tower will not go through, the scaffold is designed to. Tell us about the passage when you get in touch, or send a photo with the quote form.",
    ],
  },
  {
    id: "towers",
    title: "Towers and temporary structures",
    summary: "Short-term platforms, towers and access for lifting materials.",
    image: "images/service-towers.jpg",
    imageAlt: "Scaffolders standing on a tube-and-fitting tower against the side of a building.",
    paragraphs: [
      "Some jobs only need a tower or a short-term structure: a loading point, a temporary platform, or access for lifting materials to the working lift. These are priced and planned the same way as a full house scaffold, with a survey first.",
    ],
  },
];

const projects = [
  {
    image: "images/project-front.jpg",
    alt: "Boarded scaffold across the front of a brick house, with brick guards along the roof lift and a yellow safety gate.",
    kicker: "Front elevation",
    title: "Boarded lift across the front",
    text: "Boards and a safety gate along the roof lift.",
    meta: "Domestic hire",
    caption: "Front elevation",
    place: "Brick house",
    imagePosition: "center",
  },
  {
    image: "images/project-side.jpg",
    alt: "Scaffold on the side of a brick house, with a timber platform, ladder access and a chimney above the roof.",
    kicker: "Side access",
    title: "A platform along the side wall",
    text: "A working lift beside the wall, with ladder access.",
    meta: "Domestic hire",
    caption: "Side of the house",
    place: "Brick house",
    imagePosition: "center 78%",
  },
  {
    image: "images/scaffold-poster.jpg",
    alt: "Scaffold being set up along the wall of a house, with frames laid out on the patio.",
    kicker: "Going up",
    title: "The first lift on the patio",
    text: "The first platform set against the wall.",
    meta: "Domestic hire",
    caption: "Going up",
    place: "House scaffold",
    imagePosition: "center",
  },
];

const areas = [
  { name: "Cardiff", slug: "cardiff", blurb: "Domestic scaffold hire across the city, from CF3 and the eastern suburbs to terraces, extensions and roof work nearer the centre.", near: ["caerphilly", "dinas-powys", "newport", "taffs-well"] },
  { name: "Barry", slug: "barry", blurb: "Scaffold hire for houses in Barry and the Vale, including roof access, loft conversions and plots with a tight side passage.", near: ["cardiff", "dinas-powys", "pencoed", "llanharry"] },
  { name: "Caerphilly", slug: "caerphilly", blurb: "Scaffolding in Caerphilly for home extensions, roof repairs, rendering and new-build access north of Cardiff.", near: ["cardiff", "bedwas", "llanbradach", "ystrad-mynach"] },
  { name: "Newport", slug: "newport", blurb: "Domestic and temporary scaffolds for Newport, including roof access, extensions and work that needs a clear route for materials.", near: ["cardiff", "rogerstone", "caerleon", "risca"] },
  { name: "Dinas Powys", slug: "dinas-powys", blurb: "Scaffold hire in Dinas Powys for roof repairs, painting, rendering and houses where access is narrow.", near: ["cardiff", "barry", "pontyclun", "pencoed"] },
  { name: "Taff's Well", slug: "taffs-well", blurb: "Local scaffold hire around Taff's Well for loft conversions, roof work and extensions on the northern edge of Cardiff.", near: ["cardiff", "caerphilly", "church-village", "pontyclun"] },
  { name: "Rogerstone", slug: "rogerstone", blurb: "Scaffolding in Rogerstone for domestic roofs, extensions and jobs that need a working platform up quickly and taken down when the work is finished.", near: ["newport", "risca", "caerleon", "cardiff"] },
  { name: "Bedwas", slug: "bedwas", blurb: "Scaffold hire in Bedwas for roof repairs, rendering, painting and home extensions.", near: ["caerphilly", "ystrad-mynach", "treharris", "cardiff"] },
  { name: "Abertridwr and Senghenydd", slug: "abertridwr-senghenydd", blurb: "Scaffolding for houses in Abertridwr and Senghenydd, including tight streets and valley plots.", near: ["caerphilly", "llanbradach", "nelson", "ystrad-mynach"] },
  { name: "Church Village", slug: "church-village", blurb: "Domestic scaffold hire in Church Village for roofs, lofts, extensions and solar installation.", near: ["beddau", "pontyclun", "llantrisant", "taffs-well"] },
  { name: "Pontyclun", slug: "pontyclun", blurb: "Scaffolding in Pontyclun for home improvements, roof access and narrow-access properties west of Cardiff.", near: ["talbot-green", "llanharry", "church-village", "cardiff"] },
  { name: "Llanbradach", slug: "llanbradach", blurb: "Scaffold hire in Llanbradach for roof repairs, extensions and rendering on houses through the Rhymney valley.", near: ["ystrad-mynach", "caerphilly", "abertridwr-senghenydd", "nelson"] },
  { name: "Beddau", slug: "beddau", blurb: "Scaffolding in Beddau for domestic roofs, painting, loft conversions and extension work.", near: ["church-village", "llantrisant", "pontyclun", "talbot-green"] },
  { name: "Ystrad Mynach", slug: "ystrad-mynach", blurb: "Scaffold hire in Ystrad Mynach for roofs, new builds, extensions and temporary access.", near: ["llanbradach", "nelson", "bargoed", "caerphilly"] },
  { name: "Llantrisant", slug: "llantrisant", blurb: "Scaffolding in Llantrisant for house roofs, rendering, solar installation and extension access.", near: ["talbot-green", "beddau", "pontyclun", "llanharan-brynna"] },
  { name: "Talbot Green", slug: "talbot-green", blurb: "Domestic scaffold hire in Talbot Green, set up around the property and dismantled when the job is done.", near: ["llantrisant", "pontyclun", "llanharan-brynna", "beddau"] },
  { name: "Llanharan and Brynna", slug: "llanharan-brynna", blurb: "Scaffolding for homes in Llanharan and Brynna, including roof access and plots with limited space.", near: ["talbot-green", "llanharry", "pencoed", "pontyclun"] },
  { name: "Caerleon", slug: "caerleon", blurb: "Scaffold hire in Caerleon for roof repairs, painting, extensions and careful access on established houses.", near: ["newport", "rogerstone", "risca", "cardiff"] },
  { name: "Pencoed", slug: "pencoed", blurb: "Scaffolding in Pencoed for domestic roofs, lofts and extensions toward the western edge of our area.", near: ["llanharan-brynna", "llanharry", "barry", "pontyclun"] },
  { name: "Llanharry", slug: "llanharry", blurb: "Scaffold hire in Llanharry for roof work, rendering and home extensions.", near: ["pontyclun", "pencoed", "llanharan-brynna", "talbot-green"] },
  { name: "Abercynon", slug: "abercynon", blurb: "Scaffolding in Abercynon for valley houses, roof repairs and temporary working platforms.", near: ["treharris", "nelson", "ystrad-mynach", "bargoed"] },
  { name: "Nelson", slug: "nelson", blurb: "Scaffold hire in Nelson for roofs, extensions and narrow-access domestic jobs.", near: ["ystrad-mynach", "llanbradach", "abercynon", "treharris"] },
  { name: "Bargoed", slug: "bargoed", blurb: "Scaffolding in Bargoed for domestic access, roof repairs and temporary structures further up the valley.", near: ["ystrad-mynach", "abercynon", "nelson", "pontllanfraith"] },
  { name: "Pontllanfraith", slug: "pontllanfraith", blurb: "Scaffold hire in Pontllanfraith for home roofs, extensions and short-term access.", near: ["newbridge", "oakdale", "bargoed", "ystrad-mynach"] },
  { name: "Newbridge", slug: "newbridge", blurb: "Scaffolding in Newbridge for roof access, rendering and domestic projects in the Ebbw valley.", near: ["abercarn", "pontllanfraith", "oakdale", "risca"] },
  { name: "Abercarn", slug: "abercarn", blurb: "Scaffold hire in Abercarn for houses that need safe roof access, an extension lift or a tight side scaffold.", near: ["newbridge", "risca", "pontllanfraith", "oakdale"] },
  { name: "Risca", slug: "risca", blurb: "Scaffolding in Risca for roof repairs, loft conversions, extensions and emergency access.", near: ["newport", "rogerstone", "abercarn", "cardiff"] },
  { name: "Treharris", slug: "treharris", blurb: "Scaffold hire in Treharris for domestic roofs, painting and extension work.", near: ["abercynon", "nelson", "bedwas", "ystrad-mynach"] },
  { name: "Oakdale", slug: "oakdale", blurb: "Scaffolding in Oakdale for home improvements, roof access and temporary platforms.", near: ["pontllanfraith", "newbridge", "bargoed", "abercarn"] },
];

const areaBySlug = new Map(areas.map((area) => [area.slug, area]));
const year = new Date().getFullYear();

const waIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.5.9.9-3.4-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7 1c-.1.1-.3.2-.5.1a7.4 7.4 0 0 1-3.6-3.1c-.2-.3 0-.4.1-.6l.4-.5.2-.4c.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 4.4 4.4 0 0 0 2.1.4 2.4 2.4 0 0 0 1.6-1 2 2 0 0 0 .1-1.2c-.1-.1-.3-.2-.5-.3z"/></svg>`;

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function prefix(depth) {
  return depth === 0 ? "" : "../".repeat(depth);
}

function href(depth, target) {
  const clean = target.replace(/^\//, "");
  if (!clean) return prefix(depth) || "./";
  return `${prefix(depth)}${clean}`;
}

function mask(depth, file) {
  const url = href(depth, `images/${file}`);
  return `-webkit-mask-image:url('${url}');mask-image:url('${url}')`;
}

function wordmark(depth, markClass, steelClass, rigClass) {
  return `<img class="${markClass}" src="${href(depth, "images/mark.png")}" alt="">
          <span class="${steelClass === "footer-steel" ? "footer-name" : "logo-name"}">
            <span class="amber-word ${steelClass}" style="${mask(depth, "logo-steel.png")}" aria-hidden="true"></span>
            <span class="amber-word ${rigClass}" style="${mask(depth, "logo-rig.png")}" aria-hidden="true"></span>
          </span>`;
}

function whatsapp(depth, className = "", label = "") {
  const classes = className ? `whatsapp ${className}` : "whatsapp";
  return `<a class="${classes}" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ${esc(site.phoneDisplay)}">${waIcon}${label ? `<span>${esc(label)}</span>` : ""}</a>`;
}

function ticker() {
  const items = services.map((service) => `<span>. ${esc(service.title)}</span>`).join("");
  return `<div class="ticker" aria-label="Services"><div class="ticker-track"><div class="ticker-group">${items}</div><div class="ticker-group" aria-hidden="true">${items}</div></div></div>`;
}

function header(depth, section) {
  const links = nav
    .map(([target, label, key]) => {
      const current = key === section ? ' aria-current="page"' : "";
      return `<a href="${href(depth, target)}"${current}>${esc(label)}</a>`;
    })
    .join("");
  return `<header class="site-header">
      <a class="logo" href="${href(depth, "/")}" aria-label="SteelRig">${wordmark(depth, "logo-mark", "logo-steel", "logo-rig")}</a>
      <nav class="nav" id="site-nav" aria-label="Primary">${links}</nav>
      <div class="header-actions">
        <a class="btn btn-amber header-call" href="tel:${site.phoneTel}">Call ${esc(site.phoneDisplay)}</a>
        ${whatsapp(depth)}
      </div>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Menu"><span></span></button>
    </header>`;
}

function footer(depth) {
  const links = nav
    .map(([target, label]) => `<li><a href="${href(depth, target)}">${esc(label)}</a></li>`)
    .join("");
  return `<footer class="site-footer">
        <div class="wrap footer-grid">
          <div>
            <p style="margin-top:0;max-width:28rem">Domestic scaffold hire for Cardiff, Caerphilly, Risca, Rogerstone, Newport and the surrounding areas.</p>
            <p class="footer-phone"><a href="tel:${site.phoneTel}">${esc(site.phoneDisplay)}</a>${whatsapp(depth)}</p>
            <p style="margin-top:0.35rem"><a href="mailto:${site.email}">${esc(site.email)}</a><br>${esc(site.address)}</p>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>${links}<li><a href="${href(depth, "areas/")}">Where we work</a></li></ul>
          </div>
        </div>
        <div class="wrap footer-base"><p>© ${year} SteelRig. Scaffold hire across South Wales.</p></div>
        <a class="footer-brand" href="${href(depth, "/")}" aria-label="SteelRig">${wordmark(depth, "footer-mark", "footer-steel", "footer-rig")}</a>
      </footer>
      <div class="callbar">
        <a href="tel:${site.phoneTel}">Call</a>
        ${whatsapp(depth, "callbar-wa", "WhatsApp")}
        <a href="${href(depth, "contact/")}">Get a quote</a>
      </div>`;
}

function quoteForm(id) {
  const options = jobs.map((job) => `<option value="${esc(job)}">${esc(job)}</option>`).join("");
  return `<form class="quote-form" data-quote data-email="${esc(site.email)}" data-phone="${esc(site.phoneDisplay)}">
      <p class="kicker"><span>Free</span> No obligation</p>
      <h2>Tell us about the project.</h2>
      <div class="form-row">
        <div><label for="${id}-name">Name</label><input id="${id}-name" name="name" type="text" autocomplete="name" required></div>
        <div><label for="${id}-phone">Phone</label><input id="${id}-phone" name="phone" type="tel" autocomplete="tel" required></div>
      </div>
      <div class="form-row">
        <div><label for="${id}-postcode">Postcode</label><input id="${id}-postcode" name="postcode" type="text" autocomplete="postal-code" required></div>
        <div>
          <label for="${id}-job">What is it for?</label>
          <select id="${id}-job" name="job" required><option value="">Choose a job</option>${options}</select>
        </div>
      </div>
      <label for="${id}-message">About the property</label>
      <textarea id="${id}-message" name="message" placeholder="Storeys, type of work, and anything tight about the access."></textarea>
      <label class="hp" for="${id}-company" aria-hidden="true">Company</label>
      <input class="hp" id="${id}-company" name="company" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button class="btn btn-amber" type="submit">Request a quote</button>
      <p class="form-note" role="status"></p>
    </form>`;
}

function hero({ kicker, accent, title, lede }) {
  return `<header class="page-hero"><div class="wrap"><p class="kicker kicker-light"><span>${esc(kicker)}</span> ${esc(accent)}</p><h1>${esc(title)}</h1>${lede ? `<p class="lede">${esc(lede)}</p>` : ""}</div></header>`;
}

function page({ file, title, description, section, main, jsonLd = "" }) {
  const depth = file === "index.html" || file === "404.html" ? 0 : file.split("/").filter(Boolean).length - 1;
  const html = `<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#0d2238">
    <meta name="description" content="${esc(description)}">
    <title>${esc(title)}</title>
    <link rel="icon" href="${href(depth, "images/mark.png")}" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${href(depth, "css/styles.css")}?v=2">
    ${jsonLd}
  </head>
  <body>
    <a class="skip" href="#main">Skip to content</a>
    ${ticker()}
    ${header(depth, section)}
    <main id="main">
      ${main}
    </main>
    ${footer(depth)}
    <script src="${href(depth, "js/site.js")}"></script>
  </body>
</html>
`;
  const target = path.join(rootDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

function home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "SteelRig",
    url: site.url,
    image: `${site.url}/images/project-front.jpg`,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.locality,
      postalCode: site.postcode,
      addressCountry: "GB",
    },
    areaServed: "South Wales",
    description: "Domestic scaffold hire in Cardiff, Caerphilly, Risca, Rogerstone, Newport and the surrounding areas.",
  };
  const jobsHtml = jobs
    .filter((job) => job !== "Something else")
    .map((job) => `<li><a href="${href(0, `contact/?job=${encodeURIComponent(job)}`)}">${esc(job)}</a></li>`)
    .join("");
  const tiles = services
    .map((service) => {
      const tileClass = service.id === "domestic" ? "tile tile-photo" : `tile tile-${service.id}`;
      const credit = service.credit ? `<span class="tile-credit" aria-hidden="true">${esc(service.credit)}</span>` : "";
      return `<a class="${tileClass}" href="${href(0, `services/${service.id}/`)}"><img src="${href(0, service.image)}" alt="${esc(service.imageAlt)}"><h3>${esc(service.title)}</h3><p>${esc(service.summary)}</p>${credit}</a>`;
    })
    .join("");
  const projectData = projects.map((project) => ({
    alt: project.alt,
    caption: project.caption,
    text: project.text,
    place: project.place,
  }));
  const sheets = projects
    .map((project, index) => {
      const count = projects.length;
      const prev = (0 - 1 + count) % count;
      const next = (0 + 1) % count;
      const slot = index === 0 ? "center" : index === prev ? "left" : "right";
      const hidden = slot === "center" ? "" : ' aria-hidden="true"';
      const alt = slot === "center" ? esc(project.alt) : "";
      return `<img class="stage-sheet" data-slot="${slot}" src="${href(0, project.image)}" alt="${alt}"${hidden} style="object-position:${esc(project.imagePosition)}">`;
    })
    .join("");
  const first = projects[0];
  const towns = areas
    .map((area) => `<li><a href="${href(0, `areas/${area.slug}/`)}">Scaffolding ${esc(area.name)}</a></li>`)
    .join("");
  const whyHtml = why
    .map(([title, text]) => `<article><strong>${esc(title)}</strong><p>${esc(text)}</p></article>`)
    .join("");
  const stepHtml = steps
    .map((step, index) => `<article class="step"><span class="num">${index + 1}</span><strong>${esc(step)}</strong></article>`)
    .join("");
  const strip = heroServices.map((item) => `<li>${esc(item)}</li>`).join("");

  page({
    file: "index.html",
    title: "SteelRig | Domestic scaffold hire in Cardiff",
    description: "Domestic scaffold hire in Cardiff, Caerphilly, Risca, Rogerstone, Newport and South Wales. CISRS-accredited team. Free, no-obligation quotes.",
    section: "",
    jsonLd: `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
    main: `<section class="hero">
        <video class="hero-media" src="${href(0, "video/scaffold.mp4")}" poster="${href(0, "images/scaffold-poster.jpg")}" autoplay muted loop playsinline aria-hidden="true"></video>
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="wrap hero-content">
          <p class="kicker kicker-light">South Wales</p>
          <h1>Domestic scaffold<br>hire services<br><em>in Cardiff.</em></h1>
          <p class="lede">Cardiff, Caerphilly, Risca, Rogerstone, Newport and the surrounding areas.</p>
          <div class="hero-actions">
            <a class="btn btn-amber" href="tel:${site.phoneTel}">Call ${esc(site.phoneDisplay)}</a>
            <a class="btn btn-ghost" href="${href(0, "contact/")}">Get in touch</a>
          </div>
          <ul class="hero-strip">${strip}</ul>
        </div>
      </section>
      <section class="section" aria-labelledby="needs-title">
        <div class="wrap">
          <div class="need-head">
            <div><p class="kicker">The job</p><h2 id="needs-title">What do you need scaffolding for?</h2></div>
            <p class="section-intro">Pick the work and we will come back with a free, no-obligation quote.</p>
          </div>
          <ul class="job-list">${jobsHtml}</ul>
        </div>
      </section>
      <section class="section" style="padding-top:0" aria-labelledby="services-title">
        <div class="wrap">
          <p class="kicker">Services</p>
          <h2 id="services-title">Access built around the house.</h2>
          <div class="bento">${tiles}</div>
        </div>
      </section>
      <section class="section" style="padding-top:0" aria-labelledby="gallery-title">
        <div class="wrap">
          <p class="kicker">Gallery</p>
          <h2 id="gallery-title">Recent projects</h2>
          <figure class="project-stage" data-stage data-projects="${esc(JSON.stringify(projectData))}">
            <div class="stage-stack">
              ${sheets}
              <button type="button" class="stage-arrow stage-prev" aria-label="Previous project"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7"/></svg></button>
              <button type="button" class="stage-arrow stage-next" aria-label="Next project"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></button>
              <figcaption class="stage-caption"><strong>${esc(first.caption)}</strong><p>${esc(first.text)}</p><span>${esc(first.place)}</span></figcaption>
            </div>
          </figure>
        </div>
      </section>
      <section class="section why" aria-labelledby="why-title">
        <div class="wrap">
          <p class="kicker">Why us</p>
          <h2 id="why-title">Why customers choose us</h2>
          <div class="why-grid">${whyHtml}</div>
        </div>
      </section>
      <section class="section" aria-labelledby="areas-title">
        <div class="wrap">
          <div class="area-intro">
            <p class="kicker">Service area</p>
            <h2 id="areas-title">Where we work</h2>
            <p class="area-copy">SteelRig is a trusted scaffolding company serving Cardiff, Barry, Caerphilly, Newport and communities throughout South Wales. From domestic projects such as loft conversions and home extensions to temporary structures and demanding specialist contracts, we provide reliable scaffolding.</p>
            <p class="area-copy">Our experienced, CISRS-accredited team is equipped for challenging sites. Whatever the scale of the job, the focus is safe, dependable access.</p>
            <p class="area-action"><button type="button" class="btn btn-line" aria-expanded="false" aria-controls="town-list" data-town-toggle>All towns</button></p>
            <ul class="area-links" id="town-list" hidden>${towns}</ul>
          </div>
        </div>
      </section>
      <section class="section" style="padding-top:0" aria-labelledby="how-title">
        <div class="wrap">
          <p class="kicker">How it works</p>
          <h2 id="how-title">Six steps, then the scaffold comes down.</h2>
          <div class="steps" data-steps>${stepHtml}</div>
        </div>
      </section>
      <section class="section contact-band" id="quote" aria-labelledby="contact-title">
        <div class="wrap contact-grid">
          <div>
            <p class="kicker">Contact</p>
            <h2 id="contact-title">Get your free, no-obligation quote today.</h2>
            <p class="lede" style="margin-top:1rem">Cost-effective and reliable scaffolding across Cardiff, Pontyclun, Bargoed and Rogerstone.</p>
            <div class="phone-row"><a class="phone-link" href="tel:${site.phoneTel}">${esc(site.phoneDisplay)}</a>${whatsapp(0)}</div>
            <div class="contact-meta"><a href="mailto:${site.email}">${esc(site.email)}</a><span>${esc(site.address)}</span></div>
          </div>
          ${quoteForm("home")}
        </div>
      </section>`,
  });
}

function servicesIndex() {
  const cards = services
    .map((service) => {
      const paragraphs = service.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("");
      const credit = service.credit ? `<span class="tile-credit">${esc(service.credit)}</span>` : "";
      return `<a class="service-card service-card-${service.id}" id="${service.id}" href="${service.id}/"><img src="../${service.image}" alt="${esc(service.imageAlt)}"><span class="service-card-copy"><h2>${esc(service.title)}</h2>${paragraphs}<span class="service-card-go">See towns</span>${credit}</span></a>`;
    })
    .join("");
  page({
    file: "services/index.html",
    title: "Scaffolding services in Cardiff | SteelRig",
    description: "Domestic scaffold hire, roof access, narrow-access scaffolds, towers and temporary structures across Cardiff and South Wales.",
    section: "services",
    main: `${hero({ kicker: "Services", accent: "Scaffold hire", title: "Scaffolding for the job in front of you.", lede: "Choose a service. Each one opens the towns where we put that scaffold up." })}
      <section class="section"><div class="wrap service-cards">${cards}</div></section>`,
  });
}

function servicePages() {
  for (const service of services) {
    const towns = areas
      .map((area) => `<li><a href="../../areas/${area.slug}/${service.id}/">${esc(area.name)}</a></li>`)
      .join("");
    const paragraphs = service.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("");
    const credit = service.credit ? `<p class="tile-credit service-credit">${esc(service.credit)}</p>` : "";
    page({
      file: `services/${service.id}/index.html`,
      title: `${service.title} | SteelRig`,
      description: `${service.summary} Available across Cardiff and South Wales. Call SteelRig on ${site.phoneDisplay}.`,
      section: "services",
      main: `${hero({ kicker: "Services", accent: "South Wales", title: service.title, lede: service.summary })}
        <figure class="service-banner service-card-${service.id}"><img src="../../${service.image}" alt="${esc(service.imageAlt)}"></figure>
        <section class="section"><div class="wrap contact-grid"><div class="stack">${paragraphs}<p class="area-copy">Call ${esc(site.phoneDisplay)} or send a few details. We will arrange a free site survey and a written quote before any scaffold goes up.</p>${credit}</div>${quoteForm(service.id)}</div></section>
        <section class="section" style="padding-top:0" aria-labelledby="towns-title">
          <div class="wrap">
            <p class="kicker">Where</p>
            <h2 id="towns-title">Towns for this service</h2>
            <p class="section-intro">Choose a town. Each one opens ${esc(service.title.toLowerCase())} there.</p>
            <ul class="area-links town-pick" id="town-list" data-cascade>${towns}</ul>
            <p style="margin-top:1.5rem"><a class="btn btn-line" href="../">All services</a></p>
          </div>
        </section>`,
    });
  }
}

function areaPages() {
  const list = areas
    .map((area) => `<li><a href="${area.slug}/">Scaffolding ${esc(area.name)}</a></li>`)
    .join("");
  page({
    file: "areas/index.html",
    title: "Scaffolding areas | SteelRig",
    description: "SteelRig covers Cardiff, Barry, Caerphilly, Newport, Risca, Pontyclun, Bargoed and towns across South Wales.",
    section: "",
    main: `${hero({ kicker: "Areas", accent: "South Wales", title: "Scaffolding across Cardiff and beyond.", lede: "Based at 12 Harris Avenue, Cardiff, and working through the Vale, Newport and the valleys." })}
      <section class="section"><div class="wrap"><ul class="area-links">${list}</ul></div></section>`,
  });

  for (const area of areas) {
    const nearby = area.near
      .map((slug) => areaBySlug.get(slug))
      .filter(Boolean)
      .map((item) => `<a href="../${item.slug}/">Scaffolding ${esc(item.name)}</a>`)
      .join("");
    const serviceLinks = services
      .map((service) => `<li><a href="${service.id}/">${esc(service.title)}</a></li>`)
      .join("");
    page({
      file: `areas/${area.slug}/index.html`,
      title: `Scaffolding in ${area.name} | SteelRig`,
      description: `Scaffold hire in ${area.name}. CISRS-accredited domestic scaffolding for roofs, extensions, lofts and narrow access. Free quotes from SteelRig in Cardiff.`,
      section: "",
      main: `${hero({ kicker: "Areas", accent: area.name, title: `Scaffolding in ${area.name}`, lede: area.blurb })}
        <section class="section"><div class="wrap contact-grid">
          <div>
            <p>SteelRig provides domestic scaffold hire in ${esc(area.name)}: roof repairs, loft conversions, extensions, rendering, painting, solar installation and narrow-access work. The team is CISRS-accredited and based in Cardiff.</p>
            <p class="area-copy">Call ${esc(site.phoneDisplay)} or send a few details. We will arrange a free site survey and a written quote before any scaffold goes up.</p>
            <p class="meta">Services in ${esc(area.name)}</p>
            <ul class="area-links town-pick">${serviceLinks}</ul>
            <p class="meta">Nearby</p>
            <div class="nearby">${nearby}</div>
            <p style="margin-top:1.5rem"><a class="btn btn-line" href="../">All areas</a></p>
          </div>
          ${quoteForm(area.slug)}
        </div></section>`,
    });

    for (const service of services) {
      const nearbyServices = area.near
        .map((slug) => areaBySlug.get(slug))
        .filter(Boolean)
        .map((item) => `<a href="../../${item.slug}/${service.id}/">${esc(service.title)} in ${esc(item.name)}</a>`)
        .join("");
      const paragraphs = service.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("");
      page({
        file: `areas/${area.slug}/${service.id}/index.html`,
        title: `${service.title} in ${area.name} | SteelRig`,
        description: `${service.title} in ${area.name}. ${service.summary} Free quotes from SteelRig in Cardiff.`,
        section: "",
        main: `${hero({ kicker: area.name, accent: service.title, title: `${service.title} in ${area.name}`, lede: service.summary })}
          <figure class="service-banner service-card-${service.id}"><img src="../../../${service.image}" alt="${esc(service.imageAlt)}"></figure>
          <section class="section"><div class="wrap contact-grid"><div class="stack">
            ${paragraphs}
            <p>${esc(area.blurb)}</p>
            <p class="area-copy">Call ${esc(site.phoneDisplay)} or send a few details. We will arrange a free site survey and a written quote before any scaffold goes up.</p>
            <p class="meta">Keep browsing</p>
            <div class="nearby"><a href="../../../services/${service.id}/">${esc(service.title)}</a><a href="../">Scaffolding in ${esc(area.name)}</a></div>
            <p class="meta">Same service nearby</p>
            <div class="nearby">${nearbyServices}</div>
          </div>${quoteForm(`${area.slug}-${service.id}`)}</div></section>`,
      });
    }
  }
}

function otherPages() {
  const gallery = projects
    .map(
      (project) =>
        `<figure><img src="../${project.image}" alt="${esc(project.alt)}"><figcaption><strong>${esc(project.caption)}</strong><span>${esc(project.place)}</span></figcaption></figure>`
    )
    .join("");
  page({
    file: "gallery/index.html",
    title: "Scaffolding gallery | SteelRig",
    description: "Recent SteelRig scaffold projects on domestic properties in and around Cardiff.",
    section: "gallery",
    main: `${hero({ kicker: "Gallery", accent: "Recent work", title: "Recent projects", lede: "House scaffolds: a boarded front, a platform along the side wall, and a first lift going up on the patio." })}
      <section class="section"><div class="wrap gallery-grid">${gallery}</div><div class="wrap" style="margin-top:2.5rem"><a class="btn btn-amber" href="../contact/">Book a survey</a></div></section>`,
  });

  const portfolio = projects
    .map(
      (project) =>
        `<article class="project"><img src="../${project.image}" alt="${esc(project.alt)}"><div><p class="kicker">${esc(project.kicker)}</p><h2>${esc(project.title)}</h2><p>${esc(project.text)}</p><p class="meta">${esc(project.meta)}</p></div></article>`
    )
    .join("");
  page({
    file: "portfolio/index.html",
    title: "Scaffolding portfolio | SteelRig",
    description: "Recent domestic scaffolding projects by SteelRig in Cardiff and South Wales.",
    section: "portfolio",
    main: `${hero({ kicker: "Portfolio", accent: "House scaffolds", title: "Work on real houses.", lede: "A boarded front elevation, a working platform along the side wall, and a first lift going up on the patio." })}
      <section class="section" style="padding-top:1rem"><div class="wrap">${portfolio}<p style="margin-top:1rem"><a class="btn btn-navy" href="../contact/">Start a similar job</a></p></div></section>`,
  });

  page({
    file: "about/index.html",
    title: "About SteelRig | Scaffolding in Cardiff and South Wales",
    description: "SteelRig is a CISRS-accredited scaffolding company based in Cardiff, covering South Wales.",
    section: "about",
    main: `${hero({ kicker: "About", accent: "SteelRig", title: "Scaffold hire from Cardiff, across South Wales.", lede: "A local team for domestic projects and the awkward sites that need a proper look first." })}
      <section class="section"><div class="wrap" style="display:grid;gap:1rem;max-width:46rem">
        <p>SteelRig is a trusted scaffolding company serving Cardiff, Barry, Caerphilly, Newport and communities throughout South Wales. From domestic projects such as loft conversions and home extensions to temporary structures and demanding specialist contracts, we provide reliable scaffolding.</p>
        <p>Our experienced, CISRS-accredited team is equipped to handle challenging sites and specialist structures. Whatever the scale or complexity of the job, SteelRig delivers safe, dependable access and professional scaffolding, with a strong focus on quality, safety and reliability across Cardiff and beyond.</p>
        <p>We are based at ${esc(site.address)}. Call ${esc(site.phoneDisplay)} or send the quote form and we will arrange a survey.</p>
        <p><a class="btn btn-navy" href="../areas/">Towns we cover</a></p>
      </div></section>`,
  });

  page({
    file: "accreditations/index.html",
    title: "CISRS-accredited scaffolders | SteelRig",
    description: "SteelRig’s scaffolding team is CISRS-accredited, serving Cardiff and South Wales.",
    section: "accreditations",
    main: `${hero({ kicker: "Accreditations", accent: "Competency", title: "CISRS-accredited scaffolders.", lede: "The people who put the scaffold up are accredited to the standard this trade is judged by." })}
      <section class="section"><div class="wrap accred">
        <div class="mark-card"><img src="../images/mark.png" alt=""><strong>CISRS</strong><p style="margin-top:0.6rem;color:rgba(247,248,246,0.75)">Accredited team</p></div>
        <div class="stack">
          <p>CISRS is the Construction Industry Scaffolders Record Scheme. It is the recognised record of scaffold training and competency in the UK. SteelRig’s team is CISRS-accredited.</p>
          <p>On a house that means the survey, the ties, the guard rails, the boards and the dismantle are handled by people who do this work for a living. If a plot is awkward, that is raised before the quote is agreed, not after the lorry arrives.</p>
          <p>Ask us about the job, the access and the timing. We would rather walk the site and give you a clear price than guess from a postcode.</p>
          <p><a class="btn btn-amber" href="../contact/">Ask for a survey</a></p>
        </div>
      </div></section>`,
  });

  const faqHtml = faqs
    .map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`)
    .join("");
  page({
    file: "contact/index.html",
    title: "Contact SteelRig | Free scaffold quote",
    description: `Call SteelRig on ${site.phoneDisplay} or request a free scaffold quote. Based at ${site.address}.`,
    section: "contact",
    main: `${hero({ kicker: "Contact", accent: "Free quote", title: "Get your free, no-obligation quote today.", lede: "Cost-effective and reliable scaffolding across Cardiff, Pontyclun, Bargoed and Rogerstone." })}
      <section class="section"><div class="wrap contact-grid">
        <div>
          <div class="phone-row"><a class="phone-link" href="tel:${site.phoneTel}">${esc(site.phoneDisplay)}</a>${whatsapp(1)}</div>
          <div class="contact-meta"><a href="mailto:${site.email}">${esc(site.email)}</a><a href="${esc(site.mapsUrl)}">${esc(site.address)}</a></div>
          <div class="faq" style="margin-top:2rem">${faqHtml}</div>
        </div>
        ${quoteForm("contact")}
      </div></section>`,
  });

  page({
    file: "404.html",
    title: "Page not found | SteelRig",
    description: "This SteelRig page could not be found.",
    section: "",
    main: `<header class="page-hero"><div class="wrap"><p class="kicker kicker-light"><span>404</span> Missing page</p><h1>That page is not on the site.</h1><p class="lede">Try the homepage, or call us if you were looking for a quote.</p><p style="margin-top:1.5rem"><a class="btn btn-amber" href="./">Back home</a></p></div></header>`,
  });
}

home();
servicesIndex();
servicePages();
areaPages();
otherPages();

const count = [".", "services", "areas", "about", "gallery", "portfolio", "accreditations", "contact"]
  .flatMap((dir) => {
    const base = path.join(rootDir, dir === "." ? "" : dir);
    const found = [];
    const walk = (current) => {
      for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
        const next = path.join(current, entry.name);
        if (entry.isDirectory()) walk(next);
        else if (entry.name.endsWith(".html")) found.push(next);
      }
    };
    if (dir === ".") found.push(path.join(rootDir, "index.html"), path.join(rootDir, "404.html"));
    else walk(base);
    return found;
  });
console.log(`Wrote ${new Set(count).size} html files`);
