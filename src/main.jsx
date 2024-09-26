import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  CssBaseline 
} from '@mui/material';
import {
  ThemeProvider, createTheme 
} from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import {
  Navigate, RouterProvider, createBrowserRouter 
} from 'react-router-dom';
import Base from './common/base.jsx';
import BaseWithHeader from './common/baseWithHeader.jsx';
import AreaPage from './pages/Area/AreaPage.jsx';
import CompanyPage from './pages/Company/CompanyPage.jsx';
import {
  ContainerPage 
} from './pages/Containers/ContainerPage.jsx';
import HomePage from './pages/Home/HomePage.jsx';
import RecommendationsPage from './pages/Recomendaciones/RecommendationsPage.jsx';
import RoutesPage from './pages/Routes/RoutesPage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import {
  ReportPage 
} from './pages/Report/ReportPage.jsx';
import {
  CreateReportPage 
} from './pages/CreateReport/CreateReportPage.jsx';
import EmployeePage from './pages/Empleados/EmployeePage.jsx';
import {
  ReportDetailsPage 
} from './pages/ReportDetails/ReportDetailsPage.jsx';
import {
  RouteDetailPage 
} from './pages/Routes/Detail/RouteDetailPage.jsx';
import PerfilPage from './pages/Perfil/PerfilPage.jsx';
import {
  ErrorPage 
} from './pages/404/404.jsx';
import {
  Box
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#12422C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#12422C',
    },
  },
});

const ErrorBoundary = () => (
  <Box>
    <ErrorPage/>
    <BaseWithHeader
      logoOnly={true}
    />
  </Box>

);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate
      to='/login'
    />,
    errorElement: <ErrorBoundary />, 
  },
  {
    element: <Base />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    element: <BaseWithHeader />,
    children: [
      {
        path: '/containers',
        element: <ContainerPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/home',
        element: <HomePage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/empleados',
        element: <EmployeePage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/areas',
        element: <AreaPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/recomendaciones',
        element: <RecommendationsPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/routes',
        element: <RoutesPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/routes/detail',
        element: <RouteDetailPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/reportes',
        element: <ReportPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/reportes/detalles',
        element: <ReportDetailsPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/perfil',
        element: <PerfilPage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    element: <BaseWithHeader
      logoOnly={true}
    />,
    children: [
      {
        path: '/empresas',
        element: <CompanyPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'reportes/new',
        element: <CreateReportPage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider
    theme={theme}
  >
    <CssBaseline />
    <RouterProvider
      router={router}
    />
  </ThemeProvider>
);
