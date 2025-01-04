"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";

const SliderComponent = ({
  children,
  bottomControls = false,
  leftRightControls = true,
  slideCount = 3,
  scrollCount = 2,
  dots = false,
  className,
}) => {
  let refSlider = useRef(null);
  const next = () => {
    refSlider.slickNext();
  };
  const previous = () => {
    refSlider.slickPrev();
  };

  const settings = {
    dots: dots,
    infinite: true,
    slidesToShow: slideCount,
    slidesToScroll: scrollCount,
    nextArrow: leftRightControls ? <SampleNextArrow onClick={next} /> : null,
    prevArrow: leftRightControls ? <SamplePrevArrow onClick={previous} /> : null,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        className={`${className} z-10 top-1/2 -right-9 absolute block`}
        onClick={onClick}
      >
        <SquareChevronRight
          size={36}
          className=" hover:bg-primary-50 active:scale-90 text-primary-500 rounded "
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
      <button
        className={`${className} z-10 top-1/2 -left-9 absolute block`}
        onClick={onClick}
      >
        <SquareChevronLeft
          size={36}
          className="hover:bg-primary-50 active:scale-90 text-primary-500 rounded "
        />
      </button>
    );
  }

  return (
    <div className="slider-container gap-5 cursor-grab">
      <Slider
        ref={(slider) => {
          refSlider = slider;
        }}
        {...settings}
        className={`relative ${className}`}
      >
        {children}
      </Slider>
      {bottomControls && (
        <div className="flex justify-center items-center gap-3">
          <button className="button px-3 py-2 bg-primary " onClick={previous}>
            Previous
          </button>
          <button className="button px-3 py-2 bg-primary " onClick={next}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
