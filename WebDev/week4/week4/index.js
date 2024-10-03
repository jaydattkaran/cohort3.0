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


// const express = require("express");

// const app = express();

// req and res => request and response
// app.get("/", function (req, res) {

// })

// app.listen(3000);




// const express = require("express");
// const app = express();

// var users = [{
//     name: "John",
//     kidneys: [{
//         healthy: false
//     }]
// }];

// app.use(express.json());

// app.get("/", function (req, res) {
//     const johnKidneys = users[0].kidneys;
//     const numberOfKidneys = johnKidneys.length;
//     let numberOfHealthyKidneys = 0;
//     for (let i = 0; i < johnKidneys.length; i++) {
//         if (johnKidneys[i].healthy) {
//             numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
//         }
//     }

//     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnhealthyKidneys
//     })
// })

// app.post("/", function (req, res) {
//     const isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy: isHealthy
//     })
//     res.json({
//         msg: "Done!"
//     })
// })

// app.put("/", function (req, res) {
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//         users[0].kidneys[i].healthy = true;
//     }
//     res.json({});
// })

// app.delete("/", function (req, res) {
//     if (isThereAtleastOneUnhealthyKidney()){
//         const newKidneys = [];
//         for (let i = 0; i < users[0].kidneys.length; i++) {
//             if (users[0].kidneys[i].healthy) {
//                 newKidneys.push({
//                     healthy: true
//                 })
//             }
//         }
//         users[0].kidneys = newKidneys;
//         res.json({ msg: "changed" })
//     } else {
//         res.status(411).json({
//             msg: "you have no bad kidneys"
//         });
//     }
// })

// function isThereAtleastOneUnhealthyKidney() {
//     let atleastOneUnhealthyKidney = false;
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//         if (!users[0].kidneys[i].healthy) {
//             atleastOneUnhealthyKidney = true;
//         }
//     }
//     return atleastOneUnhealthyKidney
// }
// app.listen(3000);

const express = require('express');

const app = express();

// function that returns a boolean if the age of the person is more than 14
// function isOldEnough(age) {
//     if (age >= 14) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "Sorry you are not of age yet",
        })
    }
}

// app.get("/ride1",isOldEnoughMiddleware, function(req, res) {
//     res.json({
//         msg: "You have successfully riden the ride 1",
//     })
// })

app.use(isOldEnoughMiddleware);

app.get("/ride1", function(req, res) {
    res.json({
        msg: "You have successfully riden the ride 1",
    })
})
app.get("/ride2", function(req, res) {
    res.json({
        msg: "You have successfully riden the ride 2"
    })
})

app.listen(3000);