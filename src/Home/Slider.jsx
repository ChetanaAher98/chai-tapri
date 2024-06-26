
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import previousArrow from '../Images/arrow_pre.jpeg';
import nextArrow from '../Images/arrow_next.jpeg';
import Slider1 from '../Images/slider1.jpeg';
import Slider2 from '../Images/slider2.jpeg';
import Slider3 from '../Images/slider3.jpeg';
import Slider4 from '../Images/slider4.jpeg';

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
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

  return (
    <>
<div data-aos="fade-up">
<div   className="">
 <h1 className="textWithStroke text-center  text-black text-5xl pt-3 pb-3 font-bold">CAFE OUTLETS</h1>
   </div>
   
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="">
          <img src={Slider1} alt="" className="w-full h-80 m-2 rounded-lg " />

        </div>
        <div className="">
        <img src={Slider2} alt=""  className="w-full h-80 m-2 rounded-lg "/>
        </div>
        <div className="">
        <img src={Slider3} alt=""  className="w-full  h-80 m-2 rounded-lg "/>
        </div >
        <div className="">
        <img src={Slider4}  alt=""  className="w-full h-80 m-2 rounded-lg"/>
        </div>
        
         
      </Slider>
    </div>
    </div>
    </>
  );
}

export default MultipleItems;

