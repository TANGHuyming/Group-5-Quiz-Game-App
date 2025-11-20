import AboutCard from './AboutCard';
import { useState } from 'react';
import huymingImage from '../Images/Huyming.jpg';
import KimseanImage from '../Images/Kimsean.jpg';
import KimhongImage from '../Images/Tiangkimhong.jpg';

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

    const developers = [
        {image: huymingImage, name: "Huyming", description: "Leader of Triva Bonanza"},
        {image: KimseanImage, name: "Kimsean", description: "Member of Triva Bonanza"},
        {image: KimhongImage, name: "TiangKimhong", description: "Member of Triva Bonanza"},
    ]

    return(
        <div className="about-container" style={aboutContainerStyling}>
            <div className="about-first-half">
                <h2>Developers of Type or Perish!</h2>
                <div className="about-card-container">
                    {
                        developers.map((developer) => {
                            return <AboutCard image={developer.image} name={developer.name} description={developer.description} />
                        })
                    }
                </div>
            </div>
        
            <div className="about-second-half">
                <h2>Contact Us/Bug Report</h2>
                <div className="contact-us-container">
                    <form onSubmit={handleSubmit} className="form-container">
                        <input type="text" className="input-box" style={inputBox} name="name" placeholder="Your name..." value={name} required onChange={(e) => setName(e.target.value)}/>
                        <input type="email" className="input-box" style={inputBox} name="email" placeholder="Your email..." value={email} required onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" className="input-box" style={inputBox} name="subject" placeholder="Subject..." value={subject} required onChange={(e) => setSubject(e.target.value)}/>
                        <textarea name="message" className="input-box" style={{resize: "none"}} placeholder="Message..." value={message} required rows="5" cols="50" onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}