const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-dark text-light"
        data-bs-theme="dark"
      >
        <div className="container py-4">
          <a className="nav-link" href="/">
            <h2>KISHOR LANGOTE</h2>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBar"
            aria-controls="navBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>{" "}
            <span className="fw-bolder">MENU</span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center fw-bold fs-5"
            id="navBar"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-4">
                <a href="/#skills" className="nav-link text-light">
                  SKILLS
                </a>
              </li>
              <li className="nav-item mx-4">
                <a href="/#projects" className="nav-link text-light">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item mx-4">
                <a href="/#about" className="nav-link text-light">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
