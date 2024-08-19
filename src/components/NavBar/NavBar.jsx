import { Link } from "react-router-dom";
import "./NavBar.css";
// src/components/Navbar/Navbar.jsx

const NavBar = ({ user, handleSignout }) => {
  return (
    <>
      <div className="wName">
        <h1>Fork Finder</h1>
      </div>
      {user ? (
        <nav className="Header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/restaurants">Restaurants</Link>
            </li>
            {user.isRestaurant ? (
              <>
                <li>
                  <Link to="/addRestaurant">Add Restaurant</Link>
                </li>
                <li>
                  <Link to="/MyRestaurants">My Restaurant</Link>
                </li>
              </>
            ) : (
              <></>
            )}
            <li>
              <Link to="" onClick={handleSignout}>
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="Header">
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
