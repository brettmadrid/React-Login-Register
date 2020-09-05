import React, { useState } from 'react'
import loginImg from '../../assets/login.svg'
// import { Input } from './input'

export const Login = ({ containerRef }) => {
  const defaultState = {
    username: '',
    email: '',
    password: '',
  }
  const [formState, setFormState] = useState(defaultState)

  // onSubmit function
  const formSubmit = e => {
    e.preventDefault()
    console.log('form submitted')
    setFormState({ username: '', email: '', password: '' })
  }

  const inputChange = e => {
    console.log('input changed', e.target.value)
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  return (
    <div className='base-container' ref={containerRef}>
      <div className='header'>Login</div>
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
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='password' />
          </div>
        </div>
        <div className='footer'>
          <button type='submit' className='btn'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
