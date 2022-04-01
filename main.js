document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    const body = document.querySelector('body');
    const themeImg = document.querySelector('#theme-img');
    const theme = matchMedia('(prefers-color-scheme: dark)');

    if(theme.matches) {
        body.classList.add('dark');
        themeImg.src = './images/icon-sun.svg';
    } else {
        body.classList.remove('dark');
        themeImg.src = './images/icon-moon.svg';
    }
})