// Course detail page functionality
const courseId = new URLSearchParams(window.location.search).get('course');
let course = null;

// Load and display course data
function loadCourseDetail() {
  if (!courseId || !coursesData[courseId]) {
    window.location.href = 'index.html';
    return;
  }

  course = coursesData[courseId];

  // Populate basic info
  document.getElementById('courseTitle').textContent = course.title;
  document.getElementById('courseBreadcrumbTitle').textContent = course.title;
  document.getElementById('breadcrumbTitle').textContent = course.title;
  document.getElementById('courseDescription').textContent = course.description;
  document.getElementById('coursePrice').textContent = course.price;
  document.getElementById('courseOverview').textContent = course.overview;
  document.getElementById('courseStudents').textContent = `${course.students.toLocaleString()}+ students`;
  document.getElementById('courseStudentsCount').textContent = `${(course.students / 1000).toFixed(0)}k+`;
  document.getElementById('courseDuration').textContent = course.duration;
  document.getElementById('courseLevel').textContent = course.level;
  document.getElementById('courseLanguage').textContent = course.language;
  document.getElementById('instructorName').textContent = course.instructor;
  document.getElementById('instructorImage').textContent = course.instructorImage;
  document.getElementById('courseRating').textContent = `${course.rating} ★`;
  document.getElementById('courseReviews').textContent = `(${course.reviews.toLocaleString()} reviews)`;

  // Set background images
  document.getElementById('courseImage').style.background = course.image;
  document.getElementById('sidebarImage').style.background = course.image;

  // Populate What You Learn
  const whatYouLearnList = document.getElementById('whatYouLearn');
  whatYouLearnList.innerHTML = course.whatYouLearn
    .map(
      item =>
        `<div class="learn-item"><span>✓</span> <p>${item}</p></div>`
    )
    .join('');

  // Populate Curriculum
  const curriculumList = document.getElementById('curriculumList');
  curriculumList.innerHTML = course.curriculum
    .map(
      (module, index) =>
        `<div class="curriculum-item">
          <div class="curriculum-header">
            <span class="module-number">${index + 1}</span>
            <h4>${module.module}</h4>
            <span class="module-meta">${module.lessons} lessons • ${module.duration}</span>
          </div>
        </div>`
    )
    .join('');

  // Populate Requirements
  const requirementsList = document.getElementById('requirementsList');
  requirementsList.innerHTML = course.requirements
    .map(req => `<li>${req}</li>`)
    .join('');

  // Populate Highlights
  const highlightsList = document.getElementById('highlightsList');
  highlightsList.innerHTML = course.highlights
    .map(highlight => `<div class="highlight"><p>${highlight}</p></div>`)
    .join('');

  // Attach enroll button handlers
  document.getElementById('enrollBtn').addEventListener('click', enrollCourse);
  document.getElementById('enrollBtnSidebar').addEventListener('click', enrollCourse);
}

// Enrollment functionality
function enrollCourse() {
  // Get enrolled courses from localStorage
  let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

  // Add current course if not already enrolled
  if (!enrolledCourses.includes(courseId)) {
    enrolledCourses.push(courseId);
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }

  // Show success toast
  showToast(`🎉 Successfully enrolled in ${course.title}!`);

  // Update button state
  document.getElementById('enrollBtn').textContent = '✓ Enrolled';
  document.getElementById('enrollBtn').disabled = true;
  document.getElementById('enrollBtnSidebar').textContent = '✓ Enrolled';
  document.getElementById('enrollBtnSidebar').disabled = true;
}

// Show toast notification
function showToast(message) {
  const toastContainer = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 3600);
}

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  mobileToggle.classList.toggle('active');
});

// Close menu on link click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Sticky header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  header.classList.add('visible');
  header.classList.toggle('sticky', scrollY > 50);
  document.getElementById('scrollTopBtn').classList.toggle('visible', scrollY > 420);
});

// Scroll to top
document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in animations
const fadeElements = Array.from(document.querySelectorAll('.fade-up'));
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

// Check if already enrolled and update button
function checkEnrollmentStatus() {
  const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
  if (enrolledCourses.includes(courseId)) {
    document.getElementById('enrollBtn').textContent = '✓ Enrolled';
    document.getElementById('enrollBtn').disabled = true;
    document.getElementById('enrollBtnSidebar').textContent = '✓ Enrolled';
    document.getElementById('enrollBtnSidebar').disabled = true;
  }
}

// Close menu on outside click
window.addEventListener('click', event => {
  if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
    navMenu.classList.remove('open');
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadCourseDetail();
  checkEnrollmentStatus();
});
