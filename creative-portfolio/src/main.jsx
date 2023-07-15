import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollPage from './Scrollpage.jsx'
import GridContainer from './GridContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GridContainer />
  </React.StrictMode>,
)
