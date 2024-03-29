import os
import openai
from dotenv import load_dotenv
from flask import Flask, request, jsonify

load_dotenv()
api_key = os.getenv('API_KEY')

app = Flask(__name__)
openai.api_key = os.environ.get('API_KEY')

@app.route('/statlas', methods=['POST'])
def answer_question():
    data = request.json
    question = data['question']
    model = "text-davinci-003"
    temperature = 0.5
    max_tokens = 1000

    response = openai.Completion.create(
        engine=model,
        prompt=question,
        temperature=temperature,
        max_tokens=max_tokens
    )

    answer = response.choices[0].text
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

