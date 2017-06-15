var express = require('express');
var app = express();
var apiai = require('apiai');
var appai = apiai("fcc25b5f91f14a8c8f7007b9dffc3407");
// var User = require('../mongomodels/User');

module.exports.login = function(req, res) {
    var resText = "Reached to Node server";

    if (checkNullValues(req)) {

        res.json({
            resolvedtext: "Request acknowledged"
        });
    } else {
        console.log("Request came to Node server , : " + req + "Data :: " + req.data);
        res.json({
            resolvedtext: "Invalid request data"
        }, 500);
    }

    function checkNullValues(val) {
        if (undefined == val || null == val) {
            return true;
        }
        return false;
    }
}

module.exports.test = function(req, res) {
    res.json({
        resolvedtext: "Server is Up"
    }, 200);
}

module.exports.speech = function(req, res) {
    console.log("Request came to Node server --> speech service , : " + req.method + "Data :: " + req.data);
    console.log("\n Request in JSON ::  " + req.body.speech);
    var request = appai.textRequest(req.body.speech, {
        sessionId: '6c8ca115-e164-4f64-831a-61aa7349120d'
    });

    request.on('response', function(response) {
        res.json({
            resolvedtext: response
        }, 200);
        console.log(response);
    });

    request.on('error', function(error) {
        res.json({
            resolvedtext: "Unable to understand"
        }, 500);
        console.log(error);
    });

    request.end();
}