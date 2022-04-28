import { useEffect, useState } from 'react'
import GameList from './components/GameList'
import Navbar from './components/Navbar'
import axios from 'axios'
import Spinner from './components/Spinner'

function App() {
  const [games, setGames] = useState([])
  const [page, setPage] = useState(1)
  const [spinnerOn, setSpinnerOn] = useState(false)
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=6ab40626e1874667a43cc167804464ca&page=${page}`,
      headers: {
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '19237e4112msh5882c8bcbd8e9eap129925jsnf7ee308703da',
      },
    }

    const getGames = async () => {
      console.log(page)
      if (page >= 1) {
        setSpinnerOn(true)
        let res = await axios.request(options)
        setGames(res.data.results)
        setSpinnerOn(false)
      }
    }
    getGames()
    window.scrollTo(0, 0)
  }, [page])

  return (
    <>
      <div
        className={`${
          !spinnerOn ? 'hidden' : ''
        } flex justify-center items-center mt-10`}
      >
        <Spinner />
      </div>
      <div className='text-white'>
        <div className='text-center mt-10'>
          <h1 className='font-bold text-5xl'>Top picks</h1>
          <p className='font-light text-xl mt-4'>Based on ratings</p>
        </div>
      </div>
      <GameList games={games} />
      <div className='flex align-middle justify-center items-center mt-5 gap-5 '>
        <button
          className='bg-neutral-800 text-white p-5 rounded-md hover:bg-green-600'
          onClick={() =>
            setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : null))
          }
        >
          Show previous page
        </button>
        <button
          className='bg-neutral-800 text-white p-5 rounded-md hover:bg-green-600'
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Show next page
        </button>
      </div>
    </>
  )
}

export default App
