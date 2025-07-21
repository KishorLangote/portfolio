import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark text-light py-3 text-center">
        <h3 className="py-3">KISHOR LANGOTE</h3>
        <div className="row py-3">
          <div className="col-md-4 fw-bold">
            <div>
              <h5>
                {" "}
                <IoLocationOutline /> LOCATION
              </h5>
              <h6>PUNE, MAHARASHTRA</h6>
            </div>
          </div>
          <div className="col-md-4 fw-bold">
            <div className="d-flex justify-content-evenly">
              <span>
                {" "}
                <a href="/#skills" className="nav-link">
                  <h5>SKILLS</h5>
                </a>
              </span>
              <span>
                {" "}
                <a href="/#projects" className="nav-link">
                  <h5>PROJECTS</h5>
                </a>
              </span>
              <span>
                {" "}
                <a href="/#about" className="nav-link">
                  <h5>ABOUT</h5>
                </a>
              </span>
            </div>
          </div>

          <div className="col-md-4 fw-bold">
            <div>
              <div className="mx-2">
                <h5>AROUND THE WEB</h5>
                <a href="https://github.com/KishorLangote">
                  <i
                    className="bi bi-github"
                    style={{ fontSize: "24px", color: "white", margin: "20px" }}
                  ></i>
                </a>

                <a href="https://www.linkedin.com/in/kishorlangote">
                  <i
                    class="bi bi-linkedin"
                    style={{ fontSize: "24px", color: "white", margin: "20px" }}
                  ></i>
                </a>

                <a href="https://x.com/KishorLangote0">
                  <i
                    className="bi bi-twitter-x"
                    style={{ fontSize: "24px", color: "white", margin: "20px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="fw-semibold">
          &copy; 2025 | Kishor Langote. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
