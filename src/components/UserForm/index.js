import React, { Fragment } from 'react'
import {useInputValue} from '../../hooks/useInputValue';
import { Form, Input,  Title, Span } from './styles';
import {SubmitButton} from '../SubmitButton';


export const UserForm=({onSubmit,title,error,disabled})=>{

 const  email = useInputValue('');
 const password = useInputValue('');
const handleSubmit =(evt)=>{
  evt.preventDefault();
  onSubmit({email:email.value,password:password.value})
}
  return (
    <Fragment>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <SubmitButton disabled={disabled} type="submit" >{title}</SubmitButton>
      </Form>
      {error && <Span>{error}</Span>}
    </Fragment>
  )
}
