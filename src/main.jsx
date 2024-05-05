import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage.jsx'
import MapPage from './pages/Map/MapPage.jsx'
import { CssBaseline } from '@mui/material'
import Base from './base.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children:[
      {
        path: '/login',
        element: <LoginPage />
      }, 
      {
        path: '/map',
        element: <MapPage/>
      }
    ],
    
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
