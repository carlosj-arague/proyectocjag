import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { useState } from 'react'
import { ViewColumnSharp } from "@mui/icons-material";

interface itemtype {
    nombre: string
    marca: string
    tipo: string
    precio: number
}

interface ProductsArray {
    data : itemtype[]
}

function InformeColeccion( {data} : ProductsArray ) {

    const coleccion = data
    
    const col: Array<Column<itemtype>> = [
        { title: "Nombre", field: "nombre", filtering: false,},
        { title: "Marca", field: "marca", filtering: true,},
        { title: "Tipo", field: "tipo", filtering: true,},
        { title: "Precio", field: "precio", type: "numeric", filtering: false,}
    ];

    const tableData = coleccion.map((row) => (
        {
            nombre: row.nombre,
            marca: row.marca,
            tipo: row.tipo,
            precio: row.precio
        }
    ));

    return (
        <MaterialTable
        title= "Tabla Coleccion"
            columns={col} data={tableData}
            renderSummaryRow={({column, data}) =>
                    column.field === "precio" ?
                    "Total:   " + {value: data.reduce((agg, row) => agg + row.precio, 0),
                    }.value : undefined
                    
                }
            options={{
                exportMenu: [
                    {
                        label: "Exportar a PDF",
                        exportFunc: (cols, datas) => ExportPdf(cols, datas, "Tabla Coleccion"),
                    },
                    {
                        label: "Exportar a CSV",
                        exportFunc: (cols, datas) => ExportCsv(cols, datas, "Tabla Coleccion"),
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
export default InformeColeccion