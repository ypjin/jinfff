
//require('foo');
var http = require('http');
var child_process = require('child_process');
var os = require('os');
var ifaces = os.networkInterfaces();

//var ttys = require('ttys');
var util = require('util'),
    clone = require('clone');

//var logger = require('acs').logger;

//setInterval(makeLog, 1);
//process.exit();
//asdgsdaadsf;

//var invalidModule = require('invalidMDL')

var count = 0;

/*
setTimeout(function(){
    throw 'abc';
}, 10000);
*/

process.on('SIGTERM', function(exitCode){

    console.log('======================================>');
    console.log('I am a free app and got SIGTERM signal. exitCode is ', exitCode);


    process.exit();
});


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

    count++;

    var a, b;

    a = { foo: { bar: 'baz' } };  // initial value of a

    b = clone(a);                 // clone a -> b
    a.foo.bar = 'foo';            // change a

    //console.log(a);               // show a
    //console.log(b);               // show b
    //console.log('TTY', process.stdout.isTTY);



    var response = '\nWelcome to Node.ACS app running in docker! jinfff2\n';

    for(var key in process.env) {
        response += ('\n' + key + ' = ' + process.env[key]);
    }

//    response += ('\n' + util.inspect(b));
//    response += '\n\n';
//    response += ('TTY: ' + process.stdout.isTTY);



    var ip_address = null;
    try {
        ip_address = req.headers['x-forwarded-for'];
        if(!ip_address)
            ip_address = req.connection.remoteAddress;
    }
    catch ( error ) {
        ip_address = req.connection.remoteAddress;
    }


    response += '\n';
    response += ('remote ip: ' + ip_address);
    response += '\n';
    response += process.version;
    response += '\n';

    //response += JSON.stringify(ifaces);

//    response += '\n';
//    response += ('Server IP: ' + getLocalIP());
//    response += '\n';

    runWget(function(result) {
        response += result;
        response += '\n';
        response += ('request count ' + count + '\n');
        response += 'inplace update 12/25/2015\n';
        res.end(response);
    });



}).listen(process.env.PORT || 80);


function makeLog() {

    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');
    console.log('-------> This is log wrote by jinfff: blablabla, blablabla, blablabla, blablabla, blablabla, blablabla');

}


function getLocalIP() {

    var result;

    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0
            ;

        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }

            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                result = ifname + ':' + alias + ' - ' + iface.address;
            } else {
                // this interface has only one ipv4 adress
                result = ifname + ' - ' + iface.address;
            }
        });
    });

    return result;
}


function runWget(callback) {
    var result = '\n\n Result of wget:\n';
    child_process.exec('wget', {}, function(error, stdout, stderr) {

        result += ('\n[error]:\n' + error);
        result += ('\n[stdout]:\n' + stdout);
        result += ('\n[stderr]:\n' + stderr);

        callback(result);
    });

}


//logger.info('started');