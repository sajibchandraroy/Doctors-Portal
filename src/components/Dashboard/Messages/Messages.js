import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/messages')
            .then(res => res.json())
            .then(data => setMessages(data))
    }, [])
    return (

        <div className="container-fluid row" >
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Messages</h5>
            {/* <AppointmentDataTable appointments={appointments} /> */}

            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Subject</th>
                <th className="text-secondary" scope="col">Message</th>
                {/* <th className="text-secondary" scope="col">Weight</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th> */}
                </tr>
            </thead>
            <tbody>
                {
                  messages.map((message, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{message.email}</td>
                        <td>{message.subject}</td>
                        <td>{message.message}</td>
                        {/* <td>{message.weight}KG</td>
                        <td>{message.phone}</td>
                        <td>{message.email}</td> */}
                    </tr>
                    )
                }
            </tbody>
        </table>




        </div>
    </div>





        
    );
};

export default Messages;