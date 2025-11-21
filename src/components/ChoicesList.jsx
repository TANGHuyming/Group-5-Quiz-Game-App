import { useGame } from "../Context/GameContext";

export default function ChoicesList() {
    const { gameQuestions, index } = useGame();

    const question = gameQuestions[index];
    if (!question) return null;

    return (
        <div className="choices">
            {question.choices.map((choice, i) => <p key={i}>{choice}</p>)}
        </div>
    );
}