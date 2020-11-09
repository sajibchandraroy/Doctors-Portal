import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const PatientByDoctor = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/patientByDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                email: loggedInUser.email
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPatients(data)
            })
    }, [])
    return (
        <div>
             <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">              


                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">Sl No</th>
                            <th className="text-secondary" scope="col">Name</th>                            
                            <th className="text-secondary" scope="col">Email</th>
                            <th className="text-secondary" scope="col">Doctor Name</th>
                            <th className="text-secondary" scope="col">Time</th>
                            <th className="text-secondary" scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map((patients, index) =>

                                <tr>
                                    <td>{index+1}</td>
                                    <td>{patients.name}</td>                                    
                                    <td>{patients.email}</td>
                                    <td>{patients.doctorName}</td>
                                    <td>{patients.time}</td>
                                    <td>{patients.date}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                {/* <AppointmentsByDate appointments={appointments}></AppointmentsByDate> */}
                </div> 

            </div>
        </section>
        </div>
    );
};

export default PatientByDoctor;