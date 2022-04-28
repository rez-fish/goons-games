import React, { useState } from 'react'
import { FiSearch, FiMenu } from 'react-icons/fi'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  console.log(showMenu)
  return (
    <>
      <div className='text-white font-extrabold text-xl flex tracking-widest items-center gap-5 relative'>
        <h1 className=''>GOONS</h1>
        <div className='flex items-center bg-neutral-700 rounded-2xl p-1 flex-1'>
          <FiSearch className='mx-2' />
          <input
            className='bg-inherit w-10/12 outline-none'
            type='text'
            placeholder='Search'
          />
        </div>
        <FiMenu className='text-3xl ' onClick={() => setShowMenu(true)} />
      </div>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  )
}

export default Navbar
