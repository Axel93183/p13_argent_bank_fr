import {
  faArrowRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Logo from "./../Logo/Logo";
import NavItem from "./../NavItem/NavItem";
import "./Header.css";

/**
 * Header Component
 * @param {Object} props - Props du composant.
 * @param {Function} props.onLogout - Fonction à appeler lors de la déconnexion.
 * @param {boolean} props.isLoggedIn - État de connexion de l'utilisateur.
 * @param {Object} props.user - Informations de l'utilisateur connecté.
 * @returns {JSX.Element} Header Component
 */

const Header = ({ onLogout, isLoggedIn, user }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    console.log("Logout clicked"); // Vérifie que le bouton de déconnexion est cliqué
    if (onLogout) {
      console.log("onLogout prop is defined");
      onLogout(); // Appeler la fonction de déconnexion passée en props
    } else {
      console.log("onLogout prop is undefined");
    }
    navigate("/login"); // Rediriger vers la page de connexion
  };

  return (
    <header>
      <nav className="main-nav">
        <Logo />
        <div>
          {isLoggedIn ? (
            <div className="header-log">
              <NavItem href="/user" icon={faUserCircle} className="nav-icon">
                {user.firstName}
              </NavItem>
              <NavItem
                href="/login"
                icon={faArrowRightFromBracket}
                className="nav-icon"
                onClick={handleLogout} // Appeler handleLogout lors du clic
              >
                Sign Out
              </NavItem>
            </div>
          ) : (
            <NavItem href="/login" icon={faUserCircle} className="nav-icon">
              Login
            </NavItem>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
