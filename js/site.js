(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  function placeMenu() {
    const bar = document.querySelector(".site-header");
    if (!bar) return;
    document.documentElement.style.setProperty(
      "--menu-top",
      Math.round(bar.getBoundingClientRect().bottom) + "px"
    );
  }

  function setMenu(open) {
    if (!nav || !toggle) return;
    if (open) placeMenu();
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
    window.addEventListener("resize", function () {
      if (document.body.classList.contains("nav-open")) placeMenu();
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });
  }

  const video = document.querySelector(".hero-media");
  if (video && reduceMotion) {
    video.pause();
  } else if (video) {
    const start = function () {
      const play = video.play();
      if (play && play.catch) play.catch(function () {});
    };
    if (video.readyState >= 2) start();
    else video.addEventListener("loadeddata", start, { once: true });
  }

  const header = document.querySelector(".site-header");
  if (document.body.classList.contains("home") && header) {
    const onScroll = function () {
      header.classList.toggle("is-solid", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.querySelectorAll("[data-town-toggle]").forEach(function (button) {
    const list = document.getElementById(button.getAttribute("aria-controls"));
    if (!list) return;
    const items = Array.prototype.slice.call(list.children);
    let shown = 0;
    let timer = 0;

    button.addEventListener("click", function () {
      window.clearTimeout(timer);
      if (shown > 0) {
        shown = 0;
        list.hidden = true;
        items.forEach(function (item) {
          item.hidden = false;
        });
        button.setAttribute("aria-expanded", "false");
        return;
      }

      list.hidden = false;
      button.setAttribute("aria-expanded", "true");
      if (reduceMotion) {
        shown = items.length;
        items.forEach(function (item) {
          item.hidden = false;
        });
        return;
      }

      items.forEach(function (item, index) {
        item.hidden = index > 0;
      });
      shown = 1;
      const tick = function () {
        if (shown >= items.length) return;
        items[shown].hidden = false;
        shown += 1;
        timer = window.setTimeout(tick, 100);
      };
      timer = window.setTimeout(tick, 100);
    });
  });

  document.querySelectorAll("[data-cascade]").forEach(function (list) {
    if (reduceMotion) return;
    const items = Array.prototype.slice.call(list.children);
    items.forEach(function (item, index) {
      item.hidden = index > 0;
    });
    let shown = 1;
    const tick = function () {
      if (shown >= items.length) return;
      items[shown].hidden = false;
      shown += 1;
      window.setTimeout(tick, 90);
    };
    window.setTimeout(tick, 90);
  });

  document.querySelectorAll("[data-steps]").forEach(function (list) {
    const steps = Array.prototype.slice.call(list.querySelectorAll(".step"));
    let shown = 0;
    let timer = 0;

    function reset() {
      window.clearTimeout(timer);
      shown = 0;
      steps.forEach(function (step) {
        step.classList.remove("is-in");
      });
    }

    function reveal() {
      window.clearTimeout(timer);
      if (shown >= steps.length) return;
      if (reduceMotion) {
        steps.forEach(function (step) {
          step.classList.add("is-in");
        });
        shown = steps.length;
        return;
      }
      steps[shown].classList.add("is-in");
      shown += 1;
      if (shown < steps.length) timer = window.setTimeout(reveal, 160);
    }

    const observer = new IntersectionObserver(
      function (entries) {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          reset();
          return;
        }
        if (shown === 0) reveal();
      },
      { threshold: 0.25 }
    );
    observer.observe(list);
  });

  document.querySelectorAll("[data-stage]").forEach(function (stage) {
    const dataEl = document.getElementById("work-photos");
    let projects = [];
    try {
      projects = JSON.parse(dataEl ? dataEl.textContent : "[]");
    } catch (error) {
      return;
    }
    if (!projects.length) return;
    const main = stage.querySelector(".stage-main");
    const prevImg = stage.querySelector('[data-side="prev"]');
    const nextImg = stage.querySelector('[data-side="next"]');
    const caption = stage.querySelector(".stage-caption");
    let index = 0;

    function render() {
      const count = projects.length;
      const prev = (index - 1 + count) % count;
      const next = (index + 1) % count;
      const project = projects[index];
      main.src = project.image;
      main.alt = project.alt;
      prevImg.src = projects[prev].image;
      nextImg.src = projects[next].image;
      caption.querySelector("strong").textContent = project.caption;
      caption.querySelector("p").textContent = project.text;
      caption.querySelector("span").textContent = String(index + 1).padStart(2, "0") + " / " + String(count).padStart(2, "0");
    }

    stage.querySelector(".stage-prev").addEventListener("click", function () {
      index = (index - 1 + projects.length) % projects.length;
      render();
    });
    stage.querySelector(".stage-next").addEventListener("click", function () {
      index = (index + 1) % projects.length;
      render();
    });
    render();
  });

  document.querySelectorAll("[data-gallery]").forEach(function (list) {
    const perPage = Number(list.getAttribute("data-per-page")) || 5;
    const rows = Array.prototype.slice.call(list.querySelectorAll(".gallery-row"));
    const pager = list.parentElement.querySelector(".gallery-pager");
    if (!pager || !rows.length) return;
    const pages = Math.ceil(rows.length / perPage);
    let page = 0;

    function show(nextPage, scroll) {
      page = nextPage;
      rows.forEach(function (row, index) {
        const onPage = Math.floor(index / perPage) === page;
        row.hidden = !onPage;
      });
      Array.prototype.forEach.call(pager.querySelectorAll("button"), function (button) {
        const value = button.getAttribute("data-page");
        if (value === "prev") button.disabled = page === 0;
        else if (value === "next") button.disabled = page === pages - 1;
        else if (value !== null) {
          const current = Number(value) === page;
          if (current) button.setAttribute("aria-current", "page");
          else button.removeAttribute("aria-current");
        }
      });
      if (scroll) list.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const prev = document.createElement("button");
    prev.type = "button";
    prev.setAttribute("data-page", "prev");
    prev.textContent = "Previous";
    prev.addEventListener("click", function () {
      if (page > 0) show(page - 1, true);
    });
    pager.appendChild(prev);

    for (let i = 0; i < pages; i += 1) {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-page", String(i));
      button.textContent = String(i + 1);
      button.setAttribute("aria-label", "Page " + (i + 1));
      button.addEventListener("click", function () {
        show(i, true);
      });
      pager.appendChild(button);
    }

    const next = document.createElement("button");
    next.type = "button";
    next.setAttribute("data-page", "next");
    next.textContent = "Next";
    next.addEventListener("click", function () {
      if (page < pages - 1) show(page + 1, true);
    });
    pager.appendChild(next);
    show(0, false);
  });

  document.querySelectorAll("[data-quote]").forEach(function (form) {
    const select = form.querySelector('[name="job"]');
    const requested = new URLSearchParams(window.location.search).get("job");
    if (select && requested) {
      const match = Array.prototype.some.call(select.options, function (option) {
        return option.value === requested;
      });
      if (match) select.value = requested;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (form.company && form.company.value) return;
      const data = new FormData(form);
      const lines = [
        "Name: " + data.get("name"),
        "Phone: " + data.get("phone"),
        "Postcode: " + data.get("postcode"),
        "Job: " + data.get("job"),
        "",
        String(data.get("message") || ""),
      ];
      const note = form.querySelector(".form-note");
      const phone = form.getAttribute("data-phone") || "";
      if (note) {
        note.textContent =
          "Your email app should open with this quote request. If it does not, call " + phone + ".";
      }
      const subject = encodeURIComponent("Scaffold quote request");
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:" + form.getAttribute("data-email") + "?subject=" + subject + "&body=" + body;
    });
  });
})();
