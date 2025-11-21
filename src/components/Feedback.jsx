import { useGame } from "../Context/GameContext";

export default function Feedback() {
    const { feedback, inFeedback } = useGame();
    if (!inFeedback) return null;

    return <div className="feedback">{feedback}</div>;
}