const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const app = express();
let db;

app.use(bodyParser.urlencoded({
    extended: true
  }))

app.use(bodyParser.json())



app.put('/addTimeInGame', (req, res) => {
    console.log('add time in game')
    db.collection('Users').updateOne({}, {$inc: {"timeInGame": req.body.amount}})
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.put('/addSymbols', (req, res) => {
    console.log("add symbols")
    db.collection('Users').updateOne({}, {$inc: {"symbols": req.body.amount}})
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.put('/addGoodRuns', (req, res) => {
    console.log('add time in game')
    db.collection('Users').updateOne({}, {$inc: {"goodRuns": 1}})
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.put('/addBadRuns', (req, res) => {
    console.log('add time in game')
    db.collection('Users').updateOne({}, {$inc: {"badRuns": 1}})
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.put('/sign-up', (req, res) => {
    console.log('newUser')
    db.collection('Users').updateOne({}, {$inc: {"users": 1}})
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.put('/log-in', (req, res) => {
    console.log('autorized')
    db.collection('Users').updateOne({}, {$inc: {"activeUsers": 1}})
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.put('/log-out', (req, res) => {
    console.log('un-autorized')
    db.collection('Users').updateOne({}, {$inc: {"activeUsers": -1}})
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
})

MongoClient.connect('mongodb+srv://freddy2010:qweQWE333@list-0ixqy.mongodb.net/test?retryWrites=true', (err, database) => {
    if (err) {
        return console.log(err)
    }
    db = database.db('FP_Quest');
    app.listen(3012, () => {
        console.log("Server started");
    });
})



