/**
 * Created by Administrator on 2018/10/10.
 */
var express=require('express');
var cookieParser=require('cookie-parser');
var app=express();
app.use(cookieParser());
//当时用了cookieParser这个中间件以后，会多出两个方法和属性
app.get('/',function(req,res){
    //req.cookies指的就是用户提交过来的cookie对象
    var isVisited=req.cookies.isVisited;
    if(isVisited){
        res.send('欢迎老朋友1');
    }else{
        //res.cookie这个方法其实是没有的，这个是cookieParsesr里面带的
        res.cookie('isVisited','1',{maxAge:20*1000});
        res.send('欢迎新朋友1');
    }
})
app.listen(8080);