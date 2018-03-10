import React from 'react'

const SendMessageForm = ({sendMessage, name, me}) => (
  <form className='message-form' action='javascript:' onSubmit={({target: {text}}) => {
    if (text.value) {
      if(text.value=="/nick"){

      } else if(text.value[0]=="/")  {
        sendCommand(text.slice(1),text.split(" ").shift())
      } else{
        sendMessage(text.value)
      }

      text.value = ''
    }
  }}>
    <input autoComplete='off' name='text' placeholder='Enter message ...' autoFocus required />
    <button type='submit'>Send</button>
  </form>
)

export default SendMessageForm
