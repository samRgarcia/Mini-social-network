import React,{useState} from 'react'

export const useInputValue = initialValue=>{
  const [value,setValue]= useState(initialValue);
  const onChange = evt => setValue(evt.target.value);

  return {value,onChange}
}
