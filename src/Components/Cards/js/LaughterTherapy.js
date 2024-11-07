import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/LaughterTherapy.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import card1 from "../Image/LaughterTherapy/card1.avif"
import card2 from "../Image/LaughterTherapy/card2.avif"
import card3 from "../Image/LaughterTherapy/card3.avif"
import card4 from "../Image/LaughterTherapy/card4.avif"
import card5 from "../Image/LaughterTherapy/card5.avif"
import card6 from "../Image/LaughterTherapy/card6.avif"
import card7 from "../Image/LaughterTherapy/card7.avif"
import card8 from "../Image/LaughterTherapy/card8.avif"
import card9 from "../Image/LaughterTherapy/card9.avif"
import card10 from "../Image/LaughterTherapy/card10.avif"



const cards = [
  {"image": card1, "date": "Sat, 9 Nov", "title": "Broken by Sahil Shah LIVE TAPING", "location": "Veda Kunba Theatre: Mumbai"},
  {"image": card2, "date": "Fri, 8 Nov", "title": "Smooth Kullu Smooth by Aaditya Kulshreshtha", "location": "Bal Gandharva Rang Mandir: Bandra"},
  {"image": card3, "date": "Wed, 6 Nov onwards", "title": "All Star Standup Comedy", "location": "The Habitat: Mumbai"},
  {"image": card4, "date": "Fri, 8 Nov onwards", "title": "The Internet Said So - LIVE", "location": "Below The Habitat: Mumbai"},
  {"image": card5, "date": "Wed, 6 Nov onwards", "title": "SoBo Comedy Nights", "location": "Broadway Blues: Lower Parel, Mumbai"},
  {"image": card6, "date": "Sun, 29 Dec", "title": "Kunal Kamra Live", "location": "Lata Mangeshkar NatyaGruha Auditorium: Mumbai"},
  {"image": card7, "date": "Sun, 24 Nov", "title": "Gaurav Gupta Live - India Tour", "location": "Sophia Bhabha Auditorium: Mumbai"},
  {"image": card8, "date": "Mon, 11 Nov onwards", "title": "Zakir Khan Live", "location": "Bal Gandharva Rang Mandir: Bandra"},
  {"image": card9, "date": "Sat, 16 Nov onwards", "title": "Harsh Gujral Live in Mumbai", "location": "Courtyard, R City Mall: Ghatkopar"},
  {"image": card10, "date": "Wed, 6 Nov onwards", "title": "Tonight in Juhu - A Standup Comedy Show", "location": "The J Spot, Juhu: Mumbai"}
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
    <div className="laughter-therapy">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Laughter Therapy</h2>
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
