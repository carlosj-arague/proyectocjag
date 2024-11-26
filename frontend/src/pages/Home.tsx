import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import Menu from '../components/Menu.tsx'
import Dashboard from '../components/Dashboard.tsx'
import Typography from '@mui/material/Typography'
function Home() {

    return (
        <>
            <Menu/>
            <Typography variant='h4'>Página Principal</Typography>
            <br/>
            <Dashboard/>
        </>
    )
}

export default Home

