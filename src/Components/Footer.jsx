import React from 'react';
import logo from '../Images/logo-chai.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
        <div style={{ backgroundColor: "black", padding: "5px", color: "white",padding:"7px",marginTop:"15px" }}>
        <div className='container mx-auto max-w-7xl'>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ flex: "1", margin: "0 20px", textAlign: "center" }}>
                    <img src={logo} alt="Company Logo" style={{ height: "110px", width: "100px" }} />
                </div>
                <div style={{ flex: "1", margin: "0 20px", paddingLeft:"30px",marginTop:"15px"}}>
                   <Link to="/"><p className='text-lg cursor-pointer'>Home</p></Link> 
                    <Link to="/video"><p className='text-lg cursor-pointer'>Our Stories</p></Link>
                    <Link to="/photos"><p className='text-lg'>Gallery</p></Link>
                    <Link to="/ow"><p className='text-lg'>Overview</p></Link>
                </div>
                <div style={{ flex: "1", margin: "0 20px", paddingLeft:"30px" }}>
                    <p className='text-lg'>Site Map</p>
                    <p className='text-lg'>Privacy</p>
                    <p className='text-lg'>Terms Of Use</p>
                </div>
                <div style={{ flex: "1", margin: "0 20px", paddingLeft:"30px"}}>
                    <p className='text-lg'>Discover Global Network</p>
                    <p className='text-lg'>Photos</p>
                    <p className='text-lg'>Discover</p>
                </div>
               
            </div>
            <div style={{ display: "flex", justifyContent: "start", marginTop: "20px",paddingBottom:"7px" ,paddingTop:"3px"}}>
                <div className='social-icons'>
                    <i className="fab fa-instagram" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
                    <i className="fab fa-facebook-f" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
                    <i className="fab fa-linkedin-in" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
                    <i className="fab fa-twitter" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
                    <i className="fab fa-youtube" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
                </div>
            </div>
        </div>

<div>
<hr />
 <div className=' sm:w-full md:flex justify-between items-center bg-black py-5'>
<h1 className='text-center md:w-1/2 text-white md:order-1 text-xl'>
 Made With Love <i className="fa-solid fa-heart" style={{color:"#f70820"}}></i> by Nedtech
</h1>
<h1 className='text-xl text-white text-center md:w-1/2 md:order-2 capitalized tracking-widest leading-4'>
 <i className="fa-regular fa-copyright"></i> 2024 Nerdtech All Rights Reserved.
</h1>
</div>
</div>
</div>
</>
    );
}
