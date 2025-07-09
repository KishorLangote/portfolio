import { TiStarOutline } from "react-icons/ti";
import { ImMinus } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <main className="container-fluid text-center" id="projects">
        <h1 className="mt-5">PROJECTS</h1>

        <ImMinus />
        <ImMinus />
        <ImMinus />
        <ImMinus />
        <ImMinus />
        <ImMinus />
        <TiStarOutline style={{ margin: "10px" }} />
        <ImMinus />
        <ImMinus />
        <ImMinus />
        <ImMinus />
        <ImMinus />
        <ImMinus />

        {/* Project Cards Section */}
        <div className="container-fluid text-center bg-color py-4 mt-3">
          <div className="row d-flex justify-content-center gap-4">
            {/* First Project */}
            <div className="col-lg-5 col-md-6 col-sm-12 d-flex">
              <div className="card p-4 shadow w-100">
                <img
                  src="https://res.cloudinary.com/dzuydzr7l/image/upload/v1743057912/FBL_IMAGE1_ca8cx8.png"
                  className="img-fluid rounded"
                  style={{
                    objectFit: "contain",
                    height: "300px",
                    width: "100%",
                  }}
                  alt="Project Preview"
                />
                <div className="card-body">
                  <p className="mt-3 text-break">
                    A full-stack web application that allows users to browse all available books, search by author name, and filter by genre. Users can explore a wide range of topics, request books, and add or remove books from their favorites and carts. The app enables users to place book orders completely free of cost, making learning and reading accessible to everyone.
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <Link
                    to="https://github.com/KishorLangote/FreeBreathing"
                    className="btn btn-outline-info fw-bold"
                  >
                    <FaGithub className="fs-4" /> GitHub
                  </Link>
                  <Link
                    to="https://free-breathing-library.vercel.app/"
                    className="btn btn-outline-info fw-bold "
                  >
                    <MdOutlineLiveTv className="fs-4" /> Live
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Project */}
            <div className="col-lg-5 col-md-6 col-sm-12 d-flex">
              <div className="card p-4 shadow w-100">
                <img
                  src="https://res.cloudinary.com/dzuydzr7l/image/upload/v1751457189/HOME_PAGE_ieeg7s.png"
                  className="img-fluid rounded"
                  style={{
                    objectFit: "contain",
                    height: "300px",
                    width: "100%",
                  }}
                  alt="Project Preview"
                />
                <div className="card-body">
                  <p className="mt-3 text-break">
                    A full-stack Tasks Management App that helps users create, view, update, and delete Tasks. It allows users to keep track of their daily goals or activities, mark them as completed & remove them once done. Built with React frontend, Express/Node, MongoDB database and JWT-based authentication.
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <Link
                    to="https://github.com/KishorLangote/Tasque"
                    className="btn btn-outline-info fw-bold"
                  >
                    <FaGithub className="fs-4" /> GitHub
                  </Link>
                  <Link
                    to="https://frontend-tasquee.vercel.app/login"
                    className="btn btn-outline-info fw-bold"
                  >
                    <MdOutlineLiveTv className="fs-4" /> Live
                  </Link>
                </div>
              </div>
            </div>
            {/* Third Project */}
            <div className="col-lg-5 col-md-6 col-sm-12 d-flex">
              <div className="card p-4 shadow w-100">
                <img
                  src="https://res.cloudinary.com/dzuydzr7l/image/upload/v1743058134/AW_IMAGE_trr1vg.png"
                  className="img-fluid rounded"
                  style={{
                    objectFit: "contain",
                    height: "300px",
                    width: "100%",
                  }}
                  alt="Project Preview"
                />
                <div className="card-body">
                  <p className="mt-3 text-break">
                    This ArtWork web app showcases continent-wise art events in galleries, featuring artists' work. Users can filter events by Asia, Europe, and North America. Additionally, they can search based on the gallery name and continent. Clicking on an event leads to detailed information, including attached artist artworks.
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <Link
                    to="https://github.com/KishorLangote/artWork"
                    className="btn btn-outline-info fw-bold"
                  >
                    <FaGithub className="fs-4" /> GitHub
                  </Link>
                  <Link
                    to="https://art-work-showcase.vercel.app/"
                    className="btn btn-outline-info fw-bold"
                  >
                    <MdOutlineLiveTv className="fs-4" /> Live
                  </Link>
                </div>
              </div>
            </div>
            {/* Fourth Project */}
            <div className="col-lg-5 col-md-6 col-sm-12 d-flex">
              <div className="card p-4 shadow w-100">
                <img
                  src="https://res.cloudinary.com/dzuydzr7l/image/upload/v1751458014/FORECASTLY_wmw8um.png"
                  className="img-fluid rounded"
                  style={{
                    objectFit: "contain",
                    height: "300px",
                    width: "100%",
                  }}
                  alt="Project Preview"
                />
                <div className="card-body">
                  <p className="mt-3 text-break">
                    Forecastly is a simple and responsive Weather App that shows the current weather for any city using real-time weather data from an API. User can search weather by city name. Dispalys temperature, humidity and wind speed.
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <Link
                    to="https://github.com/KishorLangote/forecastly"
                    className="btn btn-outline-info fw-bold"
                  >
                    <FaGithub className="fs-4" /> GitHub
                  </Link>
                  <Link
                    to="https://forecastly-app.vercel.app/"
                    className="btn btn-outline-info fw-bold"
                  >
                    <MdOutlineLiveTv className="fs-4" /> Live
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
