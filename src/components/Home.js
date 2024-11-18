import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [displayData , setDisplayData] = useState([])

    useEffect(()=>{
        const fetchUsers = ()=>{
            axios.get('https://my-json-server.typicode.com/Sandeep-1405/User-Management/users')
            .then(res=>{
                console.log(res.data)
                setDisplayData(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
        }
        fetchUsers();
    },[])

    const emptyList =()=>{
        return(
            <div><h3>No User Found</h3></div>
        )
    }

    const displayUser = () =>{
        return(
            <div>
                {displayData.map(user=>(
                    <div key={user.id}>
                        <h3>{user.firstName}</h3>
                        <h3>{user.lastName}</h3>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <h1>Users</h1>
            {
                displayData ? displayUser() : emptyList()
            }
        </div>
    );
};

export default Home;