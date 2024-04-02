import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    slidesToScroll: 2,
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
          marginLeft: "40px",
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
          marginRight: "40px"
        }}
      >
        <img src={nextArrow} alt="Next Arrow" style={{marginTop:"-17px",height:"30px",width:"30px",marginLeft:"10px"}} />
      </button>
    );
  }

  return (
    <>
    
    <div >
    <div >
      <h1 className="textWithStroke text-center  text-amber-400 text-5xl pt-3 pb-3 font-bold">CAFE OUTLETS</h1>
    </div>
    <div className="slider-container px-5" >
      <Slider {...settings}>
        <div>
          <img src={Slider1} alt="Image 1" className="w-full  rounded-full p-6 m-2"  />
        </div>
        <div>
          <img src={Slider2} alt="Image 2" className="w-full  rounded-full  p-6 m-2" />
        </div>
        <div>
          <img src={Slider3} alt="Image 3" className="w-full  rounded-full p-6 m-2" />
        </div>
        <div>
          <img src={Slider4} alt="Image 4" className="w-full  rounded-full p-6 m-2" />
        </div>
      </Slider>
    </div>
    </div>
    
    
    </>
  );
}

export default MultipleItems;







// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// function MultipleItems() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//         <div>
//           <h3>9</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default MultipleItems;

