const toggle = document.createElement('button');
toggle.textContent = 'Toggle Dark Mode';
toggle.className = 'theme-toggle';
document.body.prepend(toggle);

const setDark = (on) => {
  document.documentElement.style.setProperty('--bg-color', on ? '#1f2937' : '#f9fafb');
  document.documentElement.style.setProperty('--primary-color', on ? '#f9fafb' : '#1f2937');
  toggle.textContent = on ? 'Switch to Light Mode' : 'Switch to Dark Mode';
};

let dark = false;
setDark(dark);

toggle.addEventListener('click', () => {
  dark = !dark;
  setDark(dark);
});
