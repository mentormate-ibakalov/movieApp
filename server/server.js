const express = require('express');
// const https = require('https');
const http = require('http');
const mode = 'prod';
const fs = require('fs');
const app = express();
const httpServer = http.createServer(app);
const path = require('path');
// const staticServe = express.static(`/root/www/ibakalov/dist`);

const request = require('request');
const bodyParser = require('body-parser');
let session = require('client-sessions');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use(session({
    cookieName: 'session',
    secret: '2C44-4D44-WppQ38S',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

app.post('/rest/register', function(req, res) {

    let rawdata = fs.readFileSync('users.json');
    let user = JSON.parse(rawdata)

    user[req.body.user] = {
        user: req.body.user,
        pass: req.body.paswordGroup.pass,
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,
        email: req.body.surname
    }

    let data = JSON.stringify(user);

    fs.writeFileSync('users.json', data);
    // console.log(req.body)
    fs.writeFileSync('users.json', data);
    res.status(200).send((user[req.body.user]));
})


app.post('/rest/logout', function(req, res) {
    req.session.destroy(function(err) {
        res.send(err);
    })
    res.clearCookie('session');
    res.send(true);
})


app.post('/rest/isLoggedIn', function(req, res) {
    if (req.headers.authorization == 'Bearer 4179bafbbdcdc6dca8c4bf02f199c74848fc045d') {
        console.log('logged in');
        res.status(200).send(true);
    } else {
        console.log('not logged in');
        res.status(400).send(false);
    }
})


app.post('/rest/login', function(req, res) {
    let check = false;
    let rawdata = fs.readFileSync('users.json');
    let user = JSON.parse(rawdata);

    if (user[req.body.userName] && user[req.body.userName].pass == req.body.userPass) {
        check = true;
    }
    if (check) res.status(200).send((user[req.body.userName]));
    else res.status(400).send('invalid user or password');
});






httpServer.listen(4444, () => console.log(`App listen ${4444}!`))