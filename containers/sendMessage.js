import {connect} from 'react-redux'
import {call, change} from 'redux-jet'
import connection from '../connection'
import sendMessage from '../components/sendMessage'
const mapStateToProps = state => ({
  me: state.me,
  name: state.me && state.me.name
})

const actions = {
  sendMessage: (clientId, text, name) => call(connection, 'message/add', [text, clientId, name]),
}

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  sendMessage: text => dispatchProps.sendMessage(stateProps.me.id, text, stateProps.name),
})

export default connect(mapStateToProps, actions, mergeProps)(sendMessage)