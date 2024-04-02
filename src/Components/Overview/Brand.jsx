import React from "react";
import aboutimaage from "../../assets/images";

export default function Brand() {
  const { coreimg, strategy, diversity, impact } = aboutimaage;
  return (
    <>
      <div className="container md:max-w-6xl mx-auto px-4 mt-10 md:px-0">
        
          {/* core section */}
          <div className="flex flex-col md:flex-row justify-center md:max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
              <div className="bg-gray-300">
                <img src={coreimg} alt="" className="max-w-full" />
              </div>
            </div>
            <div className="w-full bg-white md:w-1/2 flex items-center justify-center">
              <div className="px-4 h-full text-center place-content-center">
                <h1 className="text-3xl font-bold mb-4">
                  Core Values & Heritage
                </h1>
                <p className="text-lg">
                  Founded by J. Willard and Alice Marriott, and guided by family
                  leadership since 1927, their principles remain embedded in the
                  company's culture and in everything we do today.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 my-3 py-2 text-white font-bold px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
                  Our Story
                </button>
              </div>
            </div>
          </div>
        

        <div className="container md:max-w-6xl mx-auto px-4 mt-10 md:px-0">
          <div className="flex flex-col md:flex-row justify-center md:max-w-7xl mx-auto">
            <div className="w-full bg-white md:w-1/2 flex items-center justify-center order-2 md:order-1">
              <div className=" px-4 h-full text-center place-content-center">
                <h1 className="text-3xl font-bold mb-4">Company Strategy</h1>
                <p className="text-lg">
                  Our Growing Forward strategy encapsulates our company
                  priorities, rooted in our core values, and guides us as we
                  deliver on the promise of Marriott’s unique brand of
                  hospitality around the world.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 my-3 py-2 text-white font-bold px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
                  Our Strategy
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0 order-1 md:order-2">
              <div className="bg-gray-300">
                <img src={strategy} alt="" className="max-w-full" />
              </div>
            </div>
          </div>
        </div>
       
          <div className="flex flex-col md:flex-row justify-center mt-10 md:max-w-7xl mx-auto">
            {/* Diversity section */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
              <div className="bg-gray-300">
                <img src={diversity} alt="" className="max-w-full" />
              </div>
            </div>
            <div className="w-full bg-white md:w-1/2 flex items-center justify-center">
              <div className="px-4 h-full text-center place-content-center">
                <h1 className="text-3xl font-bold mb-4">
                  Diversity & Inclusion
                </h1>
                <p className="text-lg">
                  Diversity and inclusion is fundamental to our core values and
                  strategic business goals. Taking care of people and their
                  well-being is our most precious cultural inheritance.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 my-3 py-2 text-white font-bold px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
                  Our Values
                </button>
              </div>
            </div>
          </div>
        

        {/* Strategy section */}

        <div className="container md:max-w-6xl mx-auto px-4 mt-10 md:px-0">
          <div className="flex  flex-col md:flex-row justify-center md:max-w-7xl mx-auto">
            <div className="w-full bg-white md:w-1/2 flex items-center justify-center order-2 md:order-1">
              <div className=" px-4 h-full text-center place-content-center">
                <h1 className="text-3xl font-bold mb-4">
                  Sustainability & Social Impact
                </h1>
                <p className="text-lg">
                  Guided by our sustainability and social impact platform, Serve
                  360: Doing Good in Every Direction, Marriott International
                  commits to creating positive and sustainable impact wherever
                  we do business.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 my-3 py-2 text-white font-bold px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0 order-1 md:order-2">
              <div className="bg-gray-300">
                <img src={impact} alt="" className="max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}