import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import css from './Filter.module.css';

const Filter = ({value, onChangeFilter, contacts}) => {
  return (
   <CSSTransition
   in={contacts.length > 0}
   appear={true}
   timeout={250}
   classNames={css}
   unmountOnExit
   >
      <div className={css.filter}>
    <label className={css.label}>
    Find contacts by name
    <input 
    type="text" 
    className={css.input} 
    value={value}
    onChange={e => onChangeFilter(e.target.value)}
    />
    </label>
    </div>
   </CSSTransition>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

export default Filter