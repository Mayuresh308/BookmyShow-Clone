import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/PopularEvent.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import card1 from "../Image/PopularEvent/card1.avif"
import card2 from "../Image/PopularEvent/card2.avif"
import card3 from "../Image/PopularEvent/card3.avif"
import card4 from "../Image/PopularEvent/card4.avif"
import card5 from "../Image/PopularEvent/card5.avif"
import card6 from "../Image/PopularEvent/card6.avif"
import card7 from "../Image/PopularEvent/card7.avif"
import card8 from "../Image/PopularEvent/card8.avif"
import card9 from "../Image/PopularEvent/card9.avif"
import card10 from "../Image/PopularEvent/card10.avif"

const cards = [
  {"image": card1, "date": "Fri, 8 Nov onwards", "title": "International Clown Festival - India - Mumbai", "location": "St. Andrews Auditorium: Mumbai"},
  {"image": card2, "date": "Sat, 16 Nov", "title": "Gajendra Verma: Good Vibes Only Tour", "location": "Courtyard, R City Mall: Ghatkopar"},
  {"image": card3, "date": "Sun, 8 Dec", "title": "Kailash Kher Live", "location": "Inorbit Mall: Malad"},
  {"image": card4, "date": "Wed, 6 Nov onwards", "title": "Infinity Mirrored Room", "location": "Infinity Room, Nita Mukesh Ambani Cultural Centre"},
  {"image": card5, "date": "Thu, 7 Nov onwards", "title": "Tickets: Museum of Solutions", "location": "Museum of Solutions: Mumbai"},
  {"image": card6, "date": "Thu, 7 Nov", "title": "Main Floor Viewing Pass Day 2", "location": "Famous Studio: Mumbai"},
  {"image": card7, "date": "Sat, 16 Nov onwards", "title": "First Move by Abishek and Nirmal", "location": "Above The Habitat: Mumbai"},
  {"image": card8, "date": "Tue, 24 Dec", "title": "Sau Saal Pehle - Sonu Nigam Tribute to...", "location": "Grand Theatre, Nita Mukesh Ambani Cultural Centre"},
  {"image": card9, "date": "Thu, 7 Nov onwards", "title": "Wildlife Photographer of the Year", "location": "Art House, Nita Mukesh Ambani Cultural Centre"},
  {"image": card10, "date": "Sat, 21 Dec", "title": "Piyush Mishra - UdanKhatola Tour - Thane", "location": "TMC Ground: Thane"}
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
    <div className="popular-event">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Popular Events</h2>
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
