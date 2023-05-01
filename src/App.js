import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View';
import Modal from './components/Modal';
import './App.css'

class App extends Component {
  state = {
    showModal: false,
    view: {
      firstname: '',
      lastname: '',
      number: '',
      role: '',
      message: ''
    }
  }

  modalHandler = (e) => {
    e.preventDefault()

    this.setState({
      showModal: !this.state.showModal
    })
  }
  inputChangeHandler = (e) => {
    const name = e.target.name;
    this.setState({
      view: {
        ...this.state.view,
        [name]: e.target.value
      }
    });

  }

  render() {
    return (
      <div className='body'>
        <Form submit={this.modalHandler} inputChangeHandler={this.inputChangeHandler} />

        <View  {...this.state.view} />

        {this.state.showModal && <Modal click={this.modalHandler}  {...this.state.view} />}

      </div>
    );
  }
}

export default App;