import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <header className="nav-bar">
      <nav>
        <ul className="nav-list ">
          {isLoggedIn && (
            <li>
              <NavLink to={'/contacts'} className="nav-link">
                Contacts
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to={'/login'} className="nav-link">
                LogIn
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to={'/register'} className="nav-link">
                Register
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
export default Header;
