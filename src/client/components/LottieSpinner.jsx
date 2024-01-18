import Lottie from 'lottie-react';
import HeartLoader from '../animations/HeartLoader.json'
import '../styles/HeartLoader.scss';

// This component serves to client render the loading spinner:
const LottieSpinner = () => {

  return (
  <div className="spinner">
    <Lottie animationData={HeartLoader} loop={true} speed={2.0} />
  </div>
  )
};

export default LottieSpinner;