import React from 'react'
import {Header, Gap, SignInForm } from '../../components';

const SignIn = () => {
  return (
    <div className='flex flex-col w-full'>
       <Header tittle='Sign In' desc='Find your best ever meal'/>
       <Gap height={24} className="bg-gray-100"/>
       <SignInForm/>
    </div>
  )
}

export default SignIn;