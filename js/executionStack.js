let yourName = 'Jungro';

function firstFunction() {
    let welcome = 'Hello !';
    secondFunction();
    console.log(`${welcome} ${yourName}: I have got One`);
}
function secondFunction() {
    let welcome2 = 'Hi !';
    thirdFunction();
    console.log(`${welcome2} ${yourName}: I have got Two`);
}
function thirdFunction() {
    let welcome3 = 'Hey !';
    console.log(`${welcome3} ${yourName}: I have got Three`);
}
firstFunction();