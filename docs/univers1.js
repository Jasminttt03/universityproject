window.addEventListener("DOMContentLoaded", () => {
  const regionSelect = document.getElementById("region-select");
  const typeSelect = document.getElementById("type-select");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const universityList = document.getElementById("university-list");

  if (!regionSelect || !typeSelect || !searchInput || !searchButton || !universityList) {
    console.warn("Some UI elements not found — script not applied.");
    return;
  }


  // New modal elements
  const roleModal = document.getElementById("role-modal");
  const roleRadioButtons = document.querySelectorAll('input[name="userRole"]');
  const submitRoleButton = document.getElementById("submit-role-button");

  // Event Listeners for main page filters/search
  regionSelect.addEventListener("change", applyFilters);
  typeSelect.addEventListener("change", applyFilters);
  searchButton.addEventListener("click", applyFilters);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      applyFilters();
    }
  });

  // Event Listener for modal submit button
  submitRoleButton.addEventListener("click", () => {
    let selectedRole = '';
    for (const radioButton of roleRadioButtons) {
      if (radioButton.checked) {
        selectedRole = radioButton.value;
        break;
      }
    }

    if (selectedRole) {
      localStorage.setItem("userRole", selectedRole);
      alert(`Hello, ${selectedRole}!`)
      alert(`Welcome to our Universities' Information Website!!`);
      roleModal.classList.remove("visible"); // Hide the modal
    } else {
      alert("Please select your role to continue.");
    }
  });

  // Initial Modal Visibility Logic
  if (!localStorage.getItem("userRole")) {
    roleModal.classList.add("visible"); // Show the modal
  } else {
    // If role is already selected, ensure modal is hidden
    roleModal.classList.remove("visible");
  }


  // Filter handler
function applyFilters() {
  const selectedRegion = regionSelect.value;
  const selectedType = typeSelect.value;
  const searchKeyword = searchInput.value.trim().toLowerCase();

  const knownTypes = ["national", "private", "specialized", "international"];

  const filtered = universities.filter(univ => {
    // Dropdown filters
    const regionMatch =
      selectedRegion === "All" ||
      (Array.isArray(univ.region)
        ? univ.region.includes(selectedRegion)
        : univ.region === selectedRegion);

    const typeMatch =
      selectedType === "All" ||
      univ.type.toLowerCase() === selectedType.toLowerCase();

    // Keyword logic
    const keywordIsType = knownTypes.includes(searchKeyword);
    const typeExactMatch = univ.type.toLowerCase() === searchKeyword;
    const nameMatch = univ.name.toLowerCase().includes(searchKeyword);
    const regionMatchByKeyword = univ.region
      .toString()
      .toLowerCase()
      .includes(searchKeyword);

    // Keyword matches only type if keyword is a known type
    const keywordMatch =
      searchKeyword === "" ||
      (keywordIsType ? typeExactMatch : nameMatch || regionMatchByKeyword);

    return regionMatch && typeMatch && keywordMatch;
  });

  renderUniversityCards(filtered);
}

  // Render cards
  function renderUniversityCards(list) {
  universityList.innerHTML = "";

  if (list.length === 0) {
    universityList.innerHTML = "<p style='text-align:center;'>No universities found.</p>";
    return;
  }

  list.forEach(univ => {
    const card = document.createElement("div");
    card.className = "university-card";
    card.innerHTML = `
      <div class="card-logo">
        <img src="images/${univ.image}" alt="${univ.name}" />
      </div>
      <div class="card-body">
        <h3>${univ.name}</h3>
        <p><strong>Type:</strong> ${univ.type}</p>
      </div>
      <div class="card-footer">
        <a href="university.html?id=${univ.id}" class="view-details-button" target="_parent">Read more &gt;&gt;</a>
      </div>
    `;
    universityList.appendChild(card);
  });

  // Add or remove single-card class based on count
  const cards = universityList.querySelectorAll(".university-card");
  if (cards.length === 1) {
    universityList.classList.add("single-card");
  } else {
    universityList.classList.remove("single-card");
  }

  // Scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    observer.observe(card);
  });
}


  // Initial render
  // applyFilters();

  // Event listeners
  regionSelect.addEventListener("change", applyFilters);
  typeSelect.addEventListener("change", applyFilters);
  searchButton.addEventListener("click", applyFilters);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") applyFilters();
  });
});

// Dark/Light mode toggle
const modeToggle = document.getElementById("modeToggle");

// Load saved mode
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

