// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// Modal functionality
const modal = document.getElementById('contactModal');
const nameInput = document.getElementById('nameInput');
const nameError = document.getElementById('nameError');
const floatingBtn = document.getElementById('floatingBtn');

function sendToWhatsApp() {
  modal.style.display = 'flex';
  nameInput.focus();
}

function closeModal() {
  modal.style.display = 'none';
  nameInput.value = '';
  nameError.style.display = 'none';
}

function sendToDm() {
  const name = nameInput.value.trim();

  if (name === '') {
    nameError.style.display = 'block';
    return;
  }

  const message = `Good day Pacesetters Academy.\nI am interested in joining your free JAMB tutorial class.\nMy name is ${name}`;
  const phoneNumber = '2348124326491';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappUrl;
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Floating button visibility
let lastScrollTop = 0;
const scrollThreshold = 300;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > scrollThreshold) {
    floatingBtn.style.display = 'flex';
  } else {
    floatingBtn.style.display = 'none';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});