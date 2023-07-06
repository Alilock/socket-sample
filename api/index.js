const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});



io.on('connection', (socket) => {

    console.log(`socket`, socket.id);

    socket.on('chatmessage', (msg) => {

        io.emit(`chatmessage2`, msg)

    });


});


server.listen(3000, () => {
    console.log('listening on *:3000');
});



