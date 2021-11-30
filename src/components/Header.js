import { Link, NavLink } from "react-router-dom";
function Header() {
  const style ={
    color: 'Indigo'
  }
  return (
    <header className="bg-custom">
      <div className='container'>
      <nav className="navbar navbar-expand-md  navbar-light py-3">
          <h3 className="navbar-brand d-flex align-items-center">
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                fontSize: "2rem",
                color: "DarkMagenta",
                textDecoration: "none",
              }}
            >
            Our<span className="text-dark">School</span>
            </NavLink>
          </h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link to="/" className="nav-link" style={style}>Home</Link></li>
                        <li className="nav-item"><Link to="/courses" className="nav-link" style={style}>Courses</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link" style={style}>About Us</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link" style={style}>Contact Us</Link></li>
                        <li className="nav-item"><Link to="/signup" className="nav-link" style={style}>Sign Up</Link></li>
                </ul>
            </div>
      </nav>
      </div>
    </header>
  );
}

export default Header;
