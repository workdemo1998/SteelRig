import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { PageHero } from "../components/ui/PageHero";
import { services } from "../data/site";

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Scaffolding services in Cardiff | SteelRig"
        description="Domestic scaffold hire, roof access, narrow-access scaffolds, towers and temporary structures across Cardiff and South Wales."
      />
      <PageHero
        kicker="Services"
        accent="Scaffold hire"
        title="Scaffolding for the job in front of you."
        lede="Roof access, extensions, narrow plots, towers and temporary structures across Cardiff and South Wales."
      />
      <section className="section">
        <div className="wrap">
          {services.map((service) => (
            <article className="service-block" id={service.id} key={service.id}>
              <h2>{service.title}</h2>
              <div>
                {service.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {service.id === "towers" ? (
                  <p style={{ marginTop: "1.25rem" }}>
                    <Link className="btn btn-amber" to="/contact">
                      Get a quote
                    </Link>
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
