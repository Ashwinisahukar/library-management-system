import '../styles/userDashboard.css';
const UserDashboard = () => {
    return ( 
        <div className="userdashboard">
        <div className="userdashboard_text">
            <h1 style={{ fontSize: "85px", margin: '0px' }}>Heritage with Hoopla</h1>
            <p style={{ fontSize: "22px" }}>On Wednesday, January 18 at 2:00 pm, join us as we wander through Hoopla's "Discovering Your Roots: An Introduction to Genealogy" using The Great Courses series.</p>
            <div className="userdashboard_button">
                <button>Mark Your Calendar </button>
            </div>
        </div>

        <div className="userdashboard_text1">
            <h1 style={{ fontSize: "85px", margin: '0px' }}>Learning Lab</h1>
            <p style={{ fontSize: "22px" }}>The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff and patrons can empower themselves with a practical understanding of current technology.</p>
        </div>

        <div className="userdashboard_img">
       <div className="userdashboard_text2">
            <p>LEARN</p>
            <h1 style={{ fontSize: "85px", margin: '0px' }}>LinkedIn Learning</h1>
            <p style={{ fontSize: "22px" }}>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video tutorials where you can discover, complete, and track courses related to your industry or interests.</p>
            <div className="userdashboard_button1">
                <button>Get Started </button>
            </div>
        </div>
       </div>
       <div className="down-para">
            <h1 style={{ fontSize: "38px", margin: '0px' }}>Learn Something New or Get Tech Help</h1>
            <p style={{ fontSize: "18px" }}>Register on the online calendar. For more information call (203) 622-7920.</p>
            <div className="userdashboard_button3">
                <button>View Calendar </button>
            </div>
        </div>
    </div>
     );
}
export default UserDashboard;