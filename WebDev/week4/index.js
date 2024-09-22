// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.red.bold('This is an error message.'));
// console.log(chalk.green.underline('This is an success message.'));

// console.log(__dirname);


const fs = require("fs");

function main(fileName) {
    fs.readFile(fileName, "utf-8", function(err, data) {
        /// hello world
        let total = 0;
        for (let i=0; i<data.length; i++) {
            if (data[i] === " "){
                total++;
            }
        }
        console.log(total);
    })
}

// main("a.txt");
main(process.argv[2]);