import { useEffect, useId, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { jobs, site } from "../../data/site";

export function QuoteForm() {
  const baseId = useId();
  const [params] = useSearchParams();
  const [note, setNote] = useState("");
  const [job, setJob] = useState("");

  useEffect(() => {
    const requested = params.get("job");
    if (requested && jobs.includes(requested)) setJob(requested);
  }, [params]);

  function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.company.value) return;

    const data = new FormData(form);
    const lines = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Postcode: ${data.get("postcode")}`,
      `Job: ${data.get("job")}`,
      "",
      String(data.get("message") || ""),
    ];
    setNote(
      `Your email app should open with this quote request. If it does not, call ${site.phoneDisplay}.`,
    );
    const subject = encodeURIComponent("Scaffold quote request");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="quote-form" onSubmit={onSubmit}>
      <p className="kicker">
        <span>Free</span> No obligation
      </p>
      <h2>Tell us about the project.</h2>
      <div className="form-row">
        <div>
          <label htmlFor={`${baseId}-name`}>Name</label>
          <input id={`${baseId}-name`} name="name" type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor={`${baseId}-phone`}>Phone</label>
          <input id={`${baseId}-phone`} name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor={`${baseId}-postcode`}>Postcode</label>
          <input id={`${baseId}-postcode`} name="postcode" type="text" autoComplete="postal-code" required />
        </div>
        <div>
          <label htmlFor={`${baseId}-job`}>What is it for?</label>
          <select id={`${baseId}-job`} name="job" required value={job} onChange={(event) => setJob(event.target.value)}>
            <option value="">Choose a job</option>
            {jobs.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <label htmlFor={`${baseId}-message`}>About the property</label>
      <textarea
        id={`${baseId}-message`}
        name="message"
        placeholder="Storeys, type of work, and anything tight about the access."
      />
      <label className="hp" htmlFor={`${baseId}-company`} aria-hidden="true">
        Company
      </label>
      <input className="hp" id={`${baseId}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn-amber" type="submit">
        Request a quote
      </button>
      <p className="form-note" role="status">
        {note}
      </p>
    </form>
  );
}
