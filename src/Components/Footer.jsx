


import React from 'react';
import logo from '../Images/logo-chai.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div style={{ backgroundColor: "black", color: "white", marginTop: "15px" }}>
                <div className='container mx-auto max-w-7xl px-4 py-6'>
                    <div className="flex flex-wrap justify-center items-center">

                        {/* Logo Section */}
                        <div className="w-full md:w-1/4 text-center mb-4">
                            <img src={logo} alt="Company Logo" className="h-16 w-16 md:h-24 md:w-40 mx-auto" />
                        </div>

                        {/* Navigation Section */}
                        <div className="w-full md:w-1/6 text-center mb-4">
                            <div className="md:text-left">
                                <Link to="/"><p className='text-lg cursor-pointer'>Home</p></Link>
                                <Link to="/video"><p className='text-lg cursor-pointer'>Our Stories</p></Link>
                                <Link to="/photos"><p className='text-lg'>Gallery</p></Link>
                                <Link to="/ow"><p className='text-lg'>Overview</p></Link>
                            </div>
                        </div>

                        {/* Site Map Section */}
                        <div className="w-full md:w-1/4 text-center mb-4">
                            <div className="md:text-left">
                                {/* <p className='text-lg'>Site Map</p> */}
                                <p className='text-lg'><i class="fa-solid fa-location-dot pr-5 text-xl "></i>College Road Shop 2, Chandan Apartments, Model Colony, Nashik 422005 India</p>
                                
                            </div>
                        </div>

                        {/* Discover Section */}
                        <div className="w-full md:w-1/4 text-center mb-4 px-5">
                            <div className="md:text-left">
                                <p className='text-lg'><i class="fa-regular fa-envelope fa-beat  pr-5 text-xl"></i>abc@gmail.com</p>
                                <p className='text-lg'><i class="fa-solid fa-phone-volume fa-shake  pr-5 text-xl"></i> +91 99224 36500</p>
                                
                            </div>
                        </div>

                    </div>

                    {/* Social Icons Section */}
                    <div className="flex justify-center mt-4">
                        <div className='social-icons'>
                            <i className="fab fa-instagram text-white text-xl mx-2"></i>
                            <i className="fab fa-facebook-f text-white text-xl mx-2"></i>
                            <i className="fab fa-linkedin-in text-white text-xl mx-2"></i>
                            <i className="fab fa-twitter text-white text-xl mx-2"></i>
                            <i className="fab fa-youtube text-white text-xl mx-2"></i>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <hr />
                <div className='container mx-auto max-w-7xl px-4 py-2'>
                    <div className='flex flex-col md:flex-row justify-center items-center bg-black py-2'>

                        {/* Made With Love */}
                        <h1 className='text-center md:w-1/2 text-white text-lg md:text-xl'>
                            Made With Love <i className="fa-solid fa-heart" style={{ color: "#f70820" }}></i> by Nedtech
                        </h1>

                        {/* Copyright */}
                        <h1 className='text-lg text-white text-center md:w-1/2 md:order-2 capitalized tracking-widest leading-4'>
                            <i className="fa-regular fa-copyright"></i> 2024 Nerdtech All Rights Reserved.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

