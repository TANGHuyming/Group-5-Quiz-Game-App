import { useState, useEffect } from "react";

export default function Leaderboard() {
  // Old sample data
  // ? Maybe get from this data API or codebase?
  /* const [leaderboardData] = useState([
    { rank: 1, name: "José Ramírez", score: 283 },
    { rank: 2, name: "Steven Kwan", score: 272 },
    { rank: 3, name: "Kyle Manzardo", score: 234 },
    { rank: 4, name: "Brayan Rocchio", score: 233 },
    { rank: 5, name: "Ángel Martínez", score: 224 },
    { rank: 6, name: "George Valera", score: 220 },
    { rank: 7, name: "Gabriel Arias", score: 220 },
    { rank: 8, name: "C. J. Kayfus", score: 220 },
    { rank: 9, name: "Daniel Schneemann", score: 206 },
    { rank: 10, name: "Johnathan Rodríguez", score: 197 },
    { rank: 11, name: "Bo Naylor", score: 195 },
    { rank: 12, name: "Jhonkensy Noel", score: 162 },
  ]); */

  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from localStorage
    const storedData = localStorage.getItem("defaultLeaderboard");

    if (storedData) {
    }
  }, []);

  return (
    <div className="leaderboard-container">
      <h1 className="title">LEADERBOARD</h1>

      <div className="leaderboard-table">
        {/* Table header - stays fixed at the top */}
        <div className="leaderboard-header">
          <div className="leaderboard-cell">Rank</div>
          <div className="leaderboard-cell">Name</div>
          <div className="leaderboard-cell">Score</div>
        </div>

        {/* Table body - scrollable */}
        {/* Container to hold all the data rows */}
        <div className="leaderboard-body">
          {leaderboardData.map((player) => (
            <div key={player.rank} className="leaderboard-row">
              {/* For each player, we create a leaderboard-row with 3 cells showing rank, name, and score */}
              <div className="leaderboard-cell">{player.rank}</div>
              <div className="leaderboard-cell">{player.name}</div>
              <div className="leaderboard-cell">{player.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
