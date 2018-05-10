var http = require('http');
var https = require('https');
var util = require('util');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  //host: 'www.random.org',
  //path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
  host: 'www.random.org',
  path: '/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new'
};

callback = function(response) {
  var str = '';
  
  console.log(util.inspect(response));
  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
      console.log('on1');
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
      console.log('on2');
    console.log(str);
  });
}

console.log("started");
https.request(options, callback).end();