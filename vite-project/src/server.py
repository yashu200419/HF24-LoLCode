# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from PIL import Image
import torchvision.transforms as transforms

app = Flask(__name__)
CORS(app)

# Load the PyTorch model
model = torch.load("best.pt")
model.eval()

# Define image transformation
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    try:
        img = Image.open(file)
        img = transform(img).unsqueeze(0)
        with torch.no_grad():
            output = model(img)
            # Process output to get the number of trees predicted
            prediction = output.argmax(1).item()
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
