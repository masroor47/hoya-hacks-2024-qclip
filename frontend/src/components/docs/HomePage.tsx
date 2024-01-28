import React from 'react';
import NavBar from './Nav/NavBar';
import './HomePage.css';

const HomePage: React.FC = () => {

    return (
        <div>
            <NavBar />
            <div className="centered-container">
                <h1>Welcome to QClip Documentation Page</h1>
                <h2 className="intro-text">Let's get started</h2>
                <div className="container-row">
                    <div className="container-card">
                        <div className="container-card-title">How to use QClip</div>
                        <div className="container-card-content">QClip operated very similar to how other chatbots work, you are able to have a conversation with it via the prompt box, and qclip will reply to you in the chat box.</div>
                    </div>
                    <div className="container-card">
                        <div className="container-card-title">Why us QClip?</div>
                        <div className="container-card-content">QClip was designed to deliver up-to-date information. As many other services are pretrained on old data, they are sometimes not accurate. In an ever-evolving landscape like education, these details are crucial for students, and keeping up-to-date is our prerogative.</div>
                    </div>
                </div>
                <h2 className="intro-text">Capabilities</h2>
                    <div className='full-card'>
                        <div className='container-card-content'>Some of the capavilities are as follows</div>
                        <p>You are able to ask for Bursar related question such as:</p>
                        <ul>
                            <li>Question about tuition fees</li>
                            <li>Payment deadlines and procedures</li>
                            <li>Information about scholarships and financial aid</li>
                        </ul>
                        <div className='container-card-content'>
                        <p>You are also able to ask about admissions related question such as:</p>
                        <ul>
                            <li>Application deadlines and procedures</li>
                            <li>Admission requirements for undergraduate and graduate programs</li>
                            <li>Information on tuition fees and payment options</li>
                            <li>Details about campus tours and visitation opportunities</li>
                            <li>Guidance on choosing a program or major</li>
                            <li>Process for international student applications</li>
                            <li>Information about scholarships and financial aid</li>
                        </ul>
                        </div>
                    </div>
                    <div className='container-row-two'>
                            <div className='container-info container-info-special'>
                                <div className='container-card-title'>Questions</div>
                                <div>We are happy to receive any feedback, the email is questions@qclip.com</div>
                            </div>
                            <div className='container-info container-info-special'>
                                <div className='container-card-title'>MLH</div>
                                <div>Thank you guys so much for this opportunity, we had alot of fun and hope to compete in future hackathons!</div>
                            </div>
                            <div className='container-info container-info-special'>
                                <div className='container-card-title'>About Us</div>
                                <div>We are just a group of students that want to help out upcoming freshmens making a decision as we know how difficult and intimidating it could feel to apply for higher education</div>
                            </div>
                    </div>
            </div>
        </div>
    );
};

export default HomePage;
