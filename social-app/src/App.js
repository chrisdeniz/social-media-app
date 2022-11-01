import React , {useState , useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,

  Route,Routes,

} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { db , auth } from './components/Firebase.js';
import {collection, doc, getDocs , addDoc , getDoc} from 'firebase/firestore'
import Login from "./components/login"
import Main from "./components/Main"

import Register from './components/register';



function App() {
  const [user , setUser] = useState({
    username: "",
    password: "",
    
    loggedIn: false
  })
  
 

  function handleChange(event) {  
    const {name,value} =event.target 
      setUser(prevUser => ({
          ...prevUser,
          [name] : value
      }))
  }
   const [currentUser , setCurrrentUser] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
  
  }
  const navigate = useNavigate()
 

  const navigateHome = () => {
    db.collection('registerdata').onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        const rdata = doc.data() 
        if(rdata.username === user.username && rdata.password == user.password){
          setUser({loggedIn:true})
          navigate('/main')
          setCurrrentUser(rdata.username)
          
        }})
        
      })
  }
  const navigateToRegister = () => {
     navigate('/register')
  }
////////
const [register , setRegister] = useState({
  cuser: "",
  pass: "",
  cpass: ""
 })

      async  function createUser ()  {
        await db.collection('registerdata').add({
          username : register.cuser,
          password : register.pass,
          cpassword : register.cpass
        })
      }
   function  handleRegister(event) {
      const {name,value} =event.target 
        setRegister(prevUser => ({
            ...prevUser,
            [name] : value
        }))
       
          
    }
   
    function handleSubmitRegister(event) {
      event.preventDefault()
      if(register.pass === register.cpass && register.cuser !== "" && register.pass !== "") {
         
        
          navigate('/login')
          
      }else {
          alert("error")
      }
      createUser()
    }
 
console.log(register)

  return (
    <div className="App">   
    
 
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path="/login" element={<Login
       navigateHome = {navigateHome}
       handleChange = {handleChange}
       handleSubmit = {handleSubmit}
       navigateToRegister = {navigateToRegister}
        user={user} 
       

      />}/>
 
      <Route path="/main" element={<Main currentUser= {currentUser} /> }/>
    
      
      
      
      <Route path="/register" element={<Register
handleRegister = {handleRegister}
handleSubmitRegister = {handleSubmitRegister}
register = {register}
      /> }/>
  
    </Routes>
   
    </div>
  );
  }

export default App;
