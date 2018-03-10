import { connect } from 'react-redux'
import Messages from '../components/Messages'

const mapStateToProps = ({messages, me = {}}) => ({
  messages: messages.map(message => ({
    ...message.value,
    isMine: me.value && message.value.userId === me.value.id,
    name: message.value.user
  }))
})

export default connect(mapStateToProps)(Messages)
