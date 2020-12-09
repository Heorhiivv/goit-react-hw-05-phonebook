import React, {Component} from "react";
import PropTypes from "prop-types";
import {v4 as uuid} from "uuid";

import css from '../ContactForm/ContactFrom.module.css';
class ContactForm extends Component {
  static propTypes = {
    onAddContact : PropTypes.func.isRequired
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const task = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(task)

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const {name, number} = this.state
    return (
      <form className={css.PhoneBookForm} 
      onSubmit={this.handleSubmit}>
        <label className={css.label}>
         Name
          <input
            className={css.input}
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>

        <label className={css.label}>
         Number
          <input
            className={css.input}
            name="number"
            type="tel"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>

        <input 
        type="submit"
         value="Add contact"  
         className={css.inputBtn}/>
      </form>
    );
  };
};
export default ContactForm
