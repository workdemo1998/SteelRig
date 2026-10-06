import { Link, useParams } from "react-router-dom";
import { QuoteForm } from "../components/quote/QuoteForm";
import { Seo } from "../components/seo/Seo";
import { PageHero } from "../components/ui/PageHero";
import { getArea, nearbyAreas } from "../data/areas";
import { site } from "../data/site";
import { NotFoundPage } from "./NotFoundPage";

export function AreaPage() {
  const { slug } = useParams();
  const area = getArea(slug);

  if (!area) return <NotFoundPage />;

  const nearby = nearbyAreas(area);

  return (
    <>
      <Seo
        title={`Scaffolding in ${area.name} | SteelRig`}
        description={`Scaffold hire in ${area.name}. CISRS-accredited domestic scaffolding for roofs, extensions, lofts and narrow access. Free quotes from SteelRig in Cardiff.`}
      />
      <PageHero kicker="Areas" accent={area.name} title={`Scaffolding in ${area.name}`} lede={area.blurb} />
      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <p>
              SteelRig provides domestic scaffold hire in {area.name}: roof repairs, loft conversions, extensions, rendering, painting, solar installation and narrow-access work. The team is CISRS-accredited and based in Cardiff.
            </p>
            <p className="area-copy">
              Call {site.phoneDisplay} or send a few details. We will arrange a free site survey and a written quote before any scaffold goes up.
            </p>
            <p className="meta">Nearby</p>
            <div className="nearby">
              {nearby.map((item) => (
                <Link key={item.slug} to={`/areas/${item.slug}`}>
                  Scaffolding {item.name}
                </Link>
              ))}
            </div>
            <p style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn-line" to="/areas">
                All areas
              </Link>
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
