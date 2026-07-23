// import { Button } from '@/components/ui/button'
import { Outlet } from 'react-router'

// type Props = {}

const LandingLayout = () => {
  return (
    <main>
        <Outlet></Outlet>
    </main>
  ) 
}

export default LandingLayout