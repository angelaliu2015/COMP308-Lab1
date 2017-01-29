//connect server
let express=require('express');
let app=express();
let path=require('path');

//viewed at http://localhost:8080
app.get('/',function (req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

//viewed about page at http://localhost:8080
app.get('/about',function (req,res){
    res.sendFile(path.join(__dirname + '/about.html'));
});

//viewed contact page at http://localhost:8080
app.get('/contact',function (req,res){
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.listen(8080);

