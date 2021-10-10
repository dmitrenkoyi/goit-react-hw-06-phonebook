import { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/actions';

import styles from './FormContacts.module.scss';

const FormContacts = ({contacts,  onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  
  const handleSubmit = e => {
    e.preventDefault();

    const coincidenceContacts = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );
    
    if (coincidenceContacts) {
      alert(`${name} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }

    onSubmit(name, number);
    setName('');
    setNumber('');
  };
  

   return (
      <form className={styles.Form} onSubmit={handleSubmit}>
        <label>         
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label>         
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={styles.Btn}>
          Add contact
        </button>
      </form>
    );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});


const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
});


export default connect(mapStateToProps, mapDispatchToProps)(FormContacts);
