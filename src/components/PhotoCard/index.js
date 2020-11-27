import React from 'react';
import {ImgWrapper,Img,Article} from './style';
import {useNearScreen} from '../../hooks/useNearScreen';
import {FavButton} from '../FavButton';
import {ToggleLikeMutation} from '../../container/ToggleLikeMutation';
import {Link} from '@reach/router';
const DEFAUL_IMAGE = "https://cdn.pixabay.com/photo/2013/04/03/12/05/tree-99852_960_720.jpg"



export const PhotoCard =({id,liked,likes=0,src=DEFAUL_IMAGE})=>{
  const [show,element]=useNearScreen()


  return(
    <Article ref={element}>
     {
        show && <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="avateres"/>
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toggleLike)=>{
                const handleFavClick =()=> {
                  toggleLike({
                   variables:{
                     input:{id}
                   }
                 })
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>

              }
            }
          </ToggleLikeMutation>
        </React.Fragment>
     }
    </Article>
  )
}
