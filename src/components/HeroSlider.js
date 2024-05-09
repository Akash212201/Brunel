import React, { useRef } from "react";
import Slider from "react-slick";

const HeroSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    };

    const data = [
        'Enhance fortune 50 company’s insights teams research capabilities',
        'The cat ate the tree.',
        'My friend jumped a book.'
    ];

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="slider-container mt-20">
            <Slider ref={sliderRef} {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="w-[200px]">
                        <h3 className="text-[2.5rem]">{item}</h3>
                    </div>
                ))}
            </Slider>
            <div className="flex justify-start items-start">
                <button onClick={goToPrevSlide}></button>
                <button onClick={goToNextSlide}></button>
            </div>
        </div>
    );
}

export default HeroSlider;