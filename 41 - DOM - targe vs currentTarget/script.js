// e.currentTarget vs e.target

const h2s = document.querySelectorAll('h2');
const color = document.querySelector('.color');

h2s.forEach(function (h2) {
    h2.addEventListener('click', function (e) {
        // console.log(e.target);
        h2.classList.add('color');
    });
})

// traget specific to element

// currentTarget: specific to tag