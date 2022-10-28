import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../input/Input";

import {
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError
} from "../../styleComponent/styleComponentFormularios";

export const Ingreso = ({autenticado, cambiarEstado}) => {

    const [correo, setCorreo] = useState({valor:'correo1@correo.com', valido: null})
	const [password, setPassword] = useState({valor: 'asdf', valido: null})
    const [formulario, setFormulario] = useState({valor: null, mensaje: ''})

    const onsubmitForm = async(e) => {
		e.preventDefault();

        const info = {
            correo: correo.valor,
            contrasenia: password.valor
        }
        const resp = await axios.post('https://backendpruebamichaelvl.herokuapp.com/aut', info)
        if(resp.data.correo === correo.valor){
            cambiarEstado({...autenticado, estado: true}) 
            setFormulario({...formulario, valor: true})
        }
        else setFormulario({...formulario, valor: false, mensaje: resp.data.message})
    }

    return (
        <div>
            <Formulario onSubmit={onsubmitForm}>
			    <Input estado={correo} cambiarEstado={setCorreo} tipo='email' campoLabel='Correo' placeholder='Ej: correo@gmail.com' name='correo' leyendaError='El correo es invalido, por favor verifique'/>  
			    <Input estado={password} cambiarEstado={setPassword} tipo='password' campoLabel='Contraseña'  name='password' leyendaError='la contraseña debe tener entre 4 y 12 caracteres'/>  
                {formulario.valor === false && (
                    <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error:</b> {formulario.mensaje}.
                    </p>
                    </MensajeError>
                )}
                <ContenedorBotonCentrado>
                    <Boton type="submit">ingresar</Boton>
                </ContenedorBotonCentrado>
            </Formulario>
                <NavLink to={'/registro'}>Crear Cuenta</NavLink>

        </div>
    )
}
