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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <span>Welcome, {user.name}</span>
          </li>

          <li>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
