import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { PageHero } from "../components/ui/PageHero";

export function AccreditationsPage() {
  return (
    <>
      <Seo
        title="CISRS-accredited scaffolders | SteelRig"
        description="SteelRig’s scaffolding team is CISRS-accredited, serving Cardiff and South Wales."
      />
      <PageHero
        kicker="Accreditations"
        accent="Competency"
        title="CISRS-accredited scaffolders."
        lede="The people who put the scaffold up are accredited to the standard this trade is judged by."
      />
      <section className="section">
        <div className="wrap accred">
          <div className="mark-card">
            <img src="/images/mark.png" alt="" />
            <strong>CISRS</strong>
            <p style={{ marginTop: "0.6rem", color: "rgba(247,248,246,0.75)" }}>Accredited team</p>
          </div>
          <div className="stack">
            <p>
              CISRS is the Construction Industry Scaffolders Record Scheme. It is the recognised record of scaffold training and competency in the UK. SteelRig’s team is CISRS-accredited.
            </p>
            <p>
              On a house that means the survey, the ties, the guard rails, the boards and the dismantle are handled by people who do this work for a living. If a plot is awkward, that is raised before the quote is agreed, not after the lorry arrives.
            </p>
            <p>
              Ask us about the job, the access and the timing. We would rather walk the site and give you a clear price than guess from a postcode.
            </p>
            <p>
              <Link className="btn btn-amber" to="/contact">
                Ask for a survey
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
