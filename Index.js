const engine = require("express-handlebars").engine
const express = require('express'); 
const app = express();
port = 3993

app.engine("handlebars", engine())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', function(req,res){
    res.render('home')
})



app.post('/form/signup', function(req, res){
    console.log(req.body)
    res.redirect('/')
})


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});