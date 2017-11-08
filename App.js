import React, { Component } from 'react'
import GithubBrowserApp from './navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

function configureStore (initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    ),
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <GithubBrowserApp />
      </Provider>
    )
  }
}
