import { useEffect, useState } from "react";
import './table.css'
import { apiDomain } from "../../utils/utilsDomain";

const AllUsers = () => {
    const [users, setUsers] = useState([]); 
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${apiDomain}/users`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                console.log(data);
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }
    , []);
    return(
        <>
            <h1 style={{textAlign:'center'}}>All Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    )
};

export default AllUsers;