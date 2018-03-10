const jet = require('node-jet')
const uuid = require('uuid')

const daemon = new jet.Daemon()
const peer = new jet.Peer({url: 'ws://localhost:3001'})
const messages = []

const addMessage = new jet.Method('message/add')
  .on('call', args => {
    console.log("yo")
    const id = uuid.v1()
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


Promise.all([
  peer.connect(),
    peer.add(addMessage),
]).then(() => {
  console.log('chat server ready')
  const id = uuid.v1()
  const id2 = uuid.v1()
  var message=new jet.State('message/#' + id, {
      postedAt: Date.now(),
      id,
      text: "test",
      userId: "32489afe03rfi90i",
      user: "aefa"
    })
    var message2=new jet.State('message/#' + id2, {
        postedAt: Date.now(),
        id2,
        text: "test2",
        userId: "3248903rfi90i",
        user: "efa"
      })
  peer.add(message)
  messages.push(message)
  peer.add(message2)
  messages.push(message2)

})

daemon.listen({
  wsPort: 3001
})
