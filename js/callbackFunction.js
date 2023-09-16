//console.log('JS Execution Context');

// function callMyName(name, callback) {
//     let myAge = 27;
//     callback(myAge);
//     console.log(`Is it interesting? Yes, it is Mr. ${name}`);
// }

// function hello(age) {
//     console.log(`I am passed through argument and my age is: ${age}`);
// }

// callMyName('Abir Abdullah', hello);

/* ======= Function returned by function ======== */

// function welcomeMsg(name) {
//     console.log(`Welcome Mr. ${name}`);

//     return function options(menu) {
//         console.log(`Do you like ${menu}, Mr. ${name} ?`);
//     }
// }
// welcomeMsg('Abir Hossain')(`Coffee`);

/* ======= Another Function Example ======== */

function changeValue(a) {
    console.log(`Value of a inside function before changing: ${a}`);
    a = 10;
    console.log(`Value of a inside function after changing: ${a}`);

    return a;
}

let a = 100;
console.log(`Value of before changing function is applied: ${a}`);
changeValue(a);
console.log(`Value of after changing function is applied: ${a}`);