import React from 'react';
import aboutimaage from '../../assets/images';
import BrandLeader from './BrandLeader';
import Brand from './Brand';
import OurVoice from './OurVoice';

export default function Overview() {
  const { aboutbanner } = aboutimaage;

  return (
    <>
    <div data-aos="fade-up">
      <div className="bg-gray-100 flex ">
        <div className="max-w-4xl mx-auto px-4">
          <div className="py-4 text-center">
            <h1 className="text-5xl md:text-4xl font-semibold text-blue-900 mb-4">We Are Chai Tapri</h1>
            <p className="text-lg md:text-xl text-gray-700">Travel with us as we expand our world, improve the communities we serve and open doors to new opportunities.</p>
          </div>
        </div>
      </div>

      <div className='w-full' >
        <img src={aboutbanner} alt="" style={{ width: '100%', height: '70vh' }} />
      </div>
      </div>
      <BrandLeader/>
      <Brand/>
      <OurVoice/>
    </> 
  );
}