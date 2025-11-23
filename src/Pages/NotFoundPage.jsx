import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return(
        <div className="notfound-container" style={{marginTop: "20px"}}>
            <h1 className="title">404 NOT FOUND!</h1>
            <p>It Looks Like You Tried to go to a Page That Doesn't Exist</p>
            <button className="submit-button" onClick={handleClick}>Return Home</button>
        </div>
    );
}