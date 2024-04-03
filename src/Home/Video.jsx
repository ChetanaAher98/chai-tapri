import React from 'react';
import '../Home/Video.css'
import chaitapri from '../Images/chai-tapri.avif'
import chai from '../Images/Chai.jpeg'
import tapri from '../Images/tapri.jpeg'
import bgLine from '../Images/background_lining.jpeg';
import RandomPic from '../Components/Random-pic'

export default function Video() {
    const bg = {
        backgroundImage: `url(${bgLine})`,
        height: "700px",
        width: "100%",
        backgroundColor: "black",
        backgroundSize: 'cover'
    };
    const main = {
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center"
    };

    const internal = {
        display: "flex",
        justifyContent: "center",
        height: "50vh",
        alignItems: "center"
    };

    return (
        <>

            <div style={bg} className="background-container bg" data-aos="fade-up">
                <div className='text-5xl font-bold  text-center textWithStrok pt-5'>Our Stories</div>
                <div style={main} className='-mt-10 main '>
                    <iframe
                        width="1000"
                        height="450"
                        src="https://www.youtube.com/embed/Tn5-dU46wOA?si=IQ4h6lhREP3skaNj&autoplay=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; controls clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>

                </div>
            </div>

<RandomPic/>
            <div className="container mx-auto px-4 sm:px-10 md:px-20 lg:px-28 py-10 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-lg">
                    <div className="p-4 space-y-4">
                        <h1 className="text-xl md:text-2xl font-bold text-center">What is a chai tapri?</h1>
                        <p className="text-gray-500 text-base md:text-lg">Tapri (tea stall) is a term used for a spot where people gather to share stories, conversations, and make memories, all while sipping a warm cup of chai.</p>
                    </div>
                    <div data-aos="zoom-in">
                        <img src={chai} alt="Chai Tapri" className="object-cover w-full h-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 my-10 shadow-lg py-10 gap-4">
                    <div className="flex justify-center items-center"data-aos="zoom-in">
                        <img src={chaitapri} alt="Arpit Raj - Chaai Seth" className="h-72 w-72 object-cover mx-auto" />
                    </div>
                    <div className="p-4 space-y-4">
                        <h1 className="text-xl md:text-2xl font-bold">Who is the owner of Chai Tapri?</h1>
                        <p className="text-gray-500 text-base md:text-lg">Arpit Raj, the founder of Chaai Seth holds a BBA in Travel, Tourism & Hospitality, and an MBA degree in Marketing. The co-founder Prateek too is an MBA-Finance grad and worked with KPMG. Arpit Raj started the "chai" concept back in 2015 in Shillong.</p>
                    </div>
                </div>

                <hr className="my-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 py-10 shadow-lg">
                    <div className="p-4 space-y-4">
                        <h1 className="text-xl md:text-2xl font-bold">Success Story of ‘Chaai Seth’ Founder Arpit Raj</h1>
                        <p className="text-gray-500 text-base md:text-lg">Success Story: Chai, for Indians, is not just a regular beverage but an emotion. Our day is empty, dull, and tiring without the “energy drink”. Sitting with your friends on a chai tapri, chit-chatting, and having heart-to-heart conversations while sipping tea are some of the best moments of our lives. Nothing can match the joy.</p>
                        <p className="text-gray-500 text-base md:text-lg">Chai business is also now on trend. Almost every day we see a new chai wala in the news who is building a successful business. However, not everyone has the potential to grow and expand on a PAN India level, as it requires a lot of dedication, taste stability, and discipline.</p>
                    </div>
                    <div data-aos="zoom-in" >
                        <img src={tapri} alt="Success Story" className="object-cover h-full w-full" />
                    </div>
                </div>

                <hr className="my-8" />

                <div className="grid grid-cols-1">
                    <div className="p-4 space-y-4">
                        <h1 className="text-xl md:text-2xl font-bold">How it all started</h1>
                        <p className="text-gray-500 font-2xl">So, in the hostel room where the boys lived, Arpit and his friends initially started a tiffin delivery service that was exclusively meant for those wanting to snack late at night. In his own college, he often noticed how people from different parts of the state craved food from their own culture. This is when Arpit and his friends started looking to open a food stall outside the campus. Initially, they would cook themselves and deliver it to the people.</p>
                        <p className="text-gray-500 font-2xl">Soon, the boys moved to a flat, which meant they could hire a cook too to help them with orders. “I remember hiring a local Bengali woman who would prepare snacks, aloo parathas, gobi parathas, etc., and we’d get on our scooters to deliver these. Our promise was that we’d get the food to you within 30 minutes,” he told the Better India.</p>
                        <p className="text-gray-500 font-2xl">So, instead of striving for perfection in various cuisines, he decided to zero in on a food item that could bring people together no matter where they came from. And, tea was the answer!</p>
                        <p className="text-gray-500 font-2xl">The idea worked incredibly well. The climate of Shillong meant people flocked to the tapri ever so often, and soon, Arpit and his friends began to see returns. Arpit has roots in Bihar and was in Shillong for 3 years where he started this concept. In the final year of his college, he got placed in Delhi and had to join the job in a food startup. Working there for 2 years, he realized to work on my own venture and to shape it in a bigger way by making a full-fledged Pvt Ltd company.</p>
                        <p className="text-gray-500 font-2xl">With the total investment starting from just 6-7 lacs, Arpit through his Chaai Seth franchise is offering 20+ varieties of tea and a fast-food menu! Recently, Chaai Seth has been nominated for the 500 startups award as well.</p>
                        {/* <p className="text-gray-500 text-base md:text-lg">So, in the hostel room where the boys lived, Arpit and his friends initially started a tiffin delivery service that was exclusively meant for those wanting to snack late at night... (text continued)</p> */}
                       
                        {/* Ensure to include the rest of your text content here as needed */}
                    </div>
                </div>
            </div>



               </>
    );
}