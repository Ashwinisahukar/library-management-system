import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import UserDashboard from "./userDashboard";
import UserNavbar from "./usernavbar";
import ReadBook from "./readBook";

const UserPortal = () => {

    return ( 
        <div className="userPortal">
             <UserNavbar/>
            <Routes>
                <Route path="/user-Dashboard" element={<UserDashboard/>} />
                <Route path="/book-list" element={<BookList/>} />
                <Route path="/book-list/:id" element={<ReadBook/>} />
                
            </Routes>
        

        </div>
     );
}
 
export default UserPortal;