// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'

// function App() {
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
//       <input type="file" accept="image/*" onChange={handleImageChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {predictedImage && <img src={predictedImage} alt="Predicted Image" className='imgtest'/>}
//     </div>
//   );
// }

// export default App;


import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
