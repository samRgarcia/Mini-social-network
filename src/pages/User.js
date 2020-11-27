import React from 'react';
import {Context} from '../Context';
import {SubmitButton} from '../components/SubmitButton';


export const User =()=> {
  const {removeAuth} = React.useContext(Context)
return <React.Fragment>

  <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>

</React.Fragment>
}
