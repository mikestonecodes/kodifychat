import React from 'react'

const SendMessageForm = ({sendMessage,setUserName, name, me}) => (
  <form className='message-form' action='javascript:' onSubmit={({target: {text}}) => {
    if (text.value) {
      if(text.value.includes("/nick")){
        setUserName(text.value.split("/nick "))
      } else if(text.value[0]=="/")  {
        sendCommand(text.value.slice(1),text.value.split(" ").shift())
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
