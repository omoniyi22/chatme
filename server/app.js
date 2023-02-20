const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4001;
const cors = require('cors')
const path = require('path')
const WebSocket = require('ws');

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const wss = new WebSocket.Server({ port: 3001 })

const users = []

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

wss.on('connection', (ws) => {
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length
        users.push({ name: data.name, id: index + 1 })
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break
      }
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break
      default:
        break
    }
  })
  ws.on('close', () => {
    users.splice(index, 1)
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
})


if (process.env.NODE_ENV !== 'production') {
  const build_path = path.join(__dirname, '..', 'build')
  console.log({ build_path })
  app.use(express.static(build_path))
  app.get('/*', (req, res) => {
    res.sendFile(path.join(build_path, 'index.html'))
  })
}


app.listen(PORT, () => {
  console.log('server is working', PORT);
})