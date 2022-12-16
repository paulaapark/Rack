const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


config.authenticate().then(function(){
    console.log('Database is connected.');
}).catch(function(err){
    console.log(err);
});


app.get('/', function(req, res){ 
})

app.listen(3000, function(){
    console.log('Server running on port 3000...')
});
