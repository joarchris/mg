import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src="mg-logo.png" alt="logo" />
        </Link>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
