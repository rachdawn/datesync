import "../styles/LandingPage.scss";
import CreateAccountButton from "../components/auth/buttons/create-account-button";
import TryWithoutAccountButton from "../components/auth/buttons/try-without-account-button";
import AnimatedSearchBarIntro from "../components/AnimateSearchBarIntro";

const LandingPage = () => {

  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero-inner">
          <h1>DateSync</h1>
          <h3>The Best Place To Plan Your Perfect Dates</h3>
          <section className="buttons">
            <CreateAccountButton className="btn" />
            <TryWithoutAccountButton className="btn" />
           </section>
           <AnimatedSearchBarIntro />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
