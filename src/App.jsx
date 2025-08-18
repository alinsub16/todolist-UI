import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import bgImage from './assets/bg-image.jpg';

function App() {

  const [overlayOpacity, setOverlayOpacity] = useState(50);


  return (
    <div className='min-h-screen w-full relative bg-center bg-cover bg-no-repeat flex flex-col justify-end items-center bg-black/50' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black"  style={{ opacity: overlayOpacity / 100 }}></div>
        <Home />

      <div className="relative mt-8 mb-5 z-10 w-64">
       <p className="text-white text-center text-sm mb-2">Adjust brightness</p>
        <input
          type="range"
          min="0"
          max="100"
          value={overlayOpacity}
          onChange={(e) => setOverlayOpacity(e.target.value)}
          className="w-full accent-white"
        />
        <p className="text-white text-sm mt-1 text-center">
        Brightness: {overlayOpacity}%
        </p>
      </div>
    </div>
  )
}

export default App
