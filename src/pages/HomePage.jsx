import { Link } from "react-router-dom";
import { QuoteForm } from "../components/quote/QuoteForm";
import { Seo } from "../components/seo/Seo";
import { areas } from "../data/areas";
import { heroServices, jobs, projects, services, site, steps, why } from "../data/site";

const tileClass = {
  roof: "tile tile-navy",
  narrow: "tile tile-steel",
  towers: "tile tile-amber",
};

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
  description:
    "Domestic scaffold hire in Cardiff, Caerphilly, Risca, Rogerstone, Newport and the surrounding areas.",
};

export function HomePage() {
  const quoteJobs = jobs.filter((job) => job !== "Something else");

  return (
    <>
      <Seo
        title="SteelRig | Domestic scaffold hire in Cardiff"
        description="Domestic scaffold hire in Cardiff, Caerphilly, Risca, Rogerstone, Newport and South Wales. CISRS-accredited team. Free, no-obligation quotes."
      />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      <section className="hero">
        <img
          className="hero-media"
          src="/images/project-front.jpg"
          alt="Two-storey brick house in Cardiff with a fully boarded scaffold, brick guards and a yellow safety gate."
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="wrap hero-content">
          <p className="kicker kicker-light">South Wales</p>
          <h1>
            Domestic scaffold
            <br />
            hire services
            <br />
            <em>in Cardiff.</em>
          </h1>
          <p className="lede">Cardiff, Caerphilly, Risca, Rogerstone, Newport and the surrounding areas.</p>
          <div className="hero-actions">
            <a className="btn btn-amber" href={`tel:${site.phoneTel}`}>
              Call {site.phoneDisplay}
            </a>
            <Link className="btn btn-ghost" to="/contact">
              Get in touch
            </Link>
          </div>
          <ul className="hero-strip">
            {heroServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="needs-title">
        <div className="wrap">
          <div className="need-head">
            <div>
              <p className="kicker">The job</p>
              <h2 id="needs-title">What do you need scaffolding for?</h2>
            </div>
            <p className="section-intro">Pick the work and we will come back with a free, no-obligation quote.</p>
          </div>
          <ul className="need-list">
            {quoteJobs.map((job) => (
              <li key={job}>
                <Link to={`/contact?job=${encodeURIComponent(job)}`}>{job}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="services-title">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2 id="services-title">Access built around the house.</h2>
          <div className="bento">
            <Link className="tile tile-photo" to="/services#domestic">
              <img src="/images/project-side.jpg" alt="Gable-end scaffold with a ladder and working platform beside a brick house." />
              <h3>Domestic scaffold hire</h3>
              <p>{services[0].summary}</p>
              <span className="more">View service</span>
            </Link>
            {services.slice(1).map((service) => (
              <Link key={service.id} className={tileClass[service.id]} to={`/services#${service.id}`}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="more">View service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="gallery-title">
        <div className="wrap">
          <p className="kicker">Gallery</p>
          <h2 id="gallery-title">Recent projects</h2>
          <div className="gallery-grid">
            <figure>
              <img src={projects[0].image} alt="Boarded scaffold across the front of a two-storey brick house, with brick guards and a safety gate." />
              <figcaption>
                <strong>Front elevation, Cardiff</strong>
                <span>Domestic hire</span>
              </figcaption>
            </figure>
            <figure>
              <img src={projects[1].image} alt="Scaffold on the gable of a brick house, with ladder access and a timber working platform." />
              <figcaption>
                <strong>Gable access</strong>
                <span>Roof and walls</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section why" aria-labelledby="why-title">
        <div className="wrap">
          <p className="kicker">Why us</p>
          <h2 id="why-title">Why customers choose us</h2>
          <div className="why-grid">
            {why.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="areas-title">
        <div className="wrap area-layout">
          <div>
            <p className="kicker">Service area</p>
            <h2 id="areas-title">Where we work</h2>
            <p className="area-copy">
              SteelRig is a trusted scaffolding company serving Cardiff, Barry, Caerphilly, Newport and communities throughout South Wales. From domestic projects such as loft conversions and home extensions to temporary structures and demanding specialist contracts, we provide reliable scaffolding.
            </p>
            <p className="area-copy">
              Our experienced, CISRS-accredited team is equipped for challenging sites. Whatever the scale of the job, the focus is safe, dependable access.
            </p>
            <p style={{ marginTop: "1.25rem" }}>
              <Link className="btn btn-line" to="/areas">
                All towns
              </Link>
            </p>
          </div>
          <ul className="area-links">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link to={`/areas/${area.slug}`}>Scaffolding {area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="how-title">
        <div className="wrap">
          <p className="kicker">How it works</p>
          <h2 id="how-title">Six steps, then the scaffold comes down.</h2>
          <div className="steps">
            {steps.map((step) => (
              <article className="step" key={step}>
                <strong>{step}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-band" id="quote" aria-labelledby="contact-title">
        <div className="wrap contact-grid">
          <div>
            <p className="kicker">Contact</p>
            <h2 id="contact-title">Get your free, no-obligation quote today.</h2>
            <p className="lede" style={{ marginTop: "1rem" }}>
              Cost-effective and reliable scaffolding across Cardiff, Pontyclun, Bargoed and Rogerstone.
            </p>
            <a className="phone-link" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <div className="contact-meta">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.address}</span>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
