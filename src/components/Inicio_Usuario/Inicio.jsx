import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import SignIn from '../SignIn/SignIn';
import Footer from "../Footer/Footer";
import Logo from '../Logo/Logo';
import UserWelcome from "../UserWelcome/UserWelcome";

import './inicio.css'

function Inicio() {

    const { user } = useContext( AppContext );

  return (
    <div className="user-register">
      <header>
      <Logo 
          classNameContainer='logo__vert'
          classNameLogo='logo__vert-logotype'
          classNameNaming='logo__vert-naming'
        />
      </header>

      <main>
      {user ? (
          <UserWelcome />
        ):(
          <SignIn />
        )}
        <Footer />
      </main>
    </div>
  );
}

export default Inicio;