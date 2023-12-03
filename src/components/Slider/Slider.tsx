import { useState } from "react";
import "./Slider.styled.css";

const slidesData = [
  "./assets/image/beautiful-view-wind-turbines-grass-covered-field.jpg",
  "./assets/image/solar-battery.jpg",
  "./assets/image/rivne-biotech.jpg",
  "./assets/image/kherson-helthy-farm.jpg",
  "./assets/image/zaporizhia-biotech.jpg",
];
export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="arrow left">
        &#60;
      </button>
      <div className="slider">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={slide} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="arrow right">
        &#62;
      </button>
    </div>
  );
};
