import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../stores/authContext';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { user, login, logout, authReady } = useContext(AuthContext);

  return (
    <header>
      {authReady && (
        <div className="nav-container">
          <Link to="/">
            <img src="mg-logo.png" alt="logo" />
          </Link>
          {user && <p className="user-name">YO YO! {user.user_metadata.full_name}</p>}
          {!user && <button onClick={login}>Signup/Login, YO!</button>}
          {user && (
            <div className={`m-pages ${showMenu ? 'show-menu' : ''}`}>
              {!user && <button onClick={login}>Signup/Login</button>}
              <Link to="/goal">
                <button>Add Goal</button>
              </Link>
              <Link to="/training-plan">
                <button>Training Plan</button>
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
              {user && (
                <button className="logout" onClick={logout}>
                  Log Out
                </button>
              )}
            </div>
          )}
          {user && (
            <div className="burger-menu" onClick={toggleMenu}>
              <div className={`bar ${showMenu ? 'bar-open' : ''}`}></div>
              <div className={`bar ${showMenu ? 'bar-open' : ''}`}></div>
              <div className={`bar ${showMenu ? 'bar-open' : ''}`}></div>
              <div className={`menu-items ${showMenu ? 'show' : ''}`}>
                <Link to="/training-plan" onClick={toggleMenu}>
                  Training Plan
                </Link>
                <Link to="/goal" onClick={toggleMenu}>
                  Set Your Goal
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
                {user && <span onClick={logout}>Log out</span>} {!user && <span onClick={login}>Signup/Login</span>}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
