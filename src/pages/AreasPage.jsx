import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { PageHero } from "../components/ui/PageHero";
import { areas } from "../data/areas";

export function AreasPage() {
  return (
    <>
      <Seo
        title="Scaffolding areas | SteelRig"
        description="SteelRig covers Cardiff, Barry, Caerphilly, Newport, Risca, Pontyclun, Bargoed and towns across South Wales."
      />
      <PageHero
        kicker="Areas"
        accent="South Wales"
        title="Scaffolding across Cardiff and beyond."
        lede="Based at 12 Harris Avenue, Cardiff, and working through the Vale, Newport and the valleys."
      />
      <section className="section">
        <div className="wrap">
          <ul className="area-links">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link to={`/areas/${area.slug}`}>Scaffolding {area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
