import React from 'react'
import './index.scss'
import { render } from 'react-dom'
import App from './assets/components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './assets/state/store'

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
)
