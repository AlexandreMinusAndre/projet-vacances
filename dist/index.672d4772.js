const menuBtn = document.querySelectorAll('nav button');
const connectionOverlay = document.querySelector('.connection-overlay');
menuBtn.forEach((el)=>{
    el.addEventListener('click', ()=>{
        if (el === menuBtn[0]) window.location.href = 'index.html';
        else if (el === menuBtn[1]) {
            if (!connectionOverlay.classList.contains('activef')) connectionOverlay.classList.add('activef');
            else connectionOverlay.classList.remove('activef');
        }
    });
});
const buttonConnection = document.querySelector('.connection');
buttonConnection.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if (localStorage.getItem('jwt')) window.location.href = 'home.html';
        else Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        });
    });
});

//# sourceMappingURL=index.672d4772.js.map
