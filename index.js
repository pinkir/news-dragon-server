const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json');

app.get('/', (req, res) =>{
    res.send('dragon is running');
});

app.get('/categories', (req, res) =>{
    res.send(categories);
});

app.listen(port, () =>{
    console.log(`'dragon api is running on', ${port}`)
})