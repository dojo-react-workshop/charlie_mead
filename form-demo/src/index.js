import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyForm extends Component {
  render() {
    return (
      <form>
        <textarea rows="20" cols="15"></textarea>
        <input type="text" />
        <input type="radio" />
        <input type="checkbox" />
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <input type="submit" />
      </form>
    )
  }
}

ReactDOM.render(
  <MyForm />,
  document.getElementById('root')
);
