import AboutCard from '../components/AboutCard'; // component to render each developer card
import { useState } from 'react';                 // React hook for local state
import huymingImage from '../Images/Huyming.jpg'; // static image imports from src/Images
import KimseanImage from '../Images/Kimsean.jpg';
import KimhongImage from '../Images/Tiangkimhong.jpg';

export default function About() {
    // Controlled inputs for the contact form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Inline style used for the input boxes in the contact form
    const inputBox = {
        padding: "5px",
        width: "90%",
    };

    // Form submit handler: prevents page reload, shows an alert, and clears the inputs
    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert("Message Sent! Thank you for playing our game!");
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    // Data for developer cards: image, display name, and short description
    const developers = [
        {image: huymingImage, name: "Huyming", description: "Member of Trivia Bonanza "},
        {image: KimseanImage, name: "Kimsean", description: "Member of Trivia Bonanza"},
        {image: KimhongImage, name: "TiangKimhong", description: "Member of Trivia Bonanza"},
    ]

    return(
        <>
            <h1 className="title">ABOUT US</h1>

            {/* Main container: left = developer cards, right = contact form */}
            <div className="about-container">

                {/* Left column: developers list */}
                <div className="about-first-half">
                    <h2>Developers of Type or Perish!</h2>
                    <div className="about-card-container">
                        {
                            // Render an AboutCard for each developer object
                            developers.map((developer) => {
                                return <AboutCard image={developer.image} name={developer.name} description={developer.description} />
                            })
                        }
                    </div>
                </div>
            
                {/* Right column: contact / bug report form */}
                <div className="about-second-half">
                    <h2>Contact Us/Bug Report</h2>
                    <div className="contact-us-container">
                        <form onSubmit={handleSubmit} className="form-container">
                            {/* Controlled text inputs with required validation */}
                            <input type="text" className="input-box" style={inputBox} name="name" placeholder="Your name..." value={name} required onChange={(e) => setName(e.target.value)}/>
                            <input type="email" className="input-box" style={inputBox} name="email" placeholder="Your email..." value={email} required onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" className="input-box" style={inputBox} name="subject" placeholder="Subject..." value={subject} required onChange={(e) => setSubject(e.target.value)}/>
                            {/* Controlled textarea */}
                            <textarea name="message" className="input-box" style={{resize: "none", width: "88%"}} placeholder="Message..." value={message} required rows="5" onChange={(e) => setMessage(e.target.value)}></textarea>
                            <button className="submit-button">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}