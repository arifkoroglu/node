const express = require('express');
const theme_routes = require('./routes/web');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(theme_routes);

const server = app.listen(5000);
const io = require('socket.io').listen(server);

User.find()
.then(users=>{
    io.on('connection', socket => {
        socket.emit('post',{
            payload:users,
        }); // emit an event to the socket
        io.emit('broadcast', /* … */); // emit an event to all connected sockets
       
    });
});


mongoose.connect('mongodb+srv://arifkoroglu:JaXUGIVzXCkPQKuO@nodeguide.efkco.gcp.mongodb.net/nodeguide?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
.then(result=>{
})
.catch(err=>{
    console.log(err);
})
