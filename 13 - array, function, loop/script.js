// Array + Function + Loop

// Arrays to sum
const num1 = [10, 30, 40];
const num2 = [20, 40, 10];

// Function to sum elements in an array
function calc(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];  // Add each element to total
    }
    return total;
}

// Calculate the sum of num2

// const totalNumber = calc(num2);

const totalNumber = calc(num2) + calc(num1);

// Log the result
console.log(totalNumber);  //output: 70


