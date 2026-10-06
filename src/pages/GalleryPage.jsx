import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { PageHero } from "../components/ui/PageHero";
import { projects } from "../data/site";

export function GalleryPage() {
  return (
    <>
      <Seo
        title="Scaffolding gallery | SteelRig"
        description="Recent SteelRig scaffold projects on domestic properties in and around Cardiff."
      />
      <PageHero
        kicker="Gallery"
        accent="Recent work"
        title="Recent projects"
        lede="Domestic scaffolds on brick houses: boarded lifts, brick guards and proper access for roof and wall work."
      />
      <section className="section">
        <div className="wrap gallery-grid">
          {projects.map((project) => (
            <figure key={project.title}>
              <img
                src={project.image}
                alt={
                  project.kicker === "Front elevation"
                    ? "Front scaffold on a two-storey brick house with timber boards, brick guards and a yellow safety gate."
                    : "Side and gable scaffold with ladder access beside a brick house and garden fence."
                }
              />
              <figcaption>
                <strong>{project.caption}</strong>
                <span>{project.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: "2.5rem" }}>
          <Link className="btn btn-amber" to="/contact">
            Book a survey
          </Link>
        </div>
      </section>
    </>
  );
}
