import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <img src="https://i.imgur.com/B8rmeaQ.png" alt="Title" className="Title-Picture" />
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="navbar-item">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
            <span>Welcome, {user.name}</span>
          </li>

          <li className="navbar-item">
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
