const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toast = document.getElementById('toast');
let toastTimer;

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('selected'));
    button.classList.add('selected');
    const filter = button.dataset.filter;
    document.querySelectorAll('.food-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    showToast(`${button.dataset.item} added to your demo order!`);
  });
});

document.getElementById('videoButton').addEventListener('click', () => {
  const status = document.getElementById('videoStatus');
  status.textContent = 'Food preview selected! Browse the menu to discover your next favorite.';
  showToast('Preview mode: explore the menu below.');
});

document.getElementById('newsletterForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('emailInput');
  document.getElementById('newsletterMessage').textContent =
    `Thanks for signing up, ${email.value}! This is a static demo, so no email was sent.`;
  email.value = '';
});

document.getElementById('year').textContent = new Date().getFullYear();
