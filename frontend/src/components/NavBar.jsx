import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Login</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/games">Games</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/add game">Add Game</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
}

export default Navbar;
