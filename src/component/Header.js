import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto">
                    <a href="index.html">Sushodh</a>
                </h1>

                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li className="active">
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <a href="events.html">Events</a>
                        </li>
                        <li>
                            <a href="gallery.html">Gallery</a>
                        </li>

                        <li>
                            <a href="reasearch.php">Research Guidance Process</a>
                        </li>


                        <li><a href="contact.html">Contact us</a></li>
                    </ul>
                </nav>

                <a href="contact.html" className="get-started-btn">Enquire Now</a>
            </div>
        </header>
    );
};

export default Header;