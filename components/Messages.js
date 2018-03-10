import React from 'react'

class Messages extends React.Component {
  render () {
    const messages = this.props.messages
    return (
      <div>
        {messages.map(message => <div key={message.id}>
          <div className='text'>{message.text}</div>
        </div>)}
      </div>
    )
  }
}

export default Messages
