import { Button } from '@components/ui/shadcn/button';
import { Link } from '@tanstack/react-router';

const Nav = () => {
  return (
    <div className="px-4">
      <Link to="/">
        <Button variant="link">Calendar</Button>
      </Link>
      <Link to="/settings">
        <Button variant="link">Settings</Button>
      </Link>
    </div>
  );
};

export default Nav;
