import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import ResetPassowrd from './components/ResetPage.jsx'
const router = createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'/resetpassword/:token' , element:<ResetPassowrd/>}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  >
    </RouterProvider>
  </StrictMode>,
)
