import React,{Suspense} from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import {Logo} from './components/Logo';
import {Home} from './pages/Home';
import { Redirect, Router } from '@reach/router'
import {Detail} from './pages/Detail';
import {NavBar} from './components/NavBar';
//import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Context } from './Context';
import {NotFound} from './pages/NotFound';

const Favs = React.lazy(()=>import('./pages/Favs'));

export const App = () => {
const {isAuth} = React.useContext(Context);

  return (
    <Suspense fallback={<h1>load...</h1>}>
    <GlobalStyle/>
    <Logo/>
          <Router>
            <NotFound default/>
            <Home path='/' />
            <Home path='/pet/:id'/>
            <Detail path='/detail/:detailId'/>
            {!isAuth && <NotRegisteredUser path='/login' />}
            {!isAuth && <Redirect from={'/favs'} to={'/login'}/>}
            {!isAuth && <Redirect from={'/user'} to={'/login'}/>}
            {isAuth && <Redirect from={'/login'} to={'/'}/>}

            <Favs path='/favs'/>
            <User path='/user'/>
          </Router>

      <NavBar/>

  </Suspense>
  )
}


