import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const OfferSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 15000,
      };
    
      const images = [
        "https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=85,fit=cover/LS-Fest/LS-new/LS-UberHP-PromoWidget24-Desk-Banner1-05Jun24.jpg",
        "https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=85,fit=cover/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner1-04June2024.gif",
        "https://cdn4.singleinterface.com/files/enterprise/coverphoto/68710/lifestyle-banner-2-04-06-24-11-31-07.jpg",
        "https://cdn4.singleinterface.com/files/enterprise/coverphoto/68710/1134-x-419-2-1-24-04-24-02-44-22.jpg",
        "https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=85,fit=cover/LS-Fest/LS-new/LS-UberHP-PromoWidget50-Desk-Banner1-06Jun24.gif"
      ];
    
      const sliderRef = React.useRef(); //Initializes a ref (sliderRef) to access the Slider component.
    
      const nextSlide = () => {
        sliderRef.current.slickNext();
      };
    
      const prevSlide = () => {
        sliderRef.current.slickPrev();
      };
    
      return (
        <div className="relative flex justify-center">
          <Slider ref={sliderRef} {...settings} className="w-3/4">
            {images.map((url, index) => (
              <div key={index}>
                <img src={url} alt={`slide-${index}`} style={{ marginTop:"30px" ,border:"5px solid red"}} />
              </div>
            ))}
          </Slider>
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-6 rounded-full shadow-md z-10" style={{ left: '150px' }} onClick={prevSlide}>
            &lt;
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-6 rounded-full shadow-md z-10" style={{ right: '150px' }}  onClick={nextSlide}>
            &gt;
          </button>
        </div>
      );
    }
    
export default OfferSlider
