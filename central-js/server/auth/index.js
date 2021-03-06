'use strict';

var express = require('express');
var passport = require('passport');
var request = require('request');
var url = require('url');
var config = require('../config');
var accountService = require('../api/bankid/account.service.js');
var auth = require('./auth.service');

// Passport Configuration
require('./bankid/passport').setup(config, url, accountService);

var router = express.Router();

router.use('/bankID', require('./bankid'));
router.get('/isAuthenticated', auth.isAuthenticated(), function(req,res){
    res.status(200);
    res.end();
});

module.exports = router;