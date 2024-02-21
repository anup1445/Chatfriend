
//get the username and the room they are joined to
const {username,room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})
console.log(username,room);
const socket = io();
//join chatroom
socket.emit("joinRoom", {username, room});

let chat_form = document.getElementById("chat-form");
const messages = document.getElementById("msg");
let chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const usersList = document.getElementById("users");

let btn = document.querySelector(".btn");
//get room users
socket.on('roomUsers',({room,users})=> {
    outputRoomName(room);
    outputUsers(users);
})
//add the user to the user sidemenu
btn.addEventListener("submit", (e)=> {
    e.preventDefault();
    const li = document.createElement('li');
    li.textContent = username;

    document.getElementById("users").appendChild(li);
})
socket.on("message", (message) => {
    dislpayMsg(message);
    
    //scroll to height
    chatMessages.scrollTop = chatMessages.scrollHeight; 

})

//Message submit
chat_form.addEventListener("submit", (e) => {
    e.preventDefault();
    //get message text
    let msg = messages.value;
    //emit the chat message to the server
    socket.emit("chatMessage",msg);
    document.getElementById('msg').value = ''
})

function dislpayMsg(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`
document.querySelector('.chat-messages').appendChild(div);
 console.log(message);
}

//add room to DOM 
function outputRoomName(room){
    roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
    usersList.innerHTML = '';
    users.forEach((user) => {
      const li = document.createElement('li');
      li.innerText = user.username;
      usersList.appendChild(li);
    });
  }
  
