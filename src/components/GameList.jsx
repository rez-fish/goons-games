import React from 'react'
import GameCard from './GameCard'
import Spinner from './Spinner'

const GameList = ({ games }) => {
  let empty = []
  return (
    <div className='mt-10 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {games.length == 0 ? (
        <div className='flex justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        ''
      )}
      {games.map((game) => (
        <GameCard game={game} key={game.slug} />
      ))}
    </div>
  )
}

export default GameList
