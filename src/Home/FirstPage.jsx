import React from 'react';
// import '../Home/FirstPage.css'
import contactimg from '../Images/bg.jpeg'; 
import Homepage from './Homepage';
import Video from './Video';
import Photos from '../Components/Photos';

const AboutUs = () => {
 const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translateY(-50%)',
    textAlign: 'right',
    width: '40%',
    padding: '10px',
   };

const smallScreenTextContainerStyle = {
    width: '80%',
    left: '15%',
  };

  const smallScreenImgStyle = {
    width: '100%',
    height: '100vh', 
    objectFit: 'cover', 
    position: 'relative',
  };


  return (
    <>
      <div className="relative" data-aos="fade-up">
        <img src={contactimg} alt="" style={{ ...smallScreenImgStyle, opacity: '1' }} className="w-full" />
        <div className="textOverImage" style={{ ...textContainerStyle, ...smallScreenTextContainerStyle }}>
         <h1 className='text-5xl font-bold contactTex '>AN</h1>
        <h1 className='contactText  text-8xl font-bold textWithStroke tracking-wide -mt-6 ' >EXPRESSION</h1>
        <h1 className= 'contactText text-8xl font-bold text-amber-400 tracking-wide italic -mt-7  '>OF CULTURES</h1>
        {/* <h1  className='text-2xl  font-semibold pt-3 '>A mouthful of flavour and a table full of delight!</h1> */}
          
        </div>
      </div>

      
<Homepage/>
<Video/>
<Photos/>

      
    </>
  );
};

export default AboutUs