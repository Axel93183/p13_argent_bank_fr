import Banner from "../../components/Banner/Banner";

import iconChat from "../../assets/icons/icon-chat.png";
import iconMoney from "../../assets/icons/icon-money.png";
import iconSecurity from "../../assets/icons/icon-security.png";

import FeatureItem from "../../components/FeatureItem/FeatureItem";

import "./Home.css";

/**
 * Home component.
 * Renders the home page with header, banner, features, and footer.
 * @returns {JSX.Element} Home component.
 */

const Home = () => {
  // Feature's titles
  const featureTitleChat = "You are our #1 priority";
  const featureTitleMoney = "More savings means higher rates";
  const featureTitleSecurity = "Security you can trust";

  // Feature's texts
  const featureDescriptionChat =
    "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.";
  const featureDescriptionMoney =
    "The more you save with us, the higher your interest rate will be!";
  const featureDescriptionSecurity =
    "  We use top of the line encryption to make sure your data and money is always safe.";

  return (
    <div className="container-home">
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            icon={iconChat}
            title={featureTitleChat}
            description={featureDescriptionChat}
          />
          <FeatureItem
            icon={iconMoney}
            title={featureTitleMoney}
            description={featureDescriptionMoney}
          />
          <FeatureItem
            icon={iconSecurity}
            title={featureTitleSecurity}
            description={featureDescriptionSecurity}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
