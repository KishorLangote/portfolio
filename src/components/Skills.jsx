import { TiStarOutline } from "react-icons/ti";
import { ImMinus } from "react-icons/im";

const Skills = () => {
  return (
    <>
      <main className="container  py-4" id="skills">
        <div className="text-center">
          <h1 className="py-2">SKILLS</h1>
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
          <p className="py-3">
            Here are some of my skills on which I have been working on for the
            last one year.
          </p>
        </div>

        <div className="row py-3">
          <div className="col-md-4">
            <div className="card p-2 mb-4">
              <div className="card-body">
                <h4>FRONTEND</h4>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-2 mb-4">
              <div className="card-body">
                <h4>BACKEND</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-2">
              <div className="card-body">
                <h4>TOOLS I USE</h4>
                <ul>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>GitHub</li>
                  <li>MongoDB Compass</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Skills;
