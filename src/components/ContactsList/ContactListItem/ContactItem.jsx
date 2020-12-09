import React from "react";
import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactItem.module.css'

const ContactItem = ({name, number, onRemove}) => {
 return (
  <li className={css.item}>
  <p className={css.itemText}>{name}:</p>
  <p className={css.itemText}>{number}</p>
    <button 
    type="button"
    className={css.btn} 
    onClick={onRemove}>
      Delete
    </button>
</li>
 );
};

ContactItem.propTypes = {
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
export default ContactItem
