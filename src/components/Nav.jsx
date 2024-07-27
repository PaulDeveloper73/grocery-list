import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="">
      <ul>
        <NavLink
          to={"/"}
          className={(link) => (link.isActive ? "text-blue-600" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/products"}
          className={(link) => (link.isActive ? "text-blue-600" : "")}
        >
          Products
        </NavLink>
        <NavLink
          to={"/contact"}
          className={(link) => (link.isActive ? "text-blue-600" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/vans"}
          className={(link) => (link.isActive ? "text-blue-600" : "")}
        >
          Vans
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
