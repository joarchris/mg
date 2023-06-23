import { Link } from 'react-router-dom';

const Error = () => (
  <div className="error">
    <h1>
      YO! YO! <br />
      Your on the wrong side of the fence 🤪
    </h1>
    <p>
      <Link to="/">
        <button className="error-button">Go Home</button>
      </Link>
    </p>
  </div>
);

export default Error;
