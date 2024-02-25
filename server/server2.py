from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input, decode_predictions
import io
import openai

app = Flask(__name__)
model = ResNet50()
openai.api_key = 'YOUR_OPENAI_API_KEY'

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

@app.route('/upload', methods=['POST'])
def predict():
    try:
        # Get the uploaded file from the request
        imagefile = request.files['imagefile']

        # Create a file-like object from the uploaded file data
        image_data = io.BytesIO(imagefile.read())

        # Read the image data
        image = load_img(image_data, target_size=(224, 224))

        # Perform OCR (Optical Character Recognition) to extract text from the image
        text = perform_ocr(image)

        # If text is extracted, use it as input for the chatbot
        if text:
            chat_input = f"Text prediction: {text}. What would you like to do next?"
        else:
            chat_input = "No text found in the image. What would you like to do next?"

        # Use OpenAI to generate a response
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": chat_input}],
        )

        # Extract the generated response from the OpenAI completion
        bot_response = response.choices[0].message.content.strip()

        # Return the response to the client
        return jsonify({'text_prediction': text, 'chat_output': bot_response})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def perform_ocr(image):
    # Implement OCR logic to extract text from the image
    # Replace this with your OCR implementation using libraries like Tesseract or OpenCV
    # For demonstration, returning a placeholder text
    return "Placeholder text extracted from the image"

if __name__ == '__main__':
    app.run(port=9003, debug=True)
