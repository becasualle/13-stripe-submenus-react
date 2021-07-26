import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'
ReactDOM.render(
  <React.StrictMode>
    {/* wrap App within AppProvider to use data from context.js in every component */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
