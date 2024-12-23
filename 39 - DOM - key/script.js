// key: work with input
// keypress, keydown, keyup

const input = document.querySelector('input');

input.addEventListener('keyup', function () {
    console.log(input.value);
    
});