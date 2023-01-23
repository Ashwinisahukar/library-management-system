import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import UserList from "./usersList";
import ReadBook from "./readBook";
import AddUser from "./addUser";
import AddBook from "./addbook";
const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
          <AdminNavbar/>
          <Routes>
            <Route path="/" element={<AdminDashboard/>}/>
            <Route path="/book-list" element={<BookList/>} />
            <Route path="/user-List" element={<UserList/>} />
            <Route path="/book-list/:id" element={<ReadBook/>} />
             <Route path="/add-user" element={<AddUser/>} />
             <Route path="/add-book" element={<AddBook/>} />
          </Routes>
        </div>
     );
}
export default AdminPortal;