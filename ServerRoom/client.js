const socket = io('http://localhost:5500');

const form = document.getElementById('send__item');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
 
const name = prompt("Enter Your Name To Join");
socket.emit('new-user-joined', Name)