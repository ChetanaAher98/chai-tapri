

import React, { useState } from 'react';
import imgb1 from '../Images/Ambience/amb1.JPG';
import imgb2 from '../Images/Ambience/amb2.JPG';
import imgb3 from '../Images/Ambience/amb3.JPG';
import imgb4 from '../Images/Ambience/amb4.JPG';
import imgb8 from '../Images/Ambience/amb8.JPG';
import imgb9 from '../Images/Ambience/amb9.JPG';
import imgb10 from '../Images/Ambience/amb10.JPG';
import imgb11 from '../Images/Ambience/amb11.JPG';
import imgb12 from '../Images/Ambience/amb12.JPG';
import imgb13 from '../Images/Ambience/amb13.JPG';
import imgb14 from '../Images/Ambience/amb14.JPG';
import imgb15 from '../Images/Ambience/amb15.JPG';
import imgb17 from '../Images/Ambience/amb17.JPG';
import imgb18 from '../Images/Ambience/amb18.JPG';

import imgf1 from '../Images/Food/food1.jpg';
import imgf2 from '../Images/Food/food2.jpg';
import imgf3 from '../Images/Food/food3.jpg';
import imgf4 from '../Images/Food/food4.jpg';
import imgf5 from '../Images/Food/food5.jpg';
import imgf6 from '../Images/Food/food6.jpg';
import imgf7 from '../Images/Food/food7.jpg';

export default function Gallery() {
    const [currentCategory, setCurrentCategory] = useState('all');

    const allImages = [imgb4, imgf1, imgb12, imgb9, imgf5, imgb18, imgb8, imgb17, imgf6, imgb15, imgf2, imgf4, imgb14, imgb13, imgb3, imgf7, imgf3, imgb2, imgb11, imgb1];
    const ambienceImages = [imgb1, imgb2, imgb3, imgb4, imgb8, imgb9, imgb10, imgb11, imgb12, imgb13, imgb14, imgb15, imgb17, imgb18];
    const foodImages = [imgf1, imgf2, imgf3, imgf4, imgf5, imgf6, imgf7];

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    const getImageArray = () => {
        switch (currentCategory) {
            case 'all':
                return allImages;
            case 'ambience':
                return ambienceImages;
            case 'food':
                return foodImages;
            default:
                return allImages;
        }
    };

    return (
        <>
            <div className='container mx-auto'>
                <p className='text-3xl text-center font-bold my-4'>Chai Tapri Photos</p>

                <div className='flex flex-wrap justify-center gap-2'>
                    <button
                        type='button'
                        onClick={() => handleCategoryChange('all')}
                        className={`px-4 py-1 text-white mx-1 bg-yellow-300 border-2 rounded-xl ring ring-blue-300 hover:ring-blue-500 ${currentCategory === 'all' ? 'bg-yellow-500' : ''}`}
                    >
                        All
                    </button>
                    <button
                        type='button'
                        onClick={() => handleCategoryChange('ambience')}
                        className={`px-4 py-1 mx-1 border-2 rounded-xl ring ring-blue-300 hover:ring-blue-500 ${currentCategory === 'ambience' ? 'bg-yellow-500' : ''}`}
                    >
                        Ambience
                    </button>
                    <button
                        type='button'
                        onClick={() => handleCategoryChange('food')}
                        className={`px-4 py-1 mx-1 border-2 rounded-xl ring ring-blue-300 hover:ring-blue-500 ${currentCategory === 'food' ? 'bg-yellow-500' : ''}`}
                    >
                        Food
                    </button>
                </div>
            </div>

            <div className='container mx-auto my-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {getImageArray().map((image, index) => (
                        <div key={index} className='relative'>
                            <img src={image} alt={`Gallery Image ${index}`} style={{height:"180px"}} className='w-full  object-cover rounded-lg transition-transform duration-300 transform hover:scale-105' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
