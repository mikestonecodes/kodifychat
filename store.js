import {createStore, applyMiddleware, combineReducers} from 'redux'
import {sorted, get, fetch, add, single} from 'redux-jet'
import thunk from 'redux-thunk'
import uuid from 'uuid'
const connection={url: 'ws://localhost:3001'}
const messagesQuery = {
  path: {startsWith: 'message/#'},
  sort: {byValueField: {postedAt: 'number'}, descending: true, from: 1, to: 30}
}
const reducer = initialState => combineReducers({
   messages: sorted('messages', initialState ? initialState.messages : []),
})

export default (initialState) => {
  const store = createStore(reducer(initialState), applyMiddleware(thunk))

  if (initialState) {
   store.resume = () => {
     const id = localStorage.id = localStorage.id || uuid.v1()
      add(connection, 'client/#' + id, {joinedAt: Date.now(), id, name: localStorage.name})(store.dispatch)
      fetch(connection, messagesQuery, 'messages')(store.dispatch)
    store.subscribe(() => {
      const state = store.getState()
      localStorage.name = state.me && state.me.name ? state.me.name : null
    })
   }
 }else{

  store.getInitialState = () => {
    //connect to stuff here
     return Promise.all([ get(connection, messagesQuery, 'messages')(store.dispatch) ]).then( () => store.getState() )
  }

}
return store
}
