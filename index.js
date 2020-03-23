const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Welcome to nexmo test');
});

app.get('/webhooks/answer', (req, res, next) => {
    const to = req.query.to;
    ncco = [{
        "action": "connect",
        "from": "17082310473",
        "timeout": 15,
        "machineDetection": "hangup",
        "endpoint": [{
            "type": "phone",
            "number": to
        }]
    }];
    res.json(ncco);
});

app.get('/webhooks/event', (req, res, next) => {
    let { status, uuid } = req.query;
    console.log(req.query);
});

const server = http.createServer(app);

const PORT = 443;
server.listen(PORT, () => {
    console.log('Server is running...');
});
