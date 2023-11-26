const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('Client has connected!')
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('Server received: %s', data);
    });

    ws.send('Hello! Websocket is OK!');

    setInterval(() => {
        ws.send('NHN TV: ' + Math.random());
    }, 1000);
});