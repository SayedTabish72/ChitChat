const { Socket } = require('socket.io');

// node server which will handel all socket.io //
const io = require('socket.io')(5500)

const users = {};

io.on('connection', socket =>{
    socket.on('new-user-joined', Name =>{
    console.log("new-user", Name)
    users[socket.id]= Name;
    socket.broadcast.emit('user-joined', Name);
});

socket.on('send', message =>{
    socket.broadcast.emit('receive', {message: message, Name: user[socket.id]})
});
});