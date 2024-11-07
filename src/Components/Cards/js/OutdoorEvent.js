import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/OutdoorEvent.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import card1 from "../Image/OutdoorEvent/card1.avif"
import card2 from "../Image/OutdoorEvent/card2.avif"
import card3 from "../Image/OutdoorEvent/card3.avif"
import card4 from "../Image/OutdoorEvent/card4.avif"
import card5 from "../Image/OutdoorEvent/card5.avif"
import card6 from "../Image/OutdoorEvent/card6.avif"
import card7 from "../Image/OutdoorEvent/card7.avif"
import card8 from "../Image/OutdoorEvent/card8.avif"
import card9 from "../Image/OutdoorEvent/card9.avif"
import card10 from "../Image/OutdoorEvent/card10.avif"

const cards = [
  {"image": card1, "date": "Wed, 6 Nov onwards", "title": "Paradox Museum", "location": "Paradox Museum: Mumbai"},
  {"image": card2, "date": "Wed, 6 Nov onwards", "title": "Rambo Circus - Borivali", "location": "Gen. Arunkumar Vaidya Ground: Mumbai"},
  {"image": card3, "date": "Sun, 10 Nov onwards", "title": "Vastraharan", "location": "Dinanath Mangeshkar Natyagruha: Vile Parle"},
  {"image": card4, "date": "Sun, 10 Nov", "title": "WE PLAY CRICKET", "location": "Five Nine Turf: Mumbai"},
  {"image": card5, "date": "Tue, 3 Dec", "title": "Bulls vs Giants & UMumba vs Puneri Paltan", "location": "Shiv Chatrapati Sports Complex: Balewadi"},
  {"image": card6, "date": "Thu, 9 Jan onwards", "title": "Mughal-E-Azam", "location": "Grand Theatre, Nita Mukesh Ambani Cultural Centre"},
  {"image": card7, "date": "Sun, 8 Dec onwards", "title": "Jar Tar Chi Goshta", "location": "Dinanath Mangeshkar Natyagruha: Vile Parle"},
  {"image": card8, "date": "Wed, 13 Nov onwards", "title": "Zakir Khan Live - Special Taping", "location": "Bal Gandharva Rang Mandir: Mumbai"},
  {"image": card9, "date": "Thu, 7 Nov onwards", "title": "Imagicaa Theme Park", "location": "Imagica Theme Park (Khopoli): Mumbai"},
  {"image": card10, "date": "Wed, 6 Nov onwards", "title": "Fountain of Joy - Dhirubhai Ambani Square", "location": "Dhirubhai Ambani Square: Mumbai"}
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
    <div className="outdoor-event">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Outdoor Events</h2>
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
