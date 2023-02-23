
var express = require('express');
var app = express();

app.use(express.static('public'))
app.get('/temperature', function (req, res) {
   res.send('Weather API');

   app.get('/Fahrenheit', function (req, res) {
    res.send('Weather API');
    
    app.get('/Cloudy', function (req, res) {
      res.send('Weather API');

      app.get('/PrecipitationChance', function (req, res) {
        res.send('Weather API');
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
const http = require('http');
const wa = require('./weather.js');
const url = required('url');
const fs = required('fs');
const weather = required('./readweather.js');
const uc = required('uppr-case');
http
  .createServer(function (req, res) {
    .get('https://jsonplaceholder.typicode.com/todos/')
    .then(function (respones) {
      console.log(response.data);
    }
    res.end();
    s.readFile('demofile1.html', function(err, data) {    res.writeHead(200, {'Content-Type': 'text/html'});    res.write(data);    return res.end();  });

    res.writeHead(200, {'Content-Type': 'text/html'});  
    var q = url.parse(req.url, true).query;  
    var txt = wa.weather + t.temp + "90.5" + u.Unit + "Fahrenheit" + c.Cloudy + "false" + p.Precipitation + "0";
    (wa.weather() + t.Temp() + u.Unit() + c.Cloudy() + p.Precipitation());
    return res end;

    fs.writeFile('mynewfile.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
  })
  .listen(8080);