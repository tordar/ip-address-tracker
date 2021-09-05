// require('dotenv').config()

// console.log(process.env)

var http = require('http');

var ip = '8.8.8.8';
var api_key = process.env.IPifyPasskey;
var api_url = 'https://geo.ipify.org/api/v1?';

var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;

http.get(url, function(response) {
    var str = '';
    response.on('data', function(chunk) { str += chunk; });
    response.on('end', function() { console.log(str); });
}).end();