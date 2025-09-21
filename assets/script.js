function setTheme() {
  const root = document.documentElement;
  root.className = root.className === 'dark' ? 'light' : 'dark';

  if (root.className === 'dark') {
      lightThemeIcon.classList.remove('hidden');
      darkThemeIcon.classList.add('hidden');
  } else {
    darkThemeIcon.classList.remove('hidden');
    lightThemeIcon.classList.add('hidden');
  }
}


// DOM elements
const themeToggler = document.querySelector('#theme-toggler');
const darkThemeIcon = document.querySelector('#dark-theme-icon');
const lightThemeIcon = document.querySelector('#light-theme-icon');

// setting a default theme on the root element ie html element
document.documentElement.className = 'light';
lightThemeIcon.classList.add('hidden');
themeToggler.addEventListener('click', setTheme);
