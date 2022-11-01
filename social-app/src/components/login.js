import React , { useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './Firebase.js';
import {collection, doc, getDocs} from 'firebase/firestore'

export default function Login(props) {

 
    return (
        <div className='login-page'>
         
            <div>
                <h1 className='title'>Chrisbook</h1>
            </div>
                <div className='login--section'>
                    <form className='form-login'
                    onSubmit={props.handleSubmit}
                    >
                    <input
                    className='username'
                    type="text"
                    placeholder="Username"
                    name='username'
                    onChange={props.handleChange}
                    value={props.user.username}
                    /> 
                     <input
                     className='password'
                    type="password"
                    placeholder="Password"
                    name='password'
                    onChange={props.handleChange}
                    value={props.user.password}
                    /> 
                    <button type='submit'
                   onClick={props.navigateHome}
                    
                      
              
                 
                    className='login--button'>
                            LOGIN
                    </button>
                    <button className='toRegister--button'
                    onClick={props.navigateToRegister}
                              >
                      Click to register
                    </button>

                    </form>
                   
                </div>
        </div>
    )}
    

