import css from './NavbarMenu.module.css';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

const getClassName = ({ isActive }) => {
  const className = isActive ? css.activeLink : css.link;
  return className;
};

const NavbarMenu = () => {
  const links = [{ to: '/contacts', label: 'Contacts' }];

  return (
    <ul className={css.list}>
      {links.map(link => (
        <li key={nanoid()} className={css.item}>
          <NavLink to={link.to} className={getClassName}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
