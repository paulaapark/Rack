const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const multer = require("multer");

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('uploads')); //This makes our uploads folder public

//Configure Multer
let storage = multer.diskStorage({
    destination: (req, file, cb) => {    
      cb(null, './uploads'); //Defining where uploads images should be stored
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); //Name of the uploaded file
    }
  });
  let upload = multer({
    storage: storage
  });

config.authenticate().then(function(){
    console.log('Database is connected.');
}).catch(function(err){
    console.log(err);
});


app.post('/signup', function(req, res){

    let plainPassword = req.body.password;

    bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
        
        let user_data = {
            first_name: req.body.FirstName,
            last_name: req.body.LastName,
            email: req.body.email,
            password: hash
        };

        User.create(user_data).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });

    });    
});

app.post('/login', function(req, res){

    let email = req.body.email;
    let password = req.body.password;
    let user_data = {
        where: {email} // {email: email}
    }
    
    //Find a user that corresponds to the email
    User.findOne(user_data).then((result) => {

        if(result){
            console.log(result);
            bcrypt.compare(password, result.password, function(err, output) {
                console.log(output);
                if(output){
                    res.status(200).send(result);
                }else{
                    res.status(400).send('Incorrect password.');
                }
            });            
        }
        else{
            res.status(404).send('User does not exist.');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
        
});





app.get('/', function(req, res){ 
})

app.listen(3000, function(){
    console.log('Server running on port 3000...')
});
