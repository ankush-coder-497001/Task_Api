import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import ResetPassowrd from './components/ResetPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    \<Routes>
    <Route path='/' element={<App/>}  />
    <Route path='/reset-pass/:token' element={<ResetPassowrd/>}/>
    </Routes>
    </BrowserRouter>
  
  </StrictMode>,
)
