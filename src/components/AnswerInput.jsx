import { useGame } from "../Context/GameContext";

export default function AnswerInput() {
    const { input, handleTyping, handleResult, gameQuestions, index} = useGame();
    
    const question = gameQuestions[index];

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (!question) return;

            const userAnswer = input.trim().toLowerCase();
            const correct = question.answers.some(
                ans => ans.trim().toLowerCase() === userAnswer
            );

            handleResult(correct);
        }
    };

    return (
        <input
            type="text"
            value={input}
            onChange={e => handleTyping(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your full answer here..."
            className="answer-input"
            autoFocus
        />
    );
}