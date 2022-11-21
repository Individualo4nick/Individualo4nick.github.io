let changeThemeButtons = document.querySelectorAll('.changeTheme'); 

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () { 
        let theme = this.dataset.theme; 
        applyTheme(theme); 
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `style/theme-${themeName}.css`); 
    changeThemeButtons.forEach(button => {
        button.style.display = 'block'; 
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}


let activeTheme = localStorage.getItem('theme');

if(activeTheme === 'light') { 
    applyTheme('light');
} else if (activeTheme === null || activeTheme === 'dark') { 
    applyTheme('dark');
}