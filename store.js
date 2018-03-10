import {createStore, applyMiddleware, combineReducers} from 'redux'
import {sorted, get, fetch, add, single} from 'redux-jet'
import thunk from 'redux-thunk'
const uuid = require('uuid/v1')
import connection from './connection'
const messagesQuery = {
  path: {startsWith: 'message/#'},
  sort: {byValueField: {postedAt: 'number'}, descending: false, from: 1, to: 30}
}
const meQuery = {
  path: {equals: 'client/#'}
}

const clientsQuery = {
  path: {startsWith: 'client/#'},
  sort: {byValueField: {joinedAt: 'number'}, from: 1, to: 1000}
}

const reducer = initialState => combineReducers({
   messages: sorted('messages', initialState ? initialState.messages : []),
   clients: sorted('clients', initialState ? initialState.clients : []),
  me: single('me', {})
})

export default (initialState) => {
  const store = createStore(reducer(initialState), applyMiddleware(thunk))

  if (initialState) {
   store.resume = () => {
     console.log("yo")
     const id = localStorage.id = localStorage.id || uuid()
      add(connection, 'client/#' + id, {joinedAt: Date.now(), id, name: localStorage.name})(store.dispatch)
      meQuery.path.equals += id
      fetch(connection, meQuery, 'me')(store.dispatch)
      fetch(connection, clientsQuery, 'clients')(store.dispatch)
      fetch(connection, messagesQuery, 'messages')(store.dispatch)

    store.subscribe(() => {
      const state = store.getState()
        console.log(id,store.getState())
      localStorage.name = state.me && state.me.name ? state.me.name : null
    })
   }
 }else{

  store.getInitialState = () => {
    //connect to stuff here
     return Promise.all([
        get(connection, clientsQuery, 'clients')(store.dispatch),
        get(connection, messagesQuery, 'messages')(store.dispatch) ]).then( () => store.getState() )
  }

}
return store
}
