import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { PageHero } from "../components/ui/PageHero";
import { site } from "../data/site";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About SteelRig | Scaffolding in Cardiff and South Wales"
        description="SteelRig is a CISRS-accredited scaffolding company based in Cardiff, covering South Wales."
      />
      <PageHero
        kicker="About"
        accent="SteelRig"
        title="Scaffold hire from Cardiff, across South Wales."
        lede="A local team for domestic projects and the awkward sites that need a proper look first."
      />
      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <p>
            SteelRig is a trusted scaffolding company serving Cardiff, Barry, Caerphilly, Newport and communities throughout South Wales. From domestic projects such as loft conversions and home extensions to temporary structures and demanding specialist contracts, we provide reliable scaffolding.
          </p>
          <p>
            Our experienced, CISRS-accredited team is equipped to handle challenging sites and specialist structures. Whatever the scale or complexity of the job, SteelRig delivers safe, dependable access and professional scaffolding, with a strong focus on quality, safety and reliability across Cardiff and beyond.
          </p>
          <p>
            We are based at {site.address}. Call {site.phoneDisplay} or send the quote form and we will arrange a survey.
          </p>
          <p>
            <Link className="btn btn-navy" to="/areas">
              Towns we cover
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
