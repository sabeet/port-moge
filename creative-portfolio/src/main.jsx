import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollPage from './Scrollpage.jsx'
import GridContainer from './GridContainer.jsx'
import FlexR2 from './FlexR2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GridContainer /> */}
    <FlexR2 />
  </React.StrictMode>,
)
