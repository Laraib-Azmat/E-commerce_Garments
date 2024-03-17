import React from 'react'
import styles from './LoginSignup.module.css'

export const LoginSignup = () => {
  return (
    <div className={styles.loginsignup}>
      <div className={styles['loginsignup-container']}>
        <h1>Sign Up</h1>
        <div className={styles['loginsignup-fields']}>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className={styles['loginsignup-login']}>
          Already Have an account? <span>Login here</span>
        </p>
        <div className={styles['loginsignup-agree']}>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
