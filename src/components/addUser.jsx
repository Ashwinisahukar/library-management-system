import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addusers.css';

const AddUser = () => {
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[email,setEmail]=useState("")
    let[phoneNumber,setPhoneNumber]=useState("")
    let navigate=useNavigate()
    let handle=(e)=>{
        e.preventDefault()
        let data={name,age,email,phoneNumber}
        fetch("http://localhost:4000/users",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert(`user added successfully`)
        navigate('/admin/user-list')
    }
    return ( 
        <div className="add-user">
           <form action="" onSubmit={handle}>
            <div className="name">
            <input type="text" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="age">
            <input type="number" min='1' value={age} placeholder="enter age" onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className="email">
            <input type="text" value={email} placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="phno">
            <input type="tel" minLength='10' maxLength='10'  value={phoneNumber} placeholder="enter phoneNumber" onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </div>
            <div className="but_list">
                <button>Sumit</button>
                <button>Reset</button>
            </div>
           </form>
            </div>
     );
}
 
export default AddUser;