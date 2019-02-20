const express = require('express');
const app = express();
const helmet = require('helmet');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

app.use(helmet());
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT)

module.exports = app;