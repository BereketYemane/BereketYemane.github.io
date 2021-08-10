const express = require('express');
const session=require('express-session');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(session({
    resave:false, //don't save session if unmodified
    saveUninitialized:false, //don't create session until something stored
    secret:'salt session setup by bereket'
}));

const PRODUCTS = [
    { id: 1, name: 'Sugar', description: 'its so sweet', price: 10 },
    { id: 2, name: 'Salt', description: 'you might find it sour ', price:20 },
    { id: 3, name: 'Mango', description: 'its awesome', price: 25 }
]

app.use(function (req, res, next) {
    if (!req.session.CART) {
        req.session.CART = {};
    }
    next();
});

app.get('/product/1', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(prod => prod.id === 1)
    });
});

app.get('/product/2', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(prod => prod.id === 2)
    });
});

app.get('/product/3', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(prod => prod.id === 3)
    });
});

app.post('/addToCart', (req, res, next) => {
    let item = req.body;
    let exist = req.session.CART[item.name];
    if (exist) {
        exist.quantity += 1;
    } else {
        item.quantity = 1;
        req.session.CART[item.name] = item;
    }
    res.redirect( "/cart");
});

app.get('/cart', (req, res, next) => {
    res.render("shoppingcart", {
        products: req.session.CART
    });
});

app.use((req, res) => {
    res.status(404).send({
    status: 404,
    error: "Not Found"
    })
   })

app.listen(3000);