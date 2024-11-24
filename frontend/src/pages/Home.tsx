import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import Menu from '../components/Menu.tsx'
import Dashboard from '../components/Dashboard.tsx'

function Home() {

    const userData = useSelector((state: RootState) => state.authenticator)
    const [tableData, setTableData] = useState([])


    return (
        <>
            <Menu/>
            <Dashboard/>
        </>
    )
}

export default Home

