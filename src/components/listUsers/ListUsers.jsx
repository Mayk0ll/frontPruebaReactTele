import React, { useEffect, useState } from 'react'
import './listUsers.css'
import axios from 'axios'
import { CardUser } from '../cardUser/CardUser'

export const ListUsers = () => {

    const [users, setUsers] = useState([]) 

    const getUsers = async () => {
        
        const resp = await axios.get('https://backendpruebamichaelvl.herokuapp.com/users')
        setUsers( resp.data )
    }

    useEffect(() => {
        getUsers()
    }, []);

    


  return (
    <div className='contenedorUsuarios'>
        {users === [] && <h1>animacion Cargando</h1>}
        <div className='encabezado'>
            <h3>Documento</h3> |
            <h3>Nombre</h3> | 
            <h3>Apellido</h3> | 
            <h3>correo</h3> 
        </div>
        <div>
            {users?.map(e => <CardUser key={e.id_usuario} info={e} setUsers={setUsers}/>)}
        </div>
    </div>
  )
}
