
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import { useRouteError } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function ErrorPage() {
    const navigate = useNavigate()
    const error = useRouteError();
    console.error(error);

    function goBack() {
        navigate('/')
    }

    return (
        <>
            <div id="error-page" > 
                <Typography variant='h3'>
                    ¡Vaya! Algo salió mal
                </Typography>
                <IconButton color='error'><SentimentVeryDissatisfiedIcon fontSize='large' /></IconButton>
                <h1>Página no encontrada</h1>
                <p>El enlace al que ha sido redirigido no lista en la aplicación</p>
                <p>
                    Error: <i>{error.statusText || error.message}</i>
                </p>

            </div>
            <Alert severity='error'>
                <Typography variant='h5'>Este error pudo surgir debido a:</Typography>
                <Typography variant='h6'>- El enlace está mal escrito<br /></Typography>
                <Typography variant='h6'>- Hubo un error de conexión<br /></Typography>
                <Typography variant='h6'>- La página ha sido borrada<br /></Typography>
            </Alert>
            <br />
            <Button variant='contained' onClick={goBack}>Volver</Button>
        </>);
}
export default ErrorPage;
