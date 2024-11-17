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

  var [username, setUsername] = useState('')
  var [password, setPassword] = useState('')

  var [alert, setAlert] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(e: any) {
    e.preventDefault();
    fetch(`http://localhost:3030/login?user=${username}&password=${password}`)
    .then(response => response.json())
    .then (response => {
    console.log('Lo que nos llega de la base de datos: ')
    console.log(response.data)
    if (response.data.length !== 0){
      
      console.log('Nombre de usuario: ' + username + ' - Contraseña: ' + password + " - Éxito")
      dispatch(authActions.login({
        name: response.data.nombre, //data.user es el nombre de usuario que ha ingresado el usuario
        rol: response.data.rol
       }))
      navigate('/home')
      } else{
        console.log('Nombre de usuario: ' + username + ' - Contraseña: ' + password + " - Error")
        setAlert('error')
      }}
    )
  }

  function handleUser(event: any) {
    setUsername(event.target.value)
  }
  function handlePassword(event: any) {
    setPassword(event.target.value)
  }

  return (
    <>
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

      {alert == '' ?
        <></>
        :
        alert == 'success' ?
          <Alert severity="success" >Acceso concedido</Alert>
          :
          <Alert severity="error" >Usuario y/o contraseña incorrectos</Alert>
      }

    </>
  )
}

export default Login
