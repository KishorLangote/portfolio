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
                  src="https://res.cloudinary.com/dzuydzr7l/image/upload/v1742837113/FREE_BREATHING_FRONT_IMAGE_zdqcrb.png"
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
                    I am actively working on the Free Breathing Library app, a
                    mission-driven initiative aimed at educating every child and
                    providing access to books across various topics. Our goal is
                    to bridge educational gaps, promote literacy, and make
                    learning more accessible to everyone. Users can browse,
                    request books, add/remove books from favorites and carts,
                    and place book orders at zero cost.
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
                  src="https://res.cloudinary.com/dzuydzr7l/image/upload/v1742795315/ar_dyz7ks.png"
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
                    This ArtWork web app showcases continent-wise art events in
                    galleries, featuring artists' work. Users can filter events
                    by Asia, Europe, and North America. Additionally, they can
                    search based on the gallery name and continent. Clicking on
                    an event leads to detailed information, including attached
                    artist artworks.
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
