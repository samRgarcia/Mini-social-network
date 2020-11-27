import React ,{useState,useEffect}from 'react';
import {Category} from '../Category';
import {Item,List} from './styles';
//import {categories as mockCategories} from '../../../api/db.json';


function useCategoriesData(){
  const [categories,setCategories]=useState(Array(5).fill({}));
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    fetch('https://petgram-sam-server-6du83kpgn.vercel.app/categories')
      .then(res => res.json())
      .then(response=>{
        setCategories(response);
        setLoading(false);
      })
  },[])
  return{categories,loading}
}



 const ListOfCategoriesComponent = () =>{
  const {categories,loading} = useCategoriesData();
  const [showFixed,setShowFixd]=useState(false);


  useEffect(()=>{
    const onScroll = e =>{
      const newShowFixed = window.scrollY > 180
      showFixed!=newShowFixed && setShowFixd(newShowFixed)
    }
    document.addEventListener('scroll',onScroll)

    return () => document.removeEventListener('scroll',onScroll)
  },[showFixed])

  const renderList =(fixed,loading)=>(
    <List fixed={fixed} >
      {
        loading ?
          <Item key='loading'>
            <Category/>
          </Item>:
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} loading={loading.toString()} />
          </Item>)
      }
    </List>
  )

  return(
    <React.Fragment>
      {renderList(false,loading)}
      {showFixed && renderList(true,loading)}
    </React.Fragment>
)
}
export const ListOfCategories=React.memo(ListOfCategoriesComponent);
