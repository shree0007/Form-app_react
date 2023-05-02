import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import View from './components/View';
import Modal from './components/Modal';
import Post from './components/Post';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    showModal: false,
    view: {
      firstname: '',
      lastname: '',
      number: '',
      role: '',
      message: ''
    },
    data: []
  }

  componentDidMount() {
    axios.get('http://localhost:4001/posts/')
      .then(res => {
        this.setState({ data: res.data });
      })
  }


  /* Using fetch:
   componentDidMount() {
    fetch('http://localhost:4001/posts/')
         .then(res => res.json())
         .then(res => {
           this.setState({ data: res });
           console.log(res)
         })
     } */





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

  submitHandler = () => {
    axios
      .post('http://localhost:4001/posts/', this.state.view)
      .then((res) => console.log('res', res))
      .catch((error) => console.log('error', error));
    this.setState({
      showModal: !this.state.showModal,
      note: {
        firstname: '',
        lastname: '',
        number: '',
        role: '',
        message: ''
      },
    })
    axios.get('http://localhost:4001/posts/').then(res => this.setState({ data: res.data }))
  };

  render() {
    return (
      <div className='body'>
        <Header />
        <Form submit={this.modalHandler} inputChangeHandler={this.inputChangeHandler} />

        <View  {...this.state.view} />

        {this.state.showModal && <Modal click={this.modalHandler}{...this.state.view} submit={this.submitHandler} />}

        <Post data={this.state.data} />

        {/* {this.state.data.map((item) => <Post
          title={item.title}
          author={item.author} />)} */}

      </div>
    );
  }
}

export default App;