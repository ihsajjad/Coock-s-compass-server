const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')
const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res)=> {
    res.send('Cook compass server is running')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs);
})

app.get('/chefs/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const chef = chefs.find(chef => parseInt(chef.id) === id);
    console.log(id)
    res.send(chef);
})

app.listen(port)