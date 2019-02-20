const app = require('express')();

app.get('/', (req, res) => {
    res.send({greeting: 'Hello world!'});
})

app.get('/users', (req, res) => {
    res.send([  {name: 'Chris', password: 'woof'}, 
                {name: 'Gabe', password: 'bark'}, 
                {name: 'Kitten', password: 'meow'}])
})

app.listen(3000);

module.exports = {
    app
}