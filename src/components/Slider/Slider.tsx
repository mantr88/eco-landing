import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './Slider.styled.css';
import { ArrowRightTop } from '../../ui/svgElements/ArrowRightTop';
import { ArrowSliderLeft } from '../../ui/svgElements/ArrowSliderLeft';
import { ArrowSliderRight } from '../../ui/svgElements/ArrowSliderRight';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [quantityOfSlides, setQuantityOfSlides] = useState(5);
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: () => 2, spacing: 24 },
      },
      '(min-width: 1280px)': {
        slides: { perView: () => 2, spacing: 48 },
      },
    },
    slides: { perView: 1 },
    created(slides) {
      if (slides.track.details.slidesLength !== undefined) {
        setQuantityOfSlides(slides.track.details.slidesLength);
      }
    },
    slideChanged(slides) {
      if (slides.track.details.rel !== undefined) {
        setCurrentSlide(slides.track.details.rel + 1);
      }
    },
  });

  const handlePrev = () => {
    if (slider) {
      slider.current.prev();
    }
  };

  const handleNext = () => {
    if (slider) {
      slider.current.next();
    }
  };
  return (
    <>
      <div className="control-box-and-title-wrap">
        <div className="title">
          <SectionTitle>Successful cases of our company</SectionTitle>
        </div>
        <div className="control-box-wrap">
          <p className="slides-numbers">
            0{currentSlide}
            <span className="slides-numbers-modifyed">/0{quantityOfSlides}</span>
          </p>
          <div className="control-btn-wrap">
            <button className="control-btn" onClick={handlePrev}>
              <ArrowSliderLeft />
            </button>
            <button className="control-btn" onClick={handleNext}>
              <ArrowSliderRight />
            </button>
          </div>
        </div>
      </div>
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="slide-thumb-image">
            <img
              srcSet="./assets/image/beautiful-view-wind-turbines-grass-covered-field-320.jpg 320w, ./assets/image/beautiful-view-wind-turbines-grass-covered-field-640.jpg 640w, ./assets/image/beautiful-view-wind-turbines-grass-covered-field-960.jpg 960w"
              alt="wind turbines"
              src="./assets/image/beautiful-view-wind-turbines-grass-covered-field-320.jpg"
              sizes="100%"
              className="slide-image"
            />
          </div>
          <div className="case">
            <div className="case-location-wrap">
              <p className="case-location">
                Lviv Region, Radekhiv town
                <br /> Private Enterprise “ZAKHIDNYI BUH”
              </p>
              <a href="#">
                <ArrowRightTop />
              </a>
            </div>
            <div className="case-description-wrap">
              <p className="case-description">Wind Power for auto field irrigation</p>
              <p>July 2023</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="slide-thumb-image">
            <img
              srcSet="./assets/image/solar-battery-320.jpg 320w, ./assets/image/solar-battery-640.jpg 640w, ./assets/image/solar-battery-960.jpg 960w"
              src="./assets/image/solar-battery-320.jpg"
              alt="Solar Panels"
              sizes="100%"
              className="slide-image"
            />
          </div>
          <div className="case">
            <div className="case-location-wrap">
              <p className="case-location">
                Zhytomyr city <br />
                Private Enterprise “Bosch”
              </p>
              <a href="#">
                <ArrowRightTop />
              </a>
            </div>
            <div className="case-description-wrap">
              <p className="case-description">Solar Panels for industrial use</p>
              <p>November 2023</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="slide-thumb-image">
            <img
              srcSet="./assets/image/rivne-biotech-320.jpg 320w, ./assets/image/rivne-biotech-640.jpg 640w, ./assets/image/rivne-biotech-960.jpg 960w"
              src="./assets/image/rivne-biotech-320.jpg"
              alt="Thermal modules"
              sizes="100%"
              className="slide-image"
            />
          </div>
          <div className="case">
            <div className="case-location-wrap">
              <p className="case-location">
                Rivne city <br />
                Private Enterprise “Biotech”
              </p>
              <a href="#">
                <ArrowRightTop />
              </a>
            </div>
            <div className="case-description-wrap">
              <p className="case-location">Thermal modules</p>
              <p>October 2023</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">
          <div className="slide-thumb-image">
            <img
              srcSet="./assets/image/kherson-helthy-farm-320.jpg 320w, ./assets/image/kherson-helthy-farm-640.jpg 640w, ./assets/image/kherson-helthy-farm-960.jpg 960w,./assets/image/kherson-helthy-farm-1788.jpg 1440w"
              src="./assets/image/kherson-helthy-farm-320.jpg"
              alt="wind turbines"
              sizes="100%"
              className="slide-image"
            />
          </div>
          <div className="case">
            <div className="case-location-wrap">
              <p className="case-location">
                Kherson city <br />
                Private Enterprise “HealthyFarm”
              </p>
              <a href="#">
                <ArrowRightTop />
              </a>
            </div>
            <div className="case-description-wrap">
              <p className="case-location">Wind power</p>
              <p>September 2021</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5">
          <div className="slide-thumb-image">
            <img
              srcSet="./assets/image/zaporizhia-biotech-320.jpg 320w, ./assets/image/zaporizhia-biotech-640.jpg 640w, ./assets/image/zaporizhia-biotech-960.jpg 960w"
              src="./assets/image/zaporizhia-biotech-320.jpg"
              alt="Mini nuclear stations"
              className="slide-image"
            />
          </div>
          <div className="case">
            <div className="case-location-wrap">
              <p className="case-location">
                Zaporizhia city <br />
                Private Enterprise “Biotech”
              </p>
              <a href="#">
                <ArrowRightTop />
              </a>
            </div>
            <div className="case-description-wrap">
              <p className="case-location">Mini nuclear stations</p>
              <p>May 2021</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
