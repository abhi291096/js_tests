
//gets list of browsers
var https = require('https')

var username = 'abhishekmordani2'
var passw = 'yNdm9XxyX7esbsk4Uqg6'

var options = {
host: 'api.browserstack.com',
port: 443,
path: '/automate/browsers.json',
// authentication headers
headers: {
'Authorization': 'Basic ' + new Buffer(username + ':' + passw).toString('base64')
}
};

//this is the call
request = https.get(options, function (res) {
var body = "";
res.on('data', function (data) {
body += data;
});
res.on('end', function () {
//here we have the full response, html or json object
console.log(body);
})
res.on('error', function (e) {
onsole.log("Got error: " + e.message);
});
});




















