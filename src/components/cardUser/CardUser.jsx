import React from 'react'
import './cardUser.css'
import axios from 'axios'

export const CardUser = ({info, setUsers}) => {


    const borrarUsuario = async (id) => {
        try {
            const resp = await axios.delete(`http://backendpruebamichaelvl.herokuapp.com/users/${id}`)
            setUsers(resp.data)
        } catch (error) {
            
        }
        
    }
  return (
    <div className='contenedorCard'>
        <p>{info.documento}</p>
        <p>{info.nombre}</p>
        <p>{info.apellido}</p>
        <p>{info.correo}</p>
        <div className='contenedorBotonEliminar'>
            <button className='btnEliminar' onClick={()=> borrarUsuario(info.id_usuario)}> X </button>
        </div>
    </div>
  )
}
