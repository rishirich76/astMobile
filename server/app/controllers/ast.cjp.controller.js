var express = require('express');
var app = express();
// var apiai = require('apiai');
// var appai = apiai("fcc25b5f91f14a8c8f7007b9dffc3407");

module.exports.pnrdata = function(req, res) {
    console.log("Reached to Node server#########");
    var resText = "Reached to Node server";
    if (isNullVal(req) || isNullVal(req.body) || isNullVal(req.body.pnr)) {
        res.json({
            success: false,
            error: {
                errorcode: "AST-CJP-001",
                errorDescription: "Enter valid PNR Data."
            }
        });
    } else {
        res.json({
            success: true,
            pnrdata: {
                pnr: "ABCD123",
                pnrcreationdate: "15JUN2017",
                passengers: [{
                        passenger: {
                            passengername: {
                                firstname: "Joseph",
                                lastname: "Mishra",
                                title: "Mr",
                                fullname: "MISHRA/JOSEPHMR"
                            },
                            tier: "PLATINUM",
                            loungefact: "LOUNGE-F",
                            agentactioncount: {
                                priorityactioncount: "5",
                                nonpriorityactioncount: "2"
                            }

                        }
                    }

                ]

            }
        });
    }

    function isNullVal(val) {
        if (undefined == val || null == val) {
            return true;
        }
        return false;
    }
}