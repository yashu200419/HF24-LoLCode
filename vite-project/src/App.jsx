// frontend/src/App.js
import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePrediction = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };

  return (
    <div>
      <h1>Tree Detection</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handlePrediction}>Predict</button>
      {prediction !== null && (
        <div>
          <h2>Prediction: {prediction}</h2>
          {/* Display the image with prediction */}
          <img src={URL.createObjectURL(file)} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default App;
