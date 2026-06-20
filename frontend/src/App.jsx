
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./pages/FrontPage.css";
import Register from "./pages/Register";
import FrontPage from "./pages/FrontPage";
import Login from "./pages/Login";
//import LibraryDashboard from "./pages/LibraryDashboard";
//import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import Books from "./pages/Books";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import AddBook from "./pages/AddBook";
import BookList from "./pages/BookList";
import IssueBook from "./pages/IssueBook";
import EditBook from "./pages/EditBook";
import Contact from "./pages/Contact";
import Notices from "./pages/Notices";


function App(){
  /*
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
       
       
      </Routes>
    </BrowserRouter>
    <Route path="/" element={<Navigate to="/login"/>}/>
    )*/
   return(
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route 
                path="/dashboard"
                element={
                  <ProtectedRoute>
                      <DashboardLayout/>
                  </ProtectedRoute>
                }>
                <Route index element={<Dashboard/>}/>
                <Route path="books" element={<Books/>}/>
                <Route path="books/addbook" element={<AddBook/>}/>
                <Route path="edit-book/:id" element={<EditBook />} />
                <Route path="books/booklist" element={<BookList/>}/>
                <Route path="books/issuebooks" element={<IssueBook/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="notices" element={<Notices />} />

             </Route>

          
        </Routes>
    </BrowserRouter>

 );
  
    
  
  
}
export default App;