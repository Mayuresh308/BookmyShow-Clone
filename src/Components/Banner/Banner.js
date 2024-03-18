import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import "./Banner.css";
import banner1 from "./Image/banner1.avif";
import banner2 from "./Image/banner2.avif";
import banner3 from "./Image/banner3.avif";
import banner4 from "./Image/banner4.avif";
import banner5 from "./Image/banner5.avif";

const images = [banner1, banner2, banner3, banner4, banner5];

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,
    slides: {
      origin: "center",
      perView: 1.2,
      spacing: 15,
    },
  },
  [
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ]);

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider banner">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
          <>
            <div className="arrow-left">
              <SlArrowLeft
                className={`arrow--left ${currentSlide === 0 ? "arrow--disabled" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current.prev();
                }}
              />
            </div>

            <div className="arrow-right">
              <SlArrowRight
                className={`arrow--right ${currentSlide === images.length - 1 ? "arrow--disabled" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current.next();
                }}
              />
            </div>
          </>
        )}
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
    </div>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
