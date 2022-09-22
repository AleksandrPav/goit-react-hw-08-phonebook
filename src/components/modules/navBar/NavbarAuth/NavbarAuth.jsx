import css from './NavbarAuth.module.css';
import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  const className = isActive ? css.activeLink : css.link;
  return className;
};

const NavbarAuth = () => {
  return (
    <div className={css.container}>
      <NavLink to="/register" className={getClassName}>
        Register
      </NavLink>
      |
      <NavLink to="/login" className={getClassName}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
