import React from 'react';
import {PhotoCard} from '../PhotoCard/index';


export const ListOfPhotoCardsComponent=({ data:{photos = []}}={})=>{
  console.log(photos.length)
  return(
    <ul>
      {photos.map((photo) => <PhotoCard key={photo.id} {...photo}/>)}
    </ul>
  )
}
