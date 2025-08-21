// Toggle hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navToggle?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navMenu.classList.toggle('open');
  }
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if(navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
});

// Sticky header background change on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scroll to top button with fade
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.classList.remove('show');
    setTimeout(() => {
      if(!scrollBtn.classList.contains('show')) {
        scrollBtn.style.display = 'none';
      }
    }, 400);
  }
});
scrollBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Enhanced form validation feedback
const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll('input,textarea');
  let valid = true;

  inputs.forEach(input => {
    const feedbackId = input.name + '-feedback';
    let feedbackEl = document.getElementById(feedbackId);
    if (!feedbackEl) {
      feedbackEl = document.createElement('div');
      feedbackEl.id = feedbackId;
      feedbackEl.className = 'form-feedback';
      input.after(feedbackEl);
    }
    if (!input.checkValidity()) {
      feedbackEl.textContent = 'Please fill out this field correctly.';
      feedbackEl.classList.add('active');
      valid = false;
    } else {
      feedbackEl.classList.remove('active');
    }
  });

  if (valid) {
    alert('Form submitted! (Note: actual submission not configured)');
    form.reset();
  }
});