import React from 'react'

const SendMessageForm = (actions) => (
  <form className='message-form' action='javascript:' onSubmit={({target: {text}}) => {
    if (text.value) {
     if(text.value[0]=="/")  {
       console.log(text.value.slice(1).split(" ")[0] , text.value.slice(1).split(" ").slice( 1) )
       actions[(text.value.slice(1).split(" ")[0])].apply(this,text.value.slice(1).split(" ").slice( 1) )
      } else{
        actions.sendMessage(text.value)
      }
      text.value = ''
    }
  }}>
    <input autoComplete='off' name='text' placeholder='Enter message ...' autoFocus required />
    <button type='submit'>Send</button>
  </form>
)

export default SendMessageForm
