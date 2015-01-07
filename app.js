var http = require('http');

//setTimeout(abc, 5000);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var response = '\nWelcome to Node.ACS 1.0.3-1!\n';

  for(var key in process.env) {
      response += ('\n' + key + ' = ' + process.env[key]);
  }

  response += '\n\n';


  res.end(response);


}).listen(process.env.PORT || 8080);
