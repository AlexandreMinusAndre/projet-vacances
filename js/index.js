document.onclick = function(e) {
    const r = document.querySelector('.connection-overlay .box');
    if (connectionOverlay.classList.contains('activef')){
        r.classList.toggle('active-connection');
    }
    if (!r.contains(e.target) && !menuBtn[1].contains(e.target)){
        connectionOverlay.classList.remove('activef');
        r.classList.remove('active-connection');
    } else {
        return;
    }
}