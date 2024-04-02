// import React from 'react'
// import './Footer.css'
// import logo from '../Images/logo-chai.png'

// export default function Footer() {
//     return (
//         <>
//             <div style={{ backgroundColor: "#041e42" }}>
//                 <div className='container mx-auto flex text-white flex' style={{ backgroundColor: "#041e42" }}>
//                     <div className='mx-20 my-9'>
//                         <p>Home</p>
//                         <p>About Us</p>
//                         <p>Press</p>
//                         <p>Apply</p>
//                     </div>

//                     <div className='mx-20 my-9'>
//                         <p>Site Map</p>
//                         <p>Privacy</p>
//                         <p>Terms Of Use</p>
//                     </div>

//                     <div className='mx-20 my-9'>
//                         <p>Discover Global Network</p>
//                         <p>PULSE</p>
//                         <p>Discover</p>
//                     </div>

//                     <div className='mx-20 my-9'>
//                         <p>Dev Center</p>
//                         <p>AdChoices</p>
//                         <p>Failed Transaction-India</p>
//                     </div>
//                 </div>

//                 <div className='flex'>

//                     <div>

//                         <div className='flex  mx-20 '>
//                             <i class="fa-brands fa-square-instagram bg-white rounded-full p-3 m-2" style={{ color: "#041e42" }}></i>
//                             <i class="fa-brands fa-facebook bg-white rounded-full p-3 m-2" style={{ color: "#041e42" }}></i>
//                             <i class="fa-brands fa-linkedin-in bg-white rounded-full p-3 m-2" style={{ color: "#041e42" }}></i>
//                             <i class="fa-brands fa-twitter bg-white rounded-full p-3 m-2" style={{ color: "#041e42" }}></i>
//                             <i class="fa-brands fa-youtube bg-white rounded-full p-3 m-2" style={{ color: "#041e42" }}></i>

//                         </div>
//                         <div className='mx-20 my-3'><p className='text-white pb-5'><i class="fa-regular fa-copyright text-white"></i>2024 Nerdtech(R)</p>
//                         </div>
//                     </div>
//                      <div className=''>
//                         <img src={logo} alt="" />
//                     </div> 
//                 </div>
//             </div>
//         </>
//     )
// }


// import React from 'react';
// import logo from '../Images/logo-chai.png';

// export default function Footer() {
//     return (
//         <div style={{ backgroundColor: "#041e42", padding: "20px 0", color: "white" }}>
//             <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
//                 <div style={{}}>
//                     <img src={logo} alt="Company Logo" style={{ flex: 1, margin: "0 20px",height:"100px",width:"100px" }} />
//                 </div>
//                 <div style={{ flex: 1, margin: "0 20px" }}>
//                     <p>Home</p>
//                     <p>About Us</p>
//                     <p>Press</p>
//                     <p>Apply</p>
//                 </div>
//                 <div style={{ flex: 1, margin: "0 20px" }}>
//                     <p>Site Map</p>
//                     <p>Privacy</p>
//                     <p>Terms Of Use</p>
//                 </div>
//                 <div style={{ flex: 1, margin: "0 20px" }}>
//                     <p>Discover Global Network</p>
//                     <p>PULSE</p>
//                     <p>Discover</p>
//                 </div>
//                 <div style={{ flex: 1, margin: "0 20px" }}>
//                     <p>Dev Center</p>
//                     <p>AdChoices</p>
//                     <p>Failed Transaction-India</p>
//                 </div>
//             </div>
//             <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
//                 <div className='social-icons'>
//                     <i className="fab fa-instagram" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
//                     <i className="fab fa-facebook-f" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
//                     <i className="fab fa-linkedin-in" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
//                     <i className="fab fa-twitter" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
//                     <i className="fab fa-youtube" style={{ fontSize: "20px", margin: "0 10px", color: "white", cursor: "pointer" }}></i>
//                 </div>
//             </div>

//             <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <p>&copy; 2024 Nerdtech(R)</p>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import logo from '../Images/logo-chai.png';

export default function Footer() {
    return (
        <>
        <div style={{ backgroundColor: "black", padding: "0px 0", color: "white",padding:"7px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ flex: "1", margin: "0 20px", textAlign: "center" }}>
                    <img src={logo} alt="Company Logo" style={{ height: "150px", width: "120px" }} />
                </div>
                <div style={{ flex: "1", margin: "0 20px", paddingLeft:"30px",marginTop:"15px"}}>
                    <p className='text-lg'>Home</p>
                    <p className='text-lg'>Our Stories</p>
                    <p className='text-lg'>Gallery</p>
                    <p className='text-lg'>Overview</p>
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
</>
    );
}
