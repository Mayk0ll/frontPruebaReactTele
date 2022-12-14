import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores = {
    borde: '#0075ff',
    error: '#bb2929',
    error2: '#f66060',
    exito: '#1ed12d'
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.valido === 'false' && css`
    color: ${colores.error} !important;
    `}
`;

const GrupoInput = styled.div `
    position: relative;
    z-index: 1;
`;

const InputCampo = styled.input`
    width: 100%;
    background-color: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    border: 3px solid transparent;
    transition: 0.3s ease all;

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    /* ${props => props.valido === 'true' && css`
    border: 3px solid ${colores.exito} !important;
    `} */
    
    ${props => props.valido === 'false' && css`
    border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-top: 10px;
    color: ${colores.error};
    display: none;

    ${props => props.valido === 'true' && css`
        display: none;
    `}
    ${props => props.valido === 'false' && css`
        display: block;
    `}
`;


const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 5;
    font-size: 20px;
    opacity: 0;

    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colores.exito} !important;
    `}
    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colores.error} !important;
    `}
`;

const ContenedorTerminos = styled.div`
    grid-column: span 2;
    text-align: left;


    input {
        margin-right: 10px;
    }

    @media(max-width: 800px){
        grid-column: 1/2;
    }
`;

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 1/3;

    @media(max-width: 800px){
        grid-column: 1/2;
    }
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.1s ease all;
    margin-bottom: 10px;

    &:hover{
        box-shadow: 3px 0 30px rgba(163, 163, 163, 1);
    }
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    margin-top: 10px;
    /* display: none; */
`;

const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background-color: ${colores.error2};
    padding: 0 15px;
    border-radius: 3px;
    grid-column: 1/3;

    p{
        margin: 0;
    }
    b{
        margin-left: 10px;
    }

    @media(max-width: 800px){
        grid-column: 1/2;
    }
`;

export {
    Formulario,
    Label,
    GrupoInput,
    InputCampo,
    LeyendaError,
    IconoValidacion,
    ContenedorTerminos,
    ContenedorBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError
}