import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto">
                    <Link to="/">Sushodh</Link>
                </h1>

                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>

                        <li>
                            <Link to="/research">Research Guidance Process</Link>
                        </li>


                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </nav>

                <Link to="/contact" className="get-started-btn">Enquire Now</Link>
            </div>
        </header>
    );
};

export default Header;