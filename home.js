const user = document.querySelector('.user');

user.addEventListener('click', () => {
    console.log('ok')
    if (!menu.classList.contains('active')){
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
})