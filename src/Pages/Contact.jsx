import React, { useState, useRef, useEffect } from "react";
import './Contact.css';
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapPin, FaPhoneAlt } from "react-icons/fa";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const form = useRef();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
            'service_ottgrzu',
            'template_pywszyl',
            form.current,
            'CKvdnlg3iLG9h7OBN'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    setMessageSent(true);
                },
                (error) => {
                    console.log(error.text);
                })
    }

    useEffect(() => {
        if (messageSent) {
            setShowNotification(true)

            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 4000);

            return () => {
                clearTimeout(timer);
                setMessageSent(false)
            }
        }
    }, [messageSent]);

    return (
        <div className="main">
            <h2 className="contactHead">Contact</h2>
            <div className="contact">
                <h3>Get in touch with me!</h3>
                <div className="contactInfo">
                    <div className="phone">
                        <FaPhoneAlt className="phoneIcon" />
                        <p>(214) 762-5667</p>
                    </div>
                    <div className="location">
                        <FaMapPin className="locationIcon" />
                        <p>Dallas, Tx</p>
                    </div>
                    <div className="email">
                        <FaEnvelope className="emailIcon" />
                        <p>midnightbakerytx@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="orderSection">
                <h4>Order Below!</h4>
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <div>
                        <div>
                            <input type="text" className="input" placeholder="Your Name" name='name' value={name} onChange={handleNameChange} required />
                        </div>
                        <div>
                            <input type="text" className="input" placeholder="Your Email" name='email' value={email} onChange={handleEmailChange} required />
                        </div>
                        <div>
                            <input type="text" className="input" placeholder="Subject" name='subject' value={subject} onChange={handleSubjectChange} required />
                        </div>
                        <div>
                            <textarea className="message" name='message' placeholder="Your Message" value={message} onChange={handleMessageChange} required />
                        </div>
                    </div>

                </form>
                <button className="submit" onClick={sendEmail}>Send Message</button>
                {showNotification && <div className="notification">Message Sent! Thank you for your message.</div>}
            </div>
        </div>
    )

}

export default Contact;