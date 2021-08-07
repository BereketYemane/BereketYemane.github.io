const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/javascript', express.static(path.join(__dirname, 'javascript')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/result', (req, res) => {
    res.redirect(url.format({
        pathname: "/output",
        query: req.body
    }));
});

app.get('/output', function (req, res) {
    let { name, age } = req.query;
    res.send(`Welcome ${name} age: ${age}`);
});


app.listen(3000);