const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    return res.send('Welcome to nexmo test');
});

app.get('/webhooks/answer', (req, res, next) => {
    const to = req.query.to;
    ncco = [{
        "action": "connect",
        "from": "17082310473",
        "eventUrl": ["https://nexmo-dialer.herokuapp.com/webhooks/event"],
        "timeout": 15,
        "endpoint": [{
            "type": "phone",
            "number": to
        }]
    }];
    return res.json(ncco);
});

app.get('/webhooks/event', (req, res, next) => {
    let { status, uuid } = req.query;
    console.log(req.query);
});

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log('Server is running...');
});
