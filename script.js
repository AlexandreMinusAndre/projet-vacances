const user = document.querySelector('.user');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('nav button');
const connectionOverlay = document.querySelector('.connection-overlay');

menuBtn.forEach(el => {
    el.addEventListener('click', () => {
        if (el === menuBtn[0]){
            window.location.href='index.html';
        } else if (el === menuBtn[1]){
            if (!connectionOverlay.classList.contains('activef')){
                connectionOverlay.classList.add('activef');
            } else {
                connectionOverlay.classList.remove('activef');
            }
        }
    })
})

document.onclick = function(e) {
    if (){

    }
}