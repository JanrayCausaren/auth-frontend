import React from 'react'
import { Outlet } from 'react-router'

// type Props = {}

const AuthLayout = () => {
  return (
    <main>this is auth layout
      <Outlet></Outlet>
    </main>
  )
}

export default AuthLayout