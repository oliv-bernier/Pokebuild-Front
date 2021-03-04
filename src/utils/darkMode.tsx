/**
 * This function store the choice of the user regarding the dark mode
 * by adding or removing the darkMode from the localstorage
 * @param {boolean} isDark
 */
const darkMode = (isDark: boolean): void => {
  if (isDark) {
    localStorage.setItem('darkMode', 'enabled');
  }
  else {
    localStorage.setItem('darkMode', null);
  }
};

export default darkMode;
