import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Base from './common/base.jsx'
import BaseWithHeader from './common/baseWithHeader.jsx'
import AreaPage from './pages/Area/AreaPage.jsx'
import CompanyPage from './pages/Company/CompanyPage.jsx'
import { ContainerPage } from './pages/Containers/ContainerPage.jsx'
import CreateAreaPage from './pages/CreateArea/CreateAreaPage.jsx'
import EmpleadosPage from './pages/Empleados/EmpleadosPage.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import LoginPage from './pages/Login/LoginPage.jsx'
import { ReportPage } from './pages/Report/ReportPage.jsx'
import { CreateReportPage } from './pages/CreateReport/CreateReportPage.jsx'

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
      },
      {
        path: '/areas',
        element: <AreaPage />
      },
      {
        path: '/areas/new',
        element: <CreateAreaPage />
      },
      {
        path: '/reportes',
        element: <ReportPage />
      }
    ]
  },
  {
    element: <BaseWithHeader logoOnly = {true}/>,
    children: [
      {
        path: '/empresas',
        element: <CompanyPage />
      },
      {
        path: 'reportes/new',
        element: <CreateReportPage />
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