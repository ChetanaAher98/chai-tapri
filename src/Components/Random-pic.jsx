import React from "react";
import img3 from '../Images/card1.webp';
import img2 from '../Images/card2.webp';
import img1  from '../Images/card3.webp';
import img4 from '../Images/card4.jpg';

export default function Volunteers() {
  const line = {
    width: "60px",
    border: "3px solid #f8b864",
    margin: "0 auto",
    
};
  return (
    <>

      <div className='text-center  pt-8' >
                    <h1 className=' text-3xl font-bold  text-3xl sm:text-5xl font-extrabold px-4 sm:px-20 ' style={{ color: "#041e42" }}>Feature Destination</h1>
                    {/* <div style={line}></div> */}
                </div>
      <div className="flex justify-center items-center py-10">
      
        <div className="flex flex-wrap justify-center gap-4" >
          <TeamMember src={img1} name="CHAI TAPRI" role="Nashik" />
          <TeamMember src={img2}  name="TEA CAFE" role="Pune" />
          <TeamMember src={img3}  name="COFFEE SHOP" role="Mumbai" />
          <TeamMember src={img1}  name="ALL DRINKSS" role="Delhi" />
          
        </div>
      </div>
    </>
  );
}

function TeamMember({ src, name, role }) {
  return (
    <div className="relative w-64">
      <img
        src={src}
        alt={name}
        className="w-full  rounded-lg overflow-hidden transition-opacity duration-300 hover:opacity-50"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-35 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
}