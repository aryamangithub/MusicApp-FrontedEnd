import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Login } from "./components/index";
import {app} from './config/firebase.config'
import { getAuth } from 'firebase/auth';

const App = () => {

  const firebaseAuth = getAuth(app)
  const navigate = useNavigate()

  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCredentials) => {
        if(userCredentials) {
          userCredentials.getIdToken().then((token) => {
              console.log(token);
          })
        } 
        else {
          setAuth(false)
          window.localStorage.setItem("auth", "false")
          navigate('/login')
        }
    })
  }, [])
  

  return (
    <div className='w-screen h-screen bg-primary flex justify-center items-center'>
      <Routes>
          <Route path='/login' element={<Login setAuth = {setAuth} />}/>
          <Route path='/*' element={<Home/>}/>
      </Routes>
    </div>

  )
}

export default App