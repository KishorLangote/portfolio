import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Home from "./components/Home.jsx";
import Painting from "./components/pages/Painting.jsx";
import Poems from "./components/pages/Poems.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/paintings",
    element: <Painting />
  },

  {
    path: "/poems",
    element: <Poems />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
