import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(info);
    }

    const handleChange = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()

        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('cell', info.cell);
        formData.append('subject', info.subject);
        formData.append('time', info.time);


        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mobile No</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="cell" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name of Service</label>
                        <select onChange={handleChange} type="text" class="form-control" id="exampleFormControlSelect1" name="subject">
                            <option selected>Choose...</option>
                            <option>Teeth Orthodontics</option>
                            <option>Cosmetic Dentistry</option>
                            <option>Teeth Cleaning</option>
                            <option>Cavity Protection</option>                           
                        </select>
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Visiting Hours</label><br></br>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" onChange={handleChange} type="radio" name="time" id="inlineRadio1" value='8 am to 12 pm'  />
                        <label className="form-check-label" >8 am to 12 pm</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" onChange={handleChange} type="radio" name="time" id="inlineRadio2" value='2 pm to 4 pm'  />
                        <label className="form-check-label" >2 pm to 4 pm</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" onChange={handleChange} type="radio" name="time" id="inlineRadio3" value='8 pm to 10 pm' />
                        <label className="form-check-label" >8 pm to 10 pm</label>
                    </div>
                    </div>         


                   
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;