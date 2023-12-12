import "./Slider.styled.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowRightTop } from "../../ui/svgElements/ArrowRightTop";
import { ArrowSliderLeft } from "../../ui/svgElements/ArrowSliderLeft";
import { ArrowSliderRight } from "../../ui/svgElements/ArrowSliderRight";

export const Slider = () => {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: () => 2, spacing: 24 },
      },
    },
    slides: { perView: 1 },
  });
  let currentSlide: number | null = null;
  if (slider.current) {
    currentSlide = slider.current.track.details.rel;
    // slider.current.slides.length - (slider.current.slides.length - 1);
  }
  let numbersOfSlides = 5;

  if (slider.current) {
    numbersOfSlides = slider.current.track.details.slidesLength;
  }

  const handlePrev = () => {
    currentSlide = slider.current.track.details.rel;
    if (slider) {
      slider.current.prev();
    }
  };

  const handleNext = () => {
    console.log(slider.current.track.details.rel);
    currentSlide = slider.current.track.details.rel;
    if (slider) {
      slider.current.next();
    }
  };
  return (
    <>
      <div className="control-box-wrap">
        <p>
          0{currentSlide + 1}
          <span className="slides-numbers">/0{numbersOfSlides}</span>
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
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </p>
              <a href="#">
                <ArrowRightTop />
              </a>
            </div>
            <div className="case-description-wrap">
              <p className="case-description">
                Wind Power for auto field irrigation
              </p>
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
                Zhytomyr city Private Enterprise “Bosch”
              </p>
              <a href="#">
                <ArrowRightTop />
              </a>
            </div>
            <div className="case-description-wrap">
              <p className="case-description">
                Solar Panels for industrial use
              </p>
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
                Rivne city Private Enterprise “Biotech”
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
              srcSet="./assets/image/kherson-helthy-farm-320.jpg 320w, ./assets/image/kherson-helthy-farm-640.jpg 640w, ./assets/image/kherson-helthy-farm-960.jpg 960w"
              src="./assets/image/kherson-helthy-farm-320.jpg"
              alt="wind turbines"
              sizes="100%"
              className="slide-image"
            />
          </div>
          <div className="case">
            <div className="case-location-wrap">
              <p className="case-location">
                Kherson city Private Enterprise “HealthyFarm”
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
                Zaporizhia city Private Enterprise “Biotech”
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
