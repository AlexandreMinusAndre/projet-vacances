const user = document.querySelector('.user');

user.addEventListener('click', () => {
    if (!menu.classList.contains('active')){
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
})