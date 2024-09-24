// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.red.bold('This is an error message.'));
// console.log(chalk.green.underline('This is an success message.'));

// console.log(__dirname);


// const fs = require("fs");

// function main(fileName) {
//     fs.readFile(fileName, "utf-8", function(err, data) {
//         /// hello world
//         let total = 0;
//         for (let i=0; i<data.length; i++) {
//             if (data[i] === " "){
//                 total++;
//             }
//         }
//         console.log(total);
//     })
// }

// main("a.txt");
// main(process.argv[2]);




// creating an http server
// express 
// node default library => no

// const express = require("express");

// const app = express();

// function sum(n) {
//     let ans = 0;
//     for (let i=1; i<=n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// app.get("/", function (req, res) {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hi your ans is " + ans)
// })

// app.listen(3000);


const express = require("express");

const app = express();

// req and res => request and response
app.get("/", function (req, res) {
    
})

app.listen(3000);