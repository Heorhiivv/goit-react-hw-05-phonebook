import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "./ContactListItem/ContactItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import css from '../ContactsList/ContactsList.module.css'

const ContactsList = ({contacts, onRemoveContact}) => {
 return (
  <TransitionGroup component="ul" className={css.list}>
  {contacts.map(({id, name, number}) => (
    <CSSTransition 
    key={id}
    timeout={250}
    classNames={css}
    >
      <ContactItem id={id} name={name} number={number} onRemove={() => onRemoveContact(id)} />
    </CSSTransition>
  ))}
</TransitionGroup>
 )
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number
};
export default ContactsList
