const jet = require('node-jet')
const uuid = require('uuid/v1')

const daemon = new jet.Daemon()
const peer = new jet.Peer({url: 'ws://localhost:3001'})
const messages = []

const addMessage = new jet.Method('message/add')
  .on('call', args => {
    console.log(args)
    const id = uuid()
    const message = new jet.State('message/#' + id, {
      postedAt: Date.now(),
      id,
      text: args[0],
      userId: args[1],
     user: args[2]
    })
    peer.add(message)
    messages.push(message)
  })

  const oops = new jet.Method('message/oops')
    .on('call', args => {
      console.log("oops")
      var lastmsg=messages.pop()
      lastmsg.remove()
    })


Promise.all([
  peer.connect(),
    peer.add(addMessage),
    peer.add(oops),
]).then(() => {
  console.log('chat server ready')


})

daemon.listen({
  wsPort: 3001
})
