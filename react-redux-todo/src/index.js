import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './App'

import todos from './reducers/todos'
import visibilityFilter from './reducers/filter'

const reducer = combineReducers({ todos, visibilityFilter })
let store = createStore(reducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)