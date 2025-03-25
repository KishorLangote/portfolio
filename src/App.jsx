import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Projects";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Header />
      <main className="container-fluid p-0">
        <Home />
        <Skills />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
