(function () {
  const mapEl = document.getElementById("coverage-map");
  const dataEl = document.getElementById("coverage-towns");
  if (!mapEl || !dataEl || typeof L === "undefined") return;

  const towns = JSON.parse(dataEl.textContent);
  const map = L.map(mapEl, { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 16,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const pin = L.divIcon({
    className: "coverage-pin",
    iconSize: [28, 40],
    iconAnchor: [14, 38],
    popupAnchor: [0, -34],
    html: '<svg viewBox="0 0 28 40" width="28" height="40" aria-hidden="true"><path fill="#e10600" stroke="#fff" stroke-width="1.6" d="M14 1.6C7.2 1.6 1.7 7 1.7 13.7 1.7 23 14 38.2 14 38.2S26.3 23 26.3 13.7C26.3 7 20.8 1.6 14 1.6z"/><circle cx="14" cy="13.6" r="4.2" fill="#fff"/></svg>',
  });
  const markers = towns.map(function (town) {
    const label = "Scaffolding " + town.name;
    return L.marker([town.lat, town.lng], { icon: pin, title: label })
      .bindPopup('<a href="' + town.slug + '/">' + label.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</a>")
      .addTo(map);
  });

  const bounds = L.featureGroup(markers).getBounds();
  map.fitBounds(bounds.pad(0.08));
  if (map.getZoom() < 10) map.setView(bounds.getCenter(), 10);
})();
