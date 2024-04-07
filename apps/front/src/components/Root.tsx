import { Outlet } from '@tanstack/react-router';
import Nav from './nav/Nav';

const RootComponent = () => (
  <div id="app" className="h-full max-h-full flex flex-col">
    <Nav />
    <div className="flex flex-1">
      <Outlet />
    </div>
  </div>
);

export default RootComponent;
