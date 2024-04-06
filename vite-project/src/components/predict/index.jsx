import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/authContext";
import "../../App.css";

function Predict() {
  const { currentUser } = useAuth();
  const [image, setImage] = useState(null);
  const [predictedImage, setPredictedImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", image);

    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        setPredictedImage(response.data.predicted_image);
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };

  return (
    // <div>
    //   <div className="text-2xl font-bold pt-14">
    //     Hello{" "}
    //     {currentUser.displayName ? currentUser.displayName : currentUser.email},
    //     you are now logged in.
    //   </div>

    //   <input type="file" accept="image/*" onChange={handleImageChange} />
    //   <button onClick={handleUpload}>Upload</button>
    //   {predictedImage && (
    //     <img src={predictedImage} alt="Predicted Image" className="imgtest" />
    //   )}
    // </div>\
    <>
      <main>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              {/* <i class="bi-back"></i> */}
              <span>EcoShift </span>
            </a>
            <div className="d-lg-none ms-auto me-4">
              <a href="#top" className="navbar-icon bi-person smoothscroll" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-5 me-lg-auto">
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarLightDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Forest Analysis
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="navbarLightDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/predict">
                        Upload Image
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="fa_stats.html">
                        Statistics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="fa_down_rep.html">
                        Download Report
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarLightDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Urban Analysis
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="navbarLightDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="ua_img_upload.html">
                        Upload Image
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="ua_tally.html">
                        Species tally
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="ua_down_rep.html">
                        Download Report
                      </a>
                    </li>
                  </ul>
                </li>
                <div className="d-none d-lg-block">
                  <a
                    href="#top"
                    className="navbar-icon bi-person smoothscroll"
                  />
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <header className="site-header d-flex flex-column justify-content-center align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Homepage</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Forest Analysis
                    </li>
                  </ol>
                </nav>
                <h2 className="text-white">Forest Analysis</h2>
              </div>
            </div>
          </div>
        </header>
        <section className="section-padding section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <h3 className="mb-4 pb-2">Upload your Image here</h3>
              </div>
              <div className="inline-container">
                {/* <input type="file" name="image" id="image" accept="image/*"> */}
                {/* <div class="first">
                  <p><input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)"></p>
                  <p><img id="output" width="200" /></p>
                </div> */}
                <label
                  htmlFor="image"
                  className="custom-file-upload btn btn-warning upload-btn btn-lg my-1"
                >
                  <p>
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      id="file"
                      onChange={handleImageChange}
                    />
                  </p>
                </label>
                <button
                  className="btn btn-warning upload-btn btn-lg my-1"
                  type="submit"
                  onClick={handleUpload}
                >
                  Upload
                </button>
                {/* <button class="btn btn-warning upload-btn btn-lg my-1" onclick="generatePDF()">Generate PDF </button> */}
              </div>
              <br />
            </div>
          </div>
        </section>
        <br />
        <section className="section-padding section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <h3 className="mb-4 pb-2">Statistics</h3>
                //{" "}
                {predictedImage && (
                  <img
                    src={predictedImage}
                    alt="Predicted Image"
                    className="imgtest"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <br />
        <section className="section-padding section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <h3 className="mb-4 pb-2">Download Report</h3>
              </div>
              <div className="inline-container">
                {/* <input type="file" name="image" id="image" accept="image/*"> */}
                <label
                  htmlFor="image"
                  className="custom-file-upload btn btn-warning upload-btn btn-lg my-1"
                >
                  Download Preview
                </label>
                {/* <button class="btn btn-warning upload-btn btn-lg my-1" type="submit"></button> */}
                <button
                  className="btn btn-warning upload-btn btn-lg my-1"
                  onclick="generatePDF()"
                >
                  Generate PDF{" "}
                </button>
              </div>
              <br />
            </div>
          </div>
        </section>
        {/* <div class="first">
    <p><input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)"></p>
    <p><img id="output" width="200" /></p>
  </div> */}
      </main>
    </>
  );
}

export default Predict;
