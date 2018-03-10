import React from 'react'

class Messages extends React.Component {
  render () {
    const messages = this.props.messages

    return (
      <div class="container">
        {messages.map(message => <div key={message.id} className={message.isMine ? 'bubble bubble--alt' : 'bubble'}>
        {message.text}
        </div>)}
      </div>
    )
  }
}

export default Messages
