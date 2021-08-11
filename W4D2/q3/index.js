const express = require('express');
const path = require('path');
const url = require('url');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing',
}));

const PRODUCTS = [
    { id: 1, name: 'Product 1', description: 'Description', price: 3000 },
    { id: 2, name: 'Product 2', description: 'Description', price: 5000 },
    { id: 3, name: 'Product 3', description: 'Description', price: 7000 }]

app.use(function (req, res, next) {
    if (!req.session.cart) {
        req.session.cart = {};
    }
    next();
});

app.get('/product/1', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(e => e.id === 1),
        total: getTotalCount(req.session.cart)
    });
});

app.get('/product/2', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(e => e.id === 2),
        total: getTotalCount(req.session.cart)
    });
});

app.get('/product/3', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(e => e.id === 3),
        total: getTotalCount(req.session.cart)
    });
});

app.post('/addToCart', (req, res, next) => {
    let item = req.body;

    let exist = req.session.cart[item.name];
    if (exist) {
        exist.quantity += 1;
    } else {
        item.quantity = 1;
        req.session.cart[item.name] = item;
    }

    res.status(200);
    res.json({ "total": getTotalCount(req.session.cart) });
});

app.get('/', (req, res, next) => {
    res.render("shoppingcart", {
        products: req.session.cart,
        total: getTotalCount(req.session.cart)
    });
});

function getTotalCount(obj) {
    let quantity = 0;
    for (key in obj) {
        quantity += obj[key].quantity;
    }
    return quantity;
}

app.listen(3000);