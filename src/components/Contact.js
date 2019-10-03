import React from 'react'

function Contact(props) {

  return <li><div className={'contactItem'}>
    <img className={'contactImage'} src={'http://files.softicons.com/download/android-icons/flat-icons-by-martz90/png/64x64/contacts.png'}/>
    <p className={'contactLabel'}>
        Imię: {props.items.firstName}
    </p>
    <a href={'mailto:' + props.items.email}>
        {props.items.email}
    </a>
</div></li>;
}

export default Contact;
