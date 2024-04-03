import React from 'react';
import cover from '../Images/cover.jpg';
import food1 from '../Images/food1.jpg';
import food2 from '../Images/food2.jpg';
import chai from '../Images/chai.jpg';
import '../Components/Photos.css';

export default function Photos() {
    return (
        <div className=' mt-2 ' data-aos="fade-up">

            <div className="bg-gray-100 flex ">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="py-4 text-center">
                        <h1 className="text-5xl md:text-4xl font-semibold text-blue-900 mb-4">Explore Our Gallery</h1>
                        <p className="text-lg md:text-xl text-gray-700">Travel with us as we expand our world, improve the communities we serve and open doors to new opportunities.</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4 sm:px-8 md:px-0 lg:px-0'>
                <div className='flex flex-col md:flex-row md:space-x-2'>
                    <div className='md:w-8/12 md:flex-1'>
                        <img src={cover} alt="Cover" className='w-full h-auto md:h-96 object-cover rounded-lg' />
                    </div>
                    <div className='md:w-4/12 md:flex-1 mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-2'>
                        <img src={food1} alt="Food 1" className='w-full h-40 md:w-1/2 md:h-auto object-cover rounded-lg' />
                        <img src={food2} alt="Food 2" className='w-full h-40 md:w-1/2 md:h-auto object-cover rounded-lg mt-4 md:mt-0' />
                    </div>
                    <div className='md:w-4/12 md:flex-1 mt-4 md:mt-0'>
                        <img src={chai} alt="Chai" className='w-full h-auto md:h-96 object-cover rounded-lg' />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
