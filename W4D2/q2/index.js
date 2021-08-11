const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

const Answers = ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
app.get('/', (req, res)=>{
    res.render('index')
})
app.post("/8ball", (req, res) => {
    if (!req.body.question) {
        res.status(400);
        res.end();
    }
    res.status(200);
    res.json({ 'answer': Answers[Math.floor(Math.random() * Answers.length)] });
});
app.listen(3000);