import { Toaster } from '@/components/ui/sonner'
import { Outlet } from 'react-router'

// type Props = {}

const AuthLayout = () => {
  return (
    <main>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </main>
  )
}

export default AuthLayout