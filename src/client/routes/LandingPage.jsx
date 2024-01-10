// import TestActivitiesApi from "../components/TestActivitiesApi";
// import TestEventsApi from "../components/TestEventsApi";
// import TestMoviesApi from "../components/TestMoviesApi";
// import TestRestaurantsApi from "../components/TestRestaurantsAPI";

import FeatureDates from "../components/FeatureDates";

import "../styles/LandingPage.scss";

const LandingPage = () => {
  const featureDates = [
    {
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Healthy date",
      description:
        "Nourish love with a delightful, nutritious dinner, a romantic stroll, and shared laughter under starlight.",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fancy lunch",
      description:
        "Savor exquisite flavors in a chic ambiance with our gourmet lunch, a sophisticated culinary indulgence awaits.",
    },
    {
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Late-night drinks",
      description:
        "Sip under the stars in a cozy ambiance, where late-night drinks spark laughter, intimacy, and connection.",
    },
    {
      src: "https://images.unsplash.com/photo-1539056276907-dc946d5098c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Friends Dinner",
      description:
        "Relish a delightful evening with friends over a homemade feast, laughter, and shared memories together.",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>DateSync</h1>
          <h3>The best place to plan your Perfect Dates</h3>
          <a href="" className="btn btn-light">
            Sign Up for free
          </a>
        </div>
      </section>
      <main className="featured">
        <div className="feature-carousel">
          <div className="feature-title">
            <h2>Feature Dates</h2>
          </div>
          <div className="cards">
            {featureDates.map((date, index) => (
              <div className="feature-card" key={index}>
                <FeatureDates date={date} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <section className="buttons">
        <a className="btn btn-secondary" href="">
          Create account
        </a>

        <a className="btn btn-secondary" href="">
          Try without account
        </a>
      </section>
      {/* <TestRestaurantsApi />
    <TestActivitiesApi />
    <TestEventsApi />
    <TestMoviesApi /> */}
    </>
  );
};

export default LandingPage;
