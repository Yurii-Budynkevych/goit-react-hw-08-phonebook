import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Item.css';
import { delContactOperation } from 'redux/operations/contactsOperations';

const ListItem = ({ name, value, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {value}
      <button
        type="button"
        onClick={() => dispatch(delContactOperation(id))}
        className="btn"
      >
        Delete
      </button>
    </li>
  );
};
export default ListItem;

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
