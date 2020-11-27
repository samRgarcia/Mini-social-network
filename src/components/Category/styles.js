import styled from 'styled-components';
import {Link as LinkRouter} from '@reach/router';

export const Link = styled(LinkRouter)`
 display:flex;
 flex-direccion:column;
 text-aling:center;
 text-decoration:none;
 width:75px;
`

export const Image = styled.img`
box-sizing: border-box;
border: 3px solid #eee;

box-shadow: 0px 10px 14px rgba(0,0,0,.2);
border-radius: 50%;
height: auto;
overflow: hidden;
object-fit: cover;
height: 75px;
width: 75px;
margin-bottom: 5px;
background: #ddd;
${props=> props.loading === 'true' && css`
object-fit: scale-down;
`}
`
