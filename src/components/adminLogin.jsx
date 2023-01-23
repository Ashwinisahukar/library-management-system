import {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../styles/adminlogin.css';

const AdminLogin=()=>{
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()
    let login=(e)=>{
        e.preventDefault();
        let data={email,password}
        if(email=="admin@gmail.com" && password==1234){
             navigate('/admin/')
        }
        else{
            alert(`Invalid credentials`)
        }
    }
    return(
        <div className="adminLogin">
            <h1>Login as Admin</h1>
            <div className="form container card">
                

                <div className="form_inputs">
                    <form  onSubmit={login}>
                        <div className="email">
                        <input type="email" required placeholder="email addres" value={email}  onChange={(e)=>setEmail(e.target.value)} />
                        <br /> <br /> <br /> <br />
                        </div>
                        <div className="password">
                            <input type="password" required placeholder="entre password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <br /> <br /><br />
                        </div>
                        <div className="button">
                        <button>Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;