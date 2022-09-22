import { FcTwoSmartphones } from 'react-icons/fc';
import css from './Navbar.module.css';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => {
  return (
    <div className={css.bodyHeader}>
      <FcTwoSmartphones className={css.LogoIcon} />
      <NavbarMenu />
      <NavbarAuth />
    </div>
  );
};

export default Navbar;
