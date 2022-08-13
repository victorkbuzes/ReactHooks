import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContextProvider';

import Example from '../components/Example'
import Home from './Home'


export default function Pages() {
  const login = useContext(LoginContext)
  console.log(login);
  return (
    <div>
      <Example />
        <Home />

    </div>
  )
}
