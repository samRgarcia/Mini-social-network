import React from 'react';
import { Button } from '../PhotoCard/style'
import { FcLikePlaceholder,FcLike } from "react-icons/fc";
import PropTypes from 'prop-types';



export const FavButton = ({liked,likes,onClick})=>{
  const Icon = liked ? FcLike:FcLikePlaceholder;

  return <Button onClick={onClick} >
    <Icon size='32px'/>
    {likes} likes!
  </Button>
}

FavButton.prototype={
  liked:PropTypes.bool.isRequired,
  likes:PropTypes.number.isRequired,
  onClick:PropTypes.func.isRequired
}
