import { Link, useNavigate } from "react-router-dom";
function SideNav()
{
    const navigate=useNavigate();
    const handleLogOut=()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
    }
    return(
        <div style={{width:"250px",minWidth:"250px",backgroundColor:" rgb(63, 189, 189)",minHeight:"80vh",padding:"20px",alignItems:"center"}}>
            <Link to="/dashboard" style={{color:"black" ,display:"block",marginBottom:"15px",textDecoration:"none"}}>
                DashBoard
            </Link>
             <Link to="/dashboard/books" style={{color:"black" ,display:"block",marginBottom:"15px",textDecoration:"none"}}>
                Books
            </Link>
             <Link to="/dashboard/books/addbook" style={{color:"black" ,display:"block",marginBottom:"15px",textDecoration:"none"}}>
               Add Books
            </Link>
             <Link to="/dashboard/books/booklist" style={{color:"black" ,display:"block",marginBottom:"15px",textDecoration:"none"}}>
               List Books
            </Link>
              <Link to="/dashboard/books/issuebooks" style={{color:"black" ,display:"block",marginBottom:"15px",textDecoration:"none"}}>
               Issue Books
            </Link>

            

             <Link to="/dashboard/profile" style={{color:"black" ,display:"block",marginBottom:"15px",textDecoration:"none"}}>
                Profile
            </Link>
            <Link to="/dashboard/contact" style={{color:"black" ,display:"block",marginBottom:"15px",textDecoration:"none"}}>
               Contact
            </Link>
            <Link to="/dashboard/notices" style={{color:"black" ,display:"block",marginBottom:"15px",textDecoration:"none"}}>
                Notices
            </Link>
            <button  onClick={handleLogOut} style={{borderRadius:"5px" ,padding:"6px", backgroundColor:"lightred",border:"1px solid " ,width:"80%",textAlign:"center"}}> Logout</button>

        </div>
    )
}
export default SideNav;