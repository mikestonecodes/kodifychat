import React from 'react'

class Messages extends React.Component {
  render () {
    const messages = this.props.messages

    return (
      <ul>
        {messages.map(message => <li key={message.id} className={message.isMine ? 'is-mine' : ''}>
          <div className='text'>{message.text}</div>
        </li>)}
      </ul>
    )
  }
}

export default Messages
