import { useEffect, useState } from "react";
import data from "../../slides.json";

const ImageSlider = () => {
  const [slides, setSlides] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > slides.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = slides.length - 1;
      }
      return index;
    });
  };

  const disableVisibility = (slideId) => {
    setSlides((prevSlides) =>
      prevSlides.filter((slide) => slide.id !== slideId)
    );
    nextSlide();
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > slides.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [slides.length]);

  return (
    <>
      <section className="section">
        {slides.map((slide, slideIndex) => {
          let position = "nextSlide";
          if (slideIndex === index) {
            position = "activeSlide";
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slides.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={slideIndex}>
              <div style={{ position: "relative" }}>
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="slider-img"
                />
                <span
                  className="visibility-icon"
                  onClick={() => disableVisibility(slide.id)}
                >
                  👁️
                </span>
              </div>

              <div className="title">{slide.caption}</div>
            </article>
          );
        })}
      </section>

      <div className="controls">
        <div onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>

        <div onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

{
  /* <div
className=""
style={{
  backgroundImage: `url(${slide.url})`,
}}
></div>
{/* <span className="visibility-icon" onClick={() => disableVisibility()}>
👁️
</span> 

<div className="slide-title">{slide.caption}</div> */
}

//
{
  /* <div className="controls">
<div onClick={goToPrevious}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    className="bi bi-chevron-left"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
</div>

<div onClick={goToNext}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    className="bi bi-chevron-right"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
</div>
</div> */
}
