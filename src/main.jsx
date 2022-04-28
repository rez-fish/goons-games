import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wishlist from './components/Wishlist'
import MyGames from './components/MyGames'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <div className='bg-black min-h-screen px-5 py-3'>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/my-games' element={<MyGames />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </div>
    </React.StrictMode>
  </BrowserRouter>
)
