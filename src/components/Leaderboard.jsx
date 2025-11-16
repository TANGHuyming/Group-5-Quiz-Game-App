import { useState } from "react";

export default function Leaderboard() {
  // For now this is just sample data
  // ? Maybe get from this data API or codebase?
  const [leaderboardData] = useState([
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
  ]);

  return (
    <div className="leaderboard-container">
      <h1 className="title">LEADERBOARD</h1>
    </div>
  );
}
