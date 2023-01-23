import { Link } from "react-router-dom";
import '../styles/adminNavbar.css';
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="main">
              <div className="logo">
           {/* <img height="80px" width="105px" src="/images/icon2.jpg" alt="" /> */}
             <h1>Admin Portal</h1>
              </div>
               <div className="nav_Links">
                <ul>
                    <li> <Link className="nav" to="/admin/">Dashboard</Link></li>
                    <li> <Link className="nav" to="/admin/add-book">AddBooks</Link> </li>
                    <li> <Link  className="nav"  to="/admin/add-user ">AddUsers</Link> </li>
                    <li> <Link className="nav" to="/admin/book-list">BookList</Link> </li>
                    <li> <Link className="nav" to="/admin/user-List">UserList</Link> </li>
                    <li> <Link className="nav" to="/"> Logout</Link></li>
                </ul>
               </div>
            </div>
        </div>
     );
}
export default AdminNavbar;