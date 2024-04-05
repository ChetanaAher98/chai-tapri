<<<<<<< HEAD

=======


// import React from 'react';
// import logo from '../Images/logo-chai.png';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//     return (
//         <>
//             <div style={{ backgroundColor: "black", color: "white", marginTop: "15px" }}>
//                 <div className='container mx-auto max-w-7xl px-4 py-6'>
//                     <div className="flex flex-wrap justify-center items-center">

//                         {/* Logo Section */}
//                         <div className="w-full md:w-1/4 text-center mb-4">
//                             <img src={logo} alt="Company Logo" className="h-16 w-16 md:h-24 md:w-40 mx-auto" />
//                         </div>

//                         {/* Navigation Section */}
//                         <div className="w-full md:w-1/6 text-center mb-4">
//                             <div className="md:text-left">
//                                 <Link to="/"><p className='text-lg cursor-pointer'>Home</p></Link>
//                                 <Link to="/video"><p className='text-lg cursor-pointer'>Our Stories</p></Link>
//                                 <Link to="/photos"><p className='text-lg'>Gallery</p></Link>
//                                 <Link to="/ow"><p className='text-lg'>Overview</p></Link>
//                             </div>
//                         </div>

//                         {/* Site Map Section */}
//                         <div className="w-full md:w-1/4 text-center mb-4">
//                             <div className="md:text-left">
//                                 {/* <p className='text-lg'>Site Map</p> */}
//                                 <p className='text-lg'><i class="fa-solid fa-location-dot pr-5 text-xl "></i>College Road Shop 2, Chandan Apartments, Model Colony, Nashik 422005 India</p>
                                
//                             </div>
//                         </div>

//                         {/* Discover Section */}
//                         <div className="w-full md:w-1/4 text-center mb-4 px-5">
//                             <div className="md:text-left">
//                                 <p className='text-lg'><i class="fa-regular fa-envelope fa-beat  pr-5 text-xl"></i>abc@gmail.com</p>
//                                 <p className='text-lg'><i class="fa-solid fa-phone-volume fa-shake  pr-5 text-xl"></i> +91 99224 36500</p>
                                
//                             </div>
//                         </div>

//                     </div>

//                     {/* Social Icons Section */}
//                     <div className="flex justify-center mt-4">
//                         <div className='social-icons'>
//                             <i className="fab fa-instagram text-white text-xl mx-2"></i>
//                             <i className="fab fa-facebook-f text-white text-xl mx-2"></i>
//                             <i className="fab fa-linkedin-in text-white text-xl mx-2"></i>
//                             <i className="fab fa-twitter text-white text-xl mx-2"></i>
//                             <i className="fab fa-youtube text-white text-xl mx-2"></i>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Bottom Section */}
//                 <hr />
//                 <div className='container mx-auto max-w-7xl px-4 py-2'>
//                     <div className='flex flex-col md:flex-row justify-center items-center bg-black py-2'>

//                         {/* Made With Love */}
//                         <h1 className='text-center md:w-1/2 text-white text-lg md:text-xl'>
//                             Made With Love <i className="fa-solid fa-heart" style={{ color: "#f70820" }}></i> by Nedtech
//                         </h1>

//                         {/* Copyright */}
//                         <h1 className='text-lg text-white text-center md:w-1/2 md:order-2 capitalized tracking-widest leading-4'>
//                             <i className="fa-regular fa-copyright"></i> 2024 Nerdtech All Rights Reserved.
//                         </h1>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
>>>>>>> b111e8e1aec946c81b7e4643d2b7a8d28f52f6ef


import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa';
// import imgname from '../../../assets/images/banner/polka_dots.webp';

const Footer = () => {


  return (
    <div className='bg-[#000]'>
      <footer className="bg-[#000] py-8 container max-w-6xl mx-auto  p-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="footer-section">
              <h3 className="text-lg font-bold mb-4 text-white">QUICK LINKS</h3>
              <ul className='text-white'>
              <Link to="/"> <li>Home</li></Link>
              <Link to="/video"><li>Our Story</li></Link>
              <Link to="/photos"> <li>Gallery</li></Link>
              <Link to="/ow"> <li>Overview</li></Link>
                {/* <li>Wholesale Enquiries</li>
                <li>Suta Earth</li> */}
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="text-lg font-bold mb-4 text-white">Our Locations</h3>
              <ul className='text-white'>
                <li>Nashik , Clg Road</li>
                <li>Nashik , Gangapur Road</li>
                <li>Nashik , Duber</li>
                <li>Nashik , Vani</li>
               
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="text-lg font-bold mb-4  text-white">NEWSLETTER</h3>
              <p className="mb-2 text-white">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <input type="email" placeholder="Enter your email address" className="block w-full px-4 py-2 mb-2 border border-yellow-300 rounded-md text-white" style={{backgroundColor:"transparent"}} />
              <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-[#FFFF00] text-black">SUBSCRIBE</button>
            </div>
            <div className="footer-section  text-white ">
              <h3 className="text-lg font-bold mb-4 ">About Chai Tapri</h3>
              <p className="mb-2">Find the best place to hang out with friends. Visit Chai Tapri and enjoy hot coffees, cold coffees, snacks and more.</p>
              <p className="mb-2">Toll Free: 080-456-81713</p>
              <p>Email: ChaiTapri@.in</p>
            </div>
          </div>
        </div>
      </footer>

      <div className='py-4  text-white'>
        <div className='text-center text-2xl font-semibold'>
        Made With Love <i className="fa-solid fa-heart" style={{ color: "#f70820" }}></i> by NerdTech
        </div>
        <p className="text-center">Copyright 2024 © Chai Tapri. All Rights Reserved.</p>
        {/* Social Media Section */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <a href="#" className=" text-white hover:text-gray-900">
            <FaInstagram size="2em" />
          </a>
          <a href="#" className=" text-white hover:text-[#FFFF00]">
            <FaTwitter size="2em" />
          </a>
          <a href="#" className=" text-white hover:text-[#FFFF00]">
            <FaFacebook size="2em" />
          </a>
          <a href="#" className=" text-white hover:text-[#FFFF00]">
            <FaPinterest size="2em" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
