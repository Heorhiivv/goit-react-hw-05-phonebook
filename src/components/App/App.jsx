import React, {Component} from "react"

import "./App.css"

import ContactsList from "../ContactsList/ContactsList"
import ContactForm from "../ContactForm/ContactForm"
import Filter from "../Filter/Filter"
import Notification from "../../Notify/Notification"
import {CSSTransition} from "react-transition-group"

const defaultContacts = [
  {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
  {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
  {id: "id-3", name: "Eden Clements", number: "645-17-79"},
  {id: "id-4", name: "Annie Copeland", number: "227-91-26"},
];

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    isContacts: false,
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || defaultContacts;
    if (contacts) {
      this.setState({contacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  addContact = (task) => {
    let {contacts} = this.state
    if (contacts.find(({name}) => name === task.name)) {
      this.setState({isContacts: true})
      setTimeout(() => this.setState({isContacts: false})
      , 4000)
      return
    }
    this.setState((prevState) => {
      const contacts = [...prevState.contacts, task]
      this.setState({contacts})
    })
  }

  removeContact = (task) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({id}) => id !== task),
      }
    })
  }

  changeFilter = (filter) => {
    this.setState({filter})
  }

  getVisibleContacts = () => {
    const {contacts, filter} = this.state
    return contacts.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const {contacts, filter, isContacts} = this.state
    const visibleContacts = this.getVisibleContacts()
    return (
      <>
        <Notification getContact={isContacts} />

        <CSSTransition in={true} appear={true} timeout={500} classNames="Logo-slideIn" unmountOnExit>
          <h1 className="title">Phonebook</h1>
        </CSSTransition>

        <ContactForm onAddContact={this.addContact} />

        <Filter value={filter} onChangeFilter={this.changeFilter} contacts={contacts} />

        {/* {contacts.length > 0 &&  */}
        <CSSTransition in={contacts.length > 0} timeout={0} unmountOnExit>
          <ContactsList onRemoveContact={this.removeContact} contacts={visibleContacts} />
        </CSSTransition>

        {/* // } */}
      </>
    )
  }
}

export default App
