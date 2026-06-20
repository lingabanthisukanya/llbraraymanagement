
import bgImage from '../assets/frontpage2.png';
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

function FrontPage()
{
    return(
        <div className="outer">
            
            <div className="hero" style={{backgroundImage: `url('${bgImage}')`}}>
                <div className="hero-content">

                <h2 style={{color:"white", fontSize:"50px"}}> Welcome to Digital Library System</h2>
                <h3>Empowering  Knowledge,</h3>
                  <h3> Simplifying Library Management.</h3>
                  <Link to="/login">

                  <button className="button" style={{background:"white" ,color:"black"}}>Get Started</button>
                  </Link>
                </div>
            </div>
             <div className="about">
                <h2>About Us</h2>

                <p>
                    Our Digital Library System provides an efficient platform
                    for managing books, members, and borrowing activities.
                    We aim to simplify library operations while making
                    knowledge easily accessible to everyone.
                </p>

                <div className="about-cards">

                    <div className="card">
                        <h3>📚 Thousands of Books</h3>
                        <p style={{color:"black"}}>Access and manage a wide collection of books.</p>
                    </div>

                    <div className="card">
                        <h3>👨‍🎓 Admin Friendly</h3>
                        <p style={{color:"black"}}>Easy book search, issue  process.</p>
                    </div>

                    <div className="card">
                        <h3>⚡ Fast Management</h3>
                        <p style={{color:"black"}}>Streamlined library administration and tracking.</p>
                    </div>

                </div>
             </div>
             <div className="why-us">
                <h2>Why Choose Us?</h2>

                <div className="why-cards">

                    <div className="why-card">
                    <h3>📚 Admin Book Management</h3>
                    <p>
                        Administrators can add, update, and delete books
                        from the library catalog efficiently.
                    </p>
                    </div>

                    <div className="why-card">
                    <h3>📖 Easy Book Issuing</h3>
                    <p>
                        Manage book issue and return records with a
                        streamlined workflow.
                    </p>
                    </div>

                    <div className="why-card">
                    <h3>🔍 Quick Book Search</h3>
                    <p>
                        Find books instantly using title, author,
                        or category information.
                    </p>
                    </div>

                    <div className="why-card">
                    <h3>📊 Organized Records</h3>
                            <p>
                                Maintain accurate information about books,
                                availability, and issued copies.
                            </p>
                    </div>

                    <div className="why-card">
                            <h3>⚡ Simple User Experience</h3>
                            <p>
                                Clean and intuitive interface for efficient
                                library management.
                            </p>
                    </div>

                            <div className="why-card">
                            <h3>🔒 Admin Controlled Access</h3>
                            <p>
                                Only administrators can perform CRUD operations,
                                ensuring secure and reliable data management.
                            </p>
                    </div>

                </div>
        </div>
                <Footer/>
           

        </div>
    )
}
export default FrontPage;