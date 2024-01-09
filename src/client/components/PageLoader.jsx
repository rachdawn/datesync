import Lottie from 'lottie-react';
import SpinnerAnimation from "../animations/SpinnerAnimation.json"

export const PageLoader = () => {

  return (
    <div className="loader">
      <Lottie animationData={SpinnerAnimation} loop={true} speed={2.0} />
    </div>
  );
};