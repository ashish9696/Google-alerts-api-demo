const alerts = require('google-alerts-api');
const { HOW_OFTEN, DELIVER_TO, HOW_MANY } = alerts;

var restify = require('restify');
// Setup Restify Server
alerts.configure({
    mail: 'am67663@gmail.com',
    password: 'ashish9696598503'
});

const fs = require('fs');

var json2xls = require('json2xls');


// Setup Restify Server
// Setup Restify Server
var http = require('http');
 
alerts.sync((err) => {
    if(err) return console.log(err);
    const alertList = alerts.getAlerts();
	console.log(alertList);
    alertList.forEach(alert => printAlertInfo);
	var xls = json2xls(alertList);
	fs.writeFileSync('data.xlsx', xls, 'binary');
});
 
function printAlertInfo(alert){
    console.log('name:', alert.name);
    //'How Many' property information:
    if (alert.howMany === HOW_MANY.BEST) {
    	console.log('How many: Only the best results');
    } else if (alert.howMany === HOW_MANY.ALL) {
    	console.log('How many: All Results');
    }
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
}).listen(8000);

