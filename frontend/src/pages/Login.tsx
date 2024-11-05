import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { RootState } from '../store/index'

import { useDispatch } from 'react-redux'
import { authActions } from '../store/authSlice';

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Button from '@mui/material/Button'
import { IconButton, TextField } from '@mui/material'
import Lock from '@mui/icons-material/Lock'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

function Login() {
  const dispatch = useDispatch()

  const dbuser = 'Carlos'
  const dbpswd = '1234567890'

  var [username, setUsername] = useState('')
  var [password, setPassword] = useState('')

  var [alert, setAlert] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e: any) {
    e.preventDefault();
    if (username == dbuser) {
      if (password == dbpswd) {
        dispatch(authActions.login({
          name: username,
          rol: 'administrador'
        }))

        console.log('Nombre de usuario: ' + username + ' - Contraseña: ' + password + " - Éxito")
        navigate('/home')         //Comentar para ver el alert de exito
        //setAlert('success')     Descomentar para ver el alert de exito
        return
      }
    }
    console.log('Nombre de usuario: ' + username + ' - Contraseña: ' + password + " - Error")
    setAlert('error')
  }

  function handleUser(event: any) {
    setUsername(event.target.value)
  }
  function handlePassword(event: any) {
    setPassword(event.target.value)
  }

  return (
    <>
      <header>
        <br></br>
      </header>
      <main>
        <Box component='form' onSubmit={handleSubmit}>
          <Grid container direction={'column'} spacing={2}>

            <Typography variant='h4'>Sistema de acceso</Typography>
            <IconButton><Lock /></IconButton>
            <TextField required label='Usuario' onChange={handleUser}></TextField>
            <TextField required type='password' label='Contraseña' onChange={handlePassword}></TextField>

            <Button variant='contained' type='submit'>Acceso</Button>
            <br />
          </Grid>
        </Box>

      </main>
      {alert == '' ?
        <></>
        :
        alert == 'success' ?
          <Alert severity="success" >Acceso concedido</Alert>
          :
          <Alert severity="error" >Usuario y/o contraseña incorrectos</Alert>
      }
      <footer>
        <br></br>
      </footer>

    </>
  )
}

export default Login
