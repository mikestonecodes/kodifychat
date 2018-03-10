const jet = require('node-jet')
const uuid = require('uuid')

const daemon = new jet.Daemon()
const peer = new jet.Peer({url: 'ws://localhost:3001'})
const messages = []

Promise.all([
  peer.connect(),
]).then(() => {
  console.log('chat server ready')
  const id = uuid.v1()
  var message=new jet.State('message/#' + id, {
      postedAt: Date.now(),
      id,
      text: "test",
    })
  peer.add(message)
  messages.push(message)
})

daemon.listen({
  wsPort: 3001
})
