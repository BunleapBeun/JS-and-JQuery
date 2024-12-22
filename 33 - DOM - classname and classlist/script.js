// className and classList

/* + className:
    - replace original properties
*/

/* + classList:
    - can replace original prop
    - can add new prop
    - can remove properties
    - can check prop, return boolean true false
*/

const element = document.querySelector('h1');
// element.className = 'text-color'; // replace big-text
element.classList.add('text-color'); // add new class to h1
element.classList.remove('text-color') // remove new class from h1

const checkClass = element.classList.contains('big-text'); // return true if have this class
// console.log(checkClass);

if (checkClass) {
    console.log('Yeah, I have this class.');
}
else {
    console.log('No, I dun have this class.');
}

console.log(element);



