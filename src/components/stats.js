import { useState, useEffect } from 'react';

export default function Stats() {
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(users)


    return(
        <div>
            <h1>Hello.</h1>
           <ul>
            {users.map((user) => {
                return(
                    <li key={user.id}>{user.name} </li>
                )
            })}
           </ul>
        </div>
    )
}