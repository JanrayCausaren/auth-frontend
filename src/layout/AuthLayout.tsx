import { Toaster } from '@/components/ui/sonner'
import React from 'react'
import { Outlet } from 'react-router'

// type Props = {}

const AuthLayout = () => {
  return (
    <main>this is auth layout
      <Outlet></Outlet>
      <Toaster></Toaster>
    </main>
  )
}

export default AuthLayout