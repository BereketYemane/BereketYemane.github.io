const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
 const date = new Date();
 const hours = date.getHours();
 let style ="night.css";
 if (hours >= 6 && hours < 18) {
     style = "day.css";
 }
 res.render("index", {
 time: date.toTimeString(),
 style:style
 });
});
app.listen(3000);