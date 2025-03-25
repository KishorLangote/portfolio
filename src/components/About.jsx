// import { TiStarOutline } from "react-icons/ti";
// import { ImMinus } from "react-icons/im";
// import { Link } from "react-router-dom"

// const About = () => {
//   return (
//     <main className="container text-center py-5 mb-5" id="about">
//       <h1 className="fw-bold">ABOUT</h1>

//       {/* Decorative Line */}
//       <div className="py-2">
//         {[...Array(6)].map((_, index) => (
//           <ImMinus key={index} />
//         ))}
//         <TiStarOutline style={{ margin: "10px" }} />
//         {[...Array(6)].map((_, index) => (
//           <ImMinus key={index} />
//         ))}
//       </div>

//       {/* About Content */}
//       <div className="text-center m-3">
//         <p className="fs-5">
//           Hi Everyone, I am <strong>Kishor Langote</strong> from Pune, India.
//           I am a <strong>Science graduate</strong> from Savitribai Phule Pune University.
//           Currently, I am learning <strong>Web Development</strong>, <strong>Frontend Skills</strong>, <strong>Backend Skills</strong>,
//           and building projects in it.
//         </p>

//         <h2 className="mt-4">Apart from Coding, I love:</h2>
//         <ul className="list-unstyled list fs-5 mt-3">
//           <Link >🎨 Painting </Link>👉<butto className="btn btn-outline-info">See here</butto><br />
//           <Link>📚 Reading Books & Writing Poems</Link>👉<butto className="btn btn-outline-info">See here</butto><br />
//           <Link>🌱 Gardening</Link>👉<butto className="btn btn-outline-info">See here</butto><br />
//         </ul>
//       </div>
//     </main>
//   );
// };

// export default About;

import { Link } from "react-router-dom";
import { ImMinus } from "react-icons/im";
import { TiStarOutline } from "react-icons/ti";

const About = () => {
  return (
    <main className="container text-center py-5 mb-5" id="about">
      <h1 className="fw-bold">ABOUT</h1>
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

      {/* About Content */}
      <div className="text-center m-3">
        <p className="fs-5">
          Hi Everyone, I am <strong>Kishor Langote</strong> from Pune, India. I
          am a <strong>Science graduate</strong> from Savitribai Phule Pune
          University. Currently, I am learning <strong>Web Development</strong>,{" "}
          <strong>Frontend Skills</strong>, <strong>Backend Skills</strong>, and
          building projects in it.
        </p>

        <h3 className="fw-bold mt-4">Apart from Coding, I love:</h3>

        <ul className="fs-5 mt-4">
          <li className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <Link
              to="/paintings"
              className="text-decoration-none text-dark fw-medium"
            >
              🎨 Painting
            </Link>
            
          </li>
          <Link
              to="/paintings"
              className="btn btn-outline-info fw-bold"
            >
              See here
            </Link>
          <li className="d-flex align-items-center justify-content-center gap-3 mb-3 mt-3">
            <Link
              to="/poems"
              className="text-decoration-none text-dark fw-medium"
            >
              📚 Reading Books & Writing Poems
            </Link>
           
          </li>
          <Link to="/poems" className="btn btn-outline-info fw-bold">
              See here
            </Link>
          <li className="d-flex align-items-center justify-content-center gap-3 mb-3 mt-3">
            <Link
              to="/gardening"
              className="text-decoration-none text-dark fw-medium"
            >
              🌱 Gardening
            </Link>
            {/* <Link to="/gardening" className="btn btn-outline-info btn-sm fw-bold">See here</Link> */}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default About;
