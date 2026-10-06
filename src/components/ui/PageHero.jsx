export function PageHero({ kicker, accent, title, lede, children }) {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="kicker kicker-light">
          <span>{kicker}</span> {accent}
        </p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
      </div>
    </header>
  );
}
