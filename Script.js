const toggleButton = document.getElementById('toggle-mode');
const body = document.body;


if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Salva a preferência do modo no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});


