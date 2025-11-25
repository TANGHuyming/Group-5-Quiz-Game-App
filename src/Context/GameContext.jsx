import { createContext, useContext, useState, useEffect, useCallback, useRef} from "react";
import { questions as allQuestions } from "../Data/Questions";
import { useNavigate } from "react-router-dom";

const GameContext = createContext();
export const useGame = () => useContext(GameContext);

export function GameProvider({ children, settings }) {
    const navigate = useNavigate();

    // Extract settings passed from HomePage
    const { username, difficulty, modifier, leaderboardKey } = settings;

    // Game States
    const [gameQuestions, setGameQuestions] = useState([]); // Array of 10 random questions
    const [index, setIndex] = useState(0);                  // Current question index
    const [input, setInput] = useState("");                 // User input typing
    const [score, setScore] = useState(0);                  // Score increase my remaining time
    const [feedback, setFeedback] = useState("");           // Result feedback "Correct" or "Wrong"
    const [inFeedback, setInFeedback] = useState(false);    // Boolean to prevent double submission
    const [showPrompt, setShowPrompt] = useState(true);     // Boolean for hidden mode
    const [timeLeft, setTimeLeft] = useState(10);           // Time per question
    const [startTime, setStartTime] = useState(Date.now()); // For total time spent
    const [isLoading, setIsLoading] = useState(true);

    const hasTriggeredRef = useRef(false);
    
    // Custom gameQuestions (Author: TANG Huyming)
    const extractCustomQuestions = () => {
        const customQuestionsString = localStorage.getItem("customQuestions");
        // console.log(customQuestionsString);
        if(!customQuestionsString || customQuestionsString.length === 0) {
            return [];
        }
        const parsed = JSON.parse(customQuestionsString);
        if(Array.isArray(parsed) && parsed !== undefined) {
            return parsed;
        }
        return [];
    }
    const [customQuestions] = useState(extractCustomQuestions);

    // Duration before hiding prompt (for hidden mode)
    const revealTimes = { easy: 6, medium: 4, hard: 2 };    
    const revealTime = revealTimes[difficulty];

    // Start Game: 
    // Pick 10 random question based on the difficulty
    const startGame = useCallback(async () => {
        setIsLoading(true);
        const combinedQuestions = [...allQuestions, ...customQuestions];
        // console.log(combinedQuestions);
        const filtered = combinedQuestions.filter(q => q.difficulty === difficulty);
        const shuffled = filtered.sort(() => Math.random() - 0.5);
        const selectedTen = shuffled.slice(0, 10);

        // Reset game states
        setGameQuestions(selectedTen);
        setIsLoading(false);
        setIndex(0);
        setScore(0);
        setInput("");
        setStartTime(Date.now());
    }, [customQuestions, difficulty]);

    // Ending the game and store result in localStorage
    const endGame = useCallback(() => {
        const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);
        const key = leaderboardKey || "defaultLeaderboard";

        // Get previous scores
        const existing = JSON.parse(localStorage.getItem(key)) || [];
        
        // Add the new entry in 
        const newEntry = { username, difficulty, modifier, score, timeTaken };
        localStorage.setItem(key, JSON.stringify([...existing, newEntry]));

        // Go to leaderboard
        navigate("/scoreboard", {
            replace: true,
            state: { username, difficulty, modifier, score, timeTaken, leaderboardKey: key }
        });
    }, [difficulty, leaderboardKey, modifier, navigate, score, startTime, username]);

    // Process answer result
    const handleResult = useCallback((correct) => {
        // Prevent double triggering
        if (inFeedback) return;

        setInFeedback(true);
        setFeedback(correct ? "✔ Correct!" : "✘ Wrong!");
        
        // Update score based on remaining time
        if (correct) {
            const base = timeLeft;
            const bonus = modifier === "sonicSpeed" ? base * 2: base;
            setScore(prev => prev + bonus);
        }

        // Move to next question or Endgame
        setTimeout(() => {
            setInFeedback(false);
            if (index < gameQuestions.length - 1) {
                setIndex(prev => prev + 1);
            } else {
                endGame();
            }
        }, 1000);
    // eslint-disable-next-line
    }, [endGame, gameQuestions.length, inFeedback, index, modifier]);

    // Handle typing and update input state
    const handleTyping = (val) => {
        setInput(val);

        const question = gameQuestions[index];
        if (!question) return;

        // console.log('Current index:', index);
        // console.log('Question prompt:', question.prompt);
        // console.log('Question answers:', question.answers);
        // console.log('User input:', val);

        // In perfect mode, any wrong letter, instantly fail
        if (modifier === "perfect" && val.length > 0) {
            // console.log('Input:', val, 'Answers:', question.answers);
            const allowed = question.answers.some(ans =>
                ans.toLowerCase().startsWith(val.toLowerCase())
            );
            // console.log('Input:', val, 'Answers:', question.answers, 'Allowed:', allowed);
            if (!allowed) handleResult(false);
        }
    };

    // Timer logic (default 10s, and 5s for sonicSpeed mode)
    useEffect(() => {
        if (!gameQuestions.length || isLoading) return;

        const baseTime = modifier === "sonicSpeed" ? 5 : 10;
        setTimeLeft(baseTime);
        hasTriggeredRef.current = false;

        const interval = setInterval(() => {
            console.log("a");
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    
                    if (!hasTriggeredRef.current) {
                        hasTriggeredRef.current = true;
                        setInFeedback(currentFeedback => {
                            if (!currentFeedback) {
                                setTimeout(() => handleResult(false), 0);
                            }
                            return currentFeedback;
                        });
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [index, gameQuestions, isLoading, handleResult, modifier]);

    // Hidden mode: After x seconds, hide the question (prompt)
    useEffect(() => {
        // Reset the prompt to visible
        setShowPrompt(true);
    
        // Only apply hidden mode reveal delay
        if (modifier === "hidden") {
            const timer = setTimeout(() => {
                setShowPrompt(false);
            }, revealTime * 1000);
    
            return () => clearTimeout(timer);
        }
    }, [index, modifier, revealTime]);
    

    // Reset input & showPrompt on new question
    useEffect(() => {
        setInput("");
        setShowPrompt(true);
    }, [index]);

    // Provide all game values and functions to components
    return (
        <GameContext.Provider value={{
            gameQuestions,
            index,
            input,
            feedback,
            inFeedback,
            isLoading,
            showPrompt,
            timeLeft,
            score,
            startGame,
            handleTyping,
            handleResult,
            setInput
        }}>
            {children}
        </GameContext.Provider>
    );
}