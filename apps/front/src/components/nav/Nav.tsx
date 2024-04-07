import { Link } from '@tanstack/react-router';

const Nav = () => {
  return (
    <div>
      <Link to="/">Calendar</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Nav;
