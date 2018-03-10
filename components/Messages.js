import React from 'react'

class Messages extends React.Component {

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight)
  }
  render() {
    const messages = this.props.messages

    return (
      <div class="container">
        {messages.map(message => <div key={message.id} className={(message.isMine ? 'bubble bubble--alt ' : 'bubble ') + (message.think ? 'bubble--think' : '')}>
        {message.text}
        </div>)}
      </div>
    )
  }
}

export default Messages
