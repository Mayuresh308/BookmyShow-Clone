import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/MusicStudio.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import card1 from "../Image/MusicStudio/card1.avif"
import card2 from "../Image/MusicStudio/card2.avif"
import card3 from "../Image/MusicStudio/card3.avif"
import card4 from "../Image/MusicStudio/card4.avif"
import card5 from "../Image/MusicStudio/card5.avif"
import card6 from "../Image/MusicStudio/card6.avif"
import card7 from "../Image/MusicStudio/card7.avif"
import card8 from "../Image/MusicStudio/card8.avif"
import card9 from "../Image/MusicStudio/card9.avif"
import card10 from "../Image/MusicStudio/card10.avif"

const cards = [
  {"image": card1, "date": "Sat, 25 Jan", "title": "Sonu Nigam Live - Mumbai", "location": "Dublin Square, Phoenix Marketcity: Mumbai", "type": "Concerts"},
  {"image": card2, "date": "Sat, 9 Nov", "title": "Red Bull Dance Your Style World Final 2024", "location": "Dome, NSCI, SVP Stadium, Worli: Mumbai", "type": "Dance"},
  {"image": card3, "date": "Fri, 17 Jan", "title": "\"HAAZRI\" A.R.Rahman Live In Concert", "location": "Jio World Garden, BKC: Mumbai", "type": "Concerts"},
  {"image": card4, "date": "Sun, 24 Nov", "title": "Sunburn Arena Ft. Charlotte de Witte", "location": "Dome, NSCI, SVP Stadium, Worli: Mumbai", "type": "Concerts"},
  {"image": card5, "date": "Fri, 15 Nov", "title": "Prateek Kuhad Silhouettes Tour - Mumbai", "location": "DOME, NSCI, SVP Stadium: Mumbai", "type": "Concerts"},
  {"image": card6, "date": "Sun, 8 Dec", "title": "Sunburn Arena Ft. Boris Brejcha", "location": "Nesco Hall 4: Mumbai", "type": "Concerts"},
  {"image": card7, "date": "Fri, 20 Dec", "title": "One Night feat. Anuv Jain, Lucky Ali, DJ Chetas", "location": "Nesco Center: Mumbai", "type": "Concerts"},
  {"image": card8, "date": "Sun, 22 Dec", "title": "Karan Aujla - It Was All A Dream (Mumbai)", "location": "Venue To Be Announced: Mumbai", "type": "Concerts"},
  {"image": card9, "date": "Fri, 15 Nov", "title": "Bade Miyan.. Chote Miyan", "location": "Shanmukhananda Hall: Mumbai", "type": "Concerts"},
  {"image": card10, "date": "Sat, 16 Nov", "title": "Indian Ocean Live - Mumbai", "location": "Dublin Square, Phoenix Marketcity: Mumbai", "type": "Concerts"}
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
    <div className="music-studio">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Your Music Studio</h2>
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
// Check
