import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
      <Link to="/order-history">Order History</Link>
    </nav>
  );
}

export default Navbar;