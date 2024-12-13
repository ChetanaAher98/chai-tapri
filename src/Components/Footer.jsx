
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
        Made With Love <i className="fa-solid fa-heart" style={{ color: "#f70820" }}></i> by Diginet Solution
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
