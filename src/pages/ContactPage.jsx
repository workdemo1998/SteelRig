import { QuoteForm } from "../components/quote/QuoteForm";
import { Seo } from "../components/seo/Seo";
import { PageHero } from "../components/ui/PageHero";
import { faqs, site } from "../data/site";

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact SteelRig | Free scaffold quote"
        description="Call SteelRig on 07858 304 518 or request a free scaffold quote. Based at 12 Harris Avenue, Cardiff, CF3 1QE."
      />
      <PageHero
        kicker="Contact"
        accent="Free quote"
        title="Get your free, no-obligation quote today."
        lede="Cost-effective and reliable scaffolding across Cardiff, Pontyclun, Bargoed and Rogerstone."
      />
      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <a className="phone-link" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <div className="contact-meta">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.mapsUrl}>{site.address}</a>
            </div>
            <div className="faq" style={{ marginTop: "2rem" }}>
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
