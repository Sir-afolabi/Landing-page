import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navlist() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="navlist-container">
      <div className="nav-list">
        <div className="logo-cont">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="link-text" onClick={closeMenu}>
                <div className="main-list-element">MAIN</div>
              </Link>
            </li>
            <li>
              <Link to="/Gallery" className="link-text" onClick={closeMenu}>
                GALLERY
              </Link>
            </li>
            <li>
              <Link to="/Projects" className="link-text" onClick={closeMenu}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/Certifications"
                className="link-text"
                onClick={closeMenu}
              >
                CERTIFICATIONS
              </Link>
            </li>
            <li>
              <Link to="/Contacts" className="link-text" onClick={closeMenu}>
                CONTACTS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
