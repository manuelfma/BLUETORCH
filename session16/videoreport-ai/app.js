const video = document.querySelector(".background-video");
const header = document.querySelector("#siteHeader");
const reveals = document.querySelectorAll(".reveal");
const scrollWordBlocks = document.querySelectorAll(".scroll-words");
const form = document.querySelector("#demo");
const formStatus = document.querySelector("#formStatus");

let targetTime = 0;
let rafId = null;

function updateTargets() {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const fraction = Math.min(1, Math.max(0, window.scrollY / maxScroll));

  if (video && Number.isFinite(video.duration)) {
    targetTime = fraction * video.duration;
  }

  if (header) {
    const headerProgress = Math.min(1, Math.max(0, (window.scrollY - 500) / 300));
    header.style.transform = `translateX(-50%) translateY(${-150 * headerProgress}px)`;
  }

  updateScrollWords();
}

function scrubVideo() {
  if (video && Number.isFinite(video.duration) && Math.abs(video.currentTime - targetTime) > 0.033) {
    try {
      video.currentTime = targetTime;
    } catch {
      // Some browsers delay seeking until metadata is fully ready.
    }
  }

  rafId = requestAnimationFrame(scrubVideo);
}

async function primeVideo() {
  if (!video) return;

  try {
    await video.play();
    video.pause();
  } catch {
    video.pause();
  }

  updateTargets();
}

function updateScrollWords() {
  scrollWordBlocks.forEach((block) => {
    const rect = block.getBoundingClientRect();
    const start = window.innerHeight * 0.85;
    const end = window.innerHeight * 0.2;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
    const words = block.querySelectorAll("span");

    words.forEach((word, index) => {
      const localStart = index / Math.max(1, words.length);
      const localProgress = Math.min(1, Math.max(0, (progress - localStart) * 3.2));
      const opacity = 0.15 + localProgress * 0.85;
      const blur = 8 - localProgress * 8;
      word.style.setProperty("--word-opacity", opacity.toFixed(2));
      word.style.setProperty("--word-blur", `${blur.toFixed(2)}px`);
    });
  });
}

function prepareScrollWords() {
  scrollWordBlocks.forEach((block) => {
    const words = block.textContent.trim().split(/\s+/);
    block.textContent = "";
    words.forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word;
      block.appendChild(span);
    });
  });
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  reveals.forEach((element) => observer.observe(element));
}

function setupLeadForm() {
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      formStatus.textContent = "Enter a work email to request a sample report.";
      return;
    }

    const leads = JSON.parse(localStorage.getItem("videoreport-leads") || "[]");
    leads.push({
      email,
      source: "session16-videoreport-ai",
      page: "landing",
      created_at: new Date().toISOString(),
    });
    localStorage.setItem("videoreport-leads", JSON.stringify(leads));

    form.reset();
    formStatus.textContent = "Demo request received. We will contact you with a sample report.";
  });
}

prepareScrollWords();
setupRevealObserver();
setupLeadForm();

window.addEventListener("scroll", updateTargets, { passive: true });
window.addEventListener("resize", updateTargets);
video?.addEventListener("loadedmetadata", primeVideo);

updateTargets();
rafId = requestAnimationFrame(scrubVideo);

window.addEventListener("beforeunload", () => {
  if (rafId) cancelAnimationFrame(rafId);
});

