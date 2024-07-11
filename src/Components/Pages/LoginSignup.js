import React, { useState } from 'react'
import styles from './LoginSignup.module.css'
import { Link } from 'react-router-dom'

export const LoginSignup = () => {

  const [state , setState] = useState("Login")

  return (
    <div className={styles.loginsignup}>
      <div className={styles['loginsignup-container']}>
        <h1>{state}</h1>
        <div className={styles['loginsignup-fields']}>
         {state==='Sign Up' &&  <input type='text' placeholder='Your Name'/>}
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        {state==='Login'?
        <p className={styles['loginsignup-login']}>
        Don't have an account? <span style={{cursor:'pointer'}} onClick={()=>setState("Sign Up")}>Click here</span>
      </p>
      :
      <p className={styles['loginsignup-login']}>
          Already Have an account? <span style={{cursor:'pointer'}} onClick={()=>setState("Login")}>Login here</span>
        </p>
      }
        <div className={styles['loginsignup-agree']}>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
