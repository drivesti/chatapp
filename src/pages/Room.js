import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'
import { useContext } from 'react'

const Room = () => {
  const [messages,setMessage] = useState([])
  const [value, setValue] = useState('')

  const user = useContext(AuthContext)

  useEffect(() => {
    firebase.firestore().collection('messages ').onSnapshot((snapshot) => {
      setMessage(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  const handleChange = e => {
    setValue(e.target.value)
  }                                                   
  const handleSubmit = e =>{
    e.preventDefault()
    firebase.firestore().collection('messages').add({
      message: value,
      user: '田中',
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('')    
  }
  return (
    <>
    <form onSubmit ={handleSubmit}>
    <ul>
      <RoomContainer>
      <ItemContainer>
      {
        messages.map(message =>
          <li>
            <span>{message.user} : </span>
            {message.message}
          </li>
          )
      }
      </ItemContainer>
      <form>
        <input 
        type="text"
        value={value}
        onChange={handleChange}
        />
        <input type="submit" value="送信" />
      </form>
      </RoomContainer>
      
    </ul>
    </form>
    <button onClick={() => firebase.auth().signOut()}>ログアウト</button>
    </>
  )
}

const RoomContainer = Styled.div`
margin: 0 auto;
width: 600px;
`
const ItemContainer = Styled.ul`
padding: 0;
`
// const Item = Styled.li`
//  margin: 30px 0;
//  list-style: none;
//  padding: 0;

// `
export default Room
