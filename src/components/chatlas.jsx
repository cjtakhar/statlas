import React, { useState } from "react";

export default function Chatlas() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/chatlas", {
      method: "POST",
      body: new URLSearchParams({ question }),
    });
    const { answer: responseAnswer } = await response.json();
    setAnswer(responseAnswer);
  };

  return (
    <div className="container-fluid">
      <div>
        <h1 className="title">hello.</h1>
      </div>
      <div className="form-container">
        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            className="chat-input"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button className="chat-btn" type="submit">
            Ask
          </button>
        </form>
      </div>
      <div className="answer-container">
        <p className="answer">{answer}</p>
      </div>
    </div>
  );
}
