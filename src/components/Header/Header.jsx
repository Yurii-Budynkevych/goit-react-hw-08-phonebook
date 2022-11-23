import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import './Header.css';

const Header = () => {
  return (
    <div className="nav-bar">
      <nav>
        <ul className="nav-list ">
          <li>
            <NavLink to={'/'} className="nav-link">
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to={'/login'} className="nav-link">
              LogIn
            </NavLink>
          </li>
          <li>
            <NavLink to={'/register'} className="nav-link">
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
      <UserMenu />
    </div>
  );
};
export default Header;
