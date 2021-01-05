import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <li>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </li>
    </>
  );
}

export default Nav;
