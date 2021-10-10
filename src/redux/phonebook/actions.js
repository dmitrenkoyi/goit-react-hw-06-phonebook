import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/AddContact', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  }
});

const deleteContact = createAction('phonebook/DeleteContact');

const filterUpdate = createAction('phonebook/FilterUpdate');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, filterUpdate};