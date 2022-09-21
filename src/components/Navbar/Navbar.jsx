import { Link } from 'react-router-dom';
import { FcTwoSmartphones } from 'react-icons/fc';
import css from './Navbar.module.css';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => {
  return (
    <div className={css.bodyHeader}>
      <Link to="/" className={css.LogoLink}>
        <FcTwoSmartphones className={css.LogoIcon} />
      </Link>
      <NavbarMenu />
      <NavbarAuth />
    </div>
  );
};

export default Navbar;
