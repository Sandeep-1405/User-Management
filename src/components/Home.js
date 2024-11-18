import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [displayData , setDisplayData] = useState([])

    useEffect(()=>{
        const fetchUsers = ()=>{
            axios.get('http://localhost:3000/users')
            .then(res=>{
                console.log(res)
            })
            .catch(error=>{
                console.log(error)
            })
        }
        fetchUsers();
    },[])

    return (
        <div>
            <h1>Users</h1>
        </div>
    );
};

export default Home;