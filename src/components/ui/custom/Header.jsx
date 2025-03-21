import React from 'react'
import { Button } from '../button'

const Header = () => {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center px-5 '>
      <img src="/log.svg"/>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header

