const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);

const port = process.env.PORT || 5000;

const io = require("socket.io")(http, {
  cors: {
    origins: '*',
  },
});

io.on('connection', function(socket){ 
    socket.on('get-message', text => {
      io.emit("customEmit", text);
    } )
})

http.listen(port, () => {
  console.log('listening on *:' + port);
});