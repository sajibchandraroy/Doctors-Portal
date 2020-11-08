import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
            fetch('http://localhost:5000/appointmentsByName', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ 
                    // date: selectedDate, 
                    email: loggedInUser.email,
                    name: loggedInUser.name
                })
            })
                .then(res => res.json())
                .then(data => setAppointments(data))
        }, [selectedDate])




    // const handleDateChange = date => {
    //     setSelectedDate(date);
    // }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentsByDate', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                {/* <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div> */}
                {/* <div className="col-md-5 col-sm-12 col-12">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>  */}


<table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Doctor Name</th>
                <th className="text-secondary" scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.doctorName}</td>
                        <td>{appointment.date}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
               
            </div>
        </section>
    );
};

export default Dashboard;