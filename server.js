const express = require("express");
const http = require("http");
const path = require("path");

const mongoose = require("mongoose");
const configDb = require("./config/db.json");

// ceci est un exemple :
const contactRouter = require('./routers/contact');
const hotelRouter = require('./routers/hotel');
const chambreRouter = require('./routers/chambre');

const app = express();
const server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ceci est un exemple :
app.use('/contact', contactRouter);
app.use('/hotel', hotelRouter);
app.use('/chambre', chambreRouter);

mongoose.connect(configDb.mongo.uri);

const io = require('socket.io')(server); // Create a WebSocket server
io.on('connection', (socket) => { // Listen for a connection event
    console.log('A user connected'); // Log a message to the console
    
    io.emit('msg', { username: 'System', message: 'A user connected' }); // Emit a chat message event


    socket.on('msg', (data) => { // Listen for a chat message event
        io.emit('msg', data); // Emit a chat message event
    });

    socket.on('disconnect', () => { // Listen for a disconnect event
        console.log('A user disconnected'); // Log a message to the console
        io.emit('msg', { username: 'System', message: 'A user disconnected' }); // Emit a chat message event
    });
});

app.get('/hotel', (req, res) => {
    res.render('hotel');
});

server.listen(3000, ()=>{
    console.log('server is running on http://localhost:3000');
});
