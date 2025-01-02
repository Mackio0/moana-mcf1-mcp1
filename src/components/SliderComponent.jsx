"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";

const SliderComponent = ({
  children,
  bottomControls = false,
  leftRightControls = true,
  slideCount = 3,
  scrollCount = 2,
}) => {
  const refSlider = useRef(null);
  const next = () => {
    refSlider.slickNext();
  };
  const previous = () => {
    refSlider.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slideCount,
    slidesToScroll: scrollCount,
    nextArrow: leftRightControls ? <SampleNextArrow /> : null,
    prevArrow: leftRightControls ? <SampleNextArrow /> : null,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;

    return (
      <button
        className={`${""} z-10 top-1/2 -right-9  absolute  `}
        onClick={onClick}
      >
        <SquareChevronRight
          size={36}
          className=" hover:bg-primary-50 active:scale-90 text-primary-500 rounded "
        />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
      <button className={`z-10 top-1/2 -left-9  absolute `} onClick={onClick}>
        <SquareChevronLeft
          size={36}
          className="hover:bg-primary-50 active:scale-90 text-primary-500 rounded "
        />
      </button>
    );
  }

  return (
    <div className="slider-container  gap-5 cursor-grab">
      <Slider
        ref={(slider) => {
          refslider = slider;
        }}
        {...settings}
      >
        {children}
      </Slider>
      {bottomControls && (
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={previous}>
            Previous
          </button>
          <button className="button" onClick={next}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
