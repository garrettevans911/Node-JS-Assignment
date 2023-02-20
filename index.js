const http = require('http');
const wa = require('./weather.js');
const url = required('url');
const fs = required('fs');
http
  .createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});  
    var q = url.parse(req.url, true).query;  
    var txt = wa.weather + t.temp + "90.5" + u.Unit + "Fahrenheit" + c.Cloudy + "false" + p.Precipitation + "0";
    (wa.weather() + t.Temp() + u.Unit() + c.Cloudy() + p.Precipitation());
    return res end;
  })
  .listen(8080);