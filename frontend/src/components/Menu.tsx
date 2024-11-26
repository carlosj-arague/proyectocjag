import { useState } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { authActions } from '../store/authSlice';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

function Menu() {
    const userData = useSelector((state: RootState) => state.authenticator)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!userData.isAutenticated) {
            navigate('/')
        }
    }, [userData.isAutenticated, navigate])



    const [openDrawer, setOpenDrawer] = useState(false)
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpenDrawer(newOpen);
    };
    const pages = ['Inicio', 'Informes', 'Gestion Usuarios', 'Ayuda', 'Salir']

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItemButton>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary={pages[0]} />
                    </ListItemButton>
                </Link>

                {userData.userRol == 'admin' ?
                    <Link to={'/reports'} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemButton>
                            <ListItemIcon><SummarizeIcon /></ListItemIcon>
                            <ListItemText primary={pages[1]} />
                        </ListItemButton>
                    </Link> : <></>
                }

                {userData.userRol == 'admin' ?
                    <Link to={'/userManagement'} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemButton>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary={pages[2]} />
                        </ListItemButton>
                    </Link> : <></>
                }
                <Link to={'/help'} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItemButton>
                        <ListItemIcon><HelpIcon /></ListItemIcon>
                        <ListItemText primary={pages[3]} />
                    </ListItemButton>
                </Link>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItemButton>
                        <ListItemIcon onClick={handleLogout}><LogoutIcon /></ListItemIcon>
                        <ListItemText primary={pages[4]} />
                    </ListItemButton>
                </Link>
            </List>
        </Box>
    )





    function handleLogout() {
        dispatch(authActions.logout())
        navigate('/')
    }

    return (
        <>
            <main>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        ><MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{userData.userName}</Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="user role"
                            sx={{ mr: 2 }}
                        >
                            {userData.userRol == 'admin' ?
                                <AdminPanelSettingsIcon /> :
                                userData.userRol == 'user' ?
                                    <PersonIcon /> : <InsertEmoticonIcon />
                            }

                        </IconButton>
                    </Toolbar>
                </AppBar>
                <br /><br /><br />
            </main>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

        </>
    )
}

export default Menu

