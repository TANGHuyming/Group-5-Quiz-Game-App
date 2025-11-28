import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Home page component: collects username, difficulty and modifier then navigates to game
export default function Home() {
    // Local state for the form inputs and UI colors
    const [username, setUsername] = useState("");          // controlled text input for player's name
    const [difficulty, setDifficulty] = useState("");      // selected difficulty ("easy"/"medium"/"hard")
    const [modifier, setModifier] = useState("");          // selected modifier ("nomod"/"hidden"/"sonicSpeed"/"perfect")
    const navigate = useNavigate();                        // hook to programmatically change routes

    // Color maps for radio option circles and selected text
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

    // change difficultyText only when difficulty updates (Memoize for performance)
    const difficultyText = useMemo(() => {
        // Update displayed color for chosen difficulty
        switch(difficulty) {
            case "easy":
                return difficultyColors.easy;
            case "medium":
                return difficultyColors.medium;
            case "hard":
                return difficultyColors.hard;
            default:
                break;
        }
    }, [difficulty, difficultyColors.easy, difficultyColors.medium, difficultyColors.hard]);
    
    // change modifierText only when modifier updates
    const modifierText = useMemo(() => {
        // Update displayed color for chosen modifier
        switch(modifier) {
            case "nomod": 
                return modifierColors.nomod;
            case "hidden":
                return modifierColors.hidden;
            case "sonicSpeed":
                return modifierColors.sonicSpeed;
            case "perfect":
                return modifierColors.perfect;
            default:
                break;
        }
    }, [modifier, modifierColors.nomod, modifierColors.hidden, modifierColors.sonicSpeed, modifierColors.perfect]);    // color string for modifier display

    // Form submit handler: prevent default, read form values and navigate to /game with state
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const dataObject = Object.fromEntries(formData);
        // Navigate to the game route and pass the collected settings via location state.
        // If radio values weren't picked for some reason, fallback to component state values.
        // console.log(dataObject);
        navigate("/game", {state: {username: dataObject.username, difficulty: dataObject.difficulty || difficulty, modifier: dataObject.modifier || modifier}});
    }

    return (
        <>
            <h1 className="title">TYPE OR PERISH!</h1>
            <div className="home-container">
                <div className="description-container">
                    <p>Type Or Perish is an exciting trivia game where you have to answer trivia questions by typing as quickly and accurately as possible. You have 5 lives, and the game gets harder as you progress. Good luck!</p>
                    <h4>Difficulty: </h4>
                    <ol style={{textAlign: "left"}}>
                        <li>Easy: easy questions</li>
                        <li>Medium: medium questions</li>
                        <li>Hard: hard questions</li>
                    </ol>
                    <h4>Modifier: </h4>
                    <ol style={{textAlign: "left"}}>
                        <li>No Mod: No modifier is used for the game</li>
                        <li>Hidden: Question will disappear after a few seconds (Difficulty changes the number of seconds to display the questions)</li>
                        <li>Sonic Speed: Timer is reduced</li>
                        <li>Perfect: You must type perfectly or type without making any mistakes (Capitalization won't trigger this mod)</li>
                    </ol>
                </div>

                {/* Form: name input + difficulty radios + modifier radios + submit */}
                <form onSubmit={handleSubmit} className="form-container">
                    {/* Name input (controlled) */}
                    <input type="text" required placeholder="Enter your name: " className="input-box" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            
                    {/* Difficulty selection */}
                    <div className="radio-container">
                        <h2>Choose Your Difficulty *: </h2>
                        <div className="radio-subcontainer">
                            <div>
                                {/* label contains colored circle; input is the actual radio */}
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
                        {/* Display chosen difficulty with color */}
                        <h2>You Chose:
                            <span style={{color: difficultyText}}> {difficulty}</span>
                        </h2>
                    </div>

                    {/* Modifier selection */}
                    <div className="radio-container">
                        <h2>Choose Your Modifier *: </h2>
                        <div className="radio-subcontainer">
                            <div>
                                <label htmlFor="nomod"><div className="solid-circle" style={{backgroundColor: modifierColors.nomod}}></div> No Mod</label>
                                <input type="radio" required id="nomod" name="modifier" value="nomod" onClick={()=>setModifier("nomod")}/>
                            </div>
                            <div>
                                <label htmlFor="hidden"><div className="solid-circle" style={{backgroundColor: modifierColors.hidden}}></div> Hidden</label>
                                <input type="radio" required id="hidden" name="modifier" value="hidden" onClick={()=>setModifier("hidden")}/>
                            </div>
                            <div>
                                <label htmlFor="sonicSpeed"><div className="solid-circle" style={{backgroundColor: modifierColors.sonicSpeed}}></div> Sonic Speed</label>
                                <input type="radio" required id="sonicSpeed" name="modifier" value="sonicSpeed" onClick={()=>setModifier("sonicSpeed")}/>
                            </div>
                            <div>
                                <label htmlFor="perfect"><div className="solid-circle" style={{backgroundColor: modifierColors.perfect}}></div> Perfect</label>
                                <input type="radio" required id="perfect" name="modifier" value="perfect" onClick={()=>setModifier("perfect")}/>
                            </div>
                        </div>
                        {/* Display chosen modifier with color */}
                        <h2>You Chose:
                            <span style={{color: modifierText}}> {modifier}</span>
                        </h2>
                    </div>

                    {/* Submit button */}
                    <button className="submit-button">START GAME!</button>
                </form>
            </div>
        </>
    )
}
