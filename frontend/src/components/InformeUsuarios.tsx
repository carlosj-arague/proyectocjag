import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { useState } from 'react'
import { ViewColumnSharp } from "@mui/icons-material";


interface usertype {
    id?: number
    nombre: string
    login: string
    password: string
    rol: string
}

interface ProductsArray {
    data : usertype[]
}

function InformeUsuarios( {data} : ProductsArray ) {

    const usuarios = data
    
    const col: Array<Column<usertype>> = [
        { title: "Nombre", field: "nombre", filtering: true,},
        { title: "Login", field: "login", filtering: false,},
        { title: "Password", field: "password", filtering: false,},
        { title: "Rol", field: "rol", filtering: false,}
    ];

    const tableData = usuarios.map((row) => (
        {
            nombre: row.nombre,
            login: row.login,
            password: row.password,
            rol: row.rol
        }
    ));

    return (
        <MaterialTable 
        title= "Informe Usuarios"
            columns={col} data={tableData}
            options={{
                exportMenu: [
                    {
                        label: "Exportar a PDF",
                        exportFunc: (cols, datas) => ExportPdf(cols, datas, "Informe Usuarios"),
                    },
                    {
                        label: "Exportar a CSV",
                        exportFunc: (cols, datas) => ExportCsv(cols, datas, "Informe Usuarios"),
                    },
                ],
                headerStyle: {
                    backgroundColor: '#551483',
                    color: 'white'
                },
                
                draggable: true,
                columnsButton: true,
                filtering: true,
                
            }
        }
        
        />)
}
export default InformeUsuarios