import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/operations/authOperations';
import './UserMenu.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.email);
  return (
    <div className="user-menu">
      <p>{name}</p>
      <button className="btn" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
