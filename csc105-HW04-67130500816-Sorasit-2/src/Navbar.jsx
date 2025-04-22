import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
        <NavLink to="/signin">Sign in</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;