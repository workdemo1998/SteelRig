(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  function setMenu(open) {
    if (!nav || !toggle) return;
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
  }

  const video = document.querySelector(".hero-media");
  if (video && reduceMotion) video.pause();

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
    let projects = [];
    try {
      projects = JSON.parse(stage.getAttribute("data-projects"));
    } catch (error) {
      return;
    }
    const sheets = Array.prototype.slice.call(stage.querySelectorAll(".stage-sheet"));
    const caption = stage.querySelector(".stage-caption");
    const count = sheets.length;
    let index = 0;

    function render() {
      const prev = (index - 1 + count) % count;
      const next = (index + 1) % count;
      sheets.forEach(function (img, itemIndex) {
        const slot = itemIndex === index ? "center" : itemIndex === prev ? "left" : "right";
        img.setAttribute("data-slot", slot);
        const front = slot === "center";
        img.alt = front ? projects[itemIndex].alt : "";
        if (front) img.removeAttribute("aria-hidden");
        else img.setAttribute("aria-hidden", "true");
      });
      const project = projects[index];
      caption.querySelector("strong").textContent = project.caption;
      caption.querySelector("p").textContent = project.text;
      caption.querySelector("span").textContent = project.place;
    }

    stage.querySelector(".stage-prev").addEventListener("click", function () {
      index = (index - 1 + count) % count;
      render();
    });
    stage.querySelector(".stage-next").addEventListener("click", function () {
      index = (index + 1) % count;
      render();
    });
    stage.addEventListener("animationend", function (event) {
      if (event.animationName === "sheet-fan") stage.classList.add("is-ready");
    });

    if (reduceMotion) {
      stage.classList.add("is-settled");
      return;
    }

    function onScroll() {
      const rect = stage.getBoundingClientRect();
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const inView = visible >= 180;
      const gone = rect.bottom < 0 || rect.top > window.innerHeight;
      if (inView) stage.classList.add("is-settled");
      else if (gone) stage.classList.remove("is-settled");
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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
