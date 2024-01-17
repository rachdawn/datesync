import "../styles/LandingPage.scss";
import CreateAccountButton from "../components/auth/buttons/create-account-button";
import TryWithoutAccountButton from "../components/auth/buttons/try-without-account-button";
import FeaturedDatesCarousel from "../components/FeaturedDatesCarousel";

const LandingPage = () => {

  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero-inner">
          <h1>DateSync</h1>
          <h3>The best place to plan your Perfect Dates</h3>
          <section className="buttons">
            <CreateAccountButton className="btn btn-secondary" />
            <TryWithoutAccountButton className="btn btn-secondary" />
           </section>
        </div>
      </section>
      <div className="featured">
        <div className="feature-carousel">
          <div className="feature-title">
            <h2>
              Perfect {new Date().toLocaleString("en-US", { month: "long" })}{" "}
              Dates
            </h2>
          </div>
          <FeaturedDatesCarousel />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
