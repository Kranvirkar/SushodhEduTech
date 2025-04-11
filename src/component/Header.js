import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/events", label: "Events" },
    { path: "/gallery", label: "Gallery" },
    { path: "/research", label: "Research Guidance Process" },
    { path: "/contact", label: "Contact us" },
  ];

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to="/">Sushodh</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            {navItems.map(({ path, label }) => (
              <li key={path} className={location === path ? "active" : ""}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="get-started-btn d-none d-lg-block">
          Enquire Now
        </Link>
        <Link to="/pay-now" className="get-started-btn d-none d-lg-block">
          Pay Now
        </Link>
        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="hamburger d-lg-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Mobile Canvas Menu */}
        <div className={`canvas-menu ${isMenuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            &times;
          </button>
          <ul>
            {navItems.map(({ path, label }) => (
              <li key={path} className={location === path ? "active" : ""}>
                <Link to={path} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .hamburger {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          margin-right : 0px; 
        }

        /* Canvas (Sidebar) Menu */
        .canvas-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 250px;
          height: 100vh;
          background: white;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
          transition: right 0.3s ease-in-out;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: start;
        }

        .canvas-menu.open {
          right: 0;
        }

        .canvas-menu ul {
          list-style: none;
          padding: 0;
          width: 100%;
        }

        .canvas-menu ul li {
          padding: 1rem 0;
          border-bottom: 1px solid #ddd;
        }

        .canvas-menu ul li:last-child {
          border-bottom: none;
        }

        .close-btn {
          font-size: 2rem;
          border: none;
          background: none;
          cursor: pointer;
          position: absolute;
          top: 10px;
          right: 20px;
        }

        /* Overlay */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: 998;
        }
      `}</style>
    </header>
  );
};

export default Header;
