import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyForm extends Component {
  state = {
    name: '',
    description: ''
  }
  handleChange = (event) => {

    const { value, name } = event.target;


    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('You submitted: ', this.state)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name: <input onChange={this.handleChange} type="text" value={this.state.name} name="name" />
        Description: <textarea onChange={this.handleChange} value={this.state.description} name="description"></textarea>
        <input type="submit" />
      </form>
    )
  }
}

ReactDOM.render(
  <MyForm />,
  document.getElementById('root')
);
