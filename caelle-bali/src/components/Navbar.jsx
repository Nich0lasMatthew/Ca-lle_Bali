import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left"></div>

      <div className="middle">
        <h1>
          Caélle <span>Bali</span>
        </h1>
      </div>

      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
