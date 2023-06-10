import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src="mg-logo.png" alt="logo" />
        </Link>
        <div className="pages">
          <Link to="/training-plan">
            <button>Training plan</button>
          </Link>
          <Link to="/adding-new">
            <button>Add New</button>
          </Link>
          <Link to="/">
            <button>List Workouts</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
