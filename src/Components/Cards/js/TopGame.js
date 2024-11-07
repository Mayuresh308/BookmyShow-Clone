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
  {"image": card1, "date": "Tue, 3 Dec onwards", "title": "Pro Kabaddi League", "location": "Season 11 - Pune, Multiple Venues"},
  {"image": card2, "date": "Tue, 26 Nov onwards", "title": "MUMBAI CITY FC - ISL", "location": "2024/25, Multiple Venues"},
  {"image": card3, "date": "Sun, 24 Nov", "title": "Bandra Half Marathon", "location": "Bandra Fort Garden: Mumbai"},
  {"image": card4, "date": "Sat, 7 Dec", "title": "Yoddhas vs Puneri Paltan & Titans vs Warriorz", "location": "Shiv Chatrapati Sports Complex: Balewadi"},
  {"image": card5, "date": "Fri, 8 Nov onwards", "title": "Mumbai Midnight Cycling", "location": "Paragon Centre: Mumbai"},
  {"image": card6, "date": "Sun, 24 Nov", "title": "Mumbai Green Marathon - Bandra West", "location": "Bandra Fort Garden: Mumbai"},
  {"image": card7, "date": "Sun, 22 Dec", "title": "Aamchi Mumbai Marathon", "location": "Bandra Fort Garden: Mumbai"},
  {"image": card8, "date": "Wed, 4 Dec", "title": "Titans vs Yoddhas & Steelers vs Warriorz", "location": "Shiv Chatrapati Sports Complex: Balewadi"},
  {"image": card9, "date": "Sun, 2 Feb", "title": "Mumbai Half Marathon", "location": "Bandra Fort Garden: Mumbai"},
  {"image": card10, "date": "Thu, 5 Dec", "title": "Dabang Delhi vs Yoddhas & Pink Panthers vs UMumba", "location": "Shiv Chatrapati Sports Complex: Balewadi"}
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
