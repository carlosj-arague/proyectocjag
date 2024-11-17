
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
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

import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

function Menu() {

    const [tableData, setTableData] = useState([])
    const [showTable, setShowTable] = useState(true);
    useEffect(() => {
        if (showTable) {
            getItems();
            setShowTable(false);
          }
        }, [showTable]);

    interface itemtype {
        id?: number
        nombre: string
        marca: string
        tipo: string
        precio: number
    }

    const itemInitialState: itemtype = {
        nombre: ' ',
        marca: ' ',
        tipo: ' ',
        precio: 0
    }
    const [item, setItem] = useState(itemInitialState)

    function handleNombre(e: any) {
        setItem({
            ...item,
            nombre: e.target.value
        })
    }
    function handleMarca(e: any) {
        setItem({
            ...item,
            marca: e.target.value
        })
    }
    function handleTipo(e: any) {
        setItem({
            ...item,
            tipo: e.target.value
        })
    }
    function handlePrecio(e: any) {
        setItem({
            ...item,
            precio: e.target.value
        })
    }


    function handleSubmit(e: any) {
        e.preventDefault();
        fetch(`http://localhost:3030/addItem?nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}}`)
            .then(response => response.json())
            .then(response => {
                if (response > 0) {
                    getItems()
                    alert("Datos enviados con éxito")
                } else {
                    alert("Error. No se han insertado los datos")
                }
            }
            )
    }

    async function getItems() {
        fetch(`http://localhost:3030/getItems`)
          .then(response => response.json())
          .then(response => {
            setTableData(response.data);
          });
      }

    function handleDeleteItem(row: itemtype) {
        console.log(row.id)
        fetch(`http://localhost:3030/deleteItem?id=${row.id}`)
            .then(response => response.json())
            .then(response => {
                if (response > 0) {
                    getItems()
                    alert("Datos eliminados con éxito")
                } else {
                    alert("Error. No se han eliminado los datos")
                }
            }
            )
    }


    return (
        <>
        
            <main>
                <Box sx={{ xs: '12', md: '6' }}>
                    <form onSubmit={handleSubmit}>
                        <TextField required label='Nombre' onChange={handleNombre}></TextField>
                        <TextField required label='Marca' onChange={handleMarca}></TextField>
                        <TextField required label='Tipo' onChange={handleTipo}></TextField>
                        <TextField required label='Precio' type='number' onChange={handlePrecio}></TextField>
                        <br /><br />
                        <Button variant='outlined' type='submit'>+ INSERTAR DATOS</Button>
                    </form>
                </Box>
            </main>

            <TableContainer>
                <Table aria-label='Datos de la Tabla Coleccion'>
                    <TableHead>
                        <TableRow >
                            <TableCell align='center'></TableCell>
                            <TableCell align='center'><Button variant='contained' fullWidth>NOMBRE</Button></TableCell>
                            <TableCell align='center'><Button variant='contained' fullWidth>MARCA</Button></TableCell>
                            <TableCell align='center'><Button variant='contained' fullWidth>TIPO</Button></TableCell>
                            <TableCell align='center'><Button variant='contained' fullWidth>PRECIO</Button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row: itemtype) => (
                            <TableRow key={row.id}>
                                <TableCell align='center'>
                                    <Button onClick={() => handleDeleteItem(row)}>
                                        <DeleteForeverIcon />
                                    </Button>
                                </TableCell>
                                <TableCell align='center'>{row.nombre}</TableCell>
                                <TableCell align='center'>{row.marca}</TableCell>
                                <TableCell align='center'>{row.tipo}</TableCell>
                                <TableCell align='center'>{row.precio}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>

        </>
    )
}

export default Menu

