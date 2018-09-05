import React, {Component} from 'react';
import { connect } from 'react-redux'; //import connect property from react-redux

class Booklist extends Component {
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

function mapStateToProps(state) { //the "glue" between React and Redux
  return {
    books: state.books //whatever is returned is available to component as this.props
  };
}

//takes application state, whatever is returned will show up as props inside of BookList
//containers are link between React and Redux through the mapStateToProps function.

export default connect(mapStateToProps)(BookList);
//connect takes a function and component, and produces a container. container is aware of the state in Redux.

//whenver our application state changes, the container will re-render.
//whenver the application state changes, the object assigned will change this.props. 
