import { useEffect, useState } from "react";
import '../styles/userList.css';

const UserList = () => {
    let[list,userList]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("http://localhost:4000/users")
            let data=await response.json()
            userList(data)
        }
        fetchData()
    },[])
    let handleRemove=(id,name)=>{
        userList(list.filter(x=>x.id!=id))
        alert(`${name} has been removed`)
    }
    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="user_section">
                {list.map(data=>(
                    <div className="user_List">
                        <h2>userName: {data.name}</h2>
                        <h3>userAge: {data.age}</h3>
                        <h4>userEmail: {data.email}</h4>
                        <h4>UserPhoneNo: {data.phoneNumber}</h4>
                        <button onClick={()=>handleRemove(data.id,data.name)}>remove</button>

                    </div>
                ))}
            </div>
        </div>
     );
}
export default UserList;