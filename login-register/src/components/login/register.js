import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import loginImg from '../../assets/login.svg'

export const Register = ({ containerRef }) => {
  const { register, handleSubmit, errors } = useForm()

  // onSubmit function
  const onSubmit = data => {
    console.log('data', data)
  }

  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const validateUserName = async value => {
    await sleep(1000)
    if (value === 'Brett') return true
    return false
  }

  return (
    <div className='base-container' ref={containerRef}>
      <div className='header'>Register</div>
      <div className='content'>
        <div className='image'>
          <img src={loginImg} alt='Login pic' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                name='username'
                placeholder='username'
                ref={register({
                  required: true,
                  minLength: 2,
                  pattern: /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i,
                  validate: validateUserName,
                })}
              />
              {errors.username && errors.username.type === 'required' && (
                <p>Username is required</p>
              )}
              {errors.username && errors.username.type === 'minLength' && (
                <p>Must be at least 2 characters long</p>
              )}
              {errors.username && errors.username.type === 'pattern' && (
                <p>alphanumeric characters only</p>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                placeholder='email'
                ref={register({
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
                })}
              />
              {errors.email && errors.email.type === 'required' && (
                <p>Please enter a valid email</p>
              )}
              {errors.email && errors.email.type === 'pattern' && (
                <p>Please enter a valid email</p>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                name='password'
                placeholder='password'
                ref={register({
                  required: true,
                  minLength: 8,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                })}
              />
              {errors.password && errors.password.type === 'required' && (
                <p>Password required</p>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                <p>Must be at least 8 characters long</p>
              )}
              {errors.password && errors.password.type === 'pattern' && (
                <p>Must contain a letter, a number, and a special character</p>
              )}
            </div>
          </div>
          <div className='footer'>
            <button type='submit' className='btn'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
