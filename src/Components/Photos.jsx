

import React from 'react';
import cover from '../Images/cover.jpg';
import food1 from '../Images/food1.jpg';
import food2 from '../Images/food2.jpg';
import chai from '../Images/chai.jpg';
import './Photos.css';
import Gallery from './Gallery';

export default function Photos() {
    return (
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
            <Gallery />
        </div>
    );
}
