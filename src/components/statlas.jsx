import React, { useState } from "react";
import axios from "axios";

export default function Statlas() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/statlas", { question });
      const { answer: responseAnswer } = response.data;
      setAnswer(responseAnswer);
    } catch (error) {
      console.error(error);
      setAnswer(
        "An error occurred while fetching the answer. Please try again later."
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
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
            onKeyDown={handleKeyDown}
          />
          <button className="chat-btn" type="submit">
            Ask
          </button>
        </form>
      </div>
      <div className="answer-container">
        <p className="answer">{answer}</p>
      </div>
      <div className="footer">
        <p className="footer-id"><a href="https://cjtakhar.com">cj takhar</a></p>
      </div>
    </div>
  );
}