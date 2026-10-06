import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found | SteelRig" description="This SteelRig page could not be found." />
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker kicker-light">
            <span>404</span> Missing page
          </p>
          <h1>That page is not on the site.</h1>
          <p className="lede">Try the homepage, or call us if you were looking for a quote.</p>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-amber" to="/">
              Back home
            </Link>
          </p>
        </div>
      </header>
    </>
  );
}
