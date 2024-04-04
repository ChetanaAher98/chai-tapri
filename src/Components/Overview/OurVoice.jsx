import React from 'react';
import aboutimage from '../../assets/images';


export default function OurVoice() {
    const {card1, card2, card3, card4, dchaiOne, dchaitwo} =aboutimage
    return (
        <>
            

            <div className="container  mt-10  mx-auto px-4 md:max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative">
                            <img src={dchaiOne} alt="About" style={{ borderRadius: "25px" }} className="w-full md:max-w-full" data-aos="flip-left" />
                            <div className="absolute bottom-0 left-0 p-4 bg-opacity-50 text-white" style={{ marginBottom: "20px", marginLeft: "20px" }}>
                                <h2 className="text-2xl font-semibold mb-2">Chai Development</h2>
                                <p>Explore opportunities around the globe</p>
                                <button className="bg-white mt-2 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"> Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
                        <div className="relative">
                            <img src={dchaitwo} alt="About" style={{ borderRadius: "25px" }} className="w-full md:max-w-full" data-aos="flip-left" />
                            <div className="absolute bottom-0 left-0 p-4 bg-opacity-50 text-white" style={{ marginBottom: "20px", marginLeft: "20px" }}>
                                <h2 className="text-2xl font-semibold mb-2">Chai Development</h2>
                               <p>For current or prospective shareholders</p>
                                <button className="bg-white mt-2 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        


            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-5xl md:text-4xl font-semibold text-[#000] mb-4">
                    The Voice Of Chai Tapri
                </h1>
            </div>



        <div className="container mx-auto  max-w-6xl">
            <div className="flex flex-wrap justify-center ">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={card1} alt="Placeholder" className="w-full h-40 object-cover" data-aos="flip-left" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Chai News Center</h2>
                            <a href="https://www.instagram.com/chaitapriblore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="mt-4 block text-blue-500">View On Linkdin</a>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={card2} alt="Placeholder" className="w-full h-40 object-cover" data-aos="flip-left" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">David Blog</h2>
                            <a href="https://www.instagram.com/" className="mt-4 block text-blue-500 hover:underline">View on Linkdin</a>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={card3} alt="Placeholder" className="w-full h-40 object-cover"  data-aos="flip-left"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Anthony Blog</h2>
                           
                            <a href="https://www.instagram.com/" className="mt-4 block text-blue-500 hover:underline">view on Linkdin</a>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={card4} alt="Placeholder" className="w-full h-40 object-cover" data-aos="flip-left"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Heart of the House</h2>
                            <a href="https://www.instagram.com/" className="mt-4 block text-blue-500 hover:underline">View on Linkdin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container mx-auto py-10 flex flex-col items-center'>
            <h1 className="text-2xl font-semibold mb-8">Our Location</h1>
            <div className="w-full md:max-w-6xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.154873685725!2d73.75962977468788!3d20.002013622251347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebcd37f6b6bd%3A0x5a27ec4d571cbec2!2sChai%20tapri%20Best%20cafe%20in%20Nasik!5e0!3m2!1sen!2sin!4v1712051410639!5m2!1sen!2sin" 
                    width="100%" 
                    height="500" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chai Tapri Location"
                ></iframe>
            </div>
        </div>
        
        
        </>
    );
}