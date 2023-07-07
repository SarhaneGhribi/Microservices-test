const express = require ('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT=3001;
const BACKUP=4000;
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res)=>{res.json('response is sent')});
app.get('/todos', (req, res)=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(response =>(res.json(response.data)))
    .catch(err =>console.error(err))
});
app.get('/users', (req, res)=>{
    axios.get('http://localhost:3002/users')
    .then(response =>(res.json(response.data)))
    .catch(err => axios.get('http://localhost:3003/users')
    .then(response =>(res.json(response.data)))
    .catch(err =>console.error(err)))
});
app.get('/products', (req, res)=>{
    axios.get('http://localhost:3005/products')
    .then(response =>(res.json(response.data)))
    .catch(err => axios.get('http://localhost:3006/products')
    .then(response =>(res.json(response.data)))
    .catch(err =>console.error(err)))
});
app.get('/cart', (req, res)=>{
    axios.get('http://localhost:3007/cart')
    .then(response =>(res.json(response.data)))
    .catch(err => axios.get('http://localhost:3008/cart')
    .then(response =>(res.json(response.data)))
    .catch(err =>console.error(err)))
});
app.post('/addtocart', (req, res)=>{
    axios.post('http://localhost:3007/addtocart',{productid:req.body.productid,userid:req.body.userid})
    .then(response =>(res.json(response.data)))
    .catch(err => axios.post('http://localhost:3008/addtocart',{productid:req.body.productid,userid:req.body.userid})
    .then(response =>(res.json(response.data)))
    .catch(err =>console.error(err)))
});
app.listen(PORT,()=>console.log(`listening on port: ${PORT}`)).on('error',()=>{app.listen(BACKUP,()=>console.log(`listening on port: ${BACKUP}`))});