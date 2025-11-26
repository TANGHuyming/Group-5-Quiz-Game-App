import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="header-subcontainer">
                    <h2 className="website-name">Trivia Bonanza</h2>
                    <nav className="nav-container">
                        <NavLink
                            to="/"
                            style={({isActive}) => (isActive ? {backgroundColor: "#5c4a2aff", color: "white"}: {})}
                        >Home</NavLink>
                        <NavLink
                            to="/scoreboard"
                            style={({isActive}) => (isActive ? {backgroundColor: "#5c4a2aff", color: "white"}: {})}
                        >ScoreBoard</NavLink>
                        <NavLink
                            to="/about-us"
                            style={({isActive}) => (isActive ? {backgroundColor: "#5c4a2aff", color: "white"}: {})}
                        >About Us</NavLink>
                        <NavLink
                            to="/add-question"
                            style={({isActive}) => (isActive ? {backgroundColor: "#5c4a2aff", color: "white"}: {})}
                        >Add More Questions</NavLink>
                    </nav>
                </div>
            </div>
        </>
    );
}