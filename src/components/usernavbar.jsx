import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="userNav">
            <div className="main">
                <div className="logo">
                 <h1>User Portal</h1>
                </div>
                <div className="nav_Links">
                 <ul>
                    <li> <Link className="nav" to="/user/user-Dashboard">Dashboard</Link> </li>
                    <li> <Link className="nav" to="/user/book-list">BookList</Link></li>
                    <li> <Link className="nav" to="/"> Logout</Link></li>
                 </ul>
                </div>
            </div>
        </div>
     );
}
export default UserNavbar;