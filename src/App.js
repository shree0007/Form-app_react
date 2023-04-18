import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View';
import Modal from './components/Modal';
import './App.css'

class App extends Component {
  state = {
    showModal: false
  }

  modalHandler = (e) => {
    e.preventDefault()

    this.setState({
      showModal: !this.state.showModal
    })
  }


  render() {
    return (
      <div className='body'>
        <Form submit={this.modalHandler} />
        <View />

        {this.state.showModal && <Modal />}

      </div>
    );
  }
}

export default App;