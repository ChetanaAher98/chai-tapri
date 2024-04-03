// import React, { useEffect } from 'react'
// import Aos from 'aos'
// import 'aos/dist/aos.css'
// import Navbar from './Components/Navbar'
// import FirstPage from './Home/FirstPage'
// import Footer from './Components/Footer'
// import Photos from './Components/Photos'
// import Video from './Home/Video'
// import Overview from './Components/Overview/Overview';
// import { Route, Routes } from 'react-router-dom'


// export default function App() {
//   useEffect(()=>{
//     Aos.init({duration:2000});
//   })
//   return (
//     <div>
//       <Navbar />
      
//       <Routes>
//         <Route path="/" element={<FirstPage />} />
//         <Route path="/video" element={<Video />} />
//         <Route path="/photos" element={<Photos />} />
//         <Route path="/ow" element={<Overview />} />
//       </Routes>
//       <Footer />
//     </div>
//   )
// }


import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar';
import FirstPage from './Home/FirstPage';
import Footer from './Components/Footer';
import Photos from './Components/Photos';
import Video from './Home/Video';
import Overview from './Components/Overview/Overview';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    Aos.init({ duration: 2000 });

    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [location]);

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
  );
}
