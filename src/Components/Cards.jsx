import React, { useState } from 'react';
import card1 from '../Images/main.jpeg';
// import card2 from '../Images/card2.webp';
// import card3 from '../Images/card3.webp';
// import card4 from '../Images/card4.jpg';
// import card5 from '../Images/card5.jpg';
// import card6 from '../Images/card6.jpg';
// import card7 from '../Images/card7.jpg';

export default function Cards() {
    const [hoveredIndex, setHoveredIndex] = useState(null); // State to keep track of hovered card index

    const details = [
        {
            img: card1,
            title: "Taste of Paris",
            desc: "In India, tea is not just a hot piping drink, it's an emotion, gossip, conversation, bond beginning and a lot more. With the growing number of tea rooms in India, it’s needless to say that the kind of growth and business opportunity it brings on the table is exceptional."
        },
        {
            img: card1,
            title: "Taste of Paris",
            desc: "In India, tea is not just a hot piping drink, it's an emotion, gossip, conversation, bond beginning and a lot more. With the growing number of tea rooms in India, it’s needless to say that the kind of growth and business opportunity it brings on the table is exceptional."
        },
        {
            img: card1,
            title: "Taste of Paris",
            desc: "In India, tea is not just a hot piping drink, it's an emotion, gossip, conversation, bond beginning and a lot more. With the growing number of tea rooms in India, it’s needless to say that the kind of growth and business opportunity it brings on the table is exceptional."
        },
        {
            img: card1,
            title: "Taste of Paris",
            desc: "In India, tea is not just a hot piping drink, it's an emotion, gossip, conversation, bond beginning and a lot more. With the growing number of tea rooms in India, it’s needless to say that the kind of growth and business opportunity it brings on the table is exceptional."
        },
        {
            img: card1,
            title: "Taste of Paris",
            desc: "In India, tea is not just a hot piping drink, it's an emotion, gossip, conversation, bond beginning and a lot more. With the growing number of tea rooms in India, it’s needless to say that the kind of growth and business opportunity it brings on the table is exceptional."
        },
        {
            img: card1,
            title: "Taste of Paris",
            desc: "In India, tea is not just a hot piping drink, it's an emotion, gossip, conversation, bond beginning and a lot more. With the growing number of tea rooms in India, it’s needless to say that the kind of growth and business opportunity it brings on the table is exceptional."
        },
        {
            img: card1,
            title: "Taste of Paris",
            desc: "In India, tea is not just a hot piping drink, it's an emotion, gossip, conversation, bond beginning and a lot more. With the growing number of tea rooms in India, it’s needless to say that the kind of growth and business opportunity it brings on the table is exceptional."
        }
    ];

    return (
        <div className="mx-4 md:mx-auto  max-w-screen-lg px-4 md:px-0 ">
            <div className="flex flex-wrap -mx-2 md:-mx-4 my-10">
                {details.map((item, index) => (
                    <div 
                        key={index} 
                        className="w-full md:w-1/2 lg:w-1/3 px-2 md:px-4 mb-4 md:mb-0 my-10 relative" 
                        onMouseEnter={() => setHoveredIndex(index)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="bg-white shadow-md">
                            <img className="w-full h-48 md:h-54 object-cover" src={item.img} alt="card" />
                            <div className='pb-20'>
                                <h3 className="text-lg md:text-3xl  font-normal leading-9 tracking-wide mb-2 px-6 text-3xl py-6" style={{color:"gray"}}>{item.title}</h3>
                               <div className={`p-4 pb-28' transition-all duration-500 w-80 h-full mx-auto md:h-54 object-cover overflow-hidden absolute bottom-0 left-0 right-0 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} style={{ backgroundColor: "#f7f7f7",color:"GrayText" }}> <p className="text-gray-700 text-sm md:text-base">{item.desc}</p></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}