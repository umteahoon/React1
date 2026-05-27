import { useState } from "react";
import { galleryImages } from "./imgData";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [more, setMore] = useState(false);

  function handleNext() {
    if (index === galleryImages.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePrevious() {
    if (index === 0) {
      setIndex(galleryImages.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setMore(!more);
  }

  let slide = galleryImages[index];
  return (
    <section className={styles.wrapper}>
      <h2>
        <i>{slide.name} </i>
        by {slide.artist}
      </h2>
      <h3>
        ({index + 1} of {galleryImages.length})
      </h3>
      <img src={slide.url} alt={slide.alt} />
      <p>{slide.description}</p>
      <p>
        <button onClick={handlePrevious} className={styles.button}>
          Previous
        </button>
        <button onClick={handleNext} className={styles.button}>
          Next
        </button>
      </p>
      <button onClick={handleMoreClick}>
        {more ? "Hide" : "Show"} description
      </button>
      {more && <p>{slide.description}</p>}
    </section>
  );
}