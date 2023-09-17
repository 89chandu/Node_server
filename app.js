const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.get('/add-product', (req, res, next) => {
    console.log('In another middleware GET!');
    res.send('<h1>Add Product Page</h1>  <form action="/add-product" method="POST"> \
              <input type="text" name="productName" placeholder="Product Name"><br> \
              <input type="text" name="productSize" placeholder="Product Size"><br> \
              <button type="submit">Submit</button></form>');
});

app.post('/add-product', (req, res, next) => {
    console.log('In another middleware POST!');
    const productName = req.body.productName;
    const productSize = req.body.productSize;
    console.log('Product Name:', productName);
    console.log('Product Size:', productSize);
    res.redirect('/'); // Redirect to the home page
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
