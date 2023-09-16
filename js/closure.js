function closuresDemo() {
    let x = 10;
    function anotherFunction() {
        let y = 20;
        console.log(`Sum = ${x + y}`);
    }
    return anotherFunction;
}
let returnedFunction = closuresDemo();
returnedFunction();