import React from "react";

const Navbar = ({ setcategory }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge text-bg-primary">Navbar</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setcategory("technology")}
                
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setcategory("business")}
             
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setcategory("health")}
                
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setcategory("sports")}
               
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setcategory("entertainment")}
              
              >
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
