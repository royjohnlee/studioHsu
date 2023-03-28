import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <h1>STUDIO HSU</h1>
      <h3>REAL ESTATE MEDIA</h3>
      <nav>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/gallery">Gallery</Link>
        &nbsp; | &nbsp;
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp; | &nbsp;
        <Link to="/contact">Contact</Link>
        &nbsp;&nbsp;
        <span>Welcome, {user.name}</span>
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
    </>
  );
}
