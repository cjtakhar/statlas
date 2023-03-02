import os
import openai
from flask import Flask, request, jsonify

app = Flask(__name__)
openai.api_key = os.environ.get('API_KEY')

openai.api_version = "2022-12-01"

@app.route("/chatlas", methods=["POST"])
def answer_question():
    question = request.form.get("question")
    model = "text-davinci-002"
    temperature = 0.5
    max_tokens = 50

    response = openai.Completion.create(
        engine=model,
        prompt=question,
        temperature=temperature,
        max_tokens=max_tokens
    )

    answer = response.choices[0].text
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run()

