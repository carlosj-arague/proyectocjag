import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'

import CssBaseline from '@mui/material/CssBaseline'
//import './index.css'

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#551483',
    },
    secondary: {
      main: '#da7b00',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    warning: {
      main: '#deb326',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    error: {
      main: '#aa0000',
    },
    success: {
      main: '#39b140',
    },
    info: {
      main: '#359bd2',
    },
  },
 })
 
 createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ThemeProvider theme={customTheme}>
  <CssBaseline />
  <App />
  </ThemeProvider>
  </StrictMode>

)
