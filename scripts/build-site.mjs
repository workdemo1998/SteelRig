import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const site = {
  phoneDisplay: "+44 7858 304 518",
  phoneTel: "+447858304518",
  whatsapp: "https://wa.me/447858304518",
  email: "info@steelrig.co.uk",
  address: "Cardiff, Penarth, Caerphilly, Risca, Newport, and the surrounding areas.",
  url: "https://www.steelrig.co.uk",
};

const nav = [
  ["services/", "Services", "services"],
  ["areas/", "Locations", "areas"],
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

const projects = JSON.parse(fs.readFileSync(path.join(rootDir, "data", "work-photos.json"), "utf8"));

const areas = [
  { name: "Cardiff", slug: "cardiff", lat: 51.4816, lng: -3.1791, blurb: "Domestic scaffold hire across the city, from CF3 and the eastern suburbs to terraces, extensions and roof work nearer the centre.", near: ["caerphilly", "dinas-powys", "newport", "taffs-well"] },
  { name: "Barry", slug: "barry", lat: 51.3998, lng: -3.2833, blurb: "Scaffold hire for houses in Barry and the Vale, including roof access, loft conversions and plots with a tight side passage.", near: ["cardiff", "dinas-powys", "pencoed", "llanharry"] },
  { name: "Caerphilly", slug: "caerphilly", lat: 51.5742, lng: -3.2181, blurb: "Scaffolding in Caerphilly for home extensions, roof repairs, rendering and new-build access north of Cardiff.", near: ["cardiff", "bedwas", "llanbradach", "ystrad-mynach"] },
  { name: "Newport", slug: "newport", lat: 51.5842, lng: -2.9977, blurb: "Domestic and temporary scaffolds for Newport, including roof access, extensions and work that needs a clear route for materials.", near: ["cardiff", "rogerstone", "caerleon", "risca"] },
  { name: "Dinas Powys", slug: "dinas-powys", lat: 51.433, lng: -3.217, blurb: "Scaffold hire in Dinas Powys for roof repairs, painting, rendering and houses where access is narrow.", near: ["cardiff", "barry", "pontyclun", "pencoed"] },
  { name: "Taff's Well", slug: "taffs-well", lat: 51.5409, lng: -3.2627, blurb: "Local scaffold hire around Taff's Well for loft conversions, roof work and extensions on the northern edge of Cardiff.", near: ["cardiff", "caerphilly", "church-village", "pontyclun"] },
  { name: "Rogerstone", slug: "rogerstone", lat: 51.5906, lng: -3.0536, blurb: "Scaffolding in Rogerstone for domestic roofs, extensions and jobs that need a working platform up quickly and taken down when the work is finished.", near: ["newport", "risca", "caerleon", "cardiff"] },
  { name: "Bedwas", slug: "bedwas", lat: 51.5915, lng: -3.198, blurb: "Scaffold hire in Bedwas for roof repairs, rendering, painting and home extensions.", near: ["caerphilly", "ystrad-mynach", "treharris", "cardiff"] },
  { name: "Abertridwr and Senghenydd", slug: "abertridwr-senghenydd", lat: 51.6035, lng: -3.2745, blurb: "Scaffolding for houses in Abertridwr and Senghenydd, including tight streets and valley plots.", near: ["caerphilly", "llanbradach", "nelson", "ystrad-mynach"] },
  { name: "Church Village", slug: "church-village", lat: 51.5686, lng: -3.3225, blurb: "Domestic scaffold hire in Church Village for roofs, lofts, extensions and solar installation.", near: ["beddau", "pontyclun", "llantrisant", "taffs-well"] },
  { name: "Pontyclun", slug: "pontyclun", lat: 51.5216, lng: -3.3926, blurb: "Scaffolding in Pontyclun for home improvements, roof access and narrow-access properties west of Cardiff.", near: ["talbot-green", "llanharry", "church-village", "cardiff"] },
  { name: "Llanbradach", slug: "llanbradach", lat: 51.6034, lng: -3.2298, blurb: "Scaffold hire in Llanbradach for roof repairs, extensions and rendering on houses through the Rhymney valley.", near: ["ystrad-mynach", "caerphilly", "abertridwr-senghenydd", "nelson"] },
  { name: "Beddau", slug: "beddau", lat: 51.554, lng: -3.357, blurb: "Scaffolding in Beddau for domestic roofs, painting, loft conversions and extension work.", near: ["church-village", "llantrisant", "pontyclun", "talbot-green"] },
  { name: "Ystrad Mynach", slug: "ystrad-mynach", lat: 51.6406, lng: -3.2406, blurb: "Scaffold hire in Ystrad Mynach for roofs, new builds, extensions and temporary access.", near: ["llanbradach", "nelson", "bargoed", "caerphilly"] },
  { name: "Llantrisant", slug: "llantrisant", lat: 51.5402, lng: -3.3735, blurb: "Scaffolding in Llantrisant for house roofs, rendering, solar installation and extension access.", near: ["talbot-green", "beddau", "pontyclun", "llanharan-brynna"] },
  { name: "Talbot Green", slug: "talbot-green", lat: 51.5295, lng: -3.388, blurb: "Domestic scaffold hire in Talbot Green, set up around the property and dismantled when the job is done.", near: ["llantrisant", "pontyclun", "llanharan-brynna", "beddau"] },
  { name: "Llanharan and Brynna", slug: "llanharan-brynna", lat: 51.538, lng: -3.45, blurb: "Scaffolding for homes in Llanharan and Brynna, including roof access and plots with limited space.", near: ["talbot-green", "llanharry", "pencoed", "pontyclun"] },
  { name: "Caerleon", slug: "caerleon", lat: 51.6098, lng: -2.953, blurb: "Scaffold hire in Caerleon for roof repairs, painting, extensions and careful access on established houses.", near: ["newport", "rogerstone", "risca", "cardiff"] },
  { name: "Pencoed", slug: "pencoed", lat: 51.5235, lng: -3.501, blurb: "Scaffolding in Pencoed for domestic roofs, lofts and extensions toward the western edge of our area.", near: ["llanharan-brynna", "llanharry", "barry", "pontyclun"] },
  { name: "Llanharry", slug: "llanharry", lat: 51.513, lng: -3.431, blurb: "Scaffold hire in Llanharry for roof work, rendering and home extensions.", near: ["pontyclun", "pencoed", "llanharan-brynna", "talbot-green"] },
  { name: "Abercynon", slug: "abercynon", lat: 51.6445, lng: -3.327, blurb: "Scaffolding in Abercynon for valley houses, roof repairs and temporary working platforms.", near: ["treharris", "nelson", "ystrad-mynach", "bargoed"] },
  { name: "Nelson", slug: "nelson", lat: 51.651, lng: -3.284, blurb: "Scaffold hire in Nelson for roofs, extensions and narrow-access domestic jobs.", near: ["ystrad-mynach", "llanbradach", "abercynon", "treharris"] },
  { name: "Bargoed", slug: "bargoed", lat: 51.6885, lng: -3.23, blurb: "Scaffolding in Bargoed for domestic access, roof repairs and temporary structures further up the valley.", near: ["ystrad-mynach", "abercynon", "nelson", "pontllanfraith"] },
  { name: "Pontllanfraith", slug: "pontllanfraith", lat: 51.653, lng: -3.191, blurb: "Scaffold hire in Pontllanfraith for home roofs, extensions and short-term access.", near: ["newbridge", "oakdale", "bargoed", "ystrad-mynach"] },
  { name: "Newbridge", slug: "newbridge", lat: 51.67, lng: -3.136, blurb: "Scaffolding in Newbridge for roof access, rendering and domestic projects in the Ebbw valley.", near: ["abercarn", "pontllanfraith", "oakdale", "risca"] },
  { name: "Abercarn", slug: "abercarn", lat: 51.649, lng: -3.135, blurb: "Scaffold hire in Abercarn for houses that need safe roof access, an extension lift or a tight side scaffold.", near: ["newbridge", "risca", "pontllanfraith", "oakdale"] },
  { name: "Risca", slug: "risca", lat: 51.608, lng: -3.099, blurb: "Scaffolding in Risca for roof repairs, loft conversions, extensions and emergency access.", near: ["newport", "rogerstone", "abercarn", "cardiff"] },
  { name: "Treharris", slug: "treharris", lat: 51.664, lng: -3.307, blurb: "Scaffold hire in Treharris for domestic roofs, painting and extension work.", near: ["abercynon", "nelson", "bedwas", "ystrad-mynach"] },
  { name: "Oakdale", slug: "oakdale", lat: 51.678, lng: -3.183, blurb: "Scaffolding in Oakdale for home improvements, roof access and temporary platforms.", near: ["pontllanfraith", "newbridge", "bargoed", "abercarn"] },
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
            <p class="footer-phone"><a href="tel:${site.phoneTel}">${esc(site.phoneDisplay)}</a></p>
            <p style="margin-top:0.35rem"><a href="mailto:${site.email}">${esc(site.email)}</a></p>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>${links}</ul>
          </div>
        </div>
        <div class="wrap footer-base"><p>© ${year} SteelRig. Scaffold hire across South Wales.</p></div>
        <a class="footer-brand" href="${href(depth, "/")}" aria-label="SteelRig">${wordmark(depth, "footer-mark", "footer-steel", "footer-rig")}</a>
        <p class="footer-pledge"><span>Your project.</span><span>Your safety.</span><span>Our commitment.</span></p>
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

function pageUrl(file) {
  if (file === "index.html") return "https://www.steelrig.co.uk/";
  if (file === "404.html") return "https://www.steelrig.co.uk/404.html";
  return "https://www.steelrig.co.uk/" + file.replace(/index\.html$/, "");
}

function page({ file, title, description, section, main, jsonLd = "", extraHead = "", extraScript = "", bodyClass = "" }) {
  const depth = file === "index.html" || file === "404.html" ? 0 : file.split("/").filter(Boolean).length - 1;
  const url = pageUrl(file);
  const html = `<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#0d2238">
    <meta name="description" content="${esc(description)}">
    <title>${esc(title)}</title>
    <meta property="og:type" content="website">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:image" content="https://www.steelrig.co.uk/images/project-front.jpg">
    <meta property="og:image:alt" content="Scaffold across the front of a house">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${url}">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(description)}">
    <meta name="twitter:image" content="https://www.steelrig.co.uk/images/project-front.jpg">
    <link rel="icon" href="${href(depth, "images/mark.png")}" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${href(depth, "css/styles.css")}?v=25">
    ${extraHead}
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FZKGT607PK"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-FZKGT607PK');
    </script>
    ${jsonLd}
  </head>
  <body${bodyClass ? ` class="${esc(bodyClass)}"` : ""}>
    <a class="skip" href="#main">Skip to content</a>
    ${ticker()}
    ${header(depth, section)}
    <main id="main">
      ${main}
    </main>
    ${footer(depth)}
    ${extraScript}
    <script src="${href(depth, "js/site.js")}?v=6"></script>
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
    areaServed: site.address,
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
  const first = projects[0];
  const prevProject = projects[projects.length - 1];
  const nextProject = projects[1];
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
    bodyClass: "home",
    jsonLd: `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
    main: `<section class="hero">
        <video class="hero-media" src="${href(0, "video/scaffold.mp4")}?v=2" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>
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
          <figure class="project-stage" data-stage>
            <div class="stage-card">
              <div class="stage-frame">
                <img class="stage-main" src="${href(0, first.image)}" alt="${esc(first.alt)}">
              </div>
              <figcaption class="stage-caption">
                <span>01 / ${String(projects.length).padStart(2, "0")}</span>
                <strong>${esc(first.caption)}</strong>
                <p>${esc(first.text)}</p>
                <div class="stage-nav">
                  <button type="button" class="stage-arrow stage-prev" aria-label="Previous project"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7"/></svg></button>
                  <img class="stage-side" data-side="prev" src="${href(0, prevProject.image)}" alt="" aria-hidden="true">
                  <img class="stage-side" data-side="next" src="${href(0, nextProject.image)}" alt="" aria-hidden="true">
                  <button type="button" class="stage-arrow stage-next" aria-label="Next project"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></button>
                </div>
              </figcaption>
            </div>
          </figure>
          <script type="application/json" id="work-photos">${JSON.stringify(projects)}</script>
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
            <div class="phone-row"><a class="phone-link" href="tel:${site.phoneTel}">${esc(site.phoneDisplay)}</a></div>
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
      .map((area) => `<li><a href="../../areas/${area.slug}/">${esc(area.name)}</a></li>`)
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
            <p class="section-intro">Choose a town we work in.</p>
            <ul class="area-links town-pick" id="town-list" data-cascade>${towns}</ul>
            <p style="margin-top:1.5rem"><a class="btn btn-line" href="../">All services</a></p>
          </div>
        </section>`,
    });
  }
}

function areaPages() {
  const coverage = JSON.stringify(
    areas.map((area) => ({ name: area.name, slug: area.slug, lat: area.lat, lng: area.lng }))
  );
  page({
    file: "areas/index.html",
    title: "Scaffolding areas | SteelRig",
    description: "SteelRig covers Cardiff, Barry, Caerphilly, Newport, Risca, Pontyclun, Bargoed and towns across South Wales.",
    section: "areas",
    extraHead: `<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">`,
    extraScript: `<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script src="${href(1, "js/coverage-map.js")}?v=2"></script>`,
    main: `${hero({ kicker: "Areas", accent: "South Wales", title: "Scaffolding across Cardiff and beyond.", lede: site.address })}
      <section class="section locations-copy" aria-labelledby="locations-copy-title">
        <div class="wrap">
          <h2 id="locations-copy-title">Domestic Scaffolding Services You Can Rely On</h2>
          <div class="stack">
            <p>If you are a homeowner looking for reliable domestic scaffolding services for a roof replacement, roof repair, property renovation or general maintenance, we provide professional scaffolding solutions tailored to your needs. From domestic scaffold installations to specialist roof access scaffold, we help homeowners and tradespeople access hard-to-reach areas safely and efficiently.</p>
            <p>Our experienced scaffolding team delivers high-quality scaffold erection, installation and dismantling services, with solutions designed around the requirements of each property and project. Whether you need a narrow access scaffold for a restricted space, a roof access scaffold for roofing repairs, or scaffold towers and temporary structures for more complex work, we aim to provide a reliable, professional service from start to finish.</p>
            <p>We pride ourselves on quality workmanship, careful planning and attention to detail. Every project is approached with a focus on safety, stability and suitability for the work being carried out. From small domestic jobs to larger residential projects, our team works closely with homeowners, roofers, builders and other trades to deliver practical scaffolding solutions that keep projects moving.</p>
            <p>Our services include domestic scaffold, roof access scaffold, narrow access scaffold, scaffold towers and temporary scaffolding structures, providing flexible access solutions for roof repairs, chimney work, extensions, repointing, exterior decorating and property renovations. We understand that every property presents different challenges, which is why we tailor our scaffolding arrangements to the site, access requirements and scope of work.</p>
            <p>Whether you are planning a home improvement project or require scaffolding for essential roof maintenance, our dedicated team is here to help. We are committed to dependable service, professional scaffold erection and dismantling, and customer satisfaction at every stage of your project.</p>
            <p><strong>Areas covered:</strong> We provide domestic scaffolding services across South Wales, including: Cardiff, Barry, Caerphilly, Newport, Dinas Powys, Taff's Well, Rogerstone, Bedwas, Abertridwr and Senghenydd, Church Village, Pontyclun, Llanbradach, Beddau, Ystrad Mynach, Llantrisant, Talbot Green, Llanharan and Brynna, Cwmbran, Caerleon, Pencoed, Llanharry, Abercynon, Nelson, Bargoed, Pontllanfraith, Newbridge, Abercarn, Risca, Treharris, Oakdale.</p>
            <p>Contact our team to discuss your project and <a href="${href(1, "contact/")}">request a scaffolding quotation</a>.</p>
          </div>
        </div>
      </section>
      <section class="section" style="padding-top:0"><div class="wrap"><div id="coverage-map" class="coverage-map" role="region" aria-label="Map of towns we cover"></div><script type="application/json" id="coverage-towns">${coverage}</script></div></section>`,
  });

  for (const area of areas) {
    const nearby = area.near
      .map((slug) => areaBySlug.get(slug))
      .filter(Boolean)
      .map((item) => `<a href="../${item.slug}/">Scaffolding ${esc(item.name)}</a>`)
      .join("");
    const serviceLinks = services
      .map((service) => `<li><a href="../../services/${service.id}/">${esc(service.title)}</a></li>`)
      .join("");
    page({
      file: `areas/${area.slug}/index.html`,
      title: `Scaffolding in ${area.name} | SteelRig`,
      description: `Scaffold hire in ${area.name}. CISRS-accredited domestic scaffolding for roofs, extensions, lofts and narrow access. Free quotes from SteelRig in Cardiff.`,
      section: "areas",
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

  }
}

function otherPages() {
  const gallery = projects
    .map((project, index) => {
      const flip = index % 3 % 2 === 1 ? " gallery-row-flip" : "";
      const hidden = index >= 3 ? " hidden" : "";
      const loading = index < 3 ? "eager" : "lazy";
      return `<article class="gallery-row${flip}"${hidden}><figure class="gallery-photo"><button type="button" class="gallery-open" aria-label="View larger photo: ${esc(project.caption)}"><img src="../${project.image}" alt="${esc(project.alt)}" loading="${loading}"></button></figure><div class="gallery-copy"><p class="kicker"><span>${esc(project.kicker)}</span></p><h2>${esc(project.caption)}</h2><p>${esc(project.text)}</p></div></article>`;
    })
    .join("");
  page({
    file: "gallery/index.html",
    title: "Scaffolding gallery | SteelRig",
    description: "Recent SteelRig scaffold projects on domestic properties in and around Cardiff.",
    section: "gallery",
    main: `<header class="page-hero gallery-hero"><div class="wrap"><p class="kicker kicker-light"><span>Gallery</span> Recent work</p><h1>Recent projects</h1><p class="lede">House scaffolds, chimney access, towers and edge protection. Three full photos on each page.</p></div></header>
      <section class="section gallery-board"><div class="wrap"><div class="gallery-list" data-gallery data-per-page="3">${gallery}</div><nav class="gallery-pager" aria-label="Gallery pages"></nav><p class="gallery-cta"><a class="btn btn-amber" href="../contact/">Book a survey</a></p></div></section>`,
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
    title: "About SteelRig | Trusted scaffolding across South Wales",
    description: "Locally owned scaffolding across South Wales. Domestic scaffold, roof access, narrow access, and towers and temporary structures.",
    section: "about",
    main: `${hero({ kicker: "About", accent: "South Wales", title: "Trusted Scaffolding Services Across South Wales" })}
      <section class="section about-copy"><div class="wrap">
        <div class="stack">
          <p>We're a locally owned and operated scaffolding company providing safe, reliable and professional scaffolding solutions across South Wales. With a strong commitment to quality workmanship, safety and customer satisfaction, we support homeowners, contractors and businesses with scaffolding services tailored to their project requirements.</p>
          <p>We specialise in <strong>domestic scaffold</strong>, <strong>roof access scaffold</strong>, <strong>narrow access scaffold</strong>, and <strong>towers and temporary structures scaffold</strong>, providing practical access solutions for roofing repairs, property renovations, extensions, maintenance work and construction projects. Whether you need scaffolding for a small domestic property or a more complex project, our team works hard to deliver a safe, secure and efficient service from start to finish.</p>
          <p>Our experienced team understands that every property and project is different. That's why we focus on clear communication, dependable scheduling and carefully planned scaffolding installations. We take safety seriously, follow relevant industry standards and aim to minimise disruption to your home or business throughout the process.</p>
          <p>We proudly provide scaffolding services throughout South Wales, including Cardiff, Barry, Caerphilly, Newport, Dinas Powys, Taff's Well, Rogerstone, Bedwas, Abertridwr, Senghenydd, Church Village, Pontyclun, Llanbradach, Beddau, Ystrad Mynach, Llantrisant, Talbot Green, Llanharan, Brynna, Cwmbran, Caerleon, Pencoed, Llanharry, Abercynon, Nelson, Bargoed, Pontllanfraith, Newbridge, Abercarn, Risca, Treharris and Oakdale.</p>
          <p>At our company, we believe that professional scaffolding is about more than simply providing access. It's about delivering peace of mind, maintaining high safety standards and giving every customer a service they can rely on.</p>
        </div>
        <h2>Scaffolding Services You Can Count On</h2>
        <div class="about-points">
          <article>
            <p class="kicker"><span>01</span></p>
            <h3>Safety and Insurance</h3>
            <p>We prioritise the safety of our customers, their properties and our team. Our scaffolding services are planned and delivered with a strong focus on safe working practices, suitable access and compliance with applicable regulations.</p>
          </article>
          <article>
            <p class="kicker"><span>02</span></p>
            <h3>Professional Service</h3>
            <p>From your initial enquiry to the completion of your project, we aim to provide a professional, organised and reliable service. We work closely with homeowners, roofers, builders and contractors to understand their access requirements and provide suitable scaffolding solutions.</p>
          </article>
          <article>
            <p class="kicker"><span>03</span></p>
            <h3>Hassle-Free Scaffolding</h3>
            <p>We understand that building work can be disruptive. Our goal is to make the scaffolding process as straightforward as possible, with clear communication, dependable arrangements and an efficient approach to installation and dismantling.</p>
          </article>
          <article>
            <p class="kicker"><span>04</span></p>
            <h3>Solutions for Every Project</h3>
            <p>Whether you require domestic scaffold for home improvements, roof access scaffold for repairs, narrow access scaffold for restricted spaces, or towers and temporary structures scaffold for more complex work, we aim to provide a solution suited to your property, project and access needs.</p>
          </article>
        </div>
        <h2>Our Commitment to You</h2>
        <div class="stack">
          <p>We believe every customer deserves dependable service, quality workmanship and attention to detail. That's why we approach every scaffolding project with the same care and consideration we would expect for our own properties.</p>
          <p>From small residential jobs to larger construction projects, our focus remains the same: providing safe access, communicating clearly and delivering a service you can depend on.</p>
          <p>When you choose us for scaffolding in South Wales, you can expect a team committed to making your project safer, smoother and more straightforward from beginning to end.</p>
          <p class="about-signoff">Your project. Your safety. Our commitment.</p>
          <p><a class="btn btn-navy" href="../contact/">Get a quote</a></p>
        </div>
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
    description: `Call SteelRig on ${site.phoneDisplay} or request a free scaffold quote. Covering ${site.address}`,
    section: "contact",
    main: `${hero({ kicker: "Contact", accent: "Free quote", title: "Get your free, no-obligation quote today.", lede: "Cost-effective and reliable scaffolding across Cardiff, Pontyclun, Bargoed and Rogerstone." })}
      <section class="section"><div class="wrap contact-grid">
        <div>
          <div class="phone-row"><a class="phone-link" href="tel:${site.phoneTel}">${esc(site.phoneDisplay)}</a></div>
          <div class="contact-meta"><a href="mailto:${site.email}">${esc(site.email)}</a><span>${esc(site.address)}</span></div>
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
