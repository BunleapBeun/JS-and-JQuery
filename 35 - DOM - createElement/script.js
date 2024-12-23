// createElement()
// createTextNode() បញ្ចូលនូវ text content
// element.appendChild() or append()

const h1 = document.createElement('h1');
const text = document.createTextNode('Hello World.')
h1.appendChild(text);

console.log(h1);

document.body.appendChild(h1);


// ! the different between appendChild() and append()

// append: can get object node,and array node
// appendChild: only get array node