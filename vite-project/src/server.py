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

    classes =[]

    for result in results:
        # Check if there are any detections
            # Get detected objects bounding boxes
        boxes= result.boxes.cpu().numpy()
        ids = boxes.cls
        classes.append(ids)  # xyxy format: (x1, y1, x2, y2)

    f=0
    s=0
    for i in range(len(classes[0])):
        if classes[0][i]==0:
            f+=1
        if classes[0][i]==2:
            s+=1
    print(f'Fir species:{f}')
    print(f'spruce species:{s}')


   # print(len(classes))
   # print(classes)


    predicted_image_path = os.path.join('runs/detect/predict', image.filename)

    return jsonify({'predicted_image': predicted_image_path}), 200

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)