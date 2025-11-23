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
        <form className="form-container">
          {/* Difficulty selection */}
          <div className="radio-container">
            <h2>Choose Difficulty: </h2>
            <div className="radio-subcontainer">
              <div>
                <label htmlFor="easy">
                  <div
                    className="solid-circle"
                    style={{ backgroundColor: difficultyColors.easy }}
                  ></div>{" "}
                  Easy
                </label>
                <input
                  type="radio"
                  required
                  id="easy"
                  name="difficulty"
                  value="easy"
                  checked={difficulty === "easy"}
                  onChange={(e) => setDifficulty(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="medium">
                  <div
                    className="solid-circle"
                    style={{ backgroundColor: difficultyColors.medium }}
                  ></div>{" "}
                  Medium
                </label>
                <input
                  type="radio"
                  required
                  id="medium"
                  name="difficulty"
                  value="medium"
                  checked={difficulty === "medium"}
                  onChange={(e) => setDifficulty(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="hard">
                  <div
                    className="solid-circle"
                    style={{ backgroundColor: difficultyColors.hard }}
                  ></div>{" "}
                  Hard
                </label>
                <input
                  type="radio"
                  required
                  id="hard"
                  name="difficulty"
                  value="hard"
                  checked={difficulty === "hard"}
                  onChange={(e) => setDifficulty(e.target.value)}
                />
              </div>
            </div>
            <h2>
              You Chose:
              <span
                style={{
                  color: difficulty ? difficultyColors[difficulty] : "#33FF00",
                }}
              >
                {" "}
                {difficulty}
              </span>
            </h2>
          </div>
        </form>
      </div>
    </>
  );
}
