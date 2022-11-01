import React , {useState , useEffect}from "react";
import { useNavigate } from "react-router-dom";
import { db } from './Firebase.js';
import {collection, doc, getDocs , addDoc} from 'firebase/firestore'
export default function Register (props) {

      
    return (
        <div className='register-page'>
         
            <div>
                <h1 className='title'>Chrisbook</h1>
            </div>
                <div className='register--section'>
                    <form className='form-register'
                    onSubmit={props.handleSubmitRegister}
                    >
                    <input
                    className='username'
                    type="text"
                    placeholder="Username"
                    name='cuser'
                   onChange={props.handleRegister}
                    value={props.register.cuser}
                    /> 
                     <input
                     className='password'
                    type="password"
                    placeholder="Password"
                    name='pass'
                  onChange={props.handleRegister}
                    value={props.register.pass}
                    /> 
                     <input
                     className='cpassword'
                    type="password"
                    placeholder="Confirm Password"
                    name='cpass'
                   onChange={props.handleRegister}
                    value={props.register.cpass}
                    /> 
                    
                    <button 
                   
                 

                 onClick={props.handleSubmitRegister}
                    className='register--button'>
                            REGISTER
                    </button>
                    
                    </form>
                   
                </div>
          
        </div>
        
    )
}