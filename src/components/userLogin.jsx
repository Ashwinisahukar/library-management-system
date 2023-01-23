import { useNavigate } from "react-router-dom";
import '../styles/userlogin.css';
const UserLogin = () => {
    let navigate=useNavigate()
    let login=()=>{
        navigate('/user/')
    }
    return ( 
        <div className="userLogin">
            <h1>Login as User</h1>
            <div className="form container card">
                <div className="form_inputs">
                    <form  onSubmit={login}>
                        <div className="email">
                        <input type="email" required placeholder="email addres" />
                        <br /><br /><br /><br />
                        </div>
                        <div className="password">
                            <input type="password" required placeholder="entre password" />
                            <br /><br /><br />
                        </div>
                        <div className="button">
                        <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
export default UserLogin;