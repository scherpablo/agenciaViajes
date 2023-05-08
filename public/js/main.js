const themeToggle = document.querySelector('#theme-toggle');
const html = document.querySelector('html');
const lightStyleLink = document.querySelector('link[href="/css/light-style.css"]');
const darkStyleLink = document.querySelector('link[href="/css/dark-style.css"]');
const themeToggleText = document.querySelector('#theme-toggle-text');

themeToggle.addEventListener('click', () => {
    // Actualizar el dataset de html antes de verificarlo
    html.dataset.theme = html.dataset.theme === 'light' ? 'dark' : 'light';
    themeToggle.textContent = html.dataset.theme === 'light' ? 'LIGHT MODE' : 'DARK MODE';

    // Verificar el nuevo valor del dataset para cambiar los estilos
    if (html.dataset.theme === 'light') {
        lightStyleLink.disabled = true;
        darkStyleLink.disabled = false;  
        
        themeToggle.style.backgroundColor = '#ffffff';
        themeToggleText.textContent = 'LIGHT MODE';
    } else {
        lightStyleLink.disabled = false;
        darkStyleLink.disabled = true; 

        themeToggle.style.backgroundColor = '#444444';
        themeToggleText.textContent = 'DARK MODE';
        
        // Cambiar el color del botón
        // themeToggle.classList.remove('active');
    }
});