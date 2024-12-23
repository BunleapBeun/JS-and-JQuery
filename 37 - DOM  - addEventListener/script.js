// event
// addEventListener()

const btn = document.querySelector('.btn');
var heading = document.querySelector('.heading');

// btn.addEventListener("click", function () {
//     heading.classList.add('co-red');
//     // console.log('You\'d click.');
// });

// ! eventlistener with referent func

function handleClick() {
    // console.log('Clicked.');

    // ! first step
    // const check = heading.classList.contains('co-red');
    // if (check)  {
    //     heading.classList.remove('co-red');
    // }
    // else {
    //     heading.classList.add('co-red');
    // }

    // ! second step
    heading.classList.toggle('co-red');
}

// ? for refer we dun need to invoke it like this handleClick()
btn.addEventListener('click', handleClick)