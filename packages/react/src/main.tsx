import React from 'react'
import ReactDOM from 'react-dom/client'
import 'modern-css-reset'
import './styles/index.scss'
import 'uno.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
