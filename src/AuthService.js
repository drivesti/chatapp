import React, { useEffect } from 'react'
import firebase from './config/firebase'
import { useState } from 'react'


const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value ={user}>
        { children }
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}