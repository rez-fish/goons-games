import React from 'react'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <div
        className={`bg-black absolute top-0 right-0 h-full w-full opacity-80 ${
          !showMenu && 'hidden'
        }`}
      ></div>
      <div
        className={`z-10 bg-white ${
          !showMenu && 'hidden'
        } absolute top-5 right-5 rounded-2xl w-9/12`}
      >
        <MdClose
          className='absolute top-5 right-5 text-3xl'
          onClick={() => setShowMenu(false)}
        />
        <nav className='m-5'>
          <h1 className='font-bold text-2xl'>My Things</h1>
          <div className='flex flex-col'>
            <Link
              to={'/my-games'}
              className='font-normal text-xl mt-3'
              onClick={() => setShowMenu(false)}
            >
              My Games
            </Link>
            <Link
              to={'/wishlist'}
              className='font-normal text-xl mt-3'
              onClick={() => setShowMenu(false)}
            >
              Wishlist
            </Link>
            <Link
              to={'/'}
              className='font-bold text-2xl mt-10'
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
