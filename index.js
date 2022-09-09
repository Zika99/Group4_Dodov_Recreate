const setTheme = theme => document.documentElement.className = theme;
 
    document.getElementById('theme-select').addEventListener('change', function() {
    setTheme(this.value);
    });