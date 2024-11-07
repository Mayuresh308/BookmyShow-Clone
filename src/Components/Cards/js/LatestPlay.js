import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/LatestPlay.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import card1 from "../Image/LatestPlay/card1.avif"
import card2 from "../Image/LatestPlay/card2.avif"
import card3 from "../Image/LatestPlay/card3.avif"
import card4 from "../Image/LatestPlay/card4.avif"
import card5 from "../Image/LatestPlay/card5.avif"
import card6 from "../Image/LatestPlay/card6.avif"
import card7 from "../Image/LatestPlay/card7.avif"

const cards = [
  {"image": card1, "date": "Thu, 5 Dec onwards", "title": "Life of Pie", "language":"English"},
  {"image": card2, "date": "Sun, 10 Nov onwards", "title": "Varvarche vadhu var", "language": "Marathi"},
  {"image": card3, "date": "Thu, 7 Nov onwards", "title": "Albattya Galbattya", "language": "Marathi"},
  {"image": card4, "date": "Sat, 9 Nov onwards", "title": "Marathi Bana", "language": "Marathi"},
  {"image": card5, "date": "Sat, 9 Nov onwards", "title": "Peppa Pig's Adventure", "language":"English"},
  {"image": card6, "date": "Sun, 10 Nov onwards", "title": "Aajibai Jorat", "language": "Marathi"},
  {"image": card7, "date": "Sat, 14 Nov onwards", "title": "Murderwale Kulkarni", "language": "Marathi"}
];

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 5, spacing: 30 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 30 },
      },
    },
    slides: { perView: 5 },
    initial: 0,
    dragStart: null,
    dragEnd: null,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });

  return (
    <div className="latest-play">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">The Latest Plays</h2>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {cards.map((card, index) => (
                    <div className="keen-slider__slide card-box">
                        <div key={index} className="card">
                            <img src={card.image} alt={`Card ${index + 1}`} />
                            <div class="card-body">
                                <p className="rating">{card.date}</p>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <div>
                                <p class="detail">{card.language}{card.type}</p>
                                <p>{card.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {loaded && instanceRef.current && (
            <>
                <div 
                className={`card-arrow-left ${currentSlide === 0 ? "arrow--disabled" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current.moveToIdx(0);
                }}
                >
                    <SlArrowLeft className="arrow--left" />
                </div>

                <div 
                className={`card-arrow-right ${currentSlide === cards.length - 5 ? "arrow--disabled" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current.moveToIdx(cards.length - 5);
                }}
                >
                    <SlArrowRight className="arrow--right" />
                </div>
            </>
            )}
        </AppContainer>
    </div>
  )
}
