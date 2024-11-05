import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { authActions } from '../store/authSlice';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

function Home() {
    const userData = useSelector((state: RootState) => state.authenticator)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(userData)

    function handleLogout() {
        dispatch(authActions.logout())
        navigate('/')
    }

    return (
        <>
            <header>
                <Typography variant='h3'>Página Home de Carlos Jesús Araña Guedes</Typography>
            </header>
            <main>
                <Typography variant='h4'>Usuario: {userData.userName}</Typography>
                <Typography variant='h4'>Rol: {userData.userRol}</Typography>
                <Button variant='contained' size='large' onClick={handleLogout}>Salir</Button>
            </main>
            <footer>
            </footer>

        </>
    )
}

export default Home

