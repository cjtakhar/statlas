import openai
import config
from flask import Flask, request, jsonify

app = Flask(__name__)
openai.api_key = config.API_KEY

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
