// Wait for DOM content
window.addEventListener("DOMContentLoaded", () => {
  const regionSelect = document.getElementById("region-select");
  const typeSelect = document.getElementById("type-select");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const universityList = document.getElementById("university-list");

  const roleModal = document.getElementById("role-modal");
  const roleRadioButtons = document.querySelectorAll('input[name="userRole"]');
  const submitRoleButton = document.getElementById("submit-role-button");

  if (!regionSelect || !typeSelect || !searchInput || !searchButton || !universityList) return;

  // Modal role selection
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
      alert(`Hello, ${selectedRole}!`);
      alert("Welcome to our Universities' Information Website!!");
      roleModal.classList.remove("visible");
    } else {
      alert("Please select your role to continue.");
    }
  });

  if (!localStorage.getItem("userRole")) {
    roleModal.classList.add("visible");
  } else {
    roleModal.classList.remove("visible");
  }

  function applyFilters() {
    const selectedRegion = regionSelect.value;
    const selectedType = typeSelect.value;
    const searchKeyword = searchInput.value.trim().toLowerCase();
    const knownTypes = ["national", "private", "specialized", "international"];

    const filtered = universities.filter(univ => {
      const regionMatch =
        selectedRegion === "All" ||
        (Array.isArray(univ.region) ? univ.region.includes(selectedRegion) : univ.region === selectedRegion);

      const typeMatch =
        selectedType === "All" ||
        univ.type.toLowerCase() === selectedType.toLowerCase();

      const keywordIsType = knownTypes.includes(searchKeyword);
      const typeExactMatch = univ.type.toLowerCase() === searchKeyword;
      const nameMatch = univ.name.toLowerCase().includes(searchKeyword);
      const regionMatchByKeyword = univ.region.toString().toLowerCase().includes(searchKeyword);

      const keywordMatch =
        searchKeyword === "" ||
        (keywordIsType ? typeExactMatch : nameMatch || regionMatchByKeyword);

      return regionMatch && typeMatch && keywordMatch;
    });

    renderUniversityCards(filtered);
  }

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
          <img src="${univ.image}" alt="${univ.name}" />
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

    const cards = universityList.querySelectorAll(".university-card");
    if (cards.length === 1) {
      universityList.classList.add("single-card");
    } else {
      universityList.classList.remove("single-card");
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }

  regionSelect.addEventListener("change", applyFilters);
  typeSelect.addEventListener("change", applyFilters);
  searchButton.addEventListener("click", applyFilters);
  searchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") applyFilters();
  });

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  if (themeToggle) themeToggle.textContent = "☀️ Light Mode";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}



  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.style.display = navLinks.classList.contains("active") ? "none" : "block";
  });

  // Auto-close menu on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.style.display = "block";
    });
  });



  // Slideshow logic
  let customSlideIndex = 0;
  const customSlides = document.querySelectorAll(".custom-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".slide-prev");
  const nextBtn = document.querySelector(".slide-next");

  function showCustomSlide(n) {
    customSlides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    customSlideIndex = (n + customSlides.length) % customSlides.length;
    customSlides[customSlideIndex].classList.add("active");
    dots[customSlideIndex].classList.add("active");
  }

  function nextSlide() {
    showCustomSlide(customSlideIndex + 1);
  }

  function prevSlide() {
    showCustomSlide(customSlideIndex - 1);
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"));
      showCustomSlide(index);
    });
  });

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(() => {
    nextSlide();
  }, 3000);

  showCustomSlide(0);
});
