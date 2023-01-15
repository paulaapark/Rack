const express = require('express');
const app = express();
const config = require('./config');

const User = require('./models/user');
const Rack = require('./models/rack');

const cors = require('cors');



const bcrypt = require('bcrypt');
const saltRounds = 10;
const multer = require("multer");

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('uploads')); //This makes our uploads folder public


//Associations
User.hasMany(Rack, {
    foreignKey: 'User_id'
});
Rack.belongsTo(User);

// Configure Multer
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


// app.get('/signup', function(req, res){ 
// });

app.post('/signup', async (req, res) => {
    const { FirstName, LastName, Email, Password} = req.body;
    const hash = await bcrypt.hash(Password, 10);
    const user_data = { FirstName, LastName, Email, Password: hash};

    User.create(user_data).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });

    // bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
        
    //     let user_data = {
    //         FirstName: req.body.FirstName,
    //         LastName: req.body.LastName,
    //         Email: req.body.Email,
    //         Password: hash
    //     };

    //     User.push(user_data).then((result) => {
    //         res.status(200).send(result);
    //     }).catch((err) => {
    //         res.status(500).send(err);
    //     });

    // });    
});

app.post('/login', async (req, res) => {

    const {Email, Password} = req.body;
    const user_data = {
        where: {Email} // {email: email}
    }
    
    //Find a user that corresponds to the email
    User.findOne(user_data).then((result) => {
        if(result){
            console.log(result);
            bcrypt.compare(Password, result.Password, function(err, output) {
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


app.get('/user', function(req, res){
    // User.findAll(user_data)
});

app.get('/rack', function(req, res){

});


app.get('/', function(req, res){ 
});

app.listen(3000, function(){
    console.log('Server running on port 3000...')
});
