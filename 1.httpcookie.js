var http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring');
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='/write'){
        var ts=new Date(Date.now()+20*1000).toGMTString();
        // console.log(Date.now());
        res.setHeader('Set-Cookie','name=zfpx2; Expires='+ts);
        res.end('write');
    }else if(pathname=='/read'){
        //读取请求头中的cookie
        var cookie=req.headers.cookie;
        var cookieObj=querystring.parse(cookie,';');
        console.log(cookieObj);
        res.end('read3333');
    }

}).listen(8081);
