import { useState } from 'react'

import Typography from '@mui/material/Typography'
import Menu from '../components/Menu'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import InformeColeccion from '../components/InformeColeccion'



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
    const [coleccion, setColeccion] = useState<itemtype[]>([])
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        getItems()
        setClicked(!clicked)
        if (clicked) {
        }
    }

    async function getItems() {
        fetch(`http://localhost:3030/getItems`)
            .then(response => response.json())
            .then(response => {
                setColeccion(response.data);
            });
    }

    return (
        <>


            <header>
                <Menu />
            </header>
            <main>
                <Paper>
                    <Button variant='contained' onClick={handleClick}>INFORME COLECCION</Button>
                </Paper>
                {clicked ?
                    <><InformeColeccion data={coleccion} /></>
                    :
                    <></>}
                <br /><br /><br />

            </main>
            <footer>
            </footer>

        </>
    )
}

export default Reports