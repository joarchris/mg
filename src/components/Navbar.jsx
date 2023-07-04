import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../stores/AuthContext';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <header>
      <div className="nav-container">
        <Link to="/">
          <img src="mg-logo.png" alt="logo" />
        </Link>
        <button onClick={login}>Signup/Login</button> <button onClick={logout}>Log out</button>
        <div className={`m-pages ${showMenu ? 'show-menu' : ''}`}>
          <Link to="/training-plan">
            <button>Training plan</button>
          </Link>
          <Link to="/adding-new">
            <button>Add New Workout</button>
          </Link>
          <Link to="/">
            <button>List Workouts</button>
          </Link>
          <Link to="/info">
            <button>Information</button>
          </Link>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`bar ${showMenu ? 'bar-open' : ''}`}></div>
          <div className={`bar ${showMenu ? 'bar-open' : ''}`}></div>
          <div className={`bar ${showMenu ? 'bar-open' : ''}`}></div>
          <div className={`menu-items ${showMenu ? 'show' : ''}`}>
            <Link to="/training-plan" onClick={toggleMenu}>
              Training Plan
            </Link>
            <Link to="/adding-new" onClick={toggleMenu}>
              Add New Workout
            </Link>
            <Link to="/" onClick={toggleMenu}>
              List Workouts
            </Link>
            <Link to="/info" onClick={toggleMenu}>
              Information
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
