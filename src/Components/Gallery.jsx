

// import React, { useState } from 'react';
// import imgb1 from '../Images/Ambience/amb1.JPG';
// import imgb2 from '../Images/Ambience/amb2.JPG';
// import imgb3 from '../Images/Ambience/amb3.JPG';
// import imgb4 from '../Images/Ambience/amb4.JPG';
// import imgb8 from '../Images/Ambience/amb8.JPG';
// import imgb9 from '../Images/Ambience/amb9.JPG';
// import imgb10 from '../Images/Ambience/amb10.JPG';
// import imgb11 from '../Images/Ambience/amb11.JPG';
// import imgb12 from '../Images/Ambience/amb12.JPG';
// import imgb13 from '../Images/Ambience/amb13.JPG';
// import imgb14 from '../Images/Ambience/amb14.JPG';
// import imgb15 from '../Images/Ambience/amb15.JPG';
// import imgb17 from '../Images/Ambience/amb17.JPG';
// import imgb18 from '../Images/Ambience/amb18.JPG';

// import imgf1 from '../Images/Food/food1.jpg';
// import imgf2 from '../Images/Food/food2.jpg';
// import imgf3 from '../Images/Food/food3.jpg';
// import imgf4 from '../Images/Food/food4.jpg';
// import imgf5 from '../Images/Food/food5.jpg';
// import imgf6 from '../Images/Food/food6.jpg';
// import imgf7 from '../Images/Food/food7.jpg';

// export default function Gallery() {
//     const [currentCategory, setCurrentCategory] = useState('all');

//     const allImages = [imgb4, imgf1, imgb12, imgb9, imgf5, imgb18, imgb8, imgb17, imgf6, imgb15, imgf2, imgf4, imgb14, imgb13, imgb3, imgf7, imgf3, imgb2, imgb11, imgb1];
//     const ambienceImages = [imgb1, imgb2, imgb3, imgb4, imgb8, imgb9, imgb10, imgb11, imgb12, imgb13, imgb14, imgb15, imgb17, imgb18];
//     const foodImages = [imgf1, imgf2, imgf3, imgf4, imgf5, imgf6, imgf7];

//     const handleCategoryChange = (category) => {
//         setCurrentCategory(category);
//     };

//     const getImageArray = () => {
//         switch (currentCategory) {
//             case 'all':
//                 return allImages;
//             case 'ambience':
//                 return ambienceImages;
//             case 'food':
//                 return foodImages;
//             default:
//                 return allImages;
//         }
//     };

//     return (
//         <>
//             <div className='container mx-auto'>
//                 <p className='text-3xl text-center font-bold my-4'>Chai Tapri Photos</p>

//                 <div className='flex flex-wrap justify-center gap-2'>
//                     <button
//                         type='button'
//                         onClick={() => handleCategoryChange('all')}
//                         className={`px-4 py-1 text-white mx-1 bg-yellow-300 border-2 rounded-xl ring ring-amber-300 hover:ring-yellow-500 ${currentCategory === 'all' ? 'bg-yellow-500' : ''}`}
//                     >
//                         All
//                     </button>
//                     <button
//                         type='button'
//                         onClick={() => handleCategoryChange('ambience')}
//                         className={`px-4 py-1 mx-1 border-2 rounded-xl ring ring-yellow-300 hover:ring-amber-500 ${currentCategory === 'ambience' ? 'bg-yellow-500' : ''}`}
//                     >
//                         Ambience
//                     </button>
//                     <button
//                         type='button'
//                         onClick={() => handleCategoryChange('food')}
//                         className={`px-4 py-1 mx-1 border-2 rounded-xl ring ring-yellow-300 hover:ring-amber-500 ${currentCategory === 'food' ? 'bg-yellow-500' : ''}`}
//                     >
//                         Food
//                     </button>
//                 </div>
//             </div>

//             <div className='container mx-auto my-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32'>
//                 <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
//                     {getImageArray().map((image, index) => (
//                         <div key={index} className='relative'>
//                             <img src={image} alt={`Gallery Image ${index}`} style={{height:"180px"}} className='w-full  object-cover rounded-lg transition-transform duration-300 transform hover:scale-105' />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }


import React, { useState } from 'react';
import over from '../Images/background_lining.jpeg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import previousArrow from '../Images/arrow_pre.jpeg';
import nextArrow from '../Images/arrow_next.jpeg';
import imgb1 from '../Images/Ambience/amb1.JPG';
import imgb2 from '../Images/Ambience/amb2.JPG';
import imgb3 from '../Images/Ambience/amb3.JPG';
import imgb4 from '../Images/Ambience/amb4.JPG';
import imgf1 from '../Images/Food/food1.jpg';
import imgf2 from '../Images/Food/food2.jpg';
import imgf3 from '../Images/Food/food3.jpg';
import imgf4 from '../Images/Food/food4.jpg';

export default function Gallery() {
    const [currentCategory, setCurrentCategory] = useState('all');

    const allImages = [imgb1, imgb2, imgb3, imgb4, imgf1, imgf2, imgf3, imgf4];
    const ambianceImages = [imgb1, imgb2, imgb3, imgb4];
    const foodImages = [imgf1, imgf2, imgf3, imgf4];

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    const getImageArray = () => {
        switch (currentCategory) {
            case 'all':
                return allImages;
            case 'ambience':
                return ambianceImages;
            case 'food':
                return foodImages;
            default:
                return allImages;
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    function PrevArrow({ onClick }) {
        return (
          <button
            className="slick-arrow slick-prev rounded-full"
            onClick={onClick}
            style={{
               
              background: "white",
              display: "block",
              height: "50px",
              width: "50px",
              zIndex: "1",
              position: "absolute",
              marginLeft: "50px",
              color: "black"
            }}
          >
            <img src={previousArrow} alt="Previous Arrow" style={{marginTop:"-17px",height:"30px",width:"30px",marginLeft:"10px"}} />
          </button>
        );
      }
    
      function NextArrow({ onClick }) {
        return (
          <button
            className="slick-arrow slick-next rounded-full"
            onClick={onClick}
            style={{
              background: "white",
              display: "block",
              height: "50px",
              width: "50px",
              marginRight: "50px"
            }}
          >
            <img src={nextArrow} alt="Next Arrow" style={{marginTop:"-17px",height:"30px",width:"30px",marginLeft:"10px"}} />
          </button>
        );
      }

    //   const bgimg={
    //     backgroundImage: `url(${over})` ,
    //     backgroundSize:"cover",
    //     backgroundRepeat: "no-repeat"
    
    // }
    return (
        <>
        <div className='container mx-auto max-w-7xl' >

       
            <div>
                <div className='flex justify-center my-4'>
                    <button
                        type='button'
                        onClick={() => handleCategoryChange('all')}
                        className={`px-4 py-1 text-white mx-1 bg-yellow-300 border-2 rounded-xl ring ring-amber-300 hover:ring-yellow-500 ${currentCategory === 'all' ? 'bg-yellow-500' : ''}`}
                        // className={`mx-2 px-4 py-1 text-white bg-yellow-500 rounded-xl ${currentCategory === 'all' ? 'bg-blue-700' : ''}`}
                    >
                        All
                    </button>
                    <button
                        type='button'
                        onClick={() => handleCategoryChange('ambience')}
                        className={`px-4 py-1 mx-1 border-2 rounded-xl ring ring-yellow-300 hover:ring-amber-500 ${currentCategory === 'ambience' ? 'bg-yellow-500' : ''}`}
                        // className={`px-4 py-1 text-white mx-1  border-2 rounded-xl ring ring-amber-300 hover:ring-yellow-500 ${currentCategory === 'all' ? 'bg-yellow-500' : ''}`}
                        // className={`mx-2 px-4 py-1 text-white bg-green-500 rounded-xl ${currentCategory === 'ambience' ? 'bg-green-700' : ''}`}
                    >
                        Ambience
                    </button>
                    <button
                        type='button'
                        onClick={() => handleCategoryChange('food')}
                        className={`px-4 py-1 mx-1 border-2 rounded-xl ring ring-yellow-300 hover:ring-amber-500 ${currentCategory === 'food' ? 'bg-yellow-500' : ''}`}
                        // className={`px-4 py-1 text-white mx-1  border-2 rounded-xl ring ring-amber-300 hover:ring-yellow-500 ${currentCategory === 'all' ? 'bg-yellow-500' : ''}`}
                        // className={`mx-2 px-4 py-1 text-white bg-red-500 rounded-xl ${currentCategory === 'food' ? 'bg-red-700' : ''}`}
                    >
                        Food
                    </button>
                </div>
            </div>

            <div className='container mx-auto my-8'>
                <Slider {...settings}>
                    {getImageArray().map((image, index) => (
                        <div key={index} className='relative'  data-aos="flip-left">
                            <img src={image} style={{aspectRatio:"4/3"}} alt={`Gallery Image ${index}`} className='w-full p-5 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105' />
                            {/* //  onMouseEnter={(e) => e.currentTarget.setAttribute("data-aos", "zoom-in-up")}
                            //  onMouseLeave={(e) => e.currentTarget.removeAttribute("data-aos")} /> */}

                        </div>
                    ))}
                </Slider>
            </div>
            </div>
        </>
    );
}
