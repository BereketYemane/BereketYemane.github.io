const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('CookiePage', {
        cookies: req.cookies
    })
});

app.post('/addCookie', (req, res) => {
    res.cookie(req.body.key, req.body.value);
    res.redirect('/');
});

app.use((req, res) => {
    res.status(404).send({
    status: 404,
    error: "Not Found"
    })
   })
   
app.listen(3000);