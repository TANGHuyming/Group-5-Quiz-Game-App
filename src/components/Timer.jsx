import { useGame } from "../Context/GameContext";

export default function Timer() {
    const { timeLeft } = useGame();

    return <h3 className="timer">Time: {timeLeft}s</h3>;
}