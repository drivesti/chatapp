import React, { useState, useContext } from 'react'
import Styled from 'styled-components'
import {Link, Redirect} from 'react-router-dom'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'


const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = useContext(AuthContext)

    if (user) {
        return (
            <Redirect to="/" />
        )
    }
    const handleSubmit = e => {
    e.preventDefault()
    if (!email || !password){
        return alert('入力されてないです')
    }

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(() =>{
        console.log("login success")
        history.push("/")
    })
    .catch(err => {
        console.log(err)
    })
}

    return (
        <>
        <h2>ログイン</h2>
        <FormContainer>
         <form onSubmit ={handleSubmit}>  
             <FormRow>
            <div>
             <label htmlFor="email">Email</label>
             <input type ="email" id="email" placeholder="sample@codevillage.jp"
             onChange={e => setEmail(e.target.value)} 
             />
            </div>
             </FormRow>
             <FormRow>
             <div>
             <label htmlFor='password'>Password</label>
             <input
              name='password'
              type='password'
              id='password'
              onChange={e => setPassword(e.target.value)}
              />
             </div>    
             <input type="submit" value="ログイン" />
             </FormRow>
                 {/* <SubmitButton type="submit" value="ログイン" /> */}
                 <Link to="/SignUp">サインアップ</Link>
            
         </form>
        </FormContainer>
        </>
    )
}

const FormContainer= Styled.div`
width :600px;
margin: 0 auto;
`

const FormRow = Styled.div`
 margin-top: 20px;
`
// const SubmitButton = Styled.input`
//  margin-top: 30px;
//  background: #90DAB5;
//  border: none;
//  width: 100%;
//  max-width: 240px;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  margin: 0 auto;
//  height: 40px;

// `
export default Login 