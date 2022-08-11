import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {UserAuthContextProvider} from './Context/UserAuth' 
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <UserAuthContextProvider>
    <App />
    </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
