// Menú adaptable para pantallas pequeñas.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

// Cierra el menú después de seleccionar una sección.
navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Cuenta regresiva visual de bienvenida. No representa un lanzamiento real.
const number = document.getElementById('count-number');
const label = document.getElementById('count-label');
const sequence = [
  { value: '3', text: 'SISTEMAS EN PREPARACIÓN' },
  { value: '2', text: 'RUMBO A LA INNOVACIÓN' },
  { value: '1', text: 'MISIÓN ANDROMEDA' },
  { value: '✦', text: 'EL FUTURO DESPEGA' }
];
let step = 0;
function runCountdown() {
  number.textContent = sequence[step].value;
  label.textContent = sequence[step].text;
  step = (step + 1) % sequence.length;
  if (step !== 0) window.setTimeout(runCountdown, 1100);
}
window.setTimeout(runCountdown, 900);
