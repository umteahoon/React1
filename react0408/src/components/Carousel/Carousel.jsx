import { useState } from "react";
import { galleryImages } from "./imgData";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  // 1. 블리언(Boolean) 타입의 State를 추가합니다. 변수의 이름은 more로 합니다.
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

  // 2. 토글할 수 있는 handleMoreClick 이벤트 핸들러를 작성합니다.
  function handleMoreClick() {
    setMore(!more);
  }

  let slide = galleryImages[index];
  return (
    <section className={styles.wrapper}>
      <p>
        <button className={styles.button} onClick={handlePrevious}>Previous</button>
        <button className={styles.button} onClick={handleNext}>Next</button>
      </p>
      <h2>
        <i>{slide.name} </i>
        by {slide.artist}
      </h2>
      <h3>
        ({index + 1} of {galleryImages.length})
      </h3>
      
      {/* 3, 4. 버튼을 추가하고 클릭 이벤트 연결 및 more 값에 따른 라벨 변경 */}
      <button className={styles.button} onClick={handleMoreClick}>
        {more ? "Hide description" : "Show description"}
      </button>

      <img src={slide.url} alt={slide.alt} />
      
      {/* 5. More가 true면 description을 보여주고, false면 보이지 않게 합니다. (조건부 렌더링) */}
      {more && <p>{slide.description}</p>}
    </section>
  );
}