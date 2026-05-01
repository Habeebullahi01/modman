import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'

// Use VITE_API_URL from environment variables if it exists, otherwise default to '/api' for local Vite proxy.
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '/api'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
