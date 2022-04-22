import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets =[];
let newest = [];

app.post('/sign-up', (req, res) => {
    let user = req.body;
    users.push(user);
    res.send('OK');
});

app.post('/tweets', (req, res) => {
    let tweet = req.body;
    tweets.push(tweet);
    res.send('OK');
});

app.get('/tweets', (req,res) => {
    if(tweets.length >= 10){
        for(let i = tweets.length - 1; i >= 0)
    }
});

app.listen(5000);