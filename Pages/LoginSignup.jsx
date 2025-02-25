import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have account?<span>Login Here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>I agree to the terms and conditions</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup