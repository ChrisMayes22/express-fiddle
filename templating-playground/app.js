const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        const dotIndex = Array.prototype.lastIndexOf.call(file.originalname, '.');
        const extension = file.originalname.split('').slice(dotIndex).join(''); 
        cb(null, req.cookies.username + extension);
    }
});

const upload = multer({storage})


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
    res.render('login');
})
app.get('/welcome', (req, res, next) => {
    res.render('welcome', {
        username: req.cookies.username
    });
})

app.post('/process_login', (req, res, next) => {
    const db = JSON.parse(fs.readFileSync('./db-mock/db.json'))
    const username = req.body.username;
    const password = req.body.password;
    if(db.filter(user => user.username === username && user.password === password).length > 0){
        res.cookie('username', username);
        res.redirect('/welcome');
    } else {
        res.send('<h1>Wrong Password</h1>');
    }
})

app.post('/process_upload-image', upload.single('user-image'), (req, res, next) => {
    console.log(req.file);
    res.redirect('/welcome');
})

app.get('/welcome', (req, res, next) => {
    res.render('welcome');
})

app.listen(3000);