// variable lookup

// globle var
let a = 'Apple';

function myFunc() {
    // block-scope var
    const a = 'Banna';
    console.log(a);
    function subFunc() {
        // block-scope var
        const a = 'Mango';
        console.log(a);
    }
    subFunc();
}

myFunc();