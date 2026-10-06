import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { PageHero } from "../components/ui/PageHero";
import { projects } from "../data/site";

export function PortfolioPage() {
  return (
    <>
      <Seo
        title="Scaffolding portfolio | SteelRig"
        description="Recent domestic scaffolding projects by SteelRig in Cardiff and South Wales."
      />
      <PageHero
        kicker="Portfolio"
        accent="House scaffolds"
        title="Work on real houses."
        lede="Two recent domestic scaffolds. Both are brick houses with boarded lifts, set up for trades working at height."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <img src={project.image} alt={project.alt} />
              <div>
                <p className="kicker">{project.kicker}</p>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <p className="meta">{project.meta}</p>
              </div>
            </article>
          ))}
          <p style={{ marginTop: "1rem" }}>
            <Link className="btn btn-navy" to="/contact">
              Start a similar job
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
