import React from 'react';
import { useState } from 'react';
import './Contact.css';
const Contact = () => {
    const [info, setInfo] = useState({});


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);        
        formData.append('subject', info.subject);
        formData.append('email', info.email);
        formData.append('message', info.message);

        fetch('http://localhost:5000/messages', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data){
                    alert('Message sent successfully.');
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Email address" />
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="subject" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} type="text" name="message" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-brand"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;