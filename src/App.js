import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View';
import Modal from './components/Modal';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='body'>
        <Form />
        <View />
        <Modal />
      </div>
    );
  }
}

export default App;