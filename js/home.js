const user = document.querySelector('.user');
const menu = document.querySelector('.menu');

user.addEventListener('click', () => {
    menu.classList.toggle('active');
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