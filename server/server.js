var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
//var config = require('./app/config/config');


//ALL CONTROLLERS=================================================================
var astCjpCtrl = require('./app/controllers/ast.cjp.controller');
// var astVoiceCtrl = require('./app/controllers/ast.voice.controller');

//================================================================================

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 5001;
var router = express.Router();
//===============================API HIT HERE=============================
router.post('/pnr', astCjpCtrl.pnrdata);
// router.post('/speechtext', aaCtrl.login);
// router.post('/passengeraction', astCjpCtrl.paxaction);

//========================================================================

app.use('/ast', router);
app.listen(port);
console.log('Server started on port ' + port);