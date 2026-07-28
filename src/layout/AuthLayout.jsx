import React from 'react'
import { Outlet } from 'react-router';
import AuthPage from '../Components/AuthPage';

const AuthLayout = () => {
  return (
    <div className="grid grid-cols-2">
      <AuthPage/>
      <Outlet/>
    </div>
  )
}

export default AuthLayout