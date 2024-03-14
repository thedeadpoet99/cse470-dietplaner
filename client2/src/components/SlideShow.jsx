import React from 'react';
import Slider from 'react-slick';
import logo from './logo.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlideShow.css'

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings}>
            <div className="slide">
                <img src={logo} alt="Slide 1" style={{ width: '50%', height: 'auto', margin: '0 auto' }} />
            </div>
            <div className="slide">
                <img src={logo} alt="Slide 1" style={{ width: '50%', height: 'auto', margin: '0 auto' }} />
            </div>
        </Slider>
    );
};

export default Slideshow;
