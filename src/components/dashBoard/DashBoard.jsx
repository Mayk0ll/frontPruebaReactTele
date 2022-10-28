import React, { useState } from 'react'
import './dashBoard.css'
import { ListUsers } from '../listUsers/ListUsers'

export const DashBoard = ({autenticado, cambiarEstado}) => {
    

    const cerrarSesion = () => {
        cambiarEstado({...autenticado, estado: false}) 
    }

  return (
    <div>
        <div className="contenedorCerrarSesion">
            <h1>BIENVENIDO ADMIN</h1>
            <button className='btnCerrarSesion' onClick={cerrarSesion}>Cerrar Sesion</button>
        </div>
        <br />
        <ListUsers/>
    </div>
  )
}
