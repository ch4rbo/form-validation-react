import React from 'react';
import { Formulario, Label, GrupoInput, Input, LeyendaError, IconoValidacion, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <main>
      <Formulario action="">
        <div>
          <Label htmlFor="nombre">Usuario</Label>
          <GrupoInput>
            <Input type="text" placeholder="usuario" id="nombre" />
            <IconoValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>Ingrese un nombre de usuario</LeyendaError>
        </div>
        <ContenedorTerminos>
          <Label>
            <Input type="checkbox"  name="terminos" id="terminos" />Acepto los Terminos y Condiciones</Label>  
        </ContenedorTerminos>
        {false && <MensajeError>
          <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b> Error:</b> Por favor completa el formulario correctamente.
          </p>
        </MensajeError>}

        <ContenedorBotonCentrado>
        <Boton type="submit">Enviar</Boton>
        <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
}

export default App;
