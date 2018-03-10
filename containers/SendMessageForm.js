import {connect} from 'react-redux'
import {call, change} from 'redux-jet'
import connection from '../connection'
import SendMessageForm from '../components/SendMessageForm'
const mapStateToProps = state => ({
  me: state.me,
  name: state.me && state.me.name
})

const actions = {
  sendMessage: (clientId, text, name) => call(connection, 'message/add', [text, clientId, name]),
  setUserName: (user,name) => change(connection, 'client/#' + user.id, {...user, name})
}

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  sendMessage: text => dispatchProps.sendMessage(stateProps.me.id, text, stateProps.name),
  setUserName:  name => dispatchProps.setUserName(stateProps.me, name)
})

export default connect(mapStateToProps, actions, mergeProps)(SendMessageForm)
