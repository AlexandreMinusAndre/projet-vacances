const connectBtn = Array.from(document.getElementsByClassName('connect'));

document.onclick = function(e) {
    const r = document.querySelector('.box');
    if (!r.contains(e.target) && !menuBtn[1].contains(e.target)){
        connectionOverlay.classList.remove('activef');
        r.classList.remove('active-connection');
        connectionOverlay.classList.remove('active-connection');
    } else {
        return;
    }   
}

connectBtn.forEach(btn => {
    const r = document.querySelector('.box');
    btn.addEventListener('click', () => {
        if (btn.classList.contains('connect')){
            if (!connectionOverlay.classList.contains('active-connection')){
                connectionOverlay.classList.add('active-connection');
            } else {
                connectionOverlay.classList.remove('active-connection');
            }
        }
    })
})