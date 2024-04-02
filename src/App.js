import React from 'react'
import Navbar from './Components/Navbar'
import FirstPage from './Home/FirstPage'
import Footer from './Components/Footer'
import Photos from './Components/Photos'
import Video from './Home/Video'
import Overview from './Components/Overview/Overview';
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/video" element={<Video />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/ow" element={<Overview />} />
      </Routes>
      <Footer />
    </div>
  )
}
