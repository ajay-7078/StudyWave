// Main JavaScript for interactive website functionality
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const courseSearch = document.getElementById('courseSearch');
const courseGrid = document.getElementById('courseGrid');
const paginationControls = document.getElementById('paginationControls');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const toastContainer = document.getElementById('toastContainer');
const welcomeText = document.getElementById('welcomeText');
const courses = Array.from(document.querySelectorAll('.course-card'));
let currentPage = 1;
const coursesPerPage = 3;
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = Array.from(document.querySelectorAll('main section'));
const fadeElements = Array.from(document.querySelectorAll('.fade-up'));
const counters = Array.from(document.querySelectorAll('.counter'));
let statsAnimated = false;

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  mobileToggle.classList.toggle('active');
});

// Sticky header and scroll top button
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  header.classList.add('visible');
  header.classList.toggle('sticky', scrollY > 50);
  scrollTopBtn.classList.toggle('visible', scrollY > 420);
  handleSectionHighlight(scrollY);
  animateCounters();
});

// Smooth scroll for anchor links
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    navMenu.classList.remove('open');
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Course search filter
courseSearch.addEventListener('input', () => {
  currentPage = 1;
  updateCoursePagination();
});

// Enroll actions and popup notifications
courseGrid.addEventListener('click', event => {
  if (event.target.matches('.enroll-btn')) {
    const courseId = event.target.dataset.course;
    if (courseId) {
      window.location.href = `course-detail.html?course=${courseId}`;
    }
  }
});

paginationControls.addEventListener('click', event => {
  if (event.target.matches('button')) {
    currentPage = Number(event.target.dataset.page);
    updateCoursePagination();
  }
});

// Newsletter subscribe validation
newsletterForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = newsletterEmail.value.trim();
  const validEmail = /^\S+@\S+\.\S+$/.test(email);
  if (!validEmail) {
    showToast('Please enter a valid email address.', true);
    return;
  }
  newsletterEmail.value = '';
  showToast('Thanks for subscribing! You will receive updates soon.');
});

// Dynamic greeting based on time of day
function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = 'Welcome back! Discover the best path for your next milestone.';
  if (hour < 12) greeting = 'Good morning! Learn something new today.';
  else if (hour < 18) greeting = 'Good afternoon! Keep growing with hands-on learning.';
  else greeting = 'Good evening! Finish strong with a new skill.';
  welcomeText.textContent = greeting;
}

// Show toast message
function showToast(message, error = false) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  if (error) {
    toast.style.background = 'rgba(255, 87, 87, 0.92)';
  }
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 3600);
}

function getFilteredCourses() {
  const query = courseSearch.value.trim().toLowerCase();
  return courses.filter(card => {
    const keywords = card.dataset.search.toLowerCase();
    return keywords.includes(query) || query === '';
  });
}

function updateCoursePagination() {
  const filtered = getFilteredCourses();
  const totalPages = Math.ceil(filtered.length / coursesPerPage);
  if (currentPage > totalPages) currentPage = totalPages;
  const startIndex = (currentPage - 1) * coursesPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + coursesPerPage);

  courses.forEach(card => {
    card.style.display = pageItems.includes(card) ? 'grid' : 'none';
  });
  renderPaginationButtons(totalPages);
}

function renderPaginationButtons(totalPages) {
  paginationControls.innerHTML = '';
  if (totalPages === 0) {
    paginationControls.innerHTML = '<span class="pagination-empty">No matching courses found.</span>';
    paginationControls.style.display = 'block';
    return;
  }
  for (let i = 1; i <= totalPages; i += 1) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    pageBtn.dataset.page = i;
    pageBtn.className = currentPage === i ? 'active' : '';
    paginationControls.appendChild(pageBtn);
  }
  paginationControls.style.display = totalPages > 1 ? 'flex' : 'none';
}

// Animated counters when section appears
function animateCounters() {
  const statsSection = document.getElementById('stats');
  if (statsAnimated) return;
  const rect = statsSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight * 0.85) {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      const duration = 1600;
      let start = 0;
      const step = Math.ceil(target / (duration / 30));
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          counter.textContent = target;
          clearInterval(interval);
        } else {
          counter.textContent = start;
        }
      }, 30);
    });
    statsAnimated = true;
  }
}

// Active navigation highlight on scroll
function handleSectionHighlight(scrollY) {
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const link = navLinks.find(a => a.getAttribute('href') === `#${section.id}`);
    if (!link) return;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

// Fade-in scroll animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach(el => observer.observe(el));

// Dark mode toggle
function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    localStorage.setItem('studywave-theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('studywave-theme', 'light');
  }
}

// Dark mode toggle removed per UI update

// Load theme preference and hide preloader
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('studywave-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
  updateGreeting();
  handleSectionHighlight(window.scrollY);
  animateCounters();
  updateCoursePagination();
  header.classList.add('visible');
  const loader = document.getElementById('loaderOverlay');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
  }, 1200);
});

// Close menu on outside click for mobile
window.addEventListener('click', event => {
  if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
    navMenu.classList.remove('open');
  }
});
