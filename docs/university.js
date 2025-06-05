const params = new URLSearchParams(window.location.search);
const universityId = params.get("id");

const container = document.getElementById("university-detail");

const university = universities.find(u => u.id === universityId);

if (university) {
  container.innerHTML = `
    <h1>${university.name}</h1>
    <img src="${university.image}" alt="${university.name} logo" />
    <p><strong>Region:</strong> ${university.region}</p>
    <p><strong>Type:</strong> ${university.type}</p>
    <p><strong>Ranking:</strong> #${university.ranking} in Korea</p>
    <p>${university.description}</p>
    <p><strong>Contact:</strong><br>
      Phone: ${university.contact.phone}<br>
      Email: ${university.contact.email}<br>
      Website: <a href="${university.contact.website}" target="_blank">${university.contact.website}</a>
    </p>
    <iframe
      src="https://www.google.com/maps?q=${encodeURIComponent(university.mapQuery)}&output=embed"
      width="100%" height="300" style="border:0;" allowfullscreen loading="lazy">
    </iframe>
  `;
} else {
  container.innerHTML = "<p>University not found.</p>";
}

// Dark/Light mode toggle
const modeToggle = document.getElementById("modeToggle");

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark-mode");
  modeToggle.textContent = "☀️Light Mode";
}

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  modeToggle.textContent = isDark ? "☀️Light Mode" : "🌙Dark Mode";
  localStorage.setItem("mode", isDark ? "dark" : "light");
});

