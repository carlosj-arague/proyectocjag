
import Login from './pages/Login'
import Home from './pages/Home'
import Reports from './pages/Reports'
import ErrorPage from './pages/ErrorPage'
import GestionUsuarios from './pages/GestionUsuarios'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'reports',
        element: <Reports />
      },
      {
        path: 'userManagement',
        element: <GestionUsuarios />
      }
    ]
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
