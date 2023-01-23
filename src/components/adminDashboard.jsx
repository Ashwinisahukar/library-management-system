import  '../styles/adminDashboard.css';
const AdminDashboard = () => {
    return ( 
      <div className="admindashboard">
      <div className="dashboard_img">
      <div className="dashboard_text">
          <h1 style={{fontSize: "42px"}}>At the Library this January…</h1>
          <h5 style={{fontSize: "20px"}}>By Erika Berlin on December 29, 2022</h5>
          <p style={{fontSize: "20px"}} >Greenwich Library has a full schedule of (free!) enrichment events throughout January. Speak with a librarian or check the online…</p>
          <a style={{fontSize: "20px"}} href="">Take a Look </a>
      </div>
  </div>
  <div className="dashboard_img">
      <div className="dashboard_text">
          <h1 style={{fontSize: "41px"}}>Goodbye Fines, Hello Library!</h1>
          <h5 style={{fontSize: "20px"}}>By Erika Berlin on September 12, 2022</h5>
          <p style={{fontSize: "20px"}} >Greenwich Library Announces New Fine-Free Policy, Will No Longer Charge Overdue Fines for Late Materials   Goodbye Fines, Hello Library!…</p>
          <a style={{fontSize: "20px"}} href="">Take a Look </a>
      </div>
  </div>
  <div className="dashboard_img">
      <div className="dashboard_text1">
          <h1 style={{fontSize: "41px",margin:'28px 0px 0px 0px'}}>Musicians from Marlboro To </h1> <h1 style={{fontSize: "41px" ,margin:'0px'}}>Kick Off Fall Concert Series</h1>
          <h5 style={{fontSize: "20px"}}>By Erika Berlin on September 12, 2022</h5>
          <p style={{fontSize: "20px"}} >Greenwich Library Announces New Fine-Free Policy, Will No Longer Charge Overdue Fines for Late Materials   Goodbye Fines, Hello Library!…</p>
          <a style={{fontSize: "20px"}} href="">Take a Look </a>
      </div>
  </div>
  </div>
     );
}
export default AdminDashboard;