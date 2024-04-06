from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from PIL import Image
from ultralytics import YOLO

# Load a model
model = YOLO('src/best.pt') 

app = Flask(__name__)
CORS(app)


@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = request.files['image']
    image_path = os.path.join('uploads', image.filename)
    image.save(image_path)
    print(image_path)

    results = model(image_path, save=True) 

    predicted_image_path = os.path.join('runs/detect/predict', image.filename)

    return jsonify({'predicted_image': predicted_image_path}), 200

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)
