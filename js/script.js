document.addEventListener("DOMContentLoaded", () => {
  startTypingEffect();
  loadGitHubProjects();
  loadQuote();

  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      msg.textContent = "Please fill in all required fields.";
      msg.style.color = "var(--clr-error)";
      return;
    }

    if (!validateEmail(email)) {
      msg.textContent = "Please enter a valid email address.";
      msg.style.color = "var(--clr-error)";
      return;
    }

    form.submit();

    msg.textContent = "Thank you! Your message has been sent.";
    msg.style.color = "lightgreen";
    form.reset();
  });

  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});

function startTypingEffect() {
  const phrases = [
    "Hi, I'm Gustavo Ribeiro",
    "Web Developer",
    "Minimalist Designer",
  ];
  const typedName = document.getElementById("typed-name");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
      typedName.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else {
        setTimeout(type, 100);
      }
    } else {
      typedName.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, 50);
      }
    }
  }
  type();
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
// Função para carregar os projetos do github 
function loadGitHubProjects() {
  const username = "Gukisz";
  const url = `https://api.github.com/users/${username}/repos?per_page=5&sort=updated`;

  const cached = localStorage.getItem("githubRepos");
  const cacheTime = localStorage.getItem("githubReposTime");
  const now = Date.now();

  if (cached && cacheTime && now - cacheTime < 30 * 60 * 1000) {
    renderProjects(JSON.parse(cached));
    return;
  }

  fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status}`);
      }
      return res.json();
    })
    .then((repos) => {
      localStorage.setItem("githubRepos", JSON.stringify(repos));
      localStorage.setItem("githubReposTime", Date.now().toString());
      renderProjects(repos);
    })
    .catch((err) => {
      const projectList = document.getElementById("project-list");
      projectList.innerHTML = `<p style="color: var(--clr-error);">${err.message}</p>`;
      console.error(err);
    });
}

function renderProjects(repos) {
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = "";

  if (!repos.length) {
    projectList.innerHTML = "<p>No public projects found.</p>";
    return;
  }

  repos.forEach((repo, index) => {
    const card = document.createElement("article");
    card.className = "project-card fade-in";
    card.tabIndex = 0;
    card.style.animationDelay = `${index * 150}ms`;

    card.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description ? repo.description : "No description provided."}</p>
      <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" aria-label="View ${repo.name} on GitHub">View on GitHub</a>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() !== "a") {
        showProjectModal(repo);
      }
    });

    projectList.appendChild(card);
  });
}

function showProjectModal(repo) {
  const modal = document.getElementById("project-modal");
  document.getElementById("modal-title").textContent = repo.name;
  document.getElementById("modal-description").textContent =
    repo.description || "No description provided.";
  const link = document.getElementById("modal-link");
  link.href = repo.html_url;
  link.textContent = "View on GitHub";

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  modal.focus();
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

function loadQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      const quoteEl = document.getElementById("quote");
      quoteEl.textContent = `"${data.content}" — ${data.author}`;
      setTimeout(() => quoteEl.classList.add("visible"), 100);
    })
    .catch(() => {
      const quoteEl = document.getElementById("quote");
      quoteEl.textContent = `"Keep coding and stay curious." — Macaulin Claukin`;
      quoteEl.classList.add("visible");
    });
}
