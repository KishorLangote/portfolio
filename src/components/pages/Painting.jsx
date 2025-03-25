import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

const Painting = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPainting = async () => {
    try {
      const response = await axios.get(
        "https://backend-art-events.vercel.app/artEvents"
      );
      console.log("Full Response:", response.data);

      const filteredData = response.data.filter((event) =>
        event.featuredArtists?.some(
          (artist) => artist.name === "Kishor Langote"
        )
      );

      setData(filteredData);
      console.log("Filtered Events:", filteredData);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPainting();
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid py-4" style={{ minHeight: "70vh" }}>
        <h1 className="text-center py-3">My Paintings</h1>

        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary"></div>
            <p className="text-center fs-4 mx-2">Loading...</p>
          </div>
        ) : (
          <div className="row">
            {data.length > 0 ? (
              data.map((event, index) =>
                event.featuredArtists.map(
                  (artist) =>
                    artist.name === "Kishor Langote" &&
                    artist.artWorkImageUrl?.map((image, index) => (
                      <div
                        key={index}
                        className="col-lg-3 col-md-6 col-sm-12 mb-4"
                      >
                        <div className="card p-4">
                          <img
                            src={image.imageUrl}
                            alt={index}
                            className="card-img-top"
                            style={{ height: "400px", objectFit: "contain" }}
                          />
                          <p className="text-center fs-4 mt-1">
                            <strong>Title: </strong>
                            {image.title}
                          </p>
                        </div>
                      </div>
                    ))
                )
              )
            ) : (
              <p className="text-center">
                No paintings found.
              </p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Painting;
