
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { useEffect } from 'react';

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Tooltip from '@mui/material/Tooltip';

function DashboardUsers() {
    const [tableData, setTableData] = useState([])
    const [showTable, setShowTable] = useState(true);
    useEffect(() => {
        if (showTable) {
            getUsers();
            setShowTable(false);
        }
    }, [showTable]);

    interface usertype {
        id?: number
        nombre: string
        login: string
        password: string
        rol: string
    }

    const itemInitialState: usertype = {
        nombre: '',
        login: '',
        password: '',
        rol: ''
    }
    const [item, setItem] = useState(itemInitialState)

    function handleName(e: any) {
        setItem({
            ...item,
            nombre: e.target.value
        })
    }
    function handleUsername(e: any) {
        setItem({
            ...item,
            login: e.target.value
        })
    }
    function handlePassword(e: any) {
        setItem({
            ...item,
            password: e.target.value
        })
    }
    function handleRole(e: any) {
        setItem({
            ...item,
            rol: e.target.value
        })
    }


    function handleSubmit(e: any) {
        e.preventDefault();
        fetch(`http://localhost:3030/addUser?nombre=${item.nombre}&login=${item.login}&password=${item.password}&rol=${item.rol}`)
            .then(response => response.json())
            .then(response => {
                if (response > 0) {
                    getUsers()
                    clearFields()
                    alert("Usuario añadido con éxito")
                } else {
                    alert("Error. No se ha añadido el usuario")
                }
            }
            )
    }

    function clearFields() {
        setItem({
            nombre: '',
            login: '',
            password: '',
            rol: ''
        }
        )
    }

    async function getUsers() {
        fetch(`http://localhost:3030/getUsers`)
            .then(response => response.json())
            .then(response => {
                setTableData(response.data);
            });
    }



    return (
        <>

            <main> 
                <Box sx={{ xs: '12', md: '6' }}>
                    <form onSubmit={handleSubmit}>
                        <TextField required label='Nombre' value={item.nombre} onChange={handleName}></TextField>
                        <TextField required label='Usuario' value={item.login} onChange={handleUsername}></TextField>
                        <TextField required label='Contraseña' value={item.password} onChange={handlePassword}></TextField>
                        <FormControl required>
                            <InputLabel id="select">Rol</InputLabel>
                            <Select sx={{ width: '20ch', justifyContent: 'left' }} labelId="select" id="selectId" value={item.rol} label="language" onChange={handleRole}>
                                <MenuItem value={'admin'}>Administrador</MenuItem>
                                <MenuItem value={'user'}>Usuario</MenuItem>
                                <MenuItem value={'guest'}>Invitado</MenuItem>
                            </Select>
                        </FormControl>
                        <br /><br />
                        <Tooltip title="Insertar usuario" arrow placement='bottom'>
                            <Button variant='outlined' type='submit'>INSERTAR USUARIO</Button>
                        </Tooltip>
                        <br /><br />
                    </form>
                </Box>
            </main>

            <TableContainer>
                <Table aria-label='Datos de la Tabla Usuarios'>
                    <TableHead>
                        <TableRow >
                            <TableCell align='center'><Button variant='contained' fullWidth>NOMBRE</Button></TableCell>
                            <TableCell align='center'><Button variant='contained' fullWidth>NOMBRE DE USUARIO</Button></TableCell>
                            <TableCell align='center'><Button variant='contained' fullWidth>CONTRASEÑA</Button></TableCell>
                            <TableCell align='center'><Button variant='contained' fullWidth>ROL</Button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row: usertype) => (
                            <TableRow key={row.id}>
                                <TableCell align='center'>{row.nombre}</TableCell>
                                <TableCell align='center'>{row.login}</TableCell>
                                <TableCell align='center'>{row.password}</TableCell>
                                <TableCell align='center'>{row.rol}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>

        </>
    )
}

export default DashboardUsers

