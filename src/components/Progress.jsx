import { useGame } from "../Context/GameContext";

export default function Progress() {
    const { index, gameQuestions, score } = useGame();

    if (!gameQuestions || gameQuestions.length === 0) return null;

    const progress = ((index + 1) / gameQuestions.length) * 100;

    return (
        <div className="progress">
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <p>{index + 1} / {gameQuestions.length}</p>
            </div>
            <div className="score-display">
                <p>Score: {score}</p>
            </div>
        </div>
    );
}
