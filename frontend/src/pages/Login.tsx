
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

function Login() {

  return (
    <> 
    <header>
      <Typography variant='h4'>Página Login de Carlos Jesús Araña Guedes</Typography>
    </header>
    <main>
      <Container>

        <Typography variant='h1'>H1</Typography>
        <Typography variant='subtitle1'>Subtitle1</Typography>
        <Typography variant='h2'>H2</Typography>
        <Typography variant='h3'>H3</Typography>
        <Typography variant='body1'>Body1</Typography>
        <Typography variant='caption'>Caption</Typography>
        <br />
        <Button variant='text' color='primary'>Text - Primary</Button>
        <Button variant='contained' color='primary'>Contained - Primary</Button>
        <Button variant='outlined' color='primary'>Outlined - Primary</Button>
        <br />
        <Button variant='text' color='secondary'>Text - Secondary</Button>
        <Button variant='contained' color='secondary'>Contained - Secondary</Button>
        <Button variant='outlined' color='secondary'>Outlined - Secondary</Button>
        <br />
        <Button variant='text' color='error'>Text - Error</Button>
        <Button variant='contained' color='error'>Contained - Error</Button>
        <Button variant='outlined' color='error'>Outlined - Error</Button>
        <br />
        <Button variant='text' color='success'>Text - Success</Button>
        <Button variant='contained' color='success'>Contained - Success</Button>
        <Button variant='outlined' color='success'>Outlined - Success</Button>
        <br />
        <Button variant='text' color='warning'>Text - Warning</Button>
        <Button variant='contained' color='warning'>Contained - Warning</Button>
        <Button variant='outlined' color='warning'>Outlined - Warning</Button>
        <br />
        <Button variant='text' disabled>Text - Disabled</Button>
        <Button variant='contained' disabled>Contained - Disabled</Button>
        <Button variant='outlined' disabled>Outlined - Disabled</Button>

      </Container>
      </main>
      <footer>
        <Typography>Typography en el 'footer'</Typography>
        <Button variant='contained' color='primary'>Button en el 'footer'</Button>
      </footer>
    </>
  )
}

export default Login
