import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/TopGame.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import card1 from "../Image/TopGame/card1.avif"
import card2 from "../Image/TopGame/card2.avif"
import card3 from "../Image/TopGame/card3.avif"
import card4 from "../Image/TopGame/card4.avif"
import card5 from "../Image/TopGame/card5.avif"
import card6 from "../Image/TopGame/card6.avif"
import card7 from "../Image/TopGame/card7.avif"
import card8 from "../Image/TopGame/card8.avif"
import card9 from "../Image/TopGame/card9.avif"
import card10 from "../Image/TopGame/card10.avif"

const cards = [
    {"image": card1, "date": "Thu, 28 Mar", "title": "Rajasthan Royals vs Delhi Capitals", "location": "Sawai Mansingh Stadium: Jaipur"},
    {"image": card2, "date": "Thu, 4 Apr", "title": "Chennaiyin FC vs Jamshedpur FC", "location": "Jawaharlal Nehru Stadium: Chennai"},
    {"image": card3, "date": "Sun, 28 Apr", "title": "Marathon On World Health Day", "location": "Olcott Memorial High School: Chennai"},
    {"image": card4, "date": "Sun, 6 Oct", "title": "The Great Inflate Run - Chennai", "location": "Venue To Be Announced: Chennai"},
    {"image": card5, "date": "Thu, 26 Mar", "title": "India vs Afghanistan - FIFA World Cup Qualifier 2026", "location": "Indira Gandhi Athletic Stadium: Guwahati"},
    {"image": card6, "date": "Thu, 9 Apr", "title": "Chennaiyin FC vs NorthEast United FC", "location": "Jawaharlal Nehru Stadium: Chennai"},
    {"image": card7, "date": "Sun, 7 Apr", "title": "Lucknow Super Giants vs Gujarat Titans", "location": "BRSABV Ekana Cricket Stadium: Lucknow"},
    {"image": card8, "date": "Mon, 1 Apr", "title": "Mumbai Indians VS Rajasthan Royals", "location": "Wankhede Stadium: Mumbai"},
    {"image": card9, "date": "Mon, 1 Jul", "title": "21 Days Walking Challenge by Malsar.in", "location": "Your Place and Your Time"},
    {"image": card10, "date": "Sun, 14 Apr", "title": "Run for Equality - Get Medal by Courier", "location": "Your Place and Your Time"},
]

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
    <div className="top-game">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Top Games & Sport Events</h2>
                <a className="see-all">See All ›</a>
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
                                <p class="detail">{card.location}{card.type}</p>
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
