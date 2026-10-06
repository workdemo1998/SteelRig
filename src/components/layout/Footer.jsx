import { Link } from "react-router-dom";
import { getArea } from "../../data/areas";
import { footerTowns, nav, site } from "../../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <Link className="logo" to="/">
              <img src="/images/logo.png" alt="SteelRig" />
            </Link>
            <p style={{ marginTop: "1rem", maxWidth: "28rem" }}>
              Domestic scaffold hire for Cardiff, Caerphilly, Risca, Rogerstone, Newport and the surrounding areas.
            </p>
            <p style={{ marginTop: "1rem" }}>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              {site.address}
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/areas">Where we work</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Areas</h2>
            <ul>
              {footerTowns.map((slug) => {
                const area = getArea(slug);
                return (
                  <li key={slug}>
                    <Link to={`/areas/${slug}`}>Scaffolding {area.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="wrap footer-base">
          <p>© {year} SteelRig. Scaffold hire across South Wales.</p>
          <p>
            <Link to="/contact">Free quote</Link>
          </p>
        </div>
      </footer>
      <div className="callbar">
        <a href={`tel:${site.phoneTel}`}>Call</a>
        <Link to="/contact">Get a quote</Link>
      </div>
    </>
  );
}
