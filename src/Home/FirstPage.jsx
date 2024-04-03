// import React from 'react';
// // import '../Home/FirstPage.css'
// import contactimg from '../Images/bg.jpeg'; 
// import Homepage from './Homepage';
// import Video from './Video';
// import Photos from '../Components/Photos';
// import Random from '../Components/Random-pic'

// const AboutUs = () => {
//  const textContainerStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '2%',
//     transform: 'translateY(-50%)',
//     textAlign: 'right',
//     width: '40%',
//     padding: '10px',
//    };

// const smallScreenTextContainerStyle = {
//     width: '80%',
//     left: '15%',
//   };

//   const smallScreenImgStyle = {
//     width: '100%',
//     height: '100vh', 
//     objectFit: 'cover', 
//     position: 'relative',
//   };


//   return (
//     <>
//       <div className="relative" data-aos="fade-up">
//         <img src={contactimg} alt="" style={{ ...smallScreenImgStyle, opacity: '1' }} className="w-full" />
//         <div className="textOverImage" style={{ ...textContainerStyle, ...smallScreenTextContainerStyle }}>
//          <div className='text-center'>
//            <p className='font-bold text-5xl'>AN</p>
//           <p className='font-bold text-5xl my-2'>EXPRESSION</p>
//           <p className='font-bold text-4xl text-amber-500'>OF CULTURES</p>
//           <p className='font-bold text-lg text-gray-800'>A mouthful of flavour and a table full of delight!</p>
//           </div>
//          {/* <h1 className='text-5xl font-bold contactTex my-4 text-center '>AN</h1> */}
//         {/* <h1 className='contactText  text-8xl sm:text-5xl font-bold textWithStroke tracking-wide -mt-6 text-center' >EXPRESSION</h1> */}
//         {/* <h1 className= 'contactText text-8xl  sm:text-5xl font-bold text-amber-400 text-center tracking-wide italic -mt-2  '>OF CULTURES</h1> */}
//         {/* <h1  className='text-2xl  font-semibold pt-3 '>A mouthful of flavour and a table full of delight!</h1> */}
          
//         </div>
//       </div>

      
// <Homepage/>
// <Random/>
// <Video/>
// <Photos/>

      
//     </>
//   );
// };

// export default AboutUs




// // import React from 'react';
// // import contactimg from '../Images/bg.jpeg'; 
// import Homepage from './Homepage';
// import Video from './Video';
// import Photos from '../Components/Photos';

// // const AboutUs = () => {
// //   const textContainerStyle = {
// //     position: 'absolute',
// //     top: '50%',
// //     left: '5%',
// //     transform: 'translateY(-50%)',
// //     textAlign: 'right',
// //     width: '40%',
// //     padding: '10px',
// //   };

// //   const smallScreenTextContainerStyle = {
// //     width: '80%',
// //     left: '10%', // Adjusted left position
// //     textAlign: 'center', // Center align text on small screens
// //   };

// //   const smallScreenImgStyle = {
// //     width: '100%',
// //     height: '100vh', 
// //     objectFit: 'cover', 
// //     position: 'relative',
// //   };

// //   return (
// //     <>
// //       <div className="relative" data-aos="fade-up">
// //         <img src={contactimg} alt="" style={{ ...smallScreenImgStyle, opacity: '1' }} className="w-full" />
// //         <div className="textOverImage" style={{ ...textContainerStyle, ...smallScreenTextContainerStyle }}>
// //           <h1 className='text-5xl font-bold contactTex my-3 '>AN</h1>
// //           <h1 className='contactText  text-5xl my-5 sm:text-xl font-bold textWithStroke tracking-wide -mt-6 ' >EXPRESSION</h1>
// //           <h1 className= 'contactText text-6xl sm:text-4xl mt-2 font-bold text-amber-400 tracking-wide italic -mt-7  '>OF CULTURES</h1>
// //         </div>
// //       </div>
      
      // <Homepage/>
      // <Video/>
      // <Photos/>
// //     </>
// //   );
// // };

// // export default AboutUs;







import React from 'react';
import welcomevdo from '../Videos/vikas.mp4';
import Homepage from './Homepage';
import Video from './Video';
import HomeGallery from '../Components/HomeGallery'
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
      <div style={{ height: '100vh', position: 'relative', width: '100%', overflow: 'hidden' }}>
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
      <Video/>
      <HomeGallery/>
      
    </>
  );
};
