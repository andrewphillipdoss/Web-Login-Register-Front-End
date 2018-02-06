import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  handleSubmit(event) {
    this.setState({mounted: false});
    //event.preventDefault();
  }

  render() {

    let child;
    if(this.state.mounted) {
      child = (
        <Modal onSubmit={this.handleSubmit} />
      );
    }

    return (
      <div className="App">
        <Modal />
      </div>
    );
  }
}

class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    let loginButton = null;
    let message = null;
    let nameInput = null;

    if (this.state.clicked) {
      loginButton = <button>LOG IN</button>
      message = <div onClick = {this.handleClick} className="message">Register</div>
    }
    else {
      nameInput = <Input name="full_name" type="text" placeholder="full name"></Input>
      loginButton = <button>REGISTER</button>
      message = <div onClick = {this.handleClick} className="message">Log In</div>
    }

    return (
      <div className="Modal">
        <form onSubmit={this.props.onSubmit} className="ModalForm">
          {nameInput}
          <Input name="email" type="email" placeholder="email"></Input>
          <Input name="password" type="password" placeholder="password"></Input>
          {loginButton}
          {message}
        </form>
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input id={this.props.name} autocomplete="false" required type={this.props.type} placeholder= {this.props.placeholder} />
      </div>
    );
  }
}

export default App;
