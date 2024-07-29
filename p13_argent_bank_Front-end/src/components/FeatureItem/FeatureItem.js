import "./FeatureItem.css";

/**
 * FeatureItem component.
 * Renders a feature item with an icon, title, and description.
 * @param {Object} props - Component props.
 * @param {string} props.icon - The URL of the icon image.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.description - The description of the feature.
 * @returns {JSX.Element} FeatureItem component.
 */

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={icon} alt="Chat Icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
