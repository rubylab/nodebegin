var http = require("http")
var url = request("url")

function start(){

function onRequest(request,response){
  var pathname = url.parse(request.url).pathname;
  console.log("Request path for" + pathname  +"received" );
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello world");
  response.end();

}
  http.createServer(onRequest).listen(8888);
  console.log("server has stated  8888");
}

exports.start = start;