import AboutCard from './AboutCard';
import { useState } from 'react';

export default function About() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const inputBox = {
        padding: "2px",
        width: "90%",
    };

    const aboutContainerStyling = {
        flexDirection: "row",
        justifyContent: "space-between"
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return(
        <div className="about-container" style={aboutContainerStyling}>
            <div className="about-first-half">
                <h2>Developers of Type or Perish!</h2>
                <div className="about-card-container">
                    <AboutCard image="./" name="Tang Huyming" description="Team Leader" />
                    <AboutCard image="./" name="Kimsean" description="Team Member"/>
                    <AboutCard image="./" name="Tiangkimhong Hoeu" description="Team Member" />
                </div>
            </div>
        
            <div className="about-second-half">
                <h2>Contact Us/Bug Report</h2>
                <div className="contact-us-container">
                    <form onSubmit={handleSubmit} className="form-container">
                        <input type="text" className="input-box" style={inputBox} name="name" placeholder="Your name..." value={name} required onClick={(e) => setName(e.target.value)}/>
                        <input type="email" className="input-box" style={inputBox} name="email" placeholder="Your email..." value={email} required onClick={(e) => setEmail(e.target.value)}/>
                        <input type="text" className="input-box" style={inputBox} name="subject" placeholder="Subject..." value={subject} required onClick={(e) => setSubject(e.target.value)}/>
                        <textarea name="message" className="input-box" placeholder="Message..." value={message} required rows="5" cols="50" onClick={(e) => setMessage(e.target.value)}></textarea>
                        <button className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}