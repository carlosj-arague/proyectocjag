import Menu from '../components/Menu.tsx'
import DashboardUsers from '../components/DashboardUsers.tsx'
import Typography from '@mui/material/Typography'
function GestionUsuarios() {

    return (
        <>
            <Menu/>
            <Typography variant='h4'>Gestion de Usuarios</Typography>
            <br/>
            <DashboardUsers/>
        </>
    )
}

export default GestionUsuarios 

