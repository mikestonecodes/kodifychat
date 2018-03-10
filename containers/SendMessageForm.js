import { connect } from 'react-redux'
import { call, change } from 'redux-jet'
import connection from '../connection'
import SendMessageForm from '../components/SendMessageForm'
const mapStateToProps = state => ({
  me: state.me.value,
  name: state.me.value && state.me.value.name
})

const actions = {
  sendMessage: (clientId, text, name, think) => call(connection, 'message/add', [text, clientId, name, think]),
  nick: (client, name) => change(connection, 'client/#' + client.id, {
    ...client,
    name
  }),
  oops: () => call(connection, 'message/oops'),
}

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  sendMessage: text => dispatchProps.sendMessage(stateProps.me.id, text, stateProps.name),
  nick: name => dispatchProps.nick(stateProps.me, name),
  oops: () => dispatchProps.oops(),
  think: text => dispatchProps.sendMessage(stateProps.me.id, text, stateProps.name, true)
})

export default connect(mapStateToProps, actions, mergeProps)(SendMessageForm)
