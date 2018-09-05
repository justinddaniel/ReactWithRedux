import React, {Component} from 'react';

export default class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


//container is a component that has direct access to the state produced by Redux
//React and Redux are two separate libraries. react-redux melds them together.
//only the most parent component that uses a particular state needs to connect to Redux. 
