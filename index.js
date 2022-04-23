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
    let obj = {
        username: user.username,
        avatar: user.avatar
    };
    if(obj.username === undefined || obj.avatar === undefined || obj.username === '' || obj.avatar === ''){
        res.status(400).send('Todos os campos são obrigatórios!');
    } else {
        users.push(obj);
        res.send('OK');
    }
});

app.post('/tweets', (req, res) => {
    let tweet = req.body;
    let obj = {
        username: tweet.username,
        tweet: tweet.tweet
    };
    if(obj.username === undefined || obj.tweet === undefined || obj.username === '' || obj.tweet === ''){
        res.status(400).send('Todos os campos são obrigatórios!');
    } else {
        users.push(obj);
        res.send('OK');
    }
});

app.get('/tweets', (req,res) => {
    if(tweets.length > 10){
        newest = [];
        for(let i = tweets.length - 1; i >= 0; i--){
            if(newest.length == 10){
                break;
            } else {
                newest.push(tweets[i]);
            }
        }
        res.send(newest);
    } else {
        res.send(tweets);
    }
});

app.listen(5000);