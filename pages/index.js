import React from 'react'
import Messages from '../containers/Messages'
import {Provider} from 'react-redux'
import initStore from '../store.js'
export default class App extends React.Component {

  static  getInitialProps ({req}) {
    if (req) {
      console.log("only on server")
      const store = initStore()
      return store.getInitialState().then(initialState => ({initialState, store}))
    }
  }

  componentDidMount () {
    this.store.resume()

  }

  constructor (props) {
    super(props)
    this.store = props.store.dispatch ? props.store : initStore(props.initialState)
    console.log(this.store)
  }

  render () {
    return (
      <Provider store={this.store}><Messages/></Provider>
    )
  }

}
