import React, { useContext, useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'

const SignUp = ({history}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const user = useContext(AuthContext)

  if(user) {
    return <Redirect to= "/" />
  }


  const handleSubmit = e => {
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signup success')
      history.push('/')
    })
    .catch(err => {
      console.log(err)
    })
    if (!email || !password){
      return alert('入力されてないです')
  }
    console.log(email)
    console.log(password)
    
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor='email'>E-mail</label>
          <input 
              name='email'
              type='email'
              id='email'
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
              />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
              name='password'
              type='password'
              id='password'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
              />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
      <Link to="/login">ログイン</Link>
    </div>
  )
}

export default SignUp