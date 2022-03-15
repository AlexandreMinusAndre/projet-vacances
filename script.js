const user = document.querySelector('.user');
const menuBtn = document.querySelectorAll('nav button');

console.log(menuBtn)

menuBtn.forEach(el => {
    el.addEventListener('click', () => {
        if (el === menuBtn[0]){
            window.location.href='index.html';
        }
    })
})

user.addEventListener('click', () => {
})