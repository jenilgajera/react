import React from "react";
import slider1 from "../images/slider1.jpeg";
import slider2 from "../images/slider2.jpeg";
import slider3 from "../images/slider3.jpeg";
const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{color:"black"}}>First slide label</h5>
              <p style={{color:"black"}}>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{color:"black"}}>Second slide label</h5>
              <p style={{color:"black"}}>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{color:"black"}}>Third slide label</h5>
              <p style={{color:"black"}}>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
