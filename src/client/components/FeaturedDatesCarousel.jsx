import { useState, useRef, useEffect } from 'react';
import FeatureDates from './FeatureDates';
import mockFeatureDates from './mockFeatureDates';
import '../styles/FeaturedDatesCarousel.scss'; 

function FeaturedDatesCarousel() {
  // State to keep track of the current slide index:
  const [index, setIndex] = useState(0);
  // Ref to store the timeout ID for slide transition:
  const timeoutRef = useRef(null);
  // Function to clear the timeout, preventing memory leaks:
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // useEffect hook to handle the automatic slide transition:
  useEffect(() => {
    resetTimeout();
    // Duration for the next slide:
    const delay = 4000;
    // Setting up the timeout for the next slide transition:
    timeoutRef.current = setTimeout(
      () =>
        // Updating index; if it's the last slide, go back to the first, otherwise go to the next:
        setIndex((prevIndex) =>
          prevIndex === mockFeatureDates.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    // Cleanup function to reset the timeout when the component unmounts or before the next effect runs:
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="featured-carousel">
      <div className="carousel-slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {mockFeatureDates.map((date, idx) => (
          <div className="carousel-slide" key={idx}>
            <FeatureDates date={date} />
          </div>
        ))}
      </div>

      {/* Navigation dots for the carousel*/}
      <div className="carousel-dots">
        {mockFeatureDates.map((_, idx) => (
          <div
            key={idx}
            className={`carousel-dot${index === idx ? " active" : ""}`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedDatesCarousel;
