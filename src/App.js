import Container from './components/Container';
import Section from './components/Section';
import Form from './components/FormContacts';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';
import './App.css';

function App() {
  return (
    <Container>
    <div className="header">
        <h1>Phonebook</h1>        
    </div>
    <Section title="Create contact">
        <Form />
    </Section>
    <Section title="Contacts">
        <Filter />
        <ContactsList />
    </Section>
   </Container>
  );
}

export default App;
