// import React from 'react'
// 

// const Home = () => {
//     const { currentUser } = useAuth()
//     return (
//         <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
//     )
// }

// export default Home

import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/authContext';
import '../../App.css';

function App() {
  const { currentUser } = useAuth()
  const [image, setImage] = useState(null);
  const [predictedImage, setPredictedImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', image);

    axios.post('http://localhost:5000/upload', formData)
      .then(response => {
        setPredictedImage(response.data.predicted_image);
      })
      .catch(error => {
        console.error('Error uploading image: ', error);
      });
  };

  return (
    <div >
    <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>

      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {predictedImage && <img src={predictedImage} alt="Predicted Image" className='imgtest'/>}
    </div>
  );
}

export default App;