import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/RecommendedMovieCard.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import poster from "../Image/Poster/poster.avif"

import card1 from "../Image/RecommendedMovie/card1.avif"
import card2 from "../Image/RecommendedMovie/card2.avif"
import card3 from "../Image/RecommendedMovie/card3.avif"
import card4 from "../Image/RecommendedMovie/card4.avif"
import card5 from "../Image/RecommendedMovie/card5.avif"
import card6 from "../Image/RecommendedMovie/card6.avif"
import card7 from "../Image/RecommendedMovie/card7.avif"
import card8 from "../Image/RecommendedMovie/card8.avif"
import card9 from "../Image/RecommendedMovie/card9.avif"
import card10 from "../Image/RecommendedMovie/card10.avif"

const cards = [
    {"image": card1, "type": "like", "rating": 6.8, "votes": "110K", "title": "Singham Again", "genre": "Action/Drama"},
    {"image": card2, "type": "like", "rating": 6.1, "votes": "125.3K", "title": "Bhool Bhulaiyaa 3", "genre": "Comedy/Horror"},
    {"image": card3, "type": "interest", "rating": 8.0, "votes": "58.7K", "title": "Venom: The Last Dance", "genre": "Action/Adventure/Sci-Fi"},
    {"image": card4, "type": "like", "rating": 9.4, "votes": "115.6K", "title": "Amaran", "genre": "Action/Drama/Thriller"},
    {"image": card5, "type": "like", "rating": 9.4, "votes": "11.4K", "title": "The Wild Robot", "genre": "Adventure/Animation/Family"},
    {"image": card6, "type": "like", "rating": 9.4, "votes": "47.1K", "title": "Lucky Baskhar", "genre": "Crime/Drama/Thriller"},
    {"image": card7, "type": "like", "rating": 8.8, "votes": "8.3K", "title": "Phullwanti", "genre": "Drama/Period/Romantic"},
    {"image": card8, "type": "like", "rating": 7.0, "votes": "6.2K Likes", "title": "I am Kathalan", "genre": "Drama/Thriller"},
    {"image": card9, "type": "like", "rating": 8.0, "votes": "13.6K Likes", "title": "Kale Lagan Chhe !?!", "genre": "Comedy/Family/Romantic"},
    {"image": card10, "type": "like", "rating": 7.0, "votes": "9.7K", "title": "Brother", "genre": "Comedy/Drama/Family"}
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
    <>
    <div className="recommended-movie">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Recommended Movies</h2>
                <a className="see-all">See All ›</a>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {cards.map((card, index) => (
                    <div className="keen-slider__slide card-box">
                        <div key={index} className="card">
                            <img src={card.image} alt={`Card ${index + 1}`} />
                            <div class="card-body">
                                {card.type === "like" ? (
                                    <>
                                        <div className="like">
                                            <p className="icon" style={{ color: "#de334a" }}><FaStar /></p>
                                            <p className="rating">{card.rating}/10</p>
                                        </div>
                                        <p className="votes">{card.votes} Votes</p>
                                    </>
                                ) : 
                                (
                                    <div className="like">
                                        <p className="icon" style={{ color: "#1ca63c"}}><AiFillLike /></p>
                                        <p className="votes">{card.votes} Likes</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <p class="detail">{card.genre}</p>
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
    <AppContainer>
        <div className="poster">
            <img src={poster} alt="poster" />
        </div>
    </AppContainer>
    </>
  )
}
