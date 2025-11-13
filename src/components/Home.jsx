import { useState, useEffect } from "react";

export default function Home() {
    const [username, setUsername] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [difficultyText, setDifficultyText] = useState("#33FF00");
    const [modifier, setModifier] = useState("modifier");
    const [modifierText, setModifierText] = useState("#33FF00");

    // color maps for options
    const difficultyColors = {
        easy: "#33FF00",
        medium: "#FF8000",
        hard: "#FF0000",
    };

    const modifierColors = {
        nomod: "#1eff00ff",
        hidden: "#DD00FF",
        sonicSpeed: "#00FFF2",
        perfect: "#FF0051",
    };

    useEffect(() => {
        switch(difficulty) {
            case "easy":
                setDifficultyText(difficultyColors.easy);
                break;
            case "medium":
                setDifficultyText(difficultyColors.medium);
                break;
            case "hard":
                setDifficultyText(difficultyColors.hard);
                break;
            default:
                break;
        }

        switch(modifier) {
            case "nomod": 
                setModifierText(modifierColors.nomod);
                break;
            case "hidden":
                setModifierText(modifierColors.hidden);
                break;
            case "sonicSpeed":
                setModifierText(modifierColors.sonicSpeed);
                break;
            case "perfect":
                setModifierText(modifierColors.perfect);
                break;
            default:
                break;
        }
    }, [difficulty, modifier])

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const dataObject = Object.entries(formData);
        setUsername("");
    }

    return (
        <div className="home-container">
            <h1 className="title">Type Or Perish!</h1>
            
            <div className="description-container">
                <p>Type Or Perish is an exciting trivia game where you have to answer trivia questions by typing as quickly and accurately as possible. You have 5 lives, and the game gets harder as you progress. Good luck!</p>
            </div>

            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" required placeholder="Enter your name: " className="input-box" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                
                <div className="radio-container">
                    <h2>Choose Your Difficulty: </h2>

                    <div className="radio-subcontainer">
                        <div>
                            <label htmlFor="easy"><div className="solid-circle" style={{backgroundColor: difficultyColors.easy}}></div> Easy</label>
                            <input type="radio" required id="easy" name="difficulty" value="easy" onClick={()=>setDifficulty("easy")}/>
                        </div>

                        <div>
                            <label htmlFor="medium"><div className="solid-circle" style={{backgroundColor: difficultyColors.medium}}></div> Medium</label>
                            <input type="radio" required id="medium" name="difficulty" value="medium" onClick={()=>setDifficulty("medium")}/>
                        </div>

                        <div>
                            <label htmlFor="hard"><div className="solid-circle" style={{backgroundColor: difficultyColors.hard}}></div> Hard</label>
                            <input type="radio" required id="hard" name="difficulty" value="hard" onClick={()=>setDifficulty("hard")}/>
                        </div>

                    </div>
                    <h2>You Chose:
                        <span style={{color: difficultyText}}> {difficulty}</span>
                    </h2>
                </div>

                <div className="radio-container">
                    <h2>Choose Your Modifier: </h2>

                    <div className="radio-subcontainer">
                        <div>
                            <label htmlFor="nomod"><div className="solid-circle" style={{backgroundColor: "#1eff00ff"}}></div> No Mod</label>
                            <input type="radio" id="nomod" name="modifier" value="nomod" onClick={()=>setModifier("nomod")}/>
                        </div>

                        <div>
                            <label htmlFor="hidden"><div className="solid-circle" style={{backgroundColor: "#DD00FF"}}></div> Hidden</label>
                            <input type="radio" id="hidden" name="modifier" value="hidden" onClick={()=>setModifier("hidden")}/>
                        </div>

                        <div>
                            <label htmlFor="sonicSpeed"><div className="solid-circle" style={{backgroundColor: "#00FFF2"}}></div> Sonic Speed</label>
                            <input type="radio" id="sonicSpeed" name="modifier" value="sonicSpeed" onClick={()=>setModifier("sonicSpeed")}/>
                        </div>

                        <div>
                            <label htmlFor="perfect"><div className="solid-circle" style={{backgroundColor: "#FF0051"}}></div> Perfect</label>
                            <input type="radio" id="perfect" name="modifier" value="perfect" onClick={()=>setModifier("perfect")}/>
                        </div>
                    </div>
                    <h2>You Chose: 
                        <span style={{color: modifierText}}> {modifier}</span>
                    </h2>
                </div>

                <button className="submit-button">Start Game!</button>
            </form>
        </div>
    )
}