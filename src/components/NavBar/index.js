import React from 'react';
import {Nav,Link} from './style';
import { FcMenu } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
const size ='25px'

export const NavBar =()=>{
  return(
    <Nav>
      <Link to='/'><FcMenu size={size}/></Link>
      <Link to='/favs'><FcLikePlaceholder size={size}/></Link>
      <Link to='/user'><FcSettings size={size}/></Link>
    </Nav>
  )
}
