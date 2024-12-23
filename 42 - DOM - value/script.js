const frm = document.getElementById('frm');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

frm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(fname.value);
    console.log(lname.value);
});