import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage.jsx'
import MapPage from './pages/Map/MapPage.jsx'
import { CssBaseline } from '@mui/material'
import Base from './common/base.jsx'
import BaseWithHeader from './common/baseWithHeader.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Navigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import { ContainerPage } from './pages/Containers/ContainerPage.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import CompanyPage from './pages/Company/CompanyPage.jsx'
import EmpleadosPage from './pages/Empleados/EmpleadosPage.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#12422C', // Verde oscuro
      contrastText: '#FFFFFF' // Blanco
    },
    secondary: {
      main: '#FFFFFF', // Blanco
      contrastText: '#12422C' // Verde oscuro
    },
  },
});



const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    element: <Base />,
    children: [
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/home',
        element: <HomePage />
      }
    ],
  },
  {
    element: <BaseWithHeader />,
    children: [
      {
        path: '/containers',
        element: <ContainerPage />
      },
      {
        path: '/empleados',
        element: <EmpleadosPage />
      }
    ]
  },
  {
    element: <BaseWithHeader logoOnly = {true}/>,
    children: [
      {
        path: '/empresas',
        element: <CompanyPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)