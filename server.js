var http=require("http");
var url=require("url");
var qstring=require("querystring");
var fs=require("fs");
var m=require("./module.js");
function process_requests(req,res)
{
	var p=url.parse(req.url);
	console.log(p);
	switch(p.pathname){
		case '/':
			fs.readFile("./public/index.html",function(error,data){
				if(error)
					console.log(error);
				else
					res.end(data);
			})
			break;
		case '/operation':
			var d=qstring.parse(p.query);
			res.write("Area :"+m.CircleArea(d.num) );
			res.write("\ncircumference :"+m.circumference(d.num));
			res.end();
			break;
	}
	
}
var server=http.createServer(process_requests);
server.listen(8081);
console.log("server 8081 sarted");