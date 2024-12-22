// style properties

document.body.style.backgroundColor = 'blue';

const heading = document.getElementById('heading');
heading.style.color = "white";
heading.style.fontSize = '100px';
heading.style.textAlign = 'center';

const boxes = document.querySelectorAll('.box');

boxes.forEach(function (box) {
    // console.log(item);
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.borderRadius = '20px';

    box.style.backgroundColor = 'yellow';
    box.style.margin = '30px 0 30px 0'
});



