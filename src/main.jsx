import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route element={<App/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
)
