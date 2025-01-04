"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import {
  MoveLeftIcon,
  MoveRightIcon,
  SquareChevronLeft,
  SquareChevronRight,
} from "lucide-react";

const SliderComponent = ({
  children,
  infinite = true,
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

    dots: false,
    infinite: infinite,
    slidesToShow: slideCount,
    slidesToScroll: scrollCount,
    nextArrow: leftRightControls ? <SampleNextArrow /> : null,
    prevArrow: leftRightControls ? <SamplePrevArrow /> : null,
  };

  function SampleNextArrow(props) {
    const { onClick, className: ClassName } = props;

    return (
      <button
        className={` group disabled:opacity-80   z-10 top-1/2 -right-9  absolute  `}
        onClick={onClick}
        disabled={ClassName.includes("slick-disabled")}
      >
        <SquareChevronRight
          size={36}
          className="  hover:bg-primary-50 group-disabled:text-slate-500 active:scale-90  text-primary-500 rounded "
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className: ClassName, onClick } = props;

    return (
      <button
        disabled={ClassName.includes("slick-disabled")}
        className={`z-10 top-1/2 -left-9  absolute group disabled:opacity-80 `}

        onClick={onClick}
      >
        <SquareChevronLeft
          size={36}
          className="hover:bg-primary-50 group-disabled:text-slate-500 active:scale-90 text-primary-500 rounded "
        />
      </button>
    );
  }

  return (

    <div className="slider-container  w-full ">

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

        <div className=" flex gap-5  items-center justify-center mt-6">
          <button className="button hover:bg-gradient-to-br active:scale-95  from-primary to-secondary-500 text-secondary-800 left border border-secondary-700 rounded-full size-10  flex justify-center items-center   " onClick={previous}>
            <MoveLeftIcon />
          </button>
          <button className="button right hover:bg-gradient-to-r active:scale-95  from-primary to-secondary-500 text-secondary-800 border border-secondary-700  rounded-full size-10  flex justify-center items-center  " onClick={next}>
            <MoveRightIcon />

          </button>
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
