import React from 'react'
import Spinner from './Spinner'
import PlatformIcon from './PlatformIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faGift, faCrown } from '@fortawesome/free-solid-svg-icons'

const GameCard = ({ game }) => {
  return (
    <>
      {game.name ? (
        <div className='rounded-2xl overflow-hidden bg-neutral-800 h-max'>
          <img className='' src={game.background_image} alt='' />
          <div className='p-5'>
            <div className='flex text-xs flex-wrap '>
              <PlatformIcon platform={game.platforms} />
            </div>
            <div className='font-extrabold text-2xl mt-3'>{game.name}</div>
            <div className='flex items-center mt-2'>
              <div className='flex items-center gap-1 bg-neutral-600 py-1 px-2 rounded-lg'>
                <FontAwesomeIcon icon={faPlus} />
                522
              </div>
              <div className='bg-neutral-600 ml-2 py-1 px-2 rounded-lg'>
                <FontAwesomeIcon icon={faGift} className=' ' />
              </div>
              <div className='bg-neutral-600 ml-2 py-1 px-2 rounded-lg'>
                <FontAwesomeIcon icon={faCrown} />
              </div>
            </div>
            <p className='text-center underline underline-offset-2 decoration-neutral-500 mt-5 text-sm'>
              View More
            </p>
          </div>
        </div>
      ) : (
        <div className='rounded-2xl overflow-hidden bg-neutral-900'>
          <div className='flex justify-center items-center'>
            <Spinner />
          </div>
        </div>
      )}
    </>
  )
}

export default GameCard
