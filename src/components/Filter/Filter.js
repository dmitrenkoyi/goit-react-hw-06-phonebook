import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/actions';

import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <label className={styles.Filter}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(actions.filterUpdate(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
