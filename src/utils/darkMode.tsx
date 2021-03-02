const darkMode = (isDark: boolean): void => {
  if (isDark) {
    localStorage.setItem('darkMode', 'enabled');
  }
  else {
    localStorage.setItem('darkMode', null);
  }
};

export default darkMode;
