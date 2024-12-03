import { useState } from 'react'

import Typography from '@mui/material/Typography'
import Menu from '../components/Menu'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'

import InformeColeccion from '../components/InformeColeccion'
import InformeUsuarios from '../components/InformeUsuarios'



function Reports() {
    interface itemtype {
        id?: number
        nombre: string
        marca: string
        tipo: string
        precio: number
    }
    const itemInitialState: itemtype = {
        nombre: '',
        marca: '',
        tipo: '',
        precio: 0
    }

    interface usertype {
        id?: number
        nombre: string
        login: string
        password: string
        rol: string
    }

    const [coleccion, setColeccion] = useState<itemtype[]>([])
    const [usuarios, setUsuarios] = useState<usertype[]>([])
    const [clickedColeccion, setClickedColeccion] = useState(false);
    const [clickedUsuarios, setClickedUsuarios] = useState(false);
    const [tooltipColeccion, setTooltipColeccion] = useState("Mostrar tabla Coleccion")
    const [tooltipUsuarios, setTooltipUsuarios] = useState("Mostrar tabla Usuarios")

    function handleClickColeccion() {
        getItemsColeccion()
        if (!clickedColeccion) {
            setTooltipColeccion("Ocultar tabla Coleccion")
        } else {
            setTooltipColeccion("Mostrar tabla Coleccion") 
        }
        setClickedColeccion(!clickedColeccion)
    }

    function handleClickUsuarios() {
        getItemsUsuarios()
        if (!clickedUsuarios) {
            setTooltipUsuarios("Ocultar tabla Usuarios")
        } else {
            setTooltipUsuarios("Mostrar tabla Usuarios") 
        }
        setClickedUsuarios(!clickedUsuarios)
    }

    async function getItemsColeccion() {
        fetch(`http://localhost:3030/getItems`)
            .then(response => response.json())
            .then(response => {
                setColeccion(response.data);
            });
    }

    
    async function getItemsUsuarios() {
        fetch(`http://localhost:3030/getUsers`)
            .then(response => response.json())
            .then(response => {
                setUsuarios(response.data);
            });
    }

    return (
        <>


            <header>
                <Menu />
            </header>
            <main>
                <Paper>
                    <Tooltip title={tooltipColeccion} arrow placement='bottom'>
                        <Button variant='contained' onClick={handleClickColeccion}>INFORME COLECCION</Button>
                    </Tooltip>
                </Paper>
                {clickedColeccion ?
                    <><InformeColeccion data={coleccion} /></>
                    :
                    <></>
                }

                <br /><br /><br />
                
                <Paper>
                    <Tooltip title={tooltipUsuarios} arrow placement='bottom'>
                        <Button variant='contained' onClick={handleClickUsuarios}>INFORME USUARIOS</Button>
                    </Tooltip>
                </Paper>
                {clickedUsuarios ?
                    <><InformeUsuarios data={usuarios} /></>
                    :
                    <></>
                }
                <br /><br /><br />
            </main>
            <footer>
            </footer>

        </>
    )
}

export default Reports