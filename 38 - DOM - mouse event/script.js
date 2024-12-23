// mousedown - while touch
// mouseup - while release mouse
// mouseenter - while pointing
// mouseleave - while take mouse away
// mouseover - while hover on it

const btn = document.querySelector('button');

btn.addEventListener('mouseenter', function () {
    btn.classList.add('btnPrimary');
});