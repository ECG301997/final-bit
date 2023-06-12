import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
        <Link  className="navbar-text" to='/'>Inicio</Link>
        <Link className="navbar-text" to='/dashboard'>Dashboard</Link>
        </nav>
    </div>
  )
}

export default Navbar
