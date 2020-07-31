const express= require('express');
const app=express();
const bodyParser=require('body-parser');
const exphbs=require('express-handlebars');

const path=require('path');

app.use(express.static(path.join(__dirname,'public')));
app.engine('handlebars',exphbs({defaultLayout: 'home'}));
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
  res.render('home')
});
app.get('/home/products',(req,res)=>{
  res.render('home/products')
});
app.get('/home/postA',(req,res)=>{
  res.render('home/postA')
});
app.get('/home/postB',(req,res)=>{
  res.render('home/postB')
});
app.get('/home/Contact',(req,res)=>{
  res.render('home/contact')
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




var port = process.env.PORT || 8080;
app.listen(port,()=>{
  console.log(`listening to port `+port);
});
