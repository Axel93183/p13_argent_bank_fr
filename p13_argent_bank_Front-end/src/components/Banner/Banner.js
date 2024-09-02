import "./Banner.css";

/**
 * Banner component.
 * Renders a promotional banner with key selling points and a call to action.
 *
 * @returns {JSX.Element} The rendered Banner component with promotional content.
 */

const Banner = () => {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Banner;
