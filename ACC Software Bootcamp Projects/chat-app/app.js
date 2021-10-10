// Require express and initialize it
const express = require('express')
const app = express()

// Declare a port variable
const port = process.env.PORT || 3000

// Require socket.io and pass the server object to it
const io = require('socket.io')(
    app.listen(port, function(){
        console.log('App is running on ' + port)
    })
)

const newUserJoined = nickname => {
  return `
    <div class="chat_new-user-joined">
      <i>${nickname} has joiend the chat</i>
    </div>
  `;
};

const newUserMessage = (user, message) => {
  return `<div class="chat_user-message">
            <div class="chat_user-nickname">${user}</div>
            <div class="chat_user-text">
              ${message}
            </div>
          </div>`
}

// Tell our app to use our client folder as static code
app.use(express.static('client'))

// Set up a home route and send the client folder

// Create a socket io connection and handle emissions
// that are received or to be sent out
io.on('connection', function (socket) {
  console.log('A new chat user joined')
  // listen to new user joining the chat
  socket.on('New User', function (nick) {
    console.log('New user added: ', nick)
    io.emit('New User', nick)
  })
  socket.on('New User', user => {
    chatMessages.innerHTML += newUserJoined(user)
  })
  socket.on('New Message', message => {
    chatMessages.innerHTML += newUserMessage (message.nickname, message.message)
  })
})

