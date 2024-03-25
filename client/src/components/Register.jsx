import React from 'react'
import Left from './login/Left'
import Right from './register/Right'

function Register() {
  return (
    <div className="flex justify-center mx-auto md:h-screen">
      <Left/>
      <Right/>
    </div>
  )
}

export default Register
