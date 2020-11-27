import React from 'react';
import {Link,Image} from './styles';

const DEFAULT_IMAGE='https://i.pinimg.com/originals/9e/8c/6d/9e8c6d7fe9ef07a28bf57324725660f5.gif'

export const Category = ({cover=DEFAULT_IMAGE,path='#',emoji='?' ,loading=true})=>(
    <Link to={path}>
        <Image src={cover} alt="avatar-category" loading={loading}/>
        {emoji}
    </Link>
)
