import React, {Component}  from 'react'
import ContactForm from './ContactForm'
import Contacts from './Contacts'

var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

class App extends Component {
  render()
{
    return (<div className={'app'}>
        <ContactForm contact={contactForm} />
        <Contacts items={contacts} />
      </div>);
    }
}

export default App;
