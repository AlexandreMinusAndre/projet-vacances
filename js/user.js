const user = document.querySelector('.user');
const menu = document.querySelector('.menu');
const profil = document.querySelectorAll('.profil');

user.addEventListener('click', () => {
    menu.classList.toggle('active');
})

profil.forEach(a => {
    a.addEventListener('click', () => {
        window.location.href = 'user.html';
    })
})

document.onclick = function(e) {
    if (!menu.contains(e.target) && !user.contains(e.target)){
        menu.classList.remove('active');
    }
    else if (menu.contains(e.target)){
        menu.classList.add('active');
    } 
    else {
        return;
    }
}