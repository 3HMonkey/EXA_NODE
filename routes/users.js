var express = require('express');
var router = express.Router();
var DB = require('./db.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    DB.getAllUsers(function (err, results) {
        if (err) {
            console.log('Scotty, we have an error!!');
            return;
        }
        if (results != null) {
            console.log(results);
            res.send(results);
        }
    });
});

module.exports = router;
