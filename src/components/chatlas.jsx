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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
      <p>{answer}</p>
    </div>
  );
}

