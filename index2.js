/* ---------- DOM REFS ---------- */
const form       = document.getElementById("searchForm");
const select     = document.getElementById("fieldSelect");
const roadmapEl  = document.getElementById("roadmap");
const planner    = document.getElementById("planner");
const slider     = document.getElementById("hoursPerDay");
const etaLabel   = document.getElementById("eta");

/* ---------- Helpers ---------- */
const slug = str => str.trim().toLowerCase();

/* ---------- Populate dropdown ---------- */
(function loadOptions () {
  window.ROADMAPS.forEach(({ field }) => {
    const option = document.createElement("option");
    option.value = slug(field);
    option.textContent = field.replace(); // Title Case
    select.appendChild(option);
  });
})();


/* ---------- Render Functions ---------- */
function renderRoadmap(map) {
  roadmapEl.innerHTML = ""; // clear previous
  const timeline = document.createElement("ol");
  timeline.className = "relative border-l border-white/20";

  map.modules.forEach((mod, i) => {
    const step = document.createElement("li");
    step.className = "mb-12 ml-6";

    step.innerHTML = `
      <span
        class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full
               bg-pink-900 ring-opacity-40">
        ${i + 1}
      </span>

      <h3 class="text-xl font-semibold mb-1">${mod.title}</h3>
      <p class="text-sm opacity-80 mb-2">${mod.hours} hours</p>

      <ul class="list-disc list-inside space-y-1 text-sm">
        ${mod.resources
          .map(r => `<li><a href="${r.url}" target="_blank" class="underline hover:opacity-80">${r.label}</a></li>`)
          .join("")}
      </ul>
    `;
    timeline.appendChild(step);
  });

  roadmapEl.appendChild(timeline);
  planner.classList.remove("hidden");
  updateETA(); // show initial estimate
}

/* ---------- Time‑management ---------- */
function updateETA() {
  const hpd = Number(slider.value);
  const fieldVal = select.value;
  const map = window.ROADMAPS.find(m => slug(m.field) === fieldVal);
  if (!map) return;

  const daysNeeded = Math.ceil(map.totalHours / hpd);
  const weeks = Math.ceil(daysNeeded / 7);

  etaLabel.textContent = `≈ ${weeks} week${weeks > 1 ? "s" : ""} to finish
    (${map.totalHours} h total at ${hpd} h/day)`;
}

/* ---------- Events ---------- */
form.addEventListener("submit", e => {
  e.preventDefault();
  const fieldVal = select.value;
  const map = window.ROADMAPS.find(m => slug(m.field) === fieldVal);

  if (!map) {
    roadmapEl.innerHTML =
      '<p class="text-center text-lg font-semibold mt-12">No road‑map found 🤔</p>';
    planner.classList.add("hidden");
    return;
  }

  renderRoadmap(map);
});

slider.addEventListener("input", updateETA);
