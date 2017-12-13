var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');



var five = require("johnny-five");
var board = new five.Board();

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);


router.get('/', getAll);


router.get('/current', getCurrent);
router.put('/:_id', update);
router.delete('/:_id', _delete);



router.post('/encender/:_id', encender);
router.post('/apagar/:_id', apagar);
router.get('/getLed/:_id', getLed);





var l1 = 0;
var l2 = 0;
var l3 = 0;


function encender(req, res) 
{
    var control = req.params._id;
    switch(control)
    {
        case '1':
            l1 =1 ;
            var led = new five.Led(3);
        break;

        case '2':
            l2 =1 ;
            var led = new five.Led(5);
        break;

        case '3':
            l3=1;
            var led = new five.Led(7);
        break;

        default:
            var led = new five.Led(13);
        break;
    }
    led.on();
    res.sendStatus(200);
}


function getLed(req, res) 
{
    var control = req.params._id;
    
    switch(control)
    {
        case '1':
            res.json(l1);
        break;
    
        case '2':
            res.json(l2);
        break;
    
        case '3':
            res.json(l3);
        break;

        default:
            
        break;
        
    }
}

function apagar(req, res) 
{
    var control = req.params._id;
    switch(control)
    {
        case '1':
            l1 =0 ;
            var led = new five.Led(3);
        break;

        case '2':
            l2 =0 ;
            var led = new five.Led(5);
        break;

        case '3':
            l3=0;
            var led = new five.Led(7);
        break;

        default:
            var led = new five.Led(13);
        break;
    }
    led.off();
    res.sendStatus(200);
}









module.exports = router;









function authenticate(req, res) {
    userService.authenticate(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user);
            } else {
                // authentication failed
                res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function register(req, res) {
    userService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    userService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getCurrent(req, res) {
    userService.getById(req.user.sub)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    userService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    userService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}