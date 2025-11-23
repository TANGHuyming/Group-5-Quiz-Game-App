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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate if correct answer matches any wrong answer
    const wrongAnswers = [wrongAnswer1, wrongAnswer2, wrongAnswer3];
    const hasMatch = wrongAnswers.some(
      (wrong) =>
        wrong.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
    );

    if (hasMatch) {
      window.alert("Error: Correct answer cannot match any wrong answer!");
      return;
    }

    // Create choices array (shuffle them so correct isn't always first)
    const choices = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3];
    const shuffledChoices = choices.sort(() => Math.random() - 0.5);

    // Create question object
    const newQuestion = {
      difficulty: difficulty,
      prompt: question,
      choices: shuffledChoices,
      answers: [correctAnswer.toLowerCase().trim()],
    };

    // Get existing questions from localStorage
    const existingQuestions =
      JSON.parse(localStorage.getItem("customQuestions")) || [];

    // Add new question and save back to localStorage
    localStorage.setItem(
      "customQuestions",
      JSON.stringify([...existingQuestions, newQuestion])
    );

    // Success feedback
    window.alert("Question added successfully!");

    // Clear the form
    setDifficulty("");
    setQuestion("");
    setCorrectAnswer("");
    setWrongAnswer1("");
    setWrongAnswer2("");
    setWrongAnswer3("");
  };

  return (
    <>
      <h1 className="title">Add Your Own Question!</h1>
      <div className="home-container">
        <form onSubmit={handleSubmit} className="form-container">
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

          {/* Question input */}
          <input
            type="text"
            required
            placeholder="Enter your question..."
            className="input-box"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          {/* Correct answer */}
          <input
            type="text"
            required
            placeholder="Enter the correct answer..."
            className="input-box"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />

          {/* Wrong answer 1 */}
          <input
            type="text"
            required
            placeholder="Enter wrong answer 1..."
            className="input-box"
            value={wrongAnswer1}
            onChange={(e) => setWrongAnswer1(e.target.value)}
          />

          {/* Wrong answer 2 */}
          <input
            type="text"
            required
            placeholder="Enter wrong answer 2..."
            className="input-box"
            value={wrongAnswer2}
            onChange={(e) => setWrongAnswer2(e.target.value)}
          />

          {/* Wrong answer 3 */}
          <input
            type="text"
            required
            placeholder="Enter wrong answer 3..."
            className="input-box"
            value={wrongAnswer3}
            onChange={(e) => setWrongAnswer3(e.target.value)}
          />

          {/* Submit button */}
          <button className="submit-button">SUBMIT</button>
        </form>
      </div>
    </>
  );
}
