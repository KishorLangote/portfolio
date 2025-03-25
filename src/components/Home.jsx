import { TiStarOutline } from "react-icons/ti";
import { ImMinus } from "react-icons/im";

const Home = () => {
  return (
    <>
      <main id="home" className="container-fluid bg-color text-light mt-0">
        <div className="container-fluid">
        <section className="text-center py-5">
          <img
            src="https://res.cloudinary.com/dzuydzr7l/image/upload/v1737519086/DSC_6704_j3if9a.jpg"
            className="img-fluid"
            style={{ height: 250, borderRadius: "50%" }}
          />
        </section>
        <section className="container-fluid text-center py-2">
          <h1 className="py-2 display-3 fw-bold">KISHOR LANGOTE</h1>
          <ImMinus />
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
          <ImMinus />
          <h4 className="py-2">Frontend Developer</h4>
          {/* <a href="#" className="btn btn-outline-light mt-3 ">
            Check Resume
          </a> */}
        </section>
        </div>
      </main>
    </>
  );
};

export default Home;

