const express = require('express')
var path = require("path");

const app = express()
//static file 
app.use(express.static('public')) 
app.use('/CSS' , express.static(__dirname + 'public/CSS'))
app.use('/audio' , express.static(__dirname + 'public/audio'))
app.use('/images' , express.static(__dirname + 'public/images'))
app.use('/js' , express.static(__dirname + 'public/js'))


var requestTime = function (req, res, next) {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    console.log(day);
    if ((day < 30) && (9 < hour < 17 )){
        res.send("sorry our site note work ")
    }else 
    next()
  };
 
  



//  app.use(requestTime)

app.get('/' ,(req,res)=>{
    res.sendFile(__dirname +'/views/index.html')
})

app.get('/How' ,(req,res)=>{
    res.sendFile(__dirname +'/views/How.html')
})
app.get('/NeedtoBe' ,(req,res)=>{
    res.sendFile(__dirname +'/views/NeedtoBe.html')
})
app.get('/roleOf' ,(req,res)=>{
    res.sendFile(__dirname +'/views/roleOf.html')
})



app.listen(3000 , (err)=>{
    if (err){
        throw err 
    }else{
        console.log("server work...")
    }
} )