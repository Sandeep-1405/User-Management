import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [displayData, setDisplayData] = useState([]);

    // Fetch users from the API
    useEffect(() => {
        const fetchUsers = () => {
            axios.get('https://my-json-server.typicode.com/Sandeep-1405/User-Management/users')
                .then(res => {
                    console.log(res.data);
                    setDisplayData(res.data);
                })
                .catch(error => {
                    console.error(error);
                });
        };
        fetchUsers();
    }, []);

    // Function to display when no data is found
    const emptyList = () => (
        <div className="text-center my-4">
            <h3>No Users Found</h3>
        </div>
    );

    // Function to display users in a table
    const displayUser = () => (
        <div className="container mt-4">
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.department}</td>
                                <td className="d-flex">
                                    <button className="btn btn-warning btn-sm me-2">Update</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Users</h1>

            <div className="d-flex justify-content-end mb-4">
                <Link to="/user/create" className="btn btn-primary">
                    Add User
                </Link>
            </div>

            
            {displayData.length > 0 ? displayUser() : emptyList()}
        </div>
    );
};

export default Home;
