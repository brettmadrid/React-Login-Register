import React from 'react'
import loginImg from '../../assets/login.svg'

export const Register = ({ containerRef }) => {
  return (
    <div className='base-container' ref={containerRef}>
      <div className='header'>Register</div>
      <div className='content'>
        <div className='image'>
          <img src={loginImg} alt='Login pic' />
        </div>
        <div className='form'>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' placeholder='username' />
          </div>
          <div className='form-group'>
            <label htmlFor='username'>Email</label>
            <input type='email' name='email' placeholder='email' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='password' />
          </div>
        </div>
        <div className='footer'>
          <button type='submit' className='btn'>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}
