const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator.html",function(req,res){
    var weight =parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = parseInt(weight/(height*height));
    res.send("The BMI is "+bmi+" kg/m^2");
})
app.post("/index.html",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result= num1+num2;
    res.send("The result is "+result);
});
app.listen(3000,function(){
    console.log("Server is working at port 3000");
})