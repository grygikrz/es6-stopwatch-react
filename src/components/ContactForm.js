import React from 'react'

function ContactForm(props) {
    return <form className={'contactForm'}>
      <input type={'text'} placeholder={'Imię'} value={props.contact.firstName} />
      <input type={'text'} placeholder={'Nazwisko'} value={props.contact.lastName} />
      <input type={'email'} placeholder={'Email'} value={props.contact.email} />
      <button type={'text'} type={'submit'}>{'Dodaj kontakt'}</button>
    </form>;
  }

export default ContactForm;
