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
  nick: (user,name) => change(connection, 'client/#' + user.id, {...user, name}),
  oops: () => call(connection, 'message/oops'),
}

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  sendMessage: text => dispatchProps.sendMessage(stateProps.me.id, text, stateProps.name),
  nick:  name => dispatchProps.nick(stateProps.me, name),
    oops:  () => dispatchProps.oops()
})

export default connect(mapStateToProps, actions, mergeProps)(SendMessageForm)
