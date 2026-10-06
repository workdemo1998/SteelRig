import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav, site } from "../../data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <Link className="logo" to="/" onClick={() => setOpen(false)}>
        <img src="/images/logo.png" alt="SteelRig" />
      </Link>
      <nav className={open ? "nav is-open" : "nav"} id="site-nav" aria-label="Primary">
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a className="btn btn-amber header-call" href={`tel:${site.phoneTel}`}>
        Call {site.phoneDisplay}
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label="Menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
      </button>
    </header>
  );
}
