import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/actions';

import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, onDeleteContact }) => ( 
  <ul className={styles.List}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button
          className={styles.Btn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>  
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleTodos = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
