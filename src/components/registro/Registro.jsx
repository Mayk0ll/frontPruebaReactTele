import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "../input/Input";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError
} from "../../styleComponent/styleComponentFormularios";

export const Registro = () => {

	const [cc, setCc] = useState({valor: '', valido: null})
	const [nombre, setNombre] = useState({valor: 'ejemplo', vlido: null})
	const [apellido, setApellido] = useState({valor: 'ejemplo', valido: null})
	const [correo, setCorreo] = useState({valor: 'ejemplo1@ejemplo1.com', valido: null})
	const [password, setPassword] = useState({valor: '1234', valido: null})
	const [password2, setPassword2] = useState({valor: '1234', valido: null})
	const [terminos, setTerminos] = useState(false)
	const [formulario, setFormulario] = useState(null)
	const [guardado, setGuardado] = useState({valor: 'null', mensaje: ''})

	const expresiones = {
		documento: /^\d{1,20}$/ ,
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		password: /^.{4,12}$/, 
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	}

	const valdiarPassword = () => {
		if(password.valor.length > 0){
			if(password.valor !== password2.valor){
				setPassword2((prev)=>({...prev, valido:'false'}))
			} else {
				setPassword2({...password2, valido:'true'})
			}
		}
	}

	const onchangeTerminos = (e) => {
		setTerminos(e.target.checked)
	}

	const onsubmitForm = async(e) => {
		e.preventDefault();
		setGuardado('null')

		if(cc.valido === 'true' && nombre.valido === 'true' && apellido.valido === 'true' && correo.valido === 'true' && password.valido === 'true' && password2.valido === 'true' && terminos){
			setFormulario(true);
			
			const infoUsuario = {
				documento: cc.valor,
				nombre: nombre.valor,
				apellido: apellido.valor,
				correo: correo.valor,
				contrasenia: password.valor
			}
			
			const resp = await axios.post('https://backendpruebamichaelvl.herokuapp.com/users', infoUsuario)
			
			if(resp.data.rowCount){
				setGuardado({...guardado, valor: true})
				setCc({valor: '', valido: null});
				setNombre({valor: '', valido: null});
				setApellido({valor: '', valido: null});
				setCorreo({valor: '', valido: null});
				setPassword({valor: '', valido: null});
				setPassword2({valor: '', valido: null});
				setTerminos(false)
				setFormulario(null)
			} else {
				setGuardado({...guardado, valor: false, mensaje: resp.data.message})
			}


			
		} else {
			setFormulario(false)
		}

	}
  return (
	<div>
    <Formulario onSubmit={onsubmitForm}>
			<Input estado={cc} cambiarEstado={setCc} tipo='text' campoLabel='Documento' placeholder='Ej: 123456' name='documento' leyendaError={cc.valor.length>0?'No se permiten letras':'Este campo es obligatorio'} expresionRegular={expresiones.documento}/> 
			<Input estado={nombre} cambiarEstado={setNombre} tipo='text' campoLabel='Nombre' placeholder='Ej: Michael' name='nombre' leyendaError='no se permiten numeros ni caracteres especiales' expresionRegular={expresiones.nombre}/>  
			<Input estado={apellido} cambiarEstado={setApellido} tipo='text' campoLabel='Apellido' placeholder='Ej: Vasquez' name='apellido' leyendaError='no se permiten numeros ni caracteres especiales' expresionRegular={expresiones.nombre}/>  
			<Input estado={correo} cambiarEstado={setCorreo} tipo='email' campoLabel='Correo' placeholder='Ej: correo@gmail.com' name='correo' leyendaError='El correo es invalido, por favor verifique' expresionRegular={expresiones.correo}/>  
			<Input estado={password} cambiarEstado={setPassword} tipo='password' campoLabel='Contraseña'  name='password' leyendaError='la contraseña debe tener entre 4 y 12 caracteres' expresionRegular={expresiones.password}/>  
			<Input estado={password2} cambiarEstado={setPassword2} tipo='password' campoLabel='Confirmar Contraseña'  name='password2' leyendaError='las contraseñas no coinciden' fn={valdiarPassword}/>  
      <ContenedorTerminos>
        <Label>
          <input type="checkbox" name="terminos" id="terminos" checked={terminos} onChange={onchangeTerminos}/>
          Acepto los Terminos y condiciones
        </Label>
      </ContenedorTerminos>
      {formulario === false && (
        <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor complete la informacion correctamente.
          </p>
        </MensajeError>
      )}
      <ContenedorBotonCentrado>
        <Boton type="submit">Enviar</Boton>
        {guardado.valor === true && <MensajeExito>El formario se envio de manera exitoso</MensajeExito>}
        {guardado.valor === false && <MensajeError><p><FontAwesomeIcon icon={faExclamationTriangle} /><b>Error:</b> {guardado.mensaje}</p></MensajeError>}
      </ContenedorBotonCentrado>
    </Formulario>
	<NavLink to={'/home'}>Ya tengo cuenta</NavLink>
	</div>
	
  );
};
