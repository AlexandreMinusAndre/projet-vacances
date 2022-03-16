const menuBtn = document.querySelectorAll('nav button');
const connectionOverlay = document.querySelector('.connection-overlay');
const form = document.querySelector('.box form');
menuBtn.forEach((el)=>{
    const r = document.querySelector('.connection-overlay .box');
    el.addEventListener('click', ()=>{
        if (el === menuBtn[0]) window.location.href = 'index.html';
        else if (el === menuBtn[1]) {
            r.classList.toggle('active-connection');
            if (!connectionOverlay.classList.contains('activef')) connectionOverlay.classList.add('activef');
            else connectionOverlay.classList.remove('activef');
        }
    });
}) // form.addEventListener('submit', () => {
 //     if(localStorage.getItem('jwt')){
 //         window.location.href = 'home.html';
 //     } else {
 //         Swal.fire({
 //             icon: 'error',
 //             title: 'Oops...',
 //             text: 'Vous ne pouvez pas vous connecter !'
 //           })
 //     }
 // })
;

//# sourceMappingURL=index.672d4772.js.map
