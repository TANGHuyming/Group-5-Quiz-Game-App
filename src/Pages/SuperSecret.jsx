import { useState } from "react";

export default function SuperSecret() {
  // States for all form fields
  const [difficulty, setDifficulty] = useState("");
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [wrongAnswer1, setWrongAnswer1] = useState("");
  const [wrongAnswer2, setWrongAnswer2] = useState("");
  const [wrongAnswer3, setWrongAnswer3] = useState("");

  // Colors for difficulty (taken from Home page)
  const difficultyColors = {
    easy: "#33FF00",
    medium: "#FF8000",
    hard: "#FF0000",
  };

  return (
    <>
      <h1 className="title">Add Your Own Question!</h1>
      <div className="home-container">
        <p>TODO Super Secret Page</p>
      </div>
    </>
  );
}
