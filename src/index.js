import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { persistor, store } from './Store'
import { PersistGate } from 'redux-persist/integration/react'


// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
    <App />
    </PersistGate>
    
  </Provider>
)