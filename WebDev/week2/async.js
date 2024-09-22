// const fs = require("fs");

// function print(err, data){
//     console.log(data);
// }

// fs.readFile('week2/a.txt', 'utf-8', print);
// fs.readFile('week2/b.txt', 'utf-8', print);

// console.log('Done!');

function timeout() {
    console.log("Click the button!");
}

console.log('Hi!');

setTimeout(timeout, 1000);

console.log('Welcome');

let c = 0;
for ( let i = 0; i<100000; i++) {
    c = c + 1;
}

console.log('Expensive operation');