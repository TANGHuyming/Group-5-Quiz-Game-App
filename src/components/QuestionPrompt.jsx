import { useGame } from "../Context/GameContext";

export default function QuestionPrompt() {
    const { gameQuestions, index, showPrompt } = useGame();

    const question = gameQuestions[index];
    return (
        <h2 className="question">
            {showPrompt ? question.prompt : "••• Hidden •••"}
        </h2>
    );
}