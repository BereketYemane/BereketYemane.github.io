const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

const PRODUCTS = [
    { id: 1, name: 'Sugar', description: 'its so sweet', price: 10 },
    { id: 2, name: 'Salt', description: 'you might find it sour ', price:20 },
    { id: 3, name: 'Mango', description: 'its awesome', price: 25 }
]

// hardcoded array of products in a cart .....
const CART=[
    { name: 'Orange', price: 15, quantity: 2 },
    { name: 'Grape', price: 11, quantity: 4 }];
var prodIndex;
app.get('/product/:id', (req, res) => {
     prodIndex= PRODUCTS.findIndex(pr=>pr.id===parseInt(req.params.id));
     if(prodIndex<0){
        res.send("The requested product is not available");
     }
     else{
        res.render("product", {
            id:PRODUCTS[prodIndex].id,
            name:PRODUCTS[prodIndex].name,
            description:PRODUCTS[prodIndex].description,
            price:PRODUCTS[prodIndex].price
            });
     }
});

app.post('/addToCart', (req, res) => {
    //dynamically adding products to cart
    CART.push(PRODUCTS.find(e => e.id === parseInt(req.body.id)));
    res.render("shoppingcart", {
        products: CART
    });
});

app.listen(3000);