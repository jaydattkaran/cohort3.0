const express = require('express')

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next){
    requestCount = requestCount + 1;
    console.log(`Total number of request = ${requestCount}`)
    req.requestCount = requestCount;
    next();
}

app.get("/sum",requestIncreaser, function(req, res){
    // requestIncreaser(req, res);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply",requestIncreaser, function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })

});

app.get("/divide", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a - b
    })
});

app.listen(3000)

console.log("all ok!")