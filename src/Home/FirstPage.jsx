import React from 'react';
import welcomevdo from '../Videos/video.mp4';
import Homepage from './Homepage';
import Video from './Video';
import HomeGallery from '../Components/HomeGallery'
import Slider from './Slider';
const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const titleContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: 1,
};

const titleStyle = {
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  fontSize: '3rem',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  animation: 'fadeIn 2s ease-out',
};

export default function Home() {
  return (
    <>
      <div style={{ height: '100vh', position: 'relative', width: '100%', overflow: 'hidden' }} data-aos="fade-up">
        <video 
          src={welcomevdo} 
          style={videoStyle} 
          autoPlay 
          loop 
          muted
          playsInline  // For mobile compatibility
          preload="auto"  // Preload the video for better performance
        ></video>
        <div style={titleContainerStyle}>
          <h1 style={titleStyle}>Welcome to Chai Tapri®</h1>
        </div>
      </div>
      <Homepage/>
      <Slider/>
      <Video/>
      
      <HomeGallery/>
      
    </>
  );
};
