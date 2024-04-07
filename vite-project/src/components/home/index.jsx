// import React from 'react'
//

// const Home = () => {
//     const { currentUser } = useAuth()
//     return (
//         <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
//     )
// }

// export default Home

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/authContext";
import "../../App.css";

function App() {
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
    <>
      <main>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <span>EcoShift </span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-5 me-lg-auto">
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="/home">
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
                    href="contact.html"
                    className="navbar-icon bi-person smoothscroll"
                  />
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <section
          className="hero-section d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto">
                <h1 className="text-white text-center">EcoShift</h1>
                <h6 className="text-center">
                  Your comprehensive destination for forest and urban analysis.
                  Discover the convenience of uploading tree images to generate
                  detailed reports, obtain statistics, and classify species.
                </h6>
                <form
                  method="get"
                  className="custom-form mt-4 pt-2 mb-lg-0 mb-5"
                  role="search"
                >
                  <div className="input-group input-group-lg">
                    <span
                      className="input-group-text bi-search"
                      id="basic-addon1"
                    />
                    <input
                      name="keyword"
                      type="search"
                      className="form-control"
                      id="keyword"
                      placeholder="Latest Reports..."
                      aria-label="Search"
                    />
                    <button type="submit" className="form-control">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="featured-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                <div className="custom-block bg-white shadow-lg">
                  <a href="topics-detail.html">
                    <div className="d-flex">
                      <h5 className="mb-2">Recents</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="custom-block custom-block-overlay">
                  <form action="/submit-your-choice" method="post">
                    <div className="checkbox-group">
                      <input type="checkbox" id="checkbox1" name="option1" />
                      <label htmlFor="checkbox1">Option 1</label>
                    </div>
                    <div className="checkbox-group">
                      <input type="checkbox" id="checkbox2" name="option2" />
                      <label htmlFor="checkbox2">Option 2</label>
                    </div>
                    <div className="checkbox-group">
                      <input type="checkbox" id="checkbox3" name="option3" />
                      <label htmlFor="checkbox3">Option 3</label>
                    </div>
                    <div className="checkbox-group">
                      <input type="checkbox" id="checkbox4" name="option4" />
                      <label htmlFor="checkbox4">Option 4</label>
                    </div>
                    <div className="checkbox-group">
                      <input type="checkbox" id="checkbox5" name="option5" />
                      <label htmlFor="checkbox5">Option 5</label>
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                  <div className="section-overlay" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="timeline-section section-padding" id="section_3">
          <div className="section-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-white mb-4">Mission and Vision</h2>
              </div>
              <div className="col-lg-10 col-12 mx-auto">
                <div className="timeline-container">
                  <ul
                    className="vertical-scrollable-timeline"
                    id="vertical-scrollable-timeline"
                  >
                    <div className="list-progress">
                      <div className="inner" />
                    </div>
                    <li>
                      <h4 className="text-white mb-3">Tree Counting</h4>
                      <p className="text-white">
                        Aerial tree counting leverages advanced technology for
                        swift deforestation assessment, reforestation support,
                        and precise climate change analysis, offering efficiency
                        and accuracy in environmental management.
                      </p>
                      <div className="icon-holder">
                        <i className="bi-search" />
                      </div>
                    </li>
                    <li>
                      <h4 className="text-white mb-3">Our Mission</h4>
                      <p className="text-white">
                        To develop a deep learning-based solution to analyze
                        trees and classify their species in the context of
                        forest land diversion, urban well-being contributing to
                        effective and sustainable development.
                      </p>
                      <div className="icon-holder">
                        <i className="bi-bookmark" />
                      </div>
                    </li>
                    <li>
                      <h4 className="text-white mb-3">Our Vision</h4>
                      <p className="text-white">
                        Our solution deploys advanced Machine Learning
                        algorithms for precise tree population assessments in
                        forest development, automating image analysis
                        efficiently. Traditional methods are replaced by our
                        efficient image analytics solution, processing satellite
                        and aerial imagery for precise tree enumeration.
                        Environmental Stewardship: By employing technology to
                        automate tree counting ensures responsible land use for
                        developmental projects.
                      </p>
                      <div className="icon-holder">
                        <i className="bi-book" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../contexts/authContext';
// import '../../App.css';

// function App() {
//   const { currentUser } = useAuth()
//   const [image, setImage] = useState(null);
//   const [predictedImage, setPredictedImage] = useState(null);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append('image', image);

//     axios.post('http://localhost:5000/upload', formData)
//       .then(response => {
//         setPredictedImage(response.data.predicted_image);
//       })
//       .catch(error => {
//         console.error('Error uploading image: ', error);
//       });
//   };

//   return (
//     <div >
//     <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>

//       <input type="file" accept="image/*" onChange={handleImageChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {predictedImage && <img src={predictedImage} alt="Predicted Image" className='imgtest'/>}

//     </div>
//   );
// }

// export default App;
