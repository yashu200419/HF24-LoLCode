import React, { useState } from 'react';
import axios from 'axios';

function App() {
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
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {predictedImage && <img src={predictedImage} alt="Predicted Image" />}
    </div>
  );
}

export default App;
