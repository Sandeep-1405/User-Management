import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');

    const id = useParams().id;
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchUserDetailsById = ()=>{
            
            axios.get('https://my-json-server.typicode.com/Sandeep-1405/User-Management/users/'+id)
            .then(res=>{
                console.log(res)
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmail(res.data.email)
                setDepartment(res.data.department)
            })
            .catch(error=>{
                console.log(error)
                alert(error.message)
            })
            
        }
        fetchUserDetailsById();
    },[])

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://my-json-server.typicode.com/Sandeep-1405/User-Management/users',{firstName,lastName,email,department})
        .then(res=>{
            console.log(res)
            navigate('/')
        })
        .catch(error=>{
            console.log(error)
            alert(error.message)
        })

    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <h3 className="text-center mb-4">UpdateUser</h3>
                
                
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>

                
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>

                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                
                <div className="mb-4">
                    <label htmlFor="department" className="form-label">Department</label>
                    <input
                        type="text"
                        className="form-control"
                        id="department"
                        placeholder="Enter department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    />
                </div>

                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary w-25 me-3">
                        Update User
                    </button>
                    <button className="btn btn-secondary w-25" onClick={()=>navigate('/')}>
                        Back
                    </button>
                </div>
                
            </form>
        </div>
    );
};

export default UpdateUser;
