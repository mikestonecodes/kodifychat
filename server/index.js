const jet = require('node-jet')
const uuid = require('uuid')

const daemon = new jet.Daemon()
const peer = new jet.Peer({url: 'ws://localhost:3001'})
const messages = []

Promise.all([
  peer.connect(),
]).then(() => {
  console.log('chat server ready')
  peer.add("test")
  messages.push("test")
})

daemon.listen({
  wsPort: 3001
})
