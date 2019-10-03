import React from 'react'
import Contact from './Contact'

function Contacts(props) {

    var contac = props.items.map(function(cont) {

        return <Contact id={cont.id} items={cont}/>
    });
console.log(contac);
    return (
      <ul className={'contactsList'}>{contac}</ul>
    );
  }

export default Contacts;
