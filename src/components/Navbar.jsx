import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = ({ setCategory }) => {
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-danger fs-4">NewsAPI</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {categories.map((cat, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link text-capitalize fw-bold"
                  href="#"
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/ramidarshan07"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon-link custom-tooltip"
          >
            <img src="/github.webp" alt="GitHub" className="github-icon" />
            <span className="tooltip-text">Visit GitHub Profile</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
