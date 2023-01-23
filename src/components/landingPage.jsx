import '../styles/landingPage.css';
import{Link} from "react-router-dom";
const LandingPage=()=>{
    return(
        <div className="landingpage">
            
            <div className="selectLoginType">
                <h1>Library Management System</h1>
                <div className="main">
                   <div className="icon">
                    <img height="80px" width="100px" src="images/icon1.jpg" alt="" />
                    <br /> <br />
                    <button ><Link to='/admin-login' className="admin">Admin Login</Link></button>
                 </div>
                   <div className="icon1">
                    <img height="80px" width="100px" src="images/icon2.jpg" alt="" />
                    <br /> <br />
                    <button> <Link to='/user-login' className="admin">User Login</Link></button>
                   </div>
               </div>
            </div>
        </div>
      
    )
}
export default LandingPage;