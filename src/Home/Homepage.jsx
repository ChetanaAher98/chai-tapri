import React from 'react';
// import Loader from '../Home/Loader';
import bgImage from '../Images/bg.jpeg';
import bgLine from '../Images/background_lining.jpeg';
import restuarent from '../Images/restaurent.jpeg'
import tea from '../Images/tea1.jpeg'
import logo from '../Images/logo2.jpeg'
// import '../Home/FirstPage.css'

export default function Homepage() {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    height: "100vh",
    width: "100%",
    backgroundSize: 'cover'
  };
  const bg = {
    backgroundImage: `url(${bgLine})`,
    height: "700px",
    width: "100%",
    backgroundColor: "black",
    backgroundSize: 'cover'
  };

  const restaurantStyle = {
    height: "500px",
    width: "1000px",

  };
  const main = {
    display: "flex",
    justifyContent: "center",
    height: "700px",
    alignItems: "center"
  }

  const seprator = {
    height: "120px",
    paddingRight: "0 40px",
    width: "2px",
    backgroundColor: "black"
  }

  return (
    <>
     

     {/* <Loader /> */}

      <div style={bg} data-aos="fade-up">
        <div style={main}>
          <img src={restuarent} style={restaurantStyle} alt="Restaurant" />
        </div>
      </div>




<div className='mb-7 '>
      <div class="container px-5 md:px-20c mb-20 " data-aos="fade-up">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="col-md-6 sm:w-full sm:h-48" >
            <img src={tea} style={{ marginTop: "-30px", height: "500px", width: "100%" }} alt="" />
          </div>
          <div class="col-md-6 sm:w-full" >
            <div className='flex justify-center items-center flex-col sm:flex-row md:flex-row'>
              <img src={logo} height={150} width={150} className='m-5 md:m-20 p-5' alt="" />
              <div style={seprator} className=' md:block'></div>
              <p className='text-3xl md:pl-5'>
                Cafes
              </p>
            </div>
            <p className='text-xl text-justify mt-5 md:-mt-10 px-5 md:px-10'>
              Open yourself to new cultures, make new memories and indulge in fascinating cuisines at our all-day diner that brings together the experiences from around the world.s We are fueled by our passion for good food, great people, and a glorious time. Head over to the liveliest commune in the city.
            </p>
            <br />
            <p className='text-md text-justify px-5 md:px-10'>
              <span className='font-bold text-lg text-justify'>Locations:</span> Aerocity, New Delhi | Mall Road, North Delhi | Golden Park, Kolkata | The Mills, Pune
            </p>
          </div>
        </div>
      </div>
      </div>

    </>
  );
}