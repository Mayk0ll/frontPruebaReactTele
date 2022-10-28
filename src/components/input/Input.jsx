import React from "react";
import { faCircleCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Label,
  GrupoInput,
  InputCampo,
  LeyendaError,
  IconoValidacion,
} from "../../styleComponent/styleComponentFormularios";

export const Input = ({estado, cambiarEstado, tipo, campoLabel, placeholder, name, leyendaError, expresionRegular, fn}) => {

  const onchange = e => {
    cambiarEstado({...estado, valor: e.target.value})
  }

  const validacion = () => {
    if(expresionRegular){
      if(expresionRegular.test(estado.valor))cambiarEstado({...estado, valido: 'true'});
      else cambiarEstado({...estado, valido: 'false'});
    }
    if(fn)fn();
  }

  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>{campoLabel}</Label>
      <GrupoInput>
        <InputCampo type={tipo} placeholder={placeholder} id={name} value={estado.valor} valido={estado.valido} onChange={onchange} onKeyUp={validacion} onBlur={validacion}/>
        <IconoValidacion icon={estado.valido === 'true'? faCircleCheck : faTimesCircle} valido={estado.valido} />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};
